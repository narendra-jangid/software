'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Sparkles, Code2, Zap, Globe, Shield, Rocket } from 'lucide-react';

export default function UltraPremiumWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(100, 116, 139, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let particle of particles) {
        particle.update();
        particle.draw();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 116, 139, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      desc: "Enterprise-grade web applications with cutting-edge tech stack",
      features: ["React/Next.js", "Real-time APIs", "Optimization"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      desc: "Native and cross-platform applications with stunning UX",
      features: ["iOS/Android", "Flutter/React Native", "Cloud Sync"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Solutions",
      desc: "Scalable infrastructure with advanced security protocols",
      features: ["AWS/Azure", "Microservices", "DevOps"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & ML",
      desc: "Machine learning solutions powering intelligent automation",
      features: ["Neural Networks", "NLP", "Computer Vision"]
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Healthcare Management Platform",
      category: "Healthcare",
      desc: "Complete patient management system with real-time analytics",
      tech: "Spring Boot • React • MongoDB • AWS",
      image: "🏥",
      stats: { users: "50K+", uptime: "99.99%" }
    },
    {
      id: 2,
      name: "E-Commerce Marketplace",
      category: "E-Commerce",
      desc: "Multi-vendor platform with advanced search and recommendation engine",
      tech: "Node.js • Next.js • PostgreSQL • Redis",
      image: "🛍️",
      stats: { transactions: "1M+", vendors: "500+" }
    },
    {
      id: 3,
      name: "Real-Time Analytics Dashboard",
      category: "Analytics",
      desc: "Enterprise BI platform with streaming data and ML predictions",
      tech: "Kafka • Redis • Java • D3.js",
      image: "📊",
      stats: { datapoints: "10M/day", latency: "<100ms" }
    },
    {
      id: 4,
      name: "AI-Powered Chat Platform",
      category: "AI",
      desc: "Conversational AI with NLP and sentiment analysis",
      tech: "Python • TensorFlow • React • WebSocket",
      image: "🤖",
      stats: { conversations: "500K+", accuracy: "94%" }
    },
  ];

  const team = [
    { name: "Narendra Jangid", role: "Founder & Backend Engineer", expertise: "System Architecture", image: "https://i.pravatar.cc/300?img=12" },
    { name: "Aarav Mehta", role: "Frontend Developer", expertise: "UI/UX Implementation", image: "https://i.pravatar.cc/300?img=15" },
    { name: "Priya Sharma", role: "UI/UX Designer", expertise: "Design Systems", image: "https://i.pravatar.cc/300?img=32" },
    { name: "Rahul Verma", role: "Cloud Architect", expertise: "Infrastructure", image: "https://i.pravatar.cc/300?img=18" },
  ];

  const testimonials = [
    { name: "Rahul Sharma", company: "Fintech Solutions", role: "CEO", feedback: "Exceptional quality, delivered ahead of schedule with zero bugs. A truly world-class team.", rating: 5 },
    { name: "Priya Verma", company: "HealthCare Plus", role: "CTO", feedback: "Outstanding technical expertise combined with perfect communication. Highly recommended.", rating: 5 },
    { name: "Vikram Singh", company: "TechStartup Inc", role: "Founder", feedback: "They transformed our idea into a market-ready product in record time.", rating: 5 },
  ];

  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Optimized for sub-100ms load times" },
    { icon: "🔒", title: "Enterprise Security", desc: "Bank-level encryption and compliance" },
    { icon: "📈", title: "Scalable Architecture", desc: "Handles millions of concurrent users" },
    { icon: "🌍", title: "Global Reach", desc: "CDN distributed across 6 continents" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-40"
        style={{ background: 'transparent' }}
      />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-2xl shadow-2xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
          <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">T</div>
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TechNova</div>
                <div className="text-xs text-gray-400">Digital Transformation</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {['Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden lg:flex px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:-translate-y-1 items-center gap-2">
                <Rocket size={16} />
                Get Started
              </button>
              <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
                {['Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/30 to-transparent rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer group">
                <Sparkles size={16} className="text-blue-400 animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Cutting-edge Technology Stack</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-7xl lg:text-8xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">Digital</span>
                  <br />
                  <span className="text-white">Excellence</span>
                </h1>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
                We architect and build transformative digital solutions that empower enterprises to scale, innovate, and dominate their markets with cutting-edge technology and design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group relative px-8 py-4 overflow-hidden rounded-xl font-bold text-white transition-all hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-105"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Rocket size={20} />
                    Launch Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
                <button className="px-8 py-4 border-2 border-white/20 rounded-xl font-bold text-white hover:bg-white/10 backdrop-blur-sm transition-all">
                  View Our Work
                </button>
              </div>

              {/* Stats with Animation */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { number: "200+", label: "Projects Delivered", suffix: "" },
                  { number: "50+", label: "Enterprise Clients", suffix: "" },
                  { number: "99.99%", label: "Uptime Guaranteed", suffix: "" }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D-like Hero Card */}
            <div className="relative h-96 lg:h-full min-h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:border-white/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="h-full flex flex-col items-center justify-center p-12 space-y-6">
                  <div className="text-9xl animate-bounce" style={{animationDuration: '2s'}}>🚀</div>
                  <div className="space-y-3 text-center">
                    <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-48 animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full w-40 mx-auto animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="h-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full w-32 mx-auto animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <div className="text-sm text-gray-400 mt-6">Next-Gen Solutions Ready</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all hover:-translate-y-2 hover:border-blue-500/50 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">{feature.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-6xl lg:text-7xl font-black">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">Full-spectrum solutions from concept to enterprise-scale deployment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:from-slate-800 hover:to-slate-800/50 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500/50 overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {service.features.map((feature, j) => (
                        <div key={j} className="text-sm text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-6xl lg:text-7xl font-black">
                Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">Enterprise-grade solutions delivering measurable impact</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-500 hover:border-blue-500/50 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative h-80 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-9xl group-hover:scale-110 transition-transform duration-500" style={{transform: hoveredProject === i ? 'rotate(10deg)' : 'rotate(0deg)', transition: 'transform 0.5s ease'}}>
                        {project.image}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>

                  <div className="relative p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                      {Object.entries(project.stats).map(([key, value], j) => (
                        <div key={j} className="space-y-1">
                          <div className="text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-gray-400 pt-2">{project.tech}</p>

                    <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all group-hover:translate-x-2">
                      View Case Study <ArrowRight size={16} className="inline ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-6xl lg:text-7xl font-black">
                Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">Visionary leaders and technical experts driving innovation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-900 rounded-2xl p-6 space-y-4 border border-white/10 group-hover:border-white/30 transition-all">
                    <div className="relative h-48 w-48 mx-auto overflow-hidden rounded-xl">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-sm font-medium text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">{member.role}</p>
                      <p className="text-xs text-gray-400">{member.expertise}</p>
                    </div>
                    <div className="flex gap-3 justify-center pt-4">
                      {['Li', 'Gh', 'Tw'].map((social, j) => (
                        <button key={j} className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-xs font-bold text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all">
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-6xl lg:text-7xl font-black">
                Loved By <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:bg-slate-800/80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <span key={j} className="text-2xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">"{testimonial.feedback}"</p>
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-20 space-y-8 border border-white/20 group-hover:border-white/40 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 text-center space-y-8">
                  <h2 className="text-6xl lg:text-7xl font-black">
                    Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transform?</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">Let's discuss your vision and build the next generation of your business together</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <button className="group/btn relative px-8 py-4 overflow-hidden rounded-xl font-bold text-white transition-all hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover/btn:scale-105"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        Start Your Journey
                        <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                      </div>
                    </button>
                    <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-bold text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white/50">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-16 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"></div>
                    <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">T</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">TechNova</div>
                    <div className="text-xs text-gray-400">Digital Transformation</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Building enterprise solutions that redefine industry standards with innovation and excellence.</p>
              </div>

              {[
                { title: 'Product', items: ['Features', 'Security', 'Pricing', 'Enterprise'] },
                { title: 'Company', items: ['About', 'Blog', 'Careers', 'Contact'] },
                { title: 'Resources', items: ['Docs', 'API', 'Community', 'Support'] },
              ].map((col, i) => (
                <div key={i}>
                  <h3 className="font-bold mb-4 text-white">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h3 className="font-bold mb-4 text-white">Newsletter</h3>
                <div className="flex flex-col gap-2">
                  <input type="email" placeholder="your@email.com" className="px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all">Subscribe</button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2024 TechNova Solutions. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        .animate-pulse {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-bounce {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Helper Smartphone icon component
function Smartphone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  );
}
