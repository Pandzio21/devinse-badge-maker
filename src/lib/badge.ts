const ICON_PATH =
  "M18.679 8.157c-.377.29-.44.802-.44 3.547 0 2.011-.038 2.75-.144 2.816-.078.05-1.152.254-2.385.455l-2.242.365-.031 2.993c-.024 2.305.003 3.02.118 3.11.1.08.836.01 2.269-.22 1.166-.185 2.187-.313 2.268-.283.117.043.142 2.077.118 9.862l-.03 9.807-2.356.06-2.356.06V48h20.495v-7.271l-2.414-.06-2.415-.06-.03-10.701c-.024-8.5 0-10.713.118-10.756.152-.055 13.695-2.183 14.223-2.235.279-.027.297.007.327.627l.033.656-2.306 2.145-2.305 2.146-.672.06-.672.059v4.768h12.721V22.61l-.614-.036-.615-.036-1.947-2.158-1.947-2.158v-.742c0-.881.065-.951.99-1.065.876-.107 1.011-.161 1.015-.404.005-.378-.86-5.8-.941-5.891-.045-.051-3.937.526-8.65 1.284-4.712.756-8.617 1.345-8.677 1.307s-.11-.889-.11-1.891c0-1.894-.106-2.495-.476-2.696-.341-.185-9.677-.154-9.92.033m8.486 3.238c.037 1.742.058 1.693-.778 1.854l-.62.118-2.115-1.684c-1.163-.926-2.115-1.731-2.115-1.788s1.259-.09 2.797-.072l2.798.032zm-4.686 1.6c.883.718.854.76-.697 1.007-1.763.281-1.659.36-1.659-1.262 0-1.81-.218-1.833 2.356.256m4.688 7.202c.04.79-.015.817-.638.315-.252-.204-.56-.444-.686-.534-.289-.207-.223-.27.418-.4.835-.167.867-.145.906.62m18.538.926c.603.658 1.115 1.248 1.137 1.311.024.073-.889.116-2.445.116-1.365 0-2.484-.04-2.486-.09-.004-.103 2.497-2.52 2.616-2.527.044-.003.574.533 1.178 1.19m-21.606-.29c1.295 1.046 1.346 1.012-1.473.975l-2.444-.032-.037-.523c-.05-.695-.027-.71 1.522-.962.738-.12 1.368-.224 1.4-.23.033-.007.497.34 1.032.772m3.065 4.727c.018 1.033-.009 1.877-.059 1.876-.133-.002-4.56-3.555-4.607-3.698-.027-.079.765-.109 2.297-.088l2.337.033zm-4.382.75c1.316 1.046 2.353 1.944 2.303 1.994s-1.173.078-2.497.06l-2.406-.032-.032-2.008c-.024-1.468.004-1.995.102-1.962.075.025 1.213.902 2.53 1.948m4.382 5.708c.018.978-.008 1.817-.059 1.863-.09.083-4.529-3.382-4.607-3.597-.024-.065.909-.097 2.297-.078l2.337.033zm-4.39.804c1.331 1.06 2.375 1.974 2.32 2.03-.054.055-1.182.086-2.506.068l-2.406-.032-.032-1.997c-.02-1.28.01-1.996.086-1.996.065 0 1.207.867 2.538 1.927m4.39 5.731c.025 1.463 0 1.876-.118 1.87-.195-.01-4.476-3.461-4.54-3.66-.038-.12.44-.145 2.289-.12l2.337.033zm-2.924 2.03c.003.05-.909.077-2.026.06l-2.032-.034-.033-1.483c-.018-.816-.007-1.554.026-1.64.058-.152 4.052 2.89 4.065 3.097";

