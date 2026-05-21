// theme.js - Complete Theme Configuration
// Change values here and all components will automatically update

export const theme = {
  // ===== PRIMARY COLOR SCHEME =====
  primary: {
    main: "#06B6D4", // Cyan
    light: "#22D3EE", // Light Cyan
    dark: "#0891B2", // Dark Cyan
  },

  // ===== BACKGROUND COLORS =====
  background: {
    darkest: "#050816", // Darkest background
    darker: "#0f0f1e", // Darker background
    lighter: "#1a1a2e", // Lighter dark background
  },

  // ===== TEXT COLORS =====
  text: {
    primary: "#FFFFFF", // White text
    secondary: "#A0AEC0", // Gray text for descriptions
    muted: "#718096", // Muted gray for metadata
    tertiary: "#4A5568", // Very muted gray for footer
  },

  // ===== BORDERS =====
  borders: {
    light: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
    dark: "rgba(0, 0, 0, 0.2)", // Semi-transparent black
  },

  // ===== GRADIENTS =====
  gradients: {
    primary: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)", // Cyan gradient
    secondary: "linear-gradient(90deg, #06B6D4 0%, #22D3EE 100%)", // Cyan to light cyan
    border: "linear-gradient(90deg, #06B6D4 0%, #0891B2 100%)", // Cyan border gradient
    cardHover: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%)", // Subtle cyan gradient
  },

  // ===== GLOW EFFECTS =====
  glows: {
  primary:
    "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",

  secondary:
    "radial-gradient(circle, rgba(216,180,254,0.05) 0%, transparent 70%)",

  tertiary:
    "radial-gradient(circle, rgba(126,34,206,0.03) 0%, transparent 70%)",
},

  // ===== NAVBAR STYLING =====
  navbar: {
    background: "rgba(0, 0, 0, 0.4)", // Semi-transparent black
    mobileMenu: "rgba(0, 0, 0, 0.8)", // Darker for mobile menu
  },

  // ===== BRAND INFORMATION =====
  brand: {
    name: "TechNova", // Company name
    fullName: "TechNova Solutions", // Full company name
    logoText: "T", // Logo text/icon
    tagline: "Software Solutions", // Navbar tagline
    footerTagline: "Modern Software Company", // Footer tagline
    description: "We build scalable web platforms, AI-powered systems, mobile applications, and enterprise cloud solutions.",
  },

  // ===== BUTTON LABELS =====
  buttons: {
    cta: "Start Project", // Navbar CTA button
    primary: "Get Started", // Primary button text
    secondary: "View Portfolio", // Secondary button text
    contact: "Contact Us", // Contact button
    schedule: "Schedule Meeting", // Schedule button
  },

  // ===== SECTION CONFIGURATION =====
  sections: {
    services: {
      label: "OUR SERVICES",
      title: "Smart Digital Solutions",
      description: "We create scalable and high-performance applications designed for startups and enterprises.",
    },
    projects: {
      label: "OUR WORK",
      title: "Featured Projects",
      description: "Powerful enterprise-grade systems crafted for modern businesses.",
    },
    about: {
      label: "WHY CHOOSE US",
      title: "Engineering Future-Ready Digital Products",
      description: "We combine scalable architecture, modern technologies, and user-focused design to create impactful software experiences.",
    },
    team: {
      label: "OUR TEAM",
      title: "Meet The Experts",
      description: "A passionate team of engineers, designers, and innovators building scalable digital experiences.",
    },
    testimonials: {
      label: "TESTIMONIALS",
      title: "What Clients Say",
    },
    cta: {
      title: "Ready to Build Your Next Product?",
      description: "Let's discuss your idea and create scalable software solutions.",
    },
  },

  // ===== FOOTER CONFIGURATION =====
  footer: {
    copyright: "© 2026 TechNova Solutions. All rights reserved.",
    socialLinks: ["LinkedIn", "GitHub", "Twitter", "Dribbble"],
    sections: [
      {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Contact", "Partnership"],
      },
      {
        title: "Services",
        links: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI Automation", "UI/UX Design"],
      },
    ],
    newsletter: {
      title: "Newsletter",
      description: "Subscribe to receive updates and insights.",
      placeholder: "Your email",
      button: "Subscribe",
    },
    legalLinks: ["Privacy Policy", "Terms of Service", "Cookies"],
  },

  // ===== DYNAMIC CONTENT =====
  content: {
    // Hero Section
    heroSection: {
      badge: "Trusted by startups worldwide",
      heading1: "We Build",
      heading2: "Modern Software",
      heading3: "For Growing Businesses",
      description: "High-performance web platforms, mobile applications, AI systems, and scalable cloud solutions engineered for the future.",
      stats: [
        { num: "150+", label: "Projects" },
        { num: "50+", label: "Clients" },
        { num: "99%", label: "Satisfaction" },
      ],
    },

    heroCard: {
  label: "Active Projects",
  activeProjects: "24",

  projects: [
    {
      name: "AI Automation Platform",
      status: "In Progress",
    },
    {
      name: "Enterprise Dashboard",
      status: "Deploying",
    },
    {
      name: "Cloud Infrastructure",
      status: "Completed",
    },
  ],
},

    // Services (with icons and colors)
    services: [
      {
        title: "Web Development",
        desc: "Modern, scalable, and high-performance web applications.",
        icon: "🌐",
      },
      {
        title: "Mobile Apps",
        desc: "Beautiful Android and iOS applications with seamless UX.",
        icon: "📱",
      },
      {
        title: "Cloud Solutions",
        desc: "Secure cloud infrastructure and scalable architecture.",
        icon: "☁️",
      },
      {
        title: "AI & Automation",
        desc: "AI-powered systems and intelligent automation.",
        icon: "🤖",
      },
    ],

    // Projects
    projects: [
      {
        name: "Healthcare Management System",
        tech: "Spring Boot • React • MongoDB",
        icon: "🏥",
        color: "linear-gradient(135deg, #10B981 0%, #059669 100%)", // Emerald gradient
      },
      {
        name: "E-Commerce Platform",
        tech: "Node.js • Next.js • PostgreSQL",
        icon: "🛍️",
        color: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", // Blue gradient
      },
      {
        name: "Real-Time Analytics Dashboard",
        tech: "Kafka • Redis • Java",
        icon: "📊",
        color: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)", // Purple gradient
      },
    ],

    // About Features
    aboutFeatures: [
      {
        title: "Scalable Architecture",
        desc: "Built using modern cloud-native and microservice architectures.",
      },
      {
        title: "Agile Delivery",
        desc: "Faster iterations with transparency and continuous deployment.",
      },
    ],

    // About Stats
    aboutStats: [
      ["10+", "Years\nExperience"],
      ["80+", "Team\nMembers"],
      ["150+", "Projects\nDelivered"],
      ["12", "Countries\nServed"],
    ],

    // Team Members
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

    // Testimonials
    testimonials: [
      {
        name: "Rahul Sharma",
        company: "Fintech Solutions",
        feedback: "Exceptional quality and performance delivered on time.",
      },
      {
        name: "Priya Verma",
        company: "HealthCare Plus",
        feedback: "Professional team with outstanding technical expertise.",
      },
    ],
  },

  // ===== ANIMATION SETTINGS =====
  animations: {
    glow: "rgba(6, 182, 212, 0.5)", // Glow color for animations
    duration: 0.6, // Default animation duration
  },
};

