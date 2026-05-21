"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { emeraldTheme as theme } from "../newtheme";
// import { emeraldTheme as theme } from "../newtheme";//1



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

  const teamMembers = theme.content.teamMembers;
  const services = theme.content.services;
  const projects = theme.content.projects;
  const testimonials = theme.content.testimonials;

  return (
    <div
      className="min-h-screen overflow-hidden text-white"
      style={{ backgroundColor: theme.background.darkest }}
    >
      {/* ===== ANIMATED BACKGROUND ORBS ===== */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: theme.glows.primary,
        }}
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed right-[-120px] top-[500px] h-[400px] w-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: theme.glows.secondary,
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed bottom-[-150px] left-[30%] h-[350px] w-[350px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: theme.glows.tertiary,
        }}
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
          className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl"
          style={{
            border: `1px solid ${theme.borders.light}`,
            backgroundColor: theme.navbar.background,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl font-bold text-white shadow-lg"
              style={{
                background: theme.gradients.primary,
              }}
            >
              {theme.brand.logoText}
            </motion.div>
            <div>
              <h1 className="text-lg font-bold" style={{ color: theme.text.primary }}>
                {theme.brand.name}
              </h1>
              <p className="text-xs" style={{ color: theme.text.muted }}>
                {theme.brand.tagline}
              </p>
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
                className="relative text-sm font-medium group"
                style={{ color: theme.text.secondary }}
              >
                {item}
                <motion.span
                  whileHover={{ width: "100%" }}
                  className="absolute -bottom-2 left-0 h-0.5 w-0"
                  style={{
                    background: theme.gradients.border,
                  }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg"
              style={{
                background: theme.gradients.primary,
              }}
            >
              {theme.buttons.cta}
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
              className="md:hidden backdrop-blur-xl border-t"
              style={{
                backgroundColor: theme.navbar.mobileMenu,
                borderColor: theme.borders.light,
              }}
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
                {["Services", "Projects", "Team", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium"
                    style={{ color: theme.text.secondary }}
                  >
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
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 py-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <ScrollReveal variant={slideInFromLeft}>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm w-fit"
                style={{
                  borderColor: `${theme.primary.main}4D`,
                  backgroundColor: `${theme.primary.main}1A`,
                  color: theme.primary.light,
                }}
              >
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  🚀
                </motion.span>
                {theme.content.heroSection.badge}
              </motion.div>
            </ScrollReveal>

            {/* Heading with Split Text */}
            <div className="space-y-4">
              <ScrollReveal variant={slideInFromLeft} index={1}>
                <h1 className="text-6xl md:text-7xl font-black leading-tight" style={{ color: theme.text.primary }}>
                  {theme.content.heroSection.heading1}
                </h1>
              </ScrollReveal>

              <ScrollReveal variant={slideInFromRight} index={2}>
                <h1
                  className="text-6xl md:text-7xl font-black bg-clip-text text-transparent leading-tight"
                  style={{
                    backgroundImage: theme.gradients.secondary,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {theme.content.heroSection.heading2}
                </h1>
              </ScrollReveal>

              <ScrollReveal variant={slideInFromLeft} index={3}>
                <h1 className="text-6xl md:text-7xl font-black leading-tight" style={{ color: theme.text.primary }}>
                  {theme.content.heroSection.heading3}
                </h1>
              </ScrollReveal>
            </div>

            {/* Description */}
            <ScrollReveal variant={slideInFromLeft} index={4}>
              <p className="max-w-xl text-lg leading-relaxed" style={{ color: theme.text.secondary }}>
                {theme.content.heroSection.description}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal variant={slideInFromLeft} index={5}>
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-4 rounded-xl font-bold text-white shadow-lg"
                  style={{
                    background: theme.gradients.primary,
                  }}
                >
                  {theme.buttons.primary}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-4 rounded-xl font-bold transition-all"
                  style={{
                    border: `2px solid ${theme.borders.light}`,
                    color: theme.text.primary,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = `${theme.primary.main}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {theme.buttons.secondary}
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal variant={slideInFromLeft} index={6}>
              <motion.div
                className="flex flex-wrap gap-12 pt-8 border-t"
                style={{
                  borderColor: theme.borders.light,
                }}
              >
                {theme.content.heroSection.stats.map((stat, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }}>
                    <motion.h3
                      className="text-4xl font-bold"
                      style={{ color: theme.primary.light }}
                    >
                      {stat.num}
                    </motion.h3>
                    <p className="mt-1" style={{ color: theme.text.secondary }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>

          {/* RIGHT HERO CARD */}
          {/* RIGHT HERO CARD */}
<ParallaxSection offset={30}>
  <ScrollReveal variant={slideInFromRight}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >

      {/* Soft Background Glow */}
      <div
        className="absolute -inset-6 rounded-[32px] blur-2xl opacity-10"
        style={{
          backgroundImage: theme.glows.primary,
        }}
      />

      {/* Main Card */}
      <motion.div
       initial={false}
        whileHover={{ scale: 1.01 }}
        className="
          relative
          rounded-[32px]
          p-8
          overflow-hidden
          backdrop-blur-2xl
          bg-white/[0.04]
          border
          shadow-2xl
        "
        style={{
          borderColor: theme.borders.light,
        }}
      >

        {/* Subtle Overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: theme.gradients.cardHover,
          }}
        />

        <div className="relative z-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p
                className="text-sm mb-2"
                style={{ color: theme.text.secondary }}
              >
                {theme.content.heroCard.label}
              </p>

              <h3
                className="text-5xl font-bold tracking-tight"
                style={{ color: theme.text.primary }}
              >
                {theme.content.heroCard.activeProjects}
              </h3>
            </div>

            {/* Minimal Dot */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs"
                style={{ color: theme.text.secondary }}
              >
                Active
              </span>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            {theme.content.heroCard.projects.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="
                  rounded-2xl
                  p-4
                  bg-white/[0.03]
                  border
                  backdrop-blur-xl
                "
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >

                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className="text-sm font-semibold"
                      style={{ color: theme.text.primary }}
                    >
                      {item.name}
                    </h4>
                  </div>

                  <span
                    className="text-xs px-3 py-1 rounded-full bg-white/5"
                    style={{ color: theme.text.secondary }}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

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
              <p className="text-sm font-bold" style={{ color: theme.primary.light }}>
                {theme.sections.services.label}
              </p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text={theme.sections.services.title}
                className="text-5xl md:text-6xl font-black leading-tight"
              />
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={2}>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: theme.text.secondary }}>
                {theme.sections.services.description}
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
                  className="group relative rounded-2xl p-8 backdrop-blur-xl overflow-hidden cursor-pointer"
                  style={{
                    border: `1px solid ${theme.borders.light}`,
                    backgroundColor: `${theme.primary.main}08`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: theme.gradients.cardHover,
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="text-5xl"
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold" style={{ color: theme.text.primary }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>
                      {service.desc}
                    </p>

                    <motion.div
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-2 text-sm font-medium mt-6"
                      style={{ color: theme.primary.light }}
                    >
                      Explore <span className="text-lg">→</span>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
                    style={{
                      background: theme.glows.primary,
                    }}
                  />
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
              <p className="text-sm font-bold" style={{ color: theme.primary.light }}>
                {theme.sections.projects.label}
              </p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text={theme.sections.projects.title}
                className="text-5xl md:text-6xl font-black leading-tight"
              />
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={2}>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: theme.text.secondary }}>
                {theme.sections.projects.description}
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
                    className="group overflow-hidden rounded-2xl backdrop-blur-xl"
                    style={{
                      border: `1px solid ${theme.borders.light}`,
                      backgroundColor: `${theme.background.lighter}80`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="h-48 flex items-center justify-center text-8xl relative overflow-hidden"
                      style={{
                        background: project.color,
                      }}
                    >
                      {project.icon}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                    </motion.div>

                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold" style={{ color: theme.text.primary }}>
                        {project.name}
                      </h3>
                      <p className="text-sm" style={{ color: theme.text.secondary }}>
                        {project.tech}
                      </p>

                      <motion.button
                        whileHover={{ x: 8 }}
                        className="text-sm font-bold flex items-center gap-2"
                        style={{ color: theme.primary.light }}
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
                <p className="text-sm font-bold mb-4" style={{ color: theme.primary.light }}>
                  {theme.sections.about.label}
                </p>
                <SplitText
                  text={theme.sections.about.title}
                  className="text-5xl font-bold leading-tight mb-6"
                />
              </div>

              <p className="text-lg leading-relaxed" style={{ color: theme.text.secondary }}>
                {theme.sections.about.description}
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
                {theme.content.aboutFeatures.map((item, i) => (
                  <ScrollReveal key={i} variant={slideInFromLeft} index={i}>
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="rounded-2xl p-6 backdrop-blur-xl cursor-pointer"
                      style={{
                        border: `1px solid ${theme.borders.light}`,
                        backgroundColor: `${theme.primary.main}08`,
                      }}
                    >
                      <h3 className="text-xl font-bold" style={{ color: theme.text.primary }}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm" style={{ color: theme.text.secondary }}>
                        {item.desc}
                      </p>
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
                className="rounded-3xl p-12 backdrop-blur-xl"
                style={{
                  border: `1px solid ${theme.borders.light}`,
                  background: theme.gradients.cardHover,
                }}
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
                  {theme.content.aboutStats.map(([num, label], i) => (
                    <ScrollReveal key={i} variant={scaleInVariant} index={i}>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="space-y-3 cursor-pointer"
                      >
                        <h3 className="text-4xl font-black" style={{ color: theme.primary.light }}>
                          {num}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>
                          {label}
                        </p>
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
              <p className="text-sm font-bold" style={{ color: theme.primary.light }}>
                {theme.sections.team.label}
              </p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text={theme.sections.team.title}
                className="text-5xl md:text-6xl font-black leading-tight"
              />
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={2}>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: theme.text.secondary }}>
                {theme.sections.team.description}
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
                  className="group relative rounded-2xl p-8 text-center backdrop-blur-xl overflow-hidden"
                  style={{
                    border: `1px solid ${theme.borders.light}`,
                    backgroundColor: `${theme.primary.main}08`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: theme.gradients.cardHover,
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mx-auto h-32 w-32 rounded-full overflow-hidden"
                      style={{
                        border: `4px solid ${theme.borders.light}`,
                      }}
                    >
                      <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold" style={{ color: theme.text.primary }}>
                        {member.name}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: theme.primary.light }}>
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed" style={{ color: theme.text.secondary }}>
                      {member.description || "Passionate about creating modern software with scalable architecture."}
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
                          className="h-8 w-8 rounded-lg text-xs font-bold transition-all"
                          style={{
                            border: `1px solid ${theme.borders.light}`,
                            backgroundColor: `${theme.primary.main}15`,
                            color: theme.primary.light,
                          }}
                        >
                          {social}
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
                    style={{
                      background: theme.glows.primary,
                    }}
                  />
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
              <p className="text-sm font-bold" style={{ color: theme.primary.light }}>
                {theme.sections.testimonials.label}
              </p>
            </ScrollReveal>

            <ScrollReveal variant={slideInFromBottom} index={1}>
              <SplitText
                text={theme.sections.testimonials.title}
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
                  className="rounded-2xl p-8 backdrop-blur-xl"
                  style={{
                    border: `1px solid ${theme.borders.light}`,
                    backgroundColor: `${theme.primary.main}08`,
                  }}
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

                  <p className="text-lg leading-relaxed mb-6" style={{ color: theme.text.secondary }}>
                    "{testimonial.feedback}"
                  </p>

                  <div
                    className="border-t pt-4"
                    style={{
                      borderColor: theme.borders.light,
                    }}
                  >
                    <h4 className="font-bold" style={{ color: theme.text.primary }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm" style={{ color: theme.text.secondary }}>
                      {testimonial.company}
                    </p>
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
          <div
            className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center backdrop-blur-xl overflow-hidden relative"
            style={{
              border: `1px solid ${theme.borders.light}`,
              background: theme.gradients.cardHover,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl"
              style={{
                background: theme.glows.primary,
              }}
            />

            <div className="relative z-10 space-y-8">
              <ScrollReveal variant={slideInFromTop}>
                <SplitText
                  text={theme.sections.cta.title}
                  className="text-5xl md:text-6xl font-black leading-tight"
                />
              </ScrollReveal>

              <ScrollReveal variant={slideInFromBottom} index={1}>
                <p className="mx-auto max-w-2xl text-lg" style={{ color: theme.text.secondary }}>
                  {theme.sections.cta.description}
                </p>
              </ScrollReveal>

              <ScrollReveal variant={slideInFromBottom} index={2}>
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-bold text-white shadow-lg"
                    style={{
                      background: theme.gradients.primary,
                    }}
                  >
                    {theme.buttons.contact}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-bold transition-all"
                    style={{
                      border: `2px solid ${theme.borders.light}`,
                      color: theme.text.primary,
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = `${theme.primary.main}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    {theme.buttons.schedule}
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="relative border-t py-20 backdrop-blur-xl overflow-hidden"
        style={{
          borderColor: theme.borders.light,
          backgroundColor: `${theme.primary.main}08`,
        }}
      >
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-0 top-0 h-64 w-64 rounded-full blur-3xl"
          style={{
            background: theme.glows.primary,
          }}
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
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{
                      background: theme.gradients.primary,
                    }}
                  >
                    {theme.brand.logoText}
                  </div>
                  <div>
                    <h2 className="font-bold" style={{ color: theme.text.primary }}>
                      {theme.brand.fullName}
                    </h2>
                    <p className="text-xs" style={{ color: theme.text.secondary }}>
                      {theme.brand.footerTagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed max-w-xs" style={{ color: theme.text.secondary }}>
                  {theme.brand.description}
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
                  {theme.footer.socialLinks.map((item, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className="text-xs px-3 py-2 rounded-lg transition-all"
                      style={{
                        border: `1px solid ${theme.borders.light}`,
                        backgroundColor: `${theme.primary.main}15`,
                        color: theme.primary.light,
                      }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Links Sections */}
            {theme.footer.sections.map((col, i) => (
              <ScrollReveal key={i} variant={slideInFromBottom} index={i + 1}>
                <div>
                  <h3 className="font-bold mb-4" style={{ color: theme.text.primary }}>
                    {col.title}
                  </h3>
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
                        className="text-sm transition-colors block"
                        style={{ color: theme.text.secondary }}
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
                <h3 className="font-bold" style={{ color: theme.text.primary }}>
                  {theme.footer.newsletter.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: theme.text.secondary }}>
                  {theme.footer.newsletter.description}
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder={theme.footer.newsletter.placeholder}
                    className="w-full px-4 py-2 rounded-lg text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: `${theme.primary.main}15`,
                      border: `1px solid ${theme.borders.light}`,
                      focusRing: theme.primary.light,
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2 rounded-lg text-white font-bold text-sm hover:shadow-lg transition-all"
                    style={{
                      background: theme.gradients.primary,
                    }}
                  >
                    {theme.footer.newsletter.button}
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Footer Bottom */}
          <div
            className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
            style={{
              borderColor: theme.borders.light,
              color: theme.text.tertiary,
            }}
          >
            <p>{theme.footer.copyright}</p>
            <div className="flex gap-6">
              {theme.footer.legalLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ color: theme.primary.light }}
                  className="transition-colors"
                  style={{ color: theme.text.tertiary }}
                >
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