const REQUIRES_PATH =
  "M61.278 24.5V12.864h4.148q1.353 0 2.245.465.897.466 1.34 1.29.444.82.444 1.892 0 1.07-.45 1.881-.443.807-1.34 1.256-.892.449-2.245.449h-3.142v-1.512h2.983q.853 0 1.387-.244.54-.245.79-.71.25-.466.25-1.12 0-.659-.256-1.142a1.65 1.65 0 0 0-.79-.738q-.534-.262-1.403-.262h-2.205V24.5zm5.745-5.25 2.875 5.25h-2l-2.818-5.25zm8.084 5.426q-1.29 0-2.222-.551a3.74 3.74 0 0 1-1.432-1.562q-.5-1.012-.5-2.37 0-1.341.5-2.364a3.9 3.9 0 0 1 1.41-1.596q.908-.574 2.124-.574.74 0 1.432.244.693.244 1.244.768.551.522.87 1.357.318.83.318 2.018v.602h-6.938v-1.273h5.273q0-.67-.273-1.187a2.06 2.06 0 0 0-.767-.824q-.489-.302-1.147-.302-.717 0-1.25.353a2.36 2.36 0 0 0-.819.909q-.284.556-.284 1.21v.994q0 .876.307 1.489.313.615.87.938.556.318 1.3.318.483 0 .881-.137.398-.142.688-.42.289-.279.443-.688l1.608.29q-.194.71-.693 1.244a3.36 3.36 0 0 1-1.245.824q-.744.29-1.699.29m11.52 3.097v-4.631h-.101q-.154.279-.444.636-.283.358-.784.625-.5.267-1.295.268-1.058 0-1.886-.54-.825-.546-1.296-1.552-.466-1.01-.466-2.426 0-1.415.472-2.42.478-1.006 1.306-1.54a3.4 3.4 0 0 1 1.881-.534q.813 0 1.307.273.499.267.773.625.278.359.432.63h.142v-1.414h1.659v12zm-2.25-4.551q.734 0 1.24-.387.51-.392.772-1.085.267-.693.267-1.614 0-.909-.261-1.59-.261-.683-.767-1.063t-1.25-.38q-.767 0-1.279.397-.51.398-.772 1.085-.255.688-.256 1.551 0 .875.261 1.574.262.699.773 1.108.517.404 1.273.404M96.14 20.88v-5.108h1.705V24.5h-1.67v-1.511h-.092q-.3.698-.965 1.164-.66.46-1.643.46-.84 0-1.488-.369-.642-.375-1.012-1.108-.363-.732-.363-1.812v-5.551h1.699v5.346q0 .893.494 1.42.494.53 1.284.53.478 0 .949-.24.477-.239.79-.721.318-.483.312-1.227m3.987 3.619v-8.727h1.699V24.5zm.858-10.074a1.08 1.08 0 0 1-.761-.295.96.96 0 0 1-.312-.716.95.95 0 0 1 .312-.716q.318-.3.761-.301.444 0 .756.3a.94.94 0 0 1 .318.717.95.95 0 0 1-.318.716 1.06 1.06 0 0 1-.756.295m3.127 10.074v-8.727h1.642v1.386h.091q.238-.705.841-1.108.607-.41 1.375-.409a7 7 0 0 1 .721.04v1.625a3 3 0 0 0-.363-.063 3.5 3.5 0 0 0-.523-.04q-.603 0-1.074.256a1.9 1.9 0 0 0-1.011 1.71v5.33zm9.589.176q-1.29 0-2.221-.551a3.73 3.73 0 0 1-1.432-1.562q-.5-1.012-.5-2.37 0-1.341.5-2.364a3.9 3.9 0 0 1 1.409-1.596q.909-.574 2.125-.574.739 0 1.432.244t1.244.768q.552.522.869 1.357.32.83.319 2.018v.602h-6.938v-1.273h5.273q0-.67-.273-1.187a2.06 2.06 0 0 0-.767-.824q-.488-.302-1.148-.302-.716 0-1.25.353a2.36 2.36 0 0 0-.818.909 2.6 2.6 0 0 0-.284 1.21v.994q0 .876.307 1.489.312.615.869.938.557.318 1.301.318.483 0 .881-.137a1.83 1.83 0 0 0 1.131-1.108l1.608.29q-.193.71-.694 1.244a3.35 3.35 0 0 1-1.244.824q-.744.29-1.699.29m12.169-6.773-1.539.273a1.8 1.8 0 0 0-.307-.562 1.5 1.5 0 0 0-.557-.438q-.353-.17-.881-.17-.721 0-1.204.323-.483.319-.483.824 0 .438.324.705.323.267 1.045.438l1.386.318q1.205.277 1.796.858.591.58.591 1.505 0 .785-.455 1.398-.449.608-1.255.954-.802.348-1.858.347-1.467 0-2.392-.625-.927-.63-1.137-1.79l1.642-.25q.153.642.631.972.477.324 1.244.324.836 0 1.335-.347.5-.352.5-.858a.9.9 0 0 0-.306-.687q-.302-.279-.927-.42l-1.477-.325q-1.22-.277-1.807-.886-.579-.607-.579-1.54a2.2 2.2 0 0 1 .432-1.352q.431-.579 1.193-.903.761-.33 1.744-.33 1.415 0 2.227.614.813.608 1.074 1.63";

export type BadgeOpts = {
  bgTop: string;
  bgBottom: string;
  accentStart: string;
  accentEnd: string;
  textColor: string;
  borderColor: string;
  borderOpacity: number;
  iconImage: string | null;
  badgeText: string;
};

export type Preset = {
  name: string;
  bgTop: string;
  bgBottom: string;
  accentStart: string;
  accentEnd: string;
  textColor: string;
};