// ===== ALTERNATIVE THEME PRESETS (USE THESE FOR QUICK THEME CHANGES) =====

// Emerald Theme
export const emeraldTheme = {
  ...theme,
  primary: {
    main: "#10B981",
    light: "#34D399",
    dark: "#059669",
  },
  gradients: {
    primary: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    secondary: "linear-gradient(90deg, #10B981 0%, #34D399 100%)",
    border: "linear-gradient(90deg, #10B981 0%, #059669 100%)",
    cardHover: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)",
  },
  glows: {
    primary: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
    secondary: "radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, transparent 70%)",
    tertiary: "radial-gradient(circle, rgba(5, 150, 105, 0.2) 0%, transparent 70%)",
  },
};

// // Purple Theme
// export const purpleTheme = {
//   ...theme,
//   primary: {
//     main: "#A855F7",
//     light: "#D8B4FE",
//     dark: "#7E22CE",
//   },
//   gradients: {
//     primary: "linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)",
//     secondary: "linear-gradient(90deg, #A855F7 0%, #D8B4FE 100%)",
//     border: "linear-gradient(90deg, #A855F7 0%, #7E22CE 100%)",
//     cardHover: "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(126, 34, 206, 0.1) 100%)",
//   },
//   glows: {
//     primary: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
//     secondary: "radial-gradient(circle, rgba(216, 180, 254, 0.3) 0%, transparent 70%)",
//     tertiary: "radial-gradient(circle, rgba(126, 34, 206, 0.2) 0%, transparent 70%)",
//   },
// };

// // Blue Theme
// export const blueTheme = {
//   ...theme,
//   primary: {
//     main: "#3B82F6",
//     light: "#60A5FA",
//     dark: "#1D4ED8",
//   },
//   gradients: {
//     primary: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
//     secondary: "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
//     border: "linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%)",
//     cardHover: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%)",
//   },
//   glows: {
//     primary: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
//     secondary: "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)",
//     tertiary: "radial-gradient(circle, rgba(29, 78, 216, 0.2) 0%, transparent 70%)",
//   },
// };

