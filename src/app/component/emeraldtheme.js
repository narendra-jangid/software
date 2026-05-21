// ===== THEME CONFIGURATION =====
// Theme 3: Emerald & Teal (Green Alternative)
// Just import this as: import { theme } from './theme-emerald'
// And use it the same way as the default theme

export const theme = {
  // Primary Colors - Emerald & Teal
  primary: {
    light: "#emerald-400",
    main: "#emerald-500",
    dark: "#emerald-600",
  },
  secondary: {
    light: "#teal-400",
    main: "#teal-500",
    dark: "#teal-600",
  },

  // Background Colors
  background: {
    darkest: "#050816",
    dark: "#0f0f1e",
    medium: "#1a1a2e",
    light: "#2d2d44",
  },

  // Text Colors
  text: {
    white: "#ffffff",
    light: "#f0f0f0",
    medium: "#9ca3af",
    dark: "#6b7280",
    muted: "#4b5563",
  },

  // Gradient Backgrounds
  gradients: {
    primary: "from-emerald-500 to-teal-600",
    secondary: "from-emerald-400 to-teal-500",
    hover: "from-emerald-500/10 to-teal-500/10",
    border: "from-emerald-400 to-teal-400",
  },

  // Accent Colors
  accents: {
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    info: "#3b82f6",
  },

  // Border Colors
  borders: {
    light: "border-white/10",
    medium: "border-white/20",
    dark: "border-white/30",
    accent: "border-emerald-400/40",
  },

  // Background Gradients (Glowing orbs)
  glows: {
    primary: "bg-emerald-500/20",
    secondary: "bg-teal-600/20",
    tertiary: "bg-emerald-400/10",
  },

  // Hover States
  hoverBg: "hover:bg-white/10",
  hoverBorder: "hover:border-emerald-400/40",
  hoverText: "hover:text-emerald-400",
  hoverGlow: "hover:bg-emerald-500/20",

  // Box Shadow
  shadows: {
    sm: "shadow-lg",
    md: "shadow-xl",
    lg: "shadow-2xl",
    glow: "shadow-emerald-500/50",
  },

  // Animation Colors
  animations: {
    pulse: "text-emerald-400",
    glow: "rgba(52,211,153,0.6)",
    border: "#10b981",
  },
};

// ===== HELPER FUNCTION TO GET THEME VALUES =====
export const getThemeClass = (key) => {
  const classMap = {
    primary: "from-emerald-500 to-teal-600",
    primaryText: "text-emerald-400",
    primaryGlow: "bg-emerald-500/20",
    secondary: "bg-teal-600",
    background: "bg-[#050816]",
    cardBg: "bg-white/5",
    border: "border-white/10",
    hoverBorder: "hover:border-emerald-400/40",
    textGray: "text-gray-400",
    textLight: "text-gray-300",
  };
  return classMap[key] || "";
};

// ===== COLOR PALETTE FOR EASY REFERENCE =====
export const colorPalette = {
  // Tailwind classes for primary colors
  primary: {
    bg: "bg-emerald-500",
    text: "text-emerald-400",
    border: "border-emerald-400",
    glow: "bg-emerald-500/20",
  },
  secondary: {
    bg: "bg-teal-600",
    text: "text-teal-400",
    border: "border-teal-400",
    glow: "bg-teal-600/20",
  },
  // Opacity versions
  opacity: {
    10: "/10",
    20: "/20",
    30: "/30",
    40: "/40",
    50: "/50",
  },
};