export const PRESETS: Preset[] = [
  {
    name: "Original",
    bgTop: "#311d14",
    bgBottom: "#1c0b0b",
    accentStart: "#e05718",
    accentEnd: "#d63833",
    textColor: "#e8e8e8",
  },
  {
    name: "Sunset",
    bgTop: "#2d1010",
    bgBottom: "#0e0306",
    accentStart: "#f97316",
    accentEnd: "#ef4444",
    textColor: "#fff7ed",
  },
  {
    name: "Ocean",
    bgTop: "#0b2545",
    bgBottom: "#061025",
    accentStart: "#3b82f6",
    accentEnd: "#06b6d4",
    textColor: "#f8fafc",
  },
  {
    name: "Aqua",
    bgTop: "#04363d",
    bgBottom: "#021417",
    accentStart: "#22d3ee",
    accentEnd: "#14b8a6",
    textColor: "#ecfeff",
  },
  {
    name: "Forest",
    bgTop: "#14281d",
    bgBottom: "#06120b",
    accentStart: "#22c55e",
    accentEnd: "#84cc16",
    textColor: "#f0fdf4",
  },
  {
    name: "Lime",
    bgTop: "#1a2e05",
    bgBottom: "#0a1402",
    accentStart: "#a3e635",
    accentEnd: "#22c55e",
    textColor: "#f7fee7",
  },
  {
    name: "Mono Dark",
    bgTop: "#1f1f1f",
    bgBottom: "#000000",
    accentStart: "#ffffff",
    accentEnd: "#a3a3a3",
    textColor: "#ffffff",
  },
  {
    name: "Mono Light",
    bgTop: "#f5f5f5",
    bgBottom: "#e5e5e5",
    accentStart: "#171717",
    accentEnd: "#525252",
    textColor: "#0a0a0a",
  },
  {
    name: "Berry",
    bgTop: "#2a0f2e",
    bgBottom: "#100410",
    accentStart: "#ec4899",
    accentEnd: "#a855f7",
    textColor: "#fdf4ff",
  },
  {
    name: "Violet",
    bgTop: "#1e1b4b",
    bgBottom: "#0a0823",
    accentStart: "#8b5cf6",
    accentEnd: "#6366f1",
    textColor: "#f5f3ff",
  },
  {
    name: "Rose Gold",
    bgTop: "#2b1517",
    bgBottom: "#100506",
    accentStart: "#fb7185",
    accentEnd: "#f43f5e",
    textColor: "#fff1f2",
  },
  {
    name: "Gold",
    bgTop: "#2a1f05",
    bgBottom: "#100c02",
    accentStart: "#facc15",
    accentEnd: "#eab308",
    textColor: "#fefce8",
  },
  {
    name: "Cyber",
    bgTop: "#0a0a23",
    bgBottom: "#000010",
    accentStart: "#22d3ee",
    accentEnd: "#ec4899",
    textColor: "#e0f2fe",
  },
  {
    name: "Mint",
    bgTop: "#022c22",
    bgBottom: "#001510",
    accentStart: "#34d399",
    accentEnd: "#10b981",
    textColor: "#ecfdf5",
  },
  {
    name: "Coral",
    bgTop: "#2b1410",
    bgBottom: "#0e0504",
    accentStart: "#ff7e5f",
    accentEnd: "#feb47b",
    textColor: "#fff7ed",
  },
  {
    name: "Slate",
    bgTop: "#1e293b",
    bgBottom: "#0f172a",
    accentStart: "#94a3b8",
    accentEnd: "#64748b",
    textColor: "#f1f5f9",
  },
  {
    name: "Crimson",
    bgTop: "#2a0a0a",
    bgBottom: "#100202",
    accentStart: "#dc2626",
    accentEnd: "#7f1d1d",
    textColor: "#fef2f2",
  },
  {
    name: "Tropical",
    bgTop: "#042f2e",
    bgBottom: "#011514",
    accentStart: "#f59e0b",
    accentEnd: "#10b981",
    textColor: "#ecfeff",
  },
  {
    name: "Lavender",
    bgTop: "#f5f3ff",
    bgBottom: "#ddd6fe",
    accentStart: "#7c3aed",
    accentEnd: "#5b21b6",
    textColor: "#1e1b4b",
  },
  {
    name: "Peach",
    bgTop: "#fff7ed",
    bgBottom: "#fed7aa",
    accentStart: "#ea580c",
    accentEnd: "#c2410c",
    textColor: "#431407",
  },
  {
    name: "Midnight",
    bgTop: "#000000",
    bgBottom: "#000000",
    accentStart: "#60a5fa",
    accentEnd: "#a78bfa",
    textColor: "#e5e7eb",
  },
  {
    name: "Paper",
    bgTop: "#fafaf9",
    bgBottom: "#f5f5f4",
    accentStart: "#0c0a09",
    accentEnd: "#44403c",
    textColor: "#1c1917",
  },
  {
    name: "Neon",
    bgTop: "#020617",
    bgBottom: "#000000",
    accentStart: "#a3e635",
    accentEnd: "#06b6d4",
    textColor: "#f0fdf4",
  },
  {
    name: "Rust",
    bgTop: "#2b1409",
    bgBottom: "#0f0703",
    accentStart: "#c2410c",
    accentEnd: "#7c2d12",
    textColor: "#fff7ed",
  },
];

