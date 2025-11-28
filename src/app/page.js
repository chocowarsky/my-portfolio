"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MobileNavbar from "../components/MobileNavbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projectData = {
  starfield: {
    title: "Starfield Fanbase Portal",
    category: "HTML & CSS",
    description: "Platform komunitas interaktif untuk game RPG Bethesda.",
    heroTitle: "Starfield Portal",
    heroSubtitle: "Fanbase community platform & immersive hub.",
    challengeText: "Tantangan utama adalah menciptakan atmosfer luar angkasa 'NASA-punk' yang otentik hanya dengan menggunakan CSS murni, tanpa bantuan framework UI berat, sambil menjaga performa tetap ringan.",
    solutionText: "Menerapkan struktur HTML semantik dan CSS Flexbox untuk menciptakan layout adaptif yang rapi. Fokus visual diarahkan pada estetika 'NASA-Punk' (fungsional & minimalis) untuk menjaga hierarki informasi yang jelas dan performa web yang ringan.",
    featureTitle: "Immersive Experience",
    featureSubtitle: "Deep dive into the universe.",
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const projectFadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex bg-black text-white overflow-hidden font-sans">

      {/* --- NAVIGATION SYSTEMS --- */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={(section) => {
          setActiveSection(section);
          setSelectedProject(null);
        }}
      />

      <MobileNavbar
        activeSection={activeSection}
        setActiveSection={(section) => {
          setActiveSection(section);
          setSelectedProject(null);
        }}
      />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex items-center justify-center p-6 pb-28 lg:p-8 lg:pr-32 min-h-screen w-full relative">

        <AnimatePresence mode="wait">

          {/* --- HOME SECTION --- */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              // PERBAIKAN: Tambah 'text-center' untuk HP dan 'lg:text-left' untuk Desktop
              className="max-w-4xl absolute w-full text-center lg:text-left px-4 lg:px-0"
            >
              <h1 className="font-serif text-5xl lg:text-8xl font-medium mb-6 text-white leading-tight">
                Bagus Wijaya
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
                Future AI & Business Strategist. Menggabungkan skill teknis software engineering dengan insting bisnis dan automasi AI.
              </p>

              {/* PERBAIKAN: Center alignment untuk tombol di HP */}
              <div className="flex gap-6 text-sm font-bold tracking-widest uppercase text-white justify-center lg:justify-start">
                 <a href="https://github.com/chocowarsky" target="_blank" className="border-b border-white/20 pb-1 cursor-pointer hover:border-white">GitHub</a>
                 <a href="https://www.linkedin.com/in/bagussuhita/" target="_blank" className="border-b border-white/20 pb-1 cursor-pointer hover:border-white">LinkedIn</a>
              </div>
            </motion.div>
          )}

          {/* --- PROJECTS SECTION --- */}
          {activeSection === "projects" && (
            // PERBAIKAN: Tambah 'px-4' agar card tidak nempel pinggir layar HP
            <div className="max-w-5xl w-full absolute h-[85vh] overflow-y-auto pr-2 lg:pr-4 scrollbar-hide pb-20 px-4 lg:px-0">

              <AnimatePresence mode="wait">

                {/* === LIST PROYEK === */}
                {selectedProject === null && (
                  <motion.div
                    key="project-list"
                    variants={projectFadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <h2 className="font-serif text-4xl lg:text-5xl mb-8 lg:mb-12 sticky top-0 bg-black pb-4 z-10 text-center lg:text-left">Selected Projects</h2>
                    <div className="grid grid-cols-1 gap-6">

                      {/* Project 1: Starfield */}
                      <div
                        onClick={() => setSelectedProject("starfield")}
                        className="border border-gray-800 p-6 lg:p-8 hover:bg-gray-900 transition cursor-pointer group rounded-lg"
                      >
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
                          <h3 className="text-2xl lg:text-3xl font-serif mb-2 group-hover:underline decoration-1 underline-offset-4">
                            {projectData.starfield.title}
                          </h3>
                          <span className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-400 whitespace-nowrap">
                             {projectData.starfield.category}
                          </span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed text-sm lg:text-base">
                           {projectData.starfield.description}
                        </p>
                      </div>

                      {/* Project 2: AI Workflow */}
                      <div className="border border-gray-800 p-6 lg:p-8 hover:bg-gray-900 transition cursor-pointer group rounded-lg opacity-50">
                         <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
                          <h3 className="text-2xl lg:text-3xl font-serif mb-2">AI Content Automation</h3>
                          <span className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-400">LLM & Prompt Engineering</span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed text-sm lg:text-base">
                          (Project Detail Coming Soon)
                        </p>
                      </div>

                       {/* Project 3: Robotics */}
                       <div className="border border-gray-800 p-6 lg:p-8 hover:bg-gray-900 transition cursor-pointer group rounded-lg opacity-50">
                         <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
                          <h3 className="text-2xl lg:text-3xl font-serif mb-2">Line Follower Robot</h3>
                          <span className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-400">Robotics & IoT</span>
                        </div>
                         <p className="text-gray-400 mt-4 leading-relaxed text-sm lg:text-base">
                          (Project Detail Coming Soon)
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* === DETAIL PROYEK === */}
                {selectedProject === "starfield" && (
                  <motion.div
                    key="project-detail-starfield"
                    variants={projectFadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="pb-20"
                  >
                    <button
                      onClick={handleBackToProjects}
                      className="mb-8 text-sm text-gray-400 hover:text-white transition flex items-center gap-2 group cursor-pointer sticky top-0 bg-black/80 backdrop-blur py-2 w-full z-20"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
                    </button>

                    <h1 className="font-serif text-4xl lg:text-8xl font-bold mb-6 leading-tight text-center lg:text-left">
                      {projectData.starfield.heroTitle}
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-12 text-center lg:text-left mx-auto lg:mx-0">
                       {projectData.starfield.heroSubtitle}
                    </p>

                    <div className="relative w-full h-[250px] lg:h-[500px] mb-12 lg:mb-20 rounded-xl overflow-hidden group">
                      <Image
                        src="/projects/hero.jpg"
                        alt="Starfield Hero"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
                      <div>
                        <h3 className="font-serif text-2xl lg:text-3xl mb-4 lg:mb-6">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                          {projectData.starfield.challengeText}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl lg:text-3xl mb-4 lg:mb-6">The Solution</h3>
                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                           {projectData.starfield.solutionText}
                        </p>
                      </div>
                    </div>

                    <div className="text-center mb-8 lg:mb-12">
                       <h3 className="font-serif text-3xl lg:text-5xl mb-4 lg:mb-6">
                         {projectData.starfield.featureTitle}
                       </h3>
                       <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
                         {projectData.starfield.featureSubtitle}
                       </p>
                    </div>

                    <div className="relative w-full h-[300px] lg:h-[600px] rounded-xl overflow-hidden border border-gray-800">
                       <Image
                        src="/projects/feature.jpg"
                        alt="Starfield Feature"
                        fill
                        className="object-cover"
                      />
                    </div>

                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          )}

          {/* --- EXPERIENCE SECTION --- */}
          {activeSection === "experience" && (
            // PERBAIKAN: Tambah 'px-4' agar list tidak nempel pinggir
            <motion.div
              key="experience"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="max-w-3xl w-full absolute h-[85vh] overflow-y-auto pr-2 lg:pr-4 scrollbar-hide pb-20 px-4 lg:px-0"
            >
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 lg:mb-12 sticky top-0 bg-black pb-4 z-10 text-center lg:text-left">Experience</h2>
              <div className="border-l border-gray-800 ml-2 lg:ml-4 space-y-12 lg:space-y-16 pb-20">

                {/* Item 1: Robotics */}
                <div className="relative pl-8 lg:pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest">2024 - Present</span>
                  <h3 className="text-xl lg:text-2xl font-serif mt-1 text-white">GRED Robotics Team</h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-mono mt-1">Line Follower Division</p>
                  <p className="text-gray-400 mt-2 lg:mt-4 leading-relaxed text-sm lg:text-base">
                    Memilih divisi Line Follower berdasarkan analisis data kompetisi untuk memaksimalkan peluang prestasi (High ROI Strategy). Menguasai logika navigasi robot Ichibot Ultimate 5 Max (PID Algorithm & Calibration).
                  </p>
                </div>

                {/* Item 2: SMK */}
                <div className="relative pl-8 lg:pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest">2024 - Present</span>
                  <h3 className="text-xl lg:text-2xl font-serif mt-1 text-white">SMK TI Bali Global Denpasar</h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-mono mt-1">Software Engineering (RPL)</p>
                  <p className="text-gray-400 mt-2 lg:mt-4 leading-relaxed text-sm lg:text-base">
                    Fokus mendalami Rekayasa Perangkat Lunak, logika pemrograman, dan pengembangan sistem.
                  </p>
                </div>

                {/* Item 3: AI Service */}
                <div className="relative pl-8 lg:pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest">2024</span>
                  <h3 className="text-xl lg:text-2xl font-serif mt-1 text-white">AI-Assisted Academic Service</h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-mono mt-1">Founder & Operator</p>
                  <p className="text-gray-400 mt-2 lg:mt-4 leading-relaxed text-sm lg:text-base">
                    Memanfaatkan tools AI untuk mempercepat pengerjaan 30+ makalah akademis secara efisien dalam waktu singkat (<i>High Volume Production</i>). Menerapkan strategi parafrase dan variasi materi (<i>content randomization</i>).
                  </p>
                </div>

                {/* Item 4: Gaming */}
                <div className="relative pl-8 lg:pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest">2022</span>
                  <h3 className="text-xl lg:text-2xl font-serif mt-1 text-white">Niche Gaming Commerce</h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-mono mt-1">Micro-Business Owner</p>
                  <p className="text-gray-400 mt-2 lg:mt-4 leading-relaxed text-sm lg:text-base">
                    Mengidentifikasi <i>pain point</i> pasar spesifik (masalah gesekan layar bagi gamer) dan mengeksekusi penjualan sarung jempol dengan tingkat konversi tinggi.
                  </p>
                </div>

                {/* Item 5: Cash */}
                <div className="relative pl-8 lg:pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest">2022</span>
                  <h3 className="text-xl lg:text-2xl font-serif mt-1 text-white">Cash Exchange Venture</h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-mono mt-1">Micro-Business Owner</p>
                  <p className="text-gray-400 mt-2 lg:mt-4 leading-relaxed text-sm lg:text-base">
                    Mengkapitalisasi momentum peluncuran uang emisi baru untuk mendapatkan profit margin langsung (<i>Markup Pricing</i>).
                  </p>
                </div>

              </div>
            </motion.div>
          )}

          {/* --- CONTACT SECTION --- */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="max-w-2xl w-full text-center absolute px-4 lg:px-0"
            >
              <h2 className="font-serif text-4xl lg:text-5xl mb-6 lg:mb-8">Get in Touch</h2>
              <p className="text-gray-400 mb-8 text-lg lg:text-xl px-4">
                Siap belajar dan berkontribusi. Tertarik diskusi tentang AI, Web Dev, atau Gaming Industry?
              </p>
              <a href="mailto:bagus27wijaya@gmail.com" className="bg-white text-black px-8 py-4 rounded font-bold hover:bg-gray-200 transition inline-block">
                Email Saya
              </a>
            </motion.div>
          )}

        </AnimatePresence>

      </main>
    </div>
  );
}