// export const orangeTheme = {
//   ...theme,

//   primary: {
//     main: "#F97316",
//     light: "#FB923C",
//     dark: "#C2410C",
//   },

//   gradients: {
//     primary: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
//     secondary: "linear-gradient(90deg, #F97316 0%, #FB923C 100%)",
//     border: "linear-gradient(90deg, #F97316 0%, #C2410C 100%)",
//     cardHover:
//       "linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(194,65,12,0.1) 100%)",
//   },

//   glows: {
//     primary:
//       "radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)",
//     secondary:
//       "radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)",
//     tertiary:
//       "radial-gradient(circle, rgba(194,65,12,0.2) 0%, transparent 70%)",
//   },
// };

// export const midnightTheme = {
//   ...theme,

//   primary: {
//     main: "#6366F1",
//     light: "#818CF8",
//     dark: "#4338CA",
//   },

//   background: {
//     darkest: "#020617",
//     darker: "#0F172A",
//     lighter: "#1E293B",
//   },

//   gradients: {
//     primary: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)",
//     secondary: "linear-gradient(90deg, #6366F1 0%, #818CF8 100%)",
//     border: "linear-gradient(90deg, #6366F1 0%, #4338CA 100%)",
//     cardHover:
//       "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(67,56,202,0.1) 100%)",
//   },

//   glows: {
//     primary:
//       "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
//     secondary:
//       "radial-gradient(circle, rgba(129,140,248,0.3) 0%, transparent 70%)",
//     tertiary:
//       "radial-gradient(circle, rgba(67,56,202,0.2) 0%, transparent 70%)",
//   },
// };

// export const neonTheme = {
//   ...theme,

//   primary: {
//     main: "#84CC16",
//     light: "#A3E635",
//     dark: "#4D7C0F",
//   },

//   gradients: {
//     primary: "linear-gradient(135deg, #84CC16 0%, #4D7C0F 100%)",
//     secondary: "linear-gradient(90deg, #84CC16 0%, #A3E635 100%)",
//     border: "linear-gradient(90deg, #84CC16 0%, #4D7C0F 100%)",
//     cardHover:
//       "linear-gradient(135deg, rgba(132,204,22,0.1) 0%, rgba(77,124,15,0.1) 100%)",
//   },

//   glows: {
//     primary:
//       "radial-gradient(circle, rgba(132,204,22,0.4) 0%, transparent 70%)",
//     secondary:
//       "radial-gradient(circle, rgba(163,230,53,0.3) 0%, transparent 70%)",
//     tertiary:
//       "radial-gradient(circle, rgba(77,124,15,0.2) 0%, transparent 70%)",
//   },
// };

// export const lightTheme = {
//   ...theme,

//   background: {
//     darkest: "#FFFFFF",
//     darker: "#F8FAFC",
//     lighter: "#E2E8F0",
//   },

//   text: {
//     primary: "#0F172A",
//     secondary: "#475569",
//     muted: "#64748B",
//     tertiary: "#94A3B8",
//   },

//   borders: {
//     light: "rgba(0,0,0,0.08)",
//     dark: "rgba(0,0,0,0.15)",
//   },

//   navbar: {
//     background: "rgba(255,255,255,0.7)",
//     mobileMenu: "rgba(255,255,255,0.95)",
//   },

//   primary: {
//     main: "#2563EB",
//     light: "#60A5FA",
//     dark: "#1D4ED8",
//   },

//   gradients: {
//     primary: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
//     secondary: "linear-gradient(90deg, #2563EB 0%, #60A5FA 100%)",
//     border: "linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)",
//     cardHover:
//       "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(29,78,216,0.05) 100%)",
//   },
// };

// export const goldTheme = {
//   ...theme,

//   primary: {
//     main: "#D4AF37",
//     light: "#F6E27A",
//     dark: "#9F7928",
//   },

//   gradients: {
//     primary: "linear-gradient(135deg, #D4AF37 0%, #9F7928 100%)",
//     secondary: "linear-gradient(90deg, #D4AF37 0%, #F6E27A 100%)",
//     border: "linear-gradient(90deg, #D4AF37 0%, #9F7928 100%)",
//     cardHover:
//       "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(159,121,40,0.1) 100%)",
//   },

//   glows: {
//     primary:
//       "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)",
//     secondary:
//       "radial-gradient(circle, rgba(246,226,122,0.3) 0%, transparent 70%)",
//     tertiary:
//       "radial-gradient(circle, rgba(159,121,40,0.2) 0%, transparent 70%)",
//   },
// };