export const DEFAULT_BADGE: BadgeOpts = {
  bgTop: "#311d14",
  bgBottom: "#1c0b0b",
  accentStart: "#e05718",
  accentEnd: "#d63833",
  textColor: "#e8e8e8",
  borderColor: "#ffffff",
  borderOpacity: 0.15,
  iconImage: null,
  badgeText: "Architectury API",
};

export function buildBadgeSvg(o: BadgeOpts) {
  const iconBlock = o.iconImage
    ? `<image href="${o.iconImage}" x="10" y="8" width="40" height="40" preserveAspectRatio="xMidYMid meet"/>`
    : `<g filter="url(#b)"><path fill="url(#cIcon)" fill-rule="evenodd" d="${ICON_PATH}" clip-rule="evenodd"/></g>`;

  const escapedText = o.badgeText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const textBlock = `<g filter="url(#d)"><path fill="${o.textColor}" d="${REQUIRES_PATH}"/><text x="59.5" y="43.5" font-family="Arial, sans-serif" font-size="17" font-weight="700" fill="url(#cText)">${escapedText}</text></g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="213" height="56" fill="none" viewBox="0 0 213 56"><rect width="213" height="56" fill="url(#bgGrad)" rx="8"/><rect width="210.9" height="53.9" x="1.05" y="1.05" stroke="${o.borderColor}" stroke-opacity="${o.borderOpacity}" stroke-width="2.1" rx="6.95"/>${iconBlock}${textBlock}<defs><linearGradient id="bgGrad" x1="106.5" x2="106.5" y1="0" y2="56" gradientUnits="userSpaceOnUse"><stop stop-color="${o.bgTop}"/><stop offset="1" stop-color="${o.bgBottom}"/></linearGradient><linearGradient id="cIcon" x1="32" x2="32" y1="8" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="${o.accentStart}"/><stop offset="1" stop-color="${o.accentEnd}"/></linearGradient><linearGradient id="cText" x1="136.066" x2="136.066" y1="28.5" y2="43.731" gradientUnits="userSpaceOnUse"><stop stop-color="${o.accentStart}"/><stop offset="1" stop-color="${o.accentEnd}"/></linearGradient><filter id="b" width="51.429" height="51.429" x="6.286" y="2.286" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="2.857"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="e1"/><feBlend in="SourceGraphic" in2="e1" result="shape"/></filter><filter id="d" width="152.2" height="48.677" x="54.4" y="3.9" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="2.8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="e1"/><feBlend in="SourceGraphic" in2="e1" result="shape"/></filter></defs></svg>`;
}

const HEX_RE = /^#?[0-9a-fA-F]{6}$/;

function normalizeHex(value: string | null, fallback: string): string {
  if (!value) return fallback;
  return HEX_RE.test(value) ? (value.startsWith("#") ? value : `#${value}`) : fallback;
}

function normalizeIconUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function buildBadgeSvgFromParams(params: URLSearchParams): string {
  const presetName = params.get("preset");
  const preset = presetName
    ? PRESETS.find((p) => p.name.toLowerCase() === presetName.toLowerCase())
    : undefined;
  const base = preset ?? DEFAULT_BADGE;

  const borderOpacityRaw = params.get("borderOpacity");
  const borderOpacity = borderOpacityRaw
    ? Math.max(0, Math.min(1, parseFloat(borderOpacityRaw) || 0))
    : DEFAULT_BADGE.borderOpacity;

  const opts: BadgeOpts = {
    bgTop: normalizeHex(params.get("bgTop"), base.bgTop),
    bgBottom: normalizeHex(params.get("bgBottom"), base.bgBottom),
    accentStart: normalizeHex(params.get("accentStart"), base.accentStart),
    accentEnd: normalizeHex(params.get("accentEnd"), base.accentEnd),
    textColor: normalizeHex(params.get("textColor"), base.textColor),
    borderColor: normalizeHex(params.get("borderColor"), DEFAULT_BADGE.borderColor),
    borderOpacity,
    iconImage: normalizeIconUrl(params.get("icon")),
    badgeText: (params.get("text") ?? DEFAULT_BADGE.badgeText).slice(0, 60),
  };

  return buildBadgeSvg(opts);
}
