// ===== MODERN EMERALD LIGHT THEME =====
// Premium White + Emerald SaaS Theme

export const theme = {
  // ================= PRIMARY COLORS =================
  primary: {
    light: "#34d399",
    main: "#10b981",
    dark: "#059669",
  },

  secondary: {
    light: "#2dd4bf",
    main: "#14b8a6",
    dark: "#0f766e",
  },

  // ================= BACKGROUNDS =================
  background: {
    darkest: "#f8fafc", // Main page bg
    dark: "#ffffff", // Section bg
    medium: "#f1f5f9", // Card bg
    light: "#e2e8f0", // Borders/light sections
  },

  // ================= TEXT COLORS =================
  text: {
    white: "#0f172a", // Main headings
    light: "#1e293b", // Sub headings
    medium: "#475569", // Paragraphs
    dark: "#64748b", // Muted text
    muted: "#94a3b8", // Extra muted
  },

  // ================= GRADIENTS =================
  gradients: {
    primary: "from-emerald-500 to-teal-500",
    secondary: "from-emerald-400 to-teal-400",
    hover: "from-emerald-50 to-teal-50",
    border: "from-emerald-400 to-teal-400",
    background: "from-slate-50 via-white to-emerald-50",
    card: "from-white to-slate-50",
  },

  // ================= ACCENTS =================
  accents: {
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    info: "#3b82f6",
  },

  // ================= BORDERS =================
  borders: {
    light: "border-slate-200",
    medium: "border-slate-300",
    dark: "border-slate-400",
    accent: "border-emerald-400/40",
  },

  // ================= GLOW EFFECTS =================
  glows: {
    primary: "bg-emerald-500/10",
    secondary: "bg-teal-500/10",
    tertiary: "bg-emerald-400/5",
  },

  // ================= HOVER EFFECTS =================
  hoverBg: "hover:bg-emerald-50",

  hoverBorder: "hover:border-emerald-400/40",

  hoverText: "hover:text-emerald-600",

  hoverGlow: "hover:bg-emerald-500/10",

  // ================= SHADOWS =================
  shadows: {
    sm: "shadow-md",
    md: "shadow-xl",
    lg: "shadow-2xl",
    glow: "shadow-emerald-500/20",
  },

  // ================= GLASS EFFECT =================
  glass: {
    light: "bg-white/70 backdrop-blur-xl",
    medium: "bg-white/80 backdrop-blur-2xl",
    dark: "bg-slate-100/80 backdrop-blur-xl",
  },

  // ================= ANIMATIONS =================
  animations: {
    pulse: "text-emerald-500",
    glow: "rgba(16,185,129,0.4)",
    border: "#10b981",
  },

  // ================= BUTTON STYLES =================
  buttons: {
    primary:
      "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-xl hover:shadow-emerald-500/20",

    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",

    ghost:
      "bg-transparent border border-transparent hover:bg-emerald-50 text-slate-700",
  },

  // ================= CARD STYLES =================
  cards: {
    primary:
      "bg-white border border-slate-200 shadow-xl shadow-slate-200/40",

    secondary:
      "bg-slate-50 border border-slate-100 shadow-lg shadow-slate-100/50",

    glass:
      "bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl",
  },
};

// ===== HELPER FUNCTION =====
export const getThemeClass = (key) => {
  const classMap = {
    // Primary
    primary: "from-emerald-500 to-teal-500",
    primaryText: "text-emerald-600",
    primaryGlow: "bg-emerald-500/10",

    // Secondary
    secondary: "bg-teal-500",
    secondaryText: "text-teal-600",

    // Backgrounds
    background: "bg-slate-50",
    pageBg: "bg-gradient-to-br from-slate-50 via-white to-emerald-50",

    // Cards
    cardBg: "bg-white",
    cardGlass: "bg-white/70 backdrop-blur-xl",

    // Borders
    border: "border-slate-200",
    hoverBorder: "hover:border-emerald-400/40",

    // Text
    textDark: "text-slate-900",
    textGray: "text-slate-500",
    textLight: "text-slate-600",

    // Hover
    hoverBg: "hover:bg-emerald-50",

    // Shadows
    glow: "shadow-emerald-500/20",
  };

  return classMap[key] || "";
};

// ===== COLOR PALETTE =====
export const colorPalette = {
  primary: {
    bg: "bg-emerald-500",
    text: "text-emerald-600",
    border: "border-emerald-400",
    glow: "bg-emerald-500/10",
  },

  secondary: {
    bg: "bg-teal-500",
    text: "text-teal-600",
    border: "border-teal-400",
    glow: "bg-teal-500/10",
  },

  neutral: {
    white: "bg-white",
    light: "bg-slate-50",
    medium: "bg-slate-100",
    border: "border-slate-200",
    text: "text-slate-700",
  },

  opacity: {
    5: "/5",
    10: "/10",
    20: "/20",
    30: "/30",
    40: "/40",
    50: "/50",
  },
};