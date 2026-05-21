// ===== THEME CONFIGURATION =====
// Theme 1: Purple & Violet (Default Modern)

export const theme = {


  teamMembers: [
      {
        name: "Narendra Jangid",
        role: "Founder & Backend Engineer",
        image: "https://i.pravatar.cc/300?img=12",
        description: "Passionate about creating modern software with scalable architecture.",
      },
      {
        name: "Aarav Mehta",
        role: "Frontend Developer",
        image: "https://i.pravatar.cc/300?img=15",
        description: "Passionate about creating modern software with scalable architecture.",
      },
      {
        name: "Priya Sharma",
        role: "UI/UX Designer",
        image: "https://i.pravatar.cc/300?img=32",
        description: "Passionate about creating modern software with scalable architecture.",
      },
      {
        name: "Rahul Verma",
        role: "Cloud Architect",
        image: "https://i.pravatar.cc/300?img=18",
        description: "Passionate about creating modern software with scalable architecture.",
      },
    ],

  // Primary Colors
  primary: {
    light: "#fuchsia-400",
    main: "#fuchsia-500",
    dark: "#fuchsia-600",
  },
  secondary: {
    light: "#violet-400",
    main: "#violet-500",
    dark: "#violet-600",
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
    primary: "from-fuchsia-500 to-violet-600",
    secondary: "from-fuchsia-400 to-violet-500",
    hover: "from-fuchsia-500/10 to-violet-500/10",
    border: "from-fuchsia-400 to-violet-400",
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
    accent: "border-fuchsia-400/40",
  },

  // Background Gradients (Glowing orbs)
  glows: {
    primary: "bg-fuchsia-500/20",
    secondary: "bg-violet-600/20",
    tertiary: "bg-purple-500/10",
  },

  // Hover States
  hoverBg: "hover:bg-white/10",
  hoverBorder: "hover:border-fuchsia-400/40",
  hoverText: "hover:text-fuchsia-400",
  hoverGlow: "hover:bg-fuchsia-500/20",

  // Box Shadow
  shadows: {
    sm: "shadow-lg",
    md: "shadow-xl",
    lg: "shadow-2xl",
    glow: "shadow-fuchsia-500/50",
  },

  // Animation Colors
  animations: {
    pulse: "text-fuchsia-400",
    glow: "rgba(217,70,239,0.6)",
    border: "#d946ef",
  },
};

// ===== HELPER FUNCTION TO GET THEME VALUES =====
export const getThemeClass = (key) => {
  const classMap = {
    primary: "from-fuchsia-500 to-violet-600",
    primaryText: "text-fuchsia-400",
    primaryGlow: "bg-fuchsia-500/20",
    secondary: "bg-violet-600",
    background: "bg-[#050816]",
    cardBg: "bg-white/5",
    border: "border-white/10",
    hoverBorder: "hover:border-fuchsia-400/40",
    textGray: "text-gray-400",
    textLight: "text-gray-300",
  };
  return classMap[key] || "";
};

// ===== COLOR PALETTE FOR EASY REFERENCE =====
export const colorPalette = {
  // Tailwind classes for primary colors
  primary: {
    bg: "bg-fuchsia-500",
    text: "text-fuchsia-400",
    border: "border-fuchsia-400",
    glow: "bg-fuchsia-500/20",
  },
  secondary: {
    bg: "bg-violet-600",
    text: "text-violet-400",
    border: "border-violet-400",
    glow: "bg-violet-600/20",
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