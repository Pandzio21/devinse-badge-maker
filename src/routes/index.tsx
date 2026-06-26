import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import type { Preset } from "../lib/badge";
import { PRESETS, buildBadgeSvg } from "../lib/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logo Color Editor" },
      { name: "description", content: "Recolor the logo and export as SVG or PNG." },
    ],
  }),
  component: Index,
});

// --- Color utilities for palette generation ---
function hexToHsl(hex: string): [number, number, number] {
  const m = hex.replace("#", "");
  const r = parseInt(m.substring(0, 2), 16) / 255;
  const g = parseInt(m.substring(2, 4), 16) / 255;
  const b = parseInt(m.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, l];
}
function hslToHex(h: number, s: number, l: number) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const to = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

function generatePalette(baseHex: string): Preset {
  const [h, s] = hexToHsl(baseHex);
  const sat = Math.max(0.5, s);
  return {
    name: "Custom",
    bgTop: hslToHex(h, Math.min(0.55, sat * 0.6), 0.12),
    bgBottom: hslToHex(h, Math.min(0.5, sat * 0.5), 0.04),
    accentStart: baseHex,
    accentEnd: hslToHex(h + 20, sat, 0.5),
    textColor: hslToHex(h, 0.1, 0.96),
  };
}

function Index() {
  const [bgTop, setBgTop] = useState("#311d14");
  const [bgBottom, setBgBottom] = useState("#1c0b0b");
  const [accentStart, setAccentStart] = useState("#e05718");
  const [accentEnd, setAccentEnd] = useState("#d63833");
  const [textColor, setTextColor] = useState("#e8e8e8");
  const [borderColor, setBorderColor] = useState("#ffffff");
  const [borderOpacity, setBorderOpacity] = useState(0.15);
  const [pngScale, setPngScale] = useState(4);
  const [iconImage, setIconImage] = useState<string | null>(null);
  const [showPresets, setShowPresets] = useState(true);
  const [baseColor, setBaseColor] = useState("#e05718");
  const [badgeText, setBadgeText] = useState("Architectury API");
  const [urlCopied, setUrlCopied] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const badgeUrl = useMemo(() => {
    const params = new URLSearchParams({
      text: badgeText,
      bgTop: bgTop.replace("#", ""),
      bgBottom: bgBottom.replace("#", ""),
      accentStart: accentStart.replace("#", ""),
      accentEnd: accentEnd.replace("#", ""),
      textColor: textColor.replace("#", ""),
      borderColor: borderColor.replace("#", ""),
      borderOpacity: String(borderOpacity),
    });
    if (typeof window === "undefined") return `/badge.svg?${params.toString()}`;
    return `${window.location.origin}/badge.svg?${params.toString()}`;
  }, [badgeText, bgTop, bgBottom, accentStart, accentEnd, textColor, borderColor, borderOpacity]);

  const copyBadgeUrl = async () => {
    await navigator.clipboard.writeText(badgeUrl);
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), 1500);
  };

  const svg = useMemo(
    () =>
      buildBadgeSvg({
        bgTop,
        bgBottom,
        accentStart,
        accentEnd,
        textColor,
        borderColor,
        borderOpacity,
        iconImage,
        badgeText,
      }),
    [
      bgTop,
      bgBottom,
      accentStart,
      accentEnd,
      textColor,
      borderColor,
      borderOpacity,
      iconImage,
      badgeText,
    ],
  );

  const applyPreset = (p: Preset) => {
    setBgTop(p.bgTop);
    setBgBottom(p.bgBottom);
    setAccentStart(p.accentStart);
    setAccentEnd(p.accentEnd);
    setTextColor(p.textColor);
  };

  const generateFromBase = () => applyPreset(generatePalette(baseColor));

  const handleIconUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setIconImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const downloadSvg = () => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "logo.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPng = async () => {
    const w = 213 * pngScale;
    const h = 56 * pngScale;
    const svg64 = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("img load failed"));
      img.src = svg64;
    });
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, w, h);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `logo@${pngScale}x.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Logo Color Editor</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Tweak colors and the icon, then export as SVG or PNG.
          </p>
        </header>

        <section className="mb-8 flex items-center justify-center rounded-xl border bg-[conic-gradient(at_top_left,_#f5f5f5_25%,_#e5e5e5_25%_50%,_#f5f5f5_50%_75%,_#e5e5e5_75%)] bg-[length:24px_24px] p-12">
          <div className="scale-[2] origin-center" dangerouslySetInnerHTML={{ __html: svg }} />
        </section>

        <section className="mb-8 rounded-lg border bg-card p-4">
          <h2 className="mb-3 text-sm font-medium">Generate palette from a color</h2>
          <div className="flex flex-wrap items-end gap-3">
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="h-10 w-14 cursor-pointer rounded border bg-transparent"
              />
              <input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="w-32 rounded-md border bg-background px-3 py-2 font-mono text-sm"
              />
            </div>
            <button
              onClick={generateFromBase}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Generate
            </button>
            <p className="text-xs text-muted-foreground">
              Builds matching background, accent, and text colors from your pick.
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm font-medium">Badge text</label>
            <input
              type="text"
              value={badgeText}
              onChange={(e) => setBadgeText(e.target.value)}
              placeholder="architectury api"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <input
              type="text"
              readOnly
              value={badgeUrl}
              className="min-w-0 flex-1 rounded-md border bg-background px-3 py-2 font-mono text-xs text-muted-foreground"
            />
            <button
              onClick={copyBadgeUrl}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {urlCopied ? "Copied!" : "Copy badge URL"}
            </button>
          </div>
        </section>

        <section className="mb-8">
          <button
            onClick={() => setShowPresets((v) => !v)}
            className="mb-3 flex w-full items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <span>Presets ({PRESETS.length})</span>
            <span>{showPresets ? "Hide ▲" : "Show ▼"}</span>
          </button>
          {showPresets && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => applyPreset(p)}
                  className="group flex flex-col gap-2 rounded-md border bg-card p-2 text-left hover:border-foreground/30"
                >
                  <div
                    className="h-10 w-full rounded"
                    style={{ background: `linear-gradient(180deg, ${p.bgTop}, ${p.bgBottom})` }}
                  >
                    <div className="flex h-full items-center justify-center gap-1">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{
                          background: `linear-gradient(180deg, ${p.accentStart}, ${p.accentEnd})`,
                        }}
                      />
                      <span className="text-xs font-bold" style={{ color: p.textColor }}>
                        Aa
                      </span>
                    </div>
                  </div>
                  <span className="text-xs">{p.name}</span>
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">Icon</h2>
          <div className="flex flex-wrap gap-3">
            <input
              ref={fileRef}
              type="file"
              accept="image/*,image/svg+xml"
              onChange={(e) => e.target.files?.[0] && handleIconUpload(e.target.files[0])}
              className="block text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
            />
            {iconImage && (
              <button
                onClick={() => {
                  setIconImage(null);
                  if (fileRef.current) fileRef.current.value = "";
                }}
                className="rounded-md border bg-card px-3 py-2 text-sm hover:bg-accent"
              >
                Reset icon
              </button>
            )}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">Colors</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ColorField label="Background top" value={bgTop} onChange={setBgTop} />
            <ColorField label="Background bottom" value={bgBottom} onChange={setBgBottom} />
            <ColorField
              label="Accent gradient start (icon + 'inse')"
              value={accentStart}
              onChange={setAccentStart}
            />
            <ColorField
              label="Accent gradient end (icon + 'inse')"
              value={accentEnd}
              onChange={setAccentEnd}
            />
            <ColorField label="Text color ('Dev')" value={textColor} onChange={setTextColor} />
            <ColorField label="Border color" value={borderColor} onChange={setBorderColor} />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Border opacity: {borderOpacity.toFixed(2)}
              </label>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={borderOpacity}
                onChange={(e) => setBorderOpacity(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">Export</h2>
          <div className="flex flex-col gap-2 md:max-w-sm">
            <label className="text-sm font-medium">PNG scale: {pngScale}x</label>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={pngScale}
              onChange={(e) => setPngScale(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={downloadSvg}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Download SVG
            </button>
            <button
              onClick={downloadPng}
              className="rounded-md border bg-card px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Download PNG ({pngScale}x)
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-14 cursor-pointer rounded border bg-transparent"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-md border bg-background px-3 py-2 text-sm font-mono"
        />
      </div>
    </div>
  );
}
