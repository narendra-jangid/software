export default function Home() {


const teamMembers = [
  {
    name: "Narendra Jangid",
    role: "Founder & Backend Engineer",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Rahul Verma",
    role: "Cloud Architect",
    image: "https://i.pravatar.cc/300?img=18",
  },
];


  const services = [
    {
      title: "Web Development",
      desc: "Modern, scalable, and high-performance web applications tailored to your business needs.",
    },
    {
      title: "Mobile Apps",
      desc: "Beautiful Android and iOS applications with seamless user experience.",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure cloud infrastructure, deployment automation, and scalable architecture.",
    },
    {
      title: "AI & Automation",
      desc: "AI-powered systems and intelligent workflow automation solutions.",
    },
  ];

  const projects = [
    {
      name: "Healthcare Management System",
      tech: "Spring Boot • React • MongoDB",
    },
    {
      name: "E-Commerce Platform",
      tech: "Node.js • Next.js • PostgreSQL",
    },
    {
      name: "Real-Time Analytics Dashboard",
      tech: "Kafka • Redis • Java",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Fintech Solutions",
      feedback:
        "The team delivered our platform with excellent quality and performance.",
    },
    {
      name: "Priya Verma",
      company: "HealthCare Plus",
      feedback:
        "Professional engineers with strong technical expertise and communication.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute right-[-120px] top-[500px] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute bottom-[-150px] left-[30%] h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 shadow-2xl backdrop-blur-xl">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white shadow-lg">
              T
            </div>

            <div>
              <h1 className="text-xl font-bold">
                TechNova
              </h1>

              <p className="text-xs text-gray-400">
                Software Solutions
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            <a href="#services" className="text-gray-300 transition hover:text-cyan-400">
              Services
            </a>

            <a href="#projects" className="text-gray-300 transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#about" className="text-gray-300 transition hover:text-cyan-400">
              About
            </a>

            <a href="#testimonials" className="text-gray-300 transition hover:text-cyan-400">
              Testimonials
            </a>

            <a href="#contact" className="text-gray-300 transition hover:text-cyan-400">
              Contact
            </a>
          </nav>

          {/* Button */}
          <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:shadow-cyan-500/40">
            Start Project
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-44">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">

          {/* Left */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              🚀 Trusted by startups worldwide
            </div>

            <h1 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl">
              We Build
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Modern Software
              </span>
              <br />
              For Growing Businesses
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-400">
              High-performance web platforms, mobile applications,
              AI systems, and scalable cloud solutions engineered
              for the future.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-2xl transition hover:scale-105">
                Get Started
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/10">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  150+
                </h3>

                <p className="mt-1 text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  50+
                </h3>

                <p className="mt-1 text-gray-400">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  99%
                </h3>

                <p className="mt-1 text-gray-400">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Active Projects
                  </p>

                  <h3 className="mt-2 text-4xl font-bold">
                    24
                  </h3>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-4 text-xl font-bold">
                  ⚡
                </div>
              </div>

              <div className="space-y-5">

                {["AI Automation Platform", "Enterprise Dashboard", "Cloud Infrastructure"].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="mb-3 flex items-center justify-between">

                      <h4 className="font-semibold">
                        {item}
                      </h4>

                      <span className="text-sm text-cyan-400">
                        Live
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-gray-800">

                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ${
                          index === 0
                            ? "w-[85%]"
                            : index === 1
                            ? "w-[70%]"
                            : "w-[92%]"
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">
            <p className="mb-4 text-cyan-400">
              OUR SERVICES
            </p>

            <h2 className="text-5xl font-bold">
              Smart Digital Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              We create scalable and high-performance applications
              designed for startups and enterprises.
            </p>
          </div>

         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

           {services.map((service, index) => (
             <div
               key={index}
               className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
               style={{
                 transformStyle: "preserve-3d",
               }}
             >

               {/* Glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

               {/* Floating Orb */}
               <div className="relative mb-8 flex h-24 w-24 items-center justify-center">

                 <div className="absolute h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl transition duration-500 group-hover:scale-125"></div>

                 <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl shadow-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                   {index === 0 && "🌐"}
                   {index === 1 && "📱"}
                   {index === 2 && "☁️"}
                   {index === 3 && "🤖"}

                 </div>
               </div>

               {/* Card Content */}
               <div className="relative z-10">

                 <h3 className="mb-4 text-2xl font-bold">
                   {service.title}
                 </h3>

                 <p className="leading-relaxed text-gray-400">
                   {service.desc}
                 </p>

                 {/* Bottom */}
                 <div className="mt-8 flex items-center justify-between">

                   <span className="text-cyan-400 transition duration-300 group-hover:translate-x-2">
                     Explore →
                   </span>

                   <div className="text-5xl font-black text-white/5">
                     0{index + 1}
                   </div>
                 </div>
               </div>

               {/* 3D Gradient Border */}
               <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20"></div>

             </div>
           ))}
         </div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">
            <p className="mb-4 text-cyan-400">
              OUR WORK
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Powerful enterprise-grade systems crafted for modern businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
              >

                <div className="h-60 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>

                <div className="p-8">

                  <h3 className="mb-3 text-2xl font-bold">
                    {project.name}
                  </h3>

                  <p className="text-gray-400">
                    {project.tech}
                  </p>

                  <button className="mt-6 text-cyan-400 transition hover:translate-x-2">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">

          <div>

            <p className="mb-4 text-cyan-400">
              WHY CHOOSE US
            </p>

            <h2 className="mb-8 text-5xl font-bold">
              Engineering Future-Ready Digital Products
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              We combine scalable architecture, modern technologies,
              and user-focused design to create impactful software experiences.
            </p>

            <div className="mt-12 space-y-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold">
                  Scalable Architecture
                </h3>

                <p className="mt-3 text-gray-400">
                  Built using modern cloud-native and microservice architectures.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold">
                  Agile Delivery
                </h3>

                <p className="mt-3 text-gray-400">
                  Faster iterations with transparency and continuous deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10 backdrop-blur-xl">

            <div className="grid grid-cols-2 gap-8">

              {[
                ["10+", "Years Experience"],
                ["80+", "Team Members"],
                ["150+", "Projects Delivered"],
                ["12", "Countries Served"],
              ].map(([num, label], index) => (
                <div key={index}>
                  <h3 className="text-5xl font-bold text-cyan-400">
                    {num}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="relative py-28"
      >

        {/* Glow */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-20 text-center">

            <p className="mb-4 text-cyan-400">
              OUR TEAM
            </p>

            <h2 className="text-5xl font-bold">
              Meet The Experts
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              A passionate team of engineers, designers, and innovators
              building scalable digital experiences.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                {/* Avatar */}
                <div className="relative mx-auto mb-6 h-32 w-32">

                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl"></div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative h-32 w-32 rounded-full border-4 border-white/10 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-cyan-400">
                    {member.role}
                  </p>

                  <p className="mt-5 text-sm leading-relaxed text-gray-400">
                    Passionate about creating modern software solutions
                    with scalable architecture and beautiful user experiences.
                  </p>

                  {/* Socials */}
                  <div className="mt-6 flex justify-center gap-3">

                    {["in", "gh", "tw"].map((social, idx) => (
                      <button
                        key={idx}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                      >
                        {social}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-20 text-center">

            <p className="mb-4 text-cyan-400">
              TESTIMONIALS
            </p>

            <h2 className="text-5xl font-bold">
              What Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <p className="text-lg leading-relaxed text-gray-300">
                  “{item.feedback}”
                </p>

                <div className="mt-8">

                  <h4 className="text-xl font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-gray-400">
                    {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-28"
      >
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-8 py-20 text-center backdrop-blur-xl">

          <h2 className="text-5xl font-bold">
            Ready to Build Your Next Product?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Let’s discuss your idea and create scalable software solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-2xl transition hover:scale-105">
              Contact Us
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Schedule Meeting
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     {/* Footer */}
     <footer className="relative border-t border-white/10 bg-black/20 py-20 backdrop-blur-xl">

       {/* Glow */}
       <div className="absolute left-0 top-0 h-64 w-64 bg-cyan-500/10 blur-3xl"></div>

       <div className="mx-auto max-w-7xl px-6">

         {/* Top Grid */}
         <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">

           {/* Brand */}
           <div className="lg:col-span-2">

             <div className="flex items-center gap-3">

               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white shadow-xl">
                 T
               </div>

               <div>
                 <h2 className="text-2xl font-bold">
                   TechNova Solutions
                 </h2>

                 <p className="text-sm text-gray-400">
                   Modern Software Company
                 </p>
               </div>
             </div>

             <p className="mt-6 max-w-md leading-relaxed text-gray-400">
               We build scalable web platforms, AI-powered systems,
               mobile applications, and enterprise cloud solutions
               for startups and growing businesses worldwide.
             </p>

             {/* Socials */}
             <div className="mt-8 flex gap-4">

               {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map((item, index) => (
                 <a
                   key={index}
                   href="#"
                   className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                 >
                   {item}
                 </a>
               ))}
             </div>
           </div>

           {/* Company */}
           <div>

             <h3 className="mb-6 text-lg font-semibold text-white">
               Company
             </h3>

             <div className="space-y-4 text-gray-400">

               <a href="#" className="block transition hover:text-cyan-400">
                 About Us
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 Careers
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 Blog
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 Contact
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 Partnership
               </a>
             </div>
           </div>

           {/* Services */}
           <div>

             <h3 className="mb-6 text-lg font-semibold text-white">
               Services
             </h3>

             <div className="space-y-4 text-gray-400">

               <a href="#" className="block transition hover:text-cyan-400">
                 Web Development
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 Mobile Apps
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 Cloud Solutions
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 AI Automation
               </a>

               <a href="#" className="block transition hover:text-cyan-400">
                 UI/UX Design
               </a>
             </div>
           </div>

           {/* Newsletter */}
           <div>

             <h3 className="mb-6 text-lg font-semibold text-white">
               Newsletter
             </h3>

             <p className="mb-5 text-sm leading-relaxed text-gray-400">
               Subscribe to receive product updates,
               technology insights, and company news.
             </p>

             <div className="space-y-4">

               <input
                 type="email"
                 placeholder="Enter your email"
                 className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl placeholder:text-gray-500 focus:border-cyan-400/40"
               />

               <button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 font-semibold text-white shadow-2xl transition hover:scale-[1.02]">
                 Subscribe
               </button>
             </div>
           </div>
         </div>

         {/* Divider */}
         <div className="my-12 h-px bg-white/10"></div>

         {/* Bottom */}
         <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

           <p className="text-sm text-gray-500">
             © 2026 TechNova Solutions. All rights reserved.
           </p>

           <div className="flex gap-8 text-sm text-gray-500">

             <a href="#" className="transition hover:text-cyan-400">
               Privacy Policy
             </a>

             <a href="#" className="transition hover:text-cyan-400">
               Terms of Service
             </a>

             <a href="#" className="transition hover:text-cyan-400">
               Cookies
             </a>
           </div>
         </div>
       </div>
     </footer>
    </div>
  );
}