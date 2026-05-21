"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


//import { theme } from '../theme';
//import { theme } from '../cyantheme';
import { theme } from '../emeraldtheme';
//import { theme } from '../emeratlighttheme';

// ===== ANIMATION VARIANTS =====
const slideInFromLeft = {
  hidden: { opacity: 0, x: -150 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 60,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 150 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 60,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

const slideInFromTop = {
  hidden: { opacity: 0, y: -100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 60,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 60,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 100,
      delay: i * 0.1,
    },
  }),
};

const revealText = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.05,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

// ===== SCROLL REVEAL COMPONENT =====
function ScrollReveal({ children, variant = slideInFromBottom, index = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== PARALLAX SECTION =====
function ParallaxSection({ children, offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// ===== SPLIT TEXT ANIMATION =====
function SplitText({ text, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// ===== MAIN COMPONENT =====
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const teamMembers = [
    { name: "Narendra Jangid", role: "Founder & Backend Engineer", image: "https://i.pravatar.cc/300?img=12" },
    { name: "Aarav Mehta", role: "Frontend Developer", image: "https://i.pravatar.cc/300?img=15" },
    { name: "Priya Sharma", role: "UI/UX Designer", image: "https://i.pravatar.cc/300?img=32" },
    { name: "Rahul Verma", role: "Cloud Architect", image: "https://i.pravatar.cc/300?img=18" },
  ];

  const services = [
    { title: "Web Development", desc: "Modern, scalable, and high-performance web applications.", icon: "🌐" },
    { title: "Mobile Apps", desc: "Beautiful Android and iOS applications with seamless UX.", icon: "📱" },
    { title: "Cloud Solutions", desc: "Secure cloud infrastructure and scalable architecture.", icon: "☁️" },
    { title: "AI & Automation", desc: "AI-powered systems and intelligent automation.", icon: "🤖" },
  ];

  const projects = [
    { name: "Healthcare Management System", tech: "Spring Boot • React • MongoDB", icon: "🏥", color: "from-emerald-500" },
    { name: "E-Commerce Platform", tech: "Node.js • Next.js • PostgreSQL", icon: "🛍️", color: "from-blue-500" },
    { name: "Real-Time Analytics Dashboard", tech: "Kafka • Redis • Java", icon: "📊", color: "from-purple-500" },
  ];

  const testimonials = [
    { name: "Rahul Sharma", company: "Fintech Solutions", feedback: "Exceptional quality and performance delivered on time." },
    { name: "Priya Verma", company: "HealthCare Plus", feedback: "Professional team with outstanding technical expertise." },
  ];

  return (
    <div className={`min-h-screen overflow-hidden ${theme.background.darkest === "#050816" ? "bg-[#050816]" : "bg-[#0f0f1e]"} text-white`}>
      {/* ===== ANIMATED BACKGROUND ORBS ===== */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`fixed left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full ${theme.glows.primary} blur-3xl pointer-events-none`}
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`fixed right-[-120px] top-[500px] h-[400px] w-[400px] rounded-full ${theme.glows.secondary} blur-3xl pointer-events-none`}
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`fixed bottom-[-150px] left-[30%] h-[350px] w-[350px] rounded-full ${theme.glows.tertiary} blur-3xl pointer-events-none`}
      />

      {/* ===== NAVBAR ===== */}
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl ${theme.borders.light} bg-black/40 px-6 py-4 shadow-2xl backdrop-blur-xl`}
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradients.primary} font-bold text-white shadow-lg`}
            >
              T
            </motion.div>
            <div>
              <h1 className="text-lg font-bold">TechNova</h1>
              <p className="text-xs text-gray-400">Software Solutions</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Projects", "Team", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className={`relative text-gray-300 text-sm font-medium group ${theme.hoverText}`}
              >
                {item}
                <motion.span
                  whileHover={{ width: "100%" }}
                  className={`absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r ${theme.gradients.border}`}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden md:block rounded-xl bg-gradient-to-r ${theme.gradients.primary} px-5 py-2.5 text-sm font-bold text-white shadow-lg`}
            >
              Start Project
            </motion.button>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden bg-black/80 backdrop-blur-xl border-t ${theme.borders.light}`}
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
                {["Services", "Projects", "Team", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-44 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 py-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <ScrollReveal variant={slideInFromLeft}>
              <motion.div className={`inline-flex items-center gap-2 rounded-full border border-${theme.primary.main}/30 bg-${theme.primary.main}/10 px-4 py-2 text-sm text-${theme.primary.light} w-fit`}>
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  🚀
                </motion.span>
                Trusted by startups worldwide
              </motion.div>
            </ScrollReveal>

            {/* Heading with Split Text */}
            <div className="space-y-4">
              <ScrollReveal variant={slideInFromLeft} index={1}>
                <h1 className="text-6xl md:text-7xl font-black leading-tight">We Build</h1>
              </ScrollReveal>

              <ScrollReveal variant={slideInFromRight} index={2}>
                <h1 className={`text-6xl md:text-7xl font-black bg-gradient-to-r ${theme.gradients.secondary} bg-clip-text text-transparent leading-tight`}>
                  Modern Software
                </h1>
              </ScrollReveal>

              <ScrollReveal variant={slideInFromLeft} index={3}>
                <h1 className="text-6xl md:text-7xl font-black leading-tight">For Growing Businesses</h1>
              </ScrollReveal>
            </div>

            {/* Description */}
            <ScrollReveal variant={slideInFromLeft} index={4}>
              <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
                High-performance web platforms, mobile applications, AI systems, and scalable cloud solutions engineered for the future.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal variant={slideInFromLeft} index={5}>
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-7 py-4 bg-gradient-to-r ${theme.gradients.primary} rounded-xl font-bold text-white shadow-lg`}
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-7 py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-all`}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal variant={slideInFromLeft} index={6}>
              <motion.div className={`flex flex-wrap gap-12 pt-8 border-t border-white/10`}>
                {[
                  { num: "150+", label: "Projects" },
                  { num: "50+", label: "Clients" },
                  { num: "99%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }}>
                    <motion.h3 className={`text-4xl font-bold text-${theme.primary.light}`}>
                      {stat.num}
                    </motion.h3>
                    <p className="text-gray-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>

          {/* RIGHT HERO CARD */}
          <ParallaxSection offset={30}>
            <ScrollReveal variant={slideInFromRight}>
              <motion.div whileHover={{ y: -10 }} className="relative group">
                {/* Animated glow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute -inset-10 bg-gradient-to-r ${theme.gradients.primary} rounded-3xl blur-3xl opacity-30`}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-3xl ${theme.borders.light} bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl backdrop-blur-xl overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradients.hover}`} />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Active Projects</p>
                        <motion.h3 className="text-5xl font-bold mt-2">24</motion.h3>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-4xl"
                      >
                        ⚡
                      </motion.div>
                    </div>

                    {/* Project Items */}
                    <motion.div className="space-y-4">
                      {[
                        { name: "AI Automation Platform", progress: "85%" },
                        { name: "Enterprise Dashboard", progress: "70%" },
                        { name: "Cloud Infrastructure", progress: "92%" },
                      ].map((item, i) => (
                        <ScrollReveal key={i} variant={slideInFromRight} index={i}>
                          <motion.div whileHover={{ x: 8, scale: 1.02 }} className={`rounded-2xl border border-white/10 bg-black/30 p-4`}>
                            <div className="flex justify-between mb-3">
                              <h4 className="text-sm font-semibold">{item.name}</h4>
                              <motion.span className={`text-xs ${theme.hoverText}`}>
                                Live
                              </motion.span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: item.progress }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 1.5 }}
                                className={`h-full bg-gradient-to-r ${theme.gradients.primary}`}
                              />
                            </div>
                          </motion.div>
                        </ScrollReveal>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-20 space-y-6">
            <ScrollReveal variant={slideInFromTop}>
              <p className={`${theme.hoverText} text-sm font-bold`}>OUR SERVICES</p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text="Smart Digital Solutions"
                className="text-5xl md:text-6xl font-black leading-tight"
              />
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={2}>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                We create scalable and high-performance applications designed for startups and enterprises.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, i) => (
              <ScrollReveal key={i} variant={slideInFromBottom} index={i}>
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className={`group relative rounded-2xl border ${theme.borders.light} bg-white/5 p-8 backdrop-blur-xl overflow-hidden cursor-pointer`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradients.hover} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10 space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="text-5xl"
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>

                    <motion.div
                      whileHover={{ x: 8 }}
                      className={`flex items-center gap-2 ${theme.hoverText} text-sm font-medium mt-6`}
                    >
                      Explore <span className="text-lg">→</span>
                    </motion.div>
                  </div>

                  <motion.div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${theme.glows.primary} blur-3xl group-hover:opacity-100`} />
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-20 space-y-6">
            <ScrollReveal variant={slideInFromTop}>
              <p className={`${theme.hoverText} text-sm font-bold`}>OUR WORK</p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text="Featured Projects"
                className="text-5xl md:text-6xl font-black leading-tight"
              />
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={2}>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Powerful enterprise-grade systems crafted for modern businesses.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Project Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid gap-8 md:grid-cols-3"
          >
            {projects.map((project, i) => (
              <ScrollReveal key={i} variant={slideInFromBottom} index={i}>
                <ParallaxSection offset={20}>
                  <motion.div
                    whileHover={{ y: -12 }}
                    className={`group overflow-hidden rounded-2xl border ${theme.borders.light} bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className={`h-48 bg-gradient-to-br ${project.color} via-slate-300 to-slate-400 flex items-center justify-center text-8xl relative overflow-hidden`}
                    >
                      {project.icon}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                    </motion.div>

                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <p className="text-gray-400 text-sm">{project.tech}</p>

                      <motion.button
                        whileHover={{ x: 8 }}
                        className={`${theme.hoverText} text-sm font-bold flex items-center gap-2`}
                      >
                        View Case Study <span className="text-lg">→</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </ParallaxSection>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal variant={slideInFromLeft}>
            <div className="space-y-8">
              <div>
                <p className={`${theme.hoverText} text-sm font-bold mb-4`}>WHY CHOOSE US</p>
                <SplitText
                  text="Engineering Future-Ready Digital Products"
                  className="text-5xl font-bold leading-tight mb-6"
                />
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                We combine scalable architecture, modern technologies, and user-focused design to create impactful software experiences.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="space-y-4"
              >
                {[
                  {
                    title: "Scalable Architecture",
                    desc: "Built using modern cloud-native and microservice architectures.",
                  },
                  {
                    title: "Agile Delivery",
                    desc: "Faster iterations with transparency and continuous deployment.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} variant={slideInFromLeft} index={i}>
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      className={`rounded-2xl border ${theme.borders.light} bg-white/5 p-6 backdrop-blur-xl cursor-pointer`}
                    >
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right Content - Stats */}
          <ParallaxSection offset={-30}>
            <ScrollReveal variant={slideInFromRight}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`rounded-3xl border ${theme.borders.light} bg-gradient-to-br ${theme.gradients.hover} p-12 backdrop-blur-xl`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="grid grid-cols-2 gap-8"
                >
                  {[
                    ["10+", "Years\nExperience"],
                    ["80+", "Team\nMembers"],
                    ["150+", "Projects\nDelivered"],
                    ["12", "Countries\nServed"],
                  ].map(([num, label], i) => (
                    <ScrollReveal key={i} variant={scaleInVariant} index={i}>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="space-y-3 cursor-pointer"
                      >
                        <h3 className={`text-4xl font-black ${theme.hoverText}`}>{num}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{label}</p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section id="team" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-20 space-y-6">
            <ScrollReveal variant={slideInFromTop}>
              <p className={`${theme.hoverText} text-sm font-bold`}>OUR TEAM</p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text="Meet The Experts"
                className="text-5xl md:text-6xl font-black leading-tight"
              />
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={2}>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                A passionate team of engineers, designers, and innovators building scalable digital experiences.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Team Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} variant={slideInFromBottom} index={i}>
                <motion.div
                  whileHover={{ y: -12 }}
                  className={`group relative rounded-2xl border ${theme.borders.light} bg-white/5 p-8 text-center backdrop-blur-xl overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradients.hover} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`mx-auto h-32 w-32 rounded-full overflow-hidden border-4 border-white/10`}
                    >
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className={`${theme.hoverText} text-sm mt-1`}>{member.role}</p>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      Passionate about creating modern software with scalable architecture.
                    </p>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                      className="flex gap-3 justify-center pt-4"
                    >
                      {["in", "gh", "tw"].map((social, j) => (
                        <motion.button
                          key={j}
                          variants={fadeUp}
                          whileHover={{ scale: 1.15, y: -3 }}
                          className={`h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-xs font-bold text-gray-300 ${theme.hoverBorder} ${theme.hoverText} transition-all`}
                        >
                          {social}
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${theme.glows.primary} blur-3xl`} />
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-20">
            <ScrollReveal variant={slideInFromTop}>
              <p className={`${theme.hoverText} text-sm font-bold`}>TESTIMONIALS</p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text="What Clients Say"
                className="text-5xl md:text-6xl font-black leading-tight mt-4"
              />
            </ScrollReveal>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid gap-8 md:grid-cols-2"
          >
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} variant={slideInFromBottom} index={i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-2xl border ${theme.borders.light} bg-white/5 p-8 backdrop-blur-xl`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-1 mb-4"
                  >
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-2xl">⭐</span>
                    ))}
                  </motion.div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-6">"{testimonial.feedback}"</p>

                  <div className={`border-t border-white/10 pt-4`}>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="contact" className="py-28 px-6">
        <ScrollReveal variant={scaleInVariant}>
          <div className={`max-w-5xl mx-auto rounded-3xl border ${theme.borders.light} bg-gradient-to-br ${theme.gradients.hover} p-12 md:p-20 text-center backdrop-blur-xl overflow-hidden relative`}>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className={`absolute -top-32 -right-32 w-64 h-64 rounded-full ${theme.glows.primary} blur-3xl`}
            />

            <div className="relative z-10 space-y-8">
              <ScrollReveal variant={slideInFromTop}>
                <SplitText
                  text="Ready to Build Your Next Product?"
                  className="text-5xl md:text-6xl font-black leading-tight"
                />
              </ScrollReveal>

              <ScrollReveal variant={slideInFromBottom} index={1}>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                  Let's discuss your idea and create scalable software solutions.
                </p>
              </ScrollReveal>

              <ScrollReveal variant={slideInFromBottom} index={2}>
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 0 30px ${theme.animations.glow}`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 bg-gradient-to-r ${theme.gradients.primary} rounded-xl font-bold text-white shadow-lg`}
                  >
                    Contact Us
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-all`}
                  >
                    Schedule Meeting
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={`relative border-t border-white/10 bg-black/20 py-20 backdrop-blur-xl overflow-hidden`}>
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute left-0 top-0 h-64 w-64 rounded-full ${theme.glows.primary} blur-3xl`}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12"
          >
            {/* Brand */}
            <ScrollReveal variant={slideInFromBottom} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${theme.gradients.primary} flex items-center justify-center text-white font-bold`}>
                    T
                  </div>
                  <div>
                    <h2 className="font-bold">TechNova Solutions</h2>
                    <p className="text-xs text-gray-400">Modern Software Company</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  We build scalable web platforms, AI-powered systems, mobile applications, and enterprise cloud solutions.
                </p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="flex gap-3"
                >
                  {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map((item, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className={`text-xs px-3 py-2 rounded-lg border border-white/10 bg-white/5 ${theme.hoverBorder} ${theme.hoverText} transition-all`}
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Links Sections */}
            {[
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Contact", "Partnership"],
              },
              {
                title: "Services",
                links: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI Automation", "UI/UX Design"],
              },
            ].map((col, i) => (
              <ScrollReveal key={i} variant={slideInFromBottom} index={i + 1}>
                <div>
                  <h3 className="font-bold mb-4 text-white">{col.title}</h3>
                  <motion.div
                    className="space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {col.links.map((link) => (
                      <motion.a
                        key={link}
                        href="#"
                        variants={revealText}
                        whileHover={{ x: 5 }}
                        className={`text-sm text-gray-400 ${theme.hoverText} transition-colors block`}
                      >
                        {link}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}

            {/* Newsletter */}
            <ScrollReveal variant={slideInFromBottom} index={3}>
              <div className="space-y-4">
                <h3 className="font-bold text-white">Newsletter</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Subscribe to receive updates and insights.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className={`w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-${theme.primary.main}`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-4 py-2 rounded-lg bg-gradient-to-r ${theme.gradients.primary} text-white font-bold text-sm hover:shadow-lg transition-all`}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Footer Bottom */}
          <div className={`border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500`}>
            <p>© 2026 TechNova Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
                <motion.a key={link} href="#" whileHover={{ color: "#d946ef" }} className={`${theme.hoverText} transition-colors`}>
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
