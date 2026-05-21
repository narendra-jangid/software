// ===== THEME CONFIGURATION =====
// Theme 2: Cyan & Blue (Alternative)
// Just import this as: import { theme } from './theme-cyan'
// And use it the same way as the default theme

export const theme = {
  // Primary Colors - Cyan & Blue
  primary: {
    light: "#cyan-400",
    main: "#cyan-500",
    dark: "#cyan-600",
  },
  secondary: {
    light: "#blue-400",
    main: "#blue-500",
    dark: "#blue-600",
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
    primary: "from-cyan-500 to-blue-600",
    secondary: "from-cyan-400 to-blue-500",
    hover: "from-cyan-500/10 to-blue-500/10",
    border: "from-cyan-400 to-blue-400",
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
    accent: "border-cyan-400/40",
  },

  // Background Gradients (Glowing orbs)
  glows: {
    primary: "bg-cyan-500/20",
    secondary: "bg-blue-600/20",
    tertiary: "bg-cyan-400/10",
  },

  // Hover States
  hoverBg: "hover:bg-white/10",
  hoverBorder: "hover:border-cyan-400/40",
  hoverText: "hover:text-cyan-400",
  hoverGlow: "hover:bg-cyan-500/20",

  // Box Shadow
  shadows: {
    sm: "shadow-lg",
    md: "shadow-xl",
    lg: "shadow-2xl",
    glow: "shadow-cyan-500/50",
  },

  // Animation Colors
  animations: {
    pulse: "text-cyan-400",
    glow: "rgba(34,211,238,0.6)",
    border: "#06b6d4",
  },
};

// ===== HELPER FUNCTION TO GET THEME VALUES =====
export const getThemeClass = (key) => {
  const classMap = {
    primary: "from-cyan-500 to-blue-600",
    primaryText: "text-cyan-400",
    primaryGlow: "bg-cyan-500/20",
    secondary: "bg-blue-600",
    background: "bg-[#050816]",
    cardBg: "bg-white/5",
    border: "border-white/10",
    hoverBorder: "hover:border-cyan-400/40",
    textGray: "text-gray-400",
    textLight: "text-gray-300",
  };
  return classMap[key] || "";
};

// ===== COLOR PALETTE FOR EASY REFERENCE =====
export const colorPalette = {
  // Tailwind classes for primary colors
  primary: {
    bg: "bg-cyan-500",
    text: "text-cyan-400",
    border: "border-cyan-400",
    glow: "bg-cyan-500/20",
  },
  secondary: {
    bg: "bg-blue-600",
    text: "text-blue-400",
    border: "border-blue-400",
    glow: "bg-blue-600/20",
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