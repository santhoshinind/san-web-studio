// Production deployment trigger
"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
<header className="flex items-center justify-between px-12 py-8 border-b">

        <div className="flex items-center gap-3">
          <img src="/sws logo.png" alt="San Web Studio Logo" className="h-24" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-teal-700">
              SAN WEB STUDIO
            </span>
            <span className="text-sm text-gray-600">
              Innovative. Responsive. User-Friendly.
            </span>
          </div>
        </div>

<nav className="hidden md:flex items-center gap-10 text-gray-700 text-base font-medium">
  <a href="#home" className="hover:text-teal-700 transition">Home</a>
  <a href="#about" className="hover:text-teal-700 transition">About</a>
  <a href="#projects" className="hover:text-teal-700 transition">Projects</a>
  <a href="#contact" className="hover:text-teal-700 transition">Contact</a>
</nav>

      </header>

      {/* Hero Section */}
<section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 py-20 items-center">



        {/* Left Content */}
        <div>
<h1 className="text-4xl lg:text-5xl font-bold text-teal-800 leading-tight">
  Modern Websites Powered by <br />
  Smart Automation
</h1>

<p className="mt-6 max-w-xl text-lg text-gray-600">
  Freelance web designer creating clean websites and intelligent automation for modern brands.
</p>
<div className="mt-8">
  <a
    href="mailto:san@sanwebstudio.com"
    className="inline-block rounded-md bg-teal-700 px-8 py-3 text-white font-medium hover:bg-teal-800 transition"
  >
    Contact Me
  </a>
</div>

          <div className="w-24 h-1 bg-teal-700 mt-6 mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-700 text-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">
                Website Design
              </h3>
              <p className="text-sm leading-relaxed">
                We design clean, modern, and responsive websites that help
                businesses build a strong online presence.
              </p>
            </div>

            <div className="bg-teal-700 text-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">
                AI Automation
              </h3>
              <p className="text-sm leading-relaxed">
                AI-powered automation workflows to streamline processes,
                improve productivity, and save valuable time.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
            alt="Office workspace"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

      </section>
{/* About Section */}
<section id="about" className="fade-up bg-zinc-50 px-10 py-20">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">

      About Me
    </h2>

    <div className="w-20 h-1 bg-teal-700 mb-8"></div>

    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I’m a freelance web designer focused on creating clean, responsive, and user-friendly
      websites that help businesses grow online.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I have completed the <strong>AI Accelerator Programme through Be10X</strong>, which
      enables me to design not just websites, but also smart automation workflows that
      improve efficiency and save valuable time for businesses.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed">
      I enjoy working with startups, small businesses, and individuals who are looking for
      modern digital solutions with a strong focus on performance and usability.
    </p>

  </div>
</section>
{/* Projects Section */}
<section id="projects" className="px-10 py-20 bg-white">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">

      Projects
    </h2>

    <div className="w-20 h-1 bg-teal-700 mb-12"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Project 1 */}
      <div> className="fade-up border rounded-lg p-6 shadow-sm hover:shadow-md transition"
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Tana Fashions
        </h3>
        <span className="inline-block mb-4 text-sm text-teal-700 font-medium">
          Completed Project
        </span>
        <p className="text-gray-600 leading-relaxed">
          A modern fashion website designed with a clean layout and responsive
          design to showcase products and strengthen online presence.
        </p>
      </div>

      {/* Project 2 */}
      {/* Project 2 */}
<div className="fade-up border rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    CateresIndia
  </h3>

  <span className="inline-block mb-4 text-sm text-orange-600 font-medium">
    Upcoming Project
  </span>

  <p className="text-gray-600 leading-relaxed">
    An upcoming website project focused on delivering a smooth user
    experience with a modern and professional design.
  </p>
</div>


    </div>

    {/* Footer note */}
    <p className="mt-10 text-center text-gray-500">
      And many more projects coming soon...
    </p>

  </div>
</section>
{/* Contact Section */}
<section className="fade-up bg-zinc-50 px-10 py-20" id="contact">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">

      Contact Me
    </h2>

    <div className="w-20 h-1 bg-teal-700 mx-auto mb-8"></div>

    <p className="text-lg text-gray-700 mb-10">
      Have a project in mind or need help with web design or automation?
      Feel free to reach out — I’d be happy to discuss your ideas.
    </p>

    <div className="flex flex-col items-center gap-6 text-lg">

      {/* Email */}
      <a
        href="mailto:san@sanwebstudio.com"
        className="text-teal-700 font-medium hover:underline"
      >
        📧 san@sanwebstudio.com
      </a>

      {/* Phone */}
      <a
        href="tel:9533233963"
        className="text-teal-700 font-medium hover:underline"
      >
        📞 +91 95332 33963
      </a>

    </div>

  </div>
</section>
{/* Footer */}
<footer className="bg-teal-800 text-white px-10 py-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left */}
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold">SAN WEB STUDIO</h3>
      <p className="text-sm text-teal-100 mt-1">
        Innovative. Responsive. User-Friendly.
      </p>
    </div>

    {/* Center */}
    <div className="text-center text-sm text-teal-100">
      <p>
        📧 san@sanwebstudio.com
      </p>
      <p>
        📞 9533233963
      </p>
    </div>

    {/* Right */}
    <div className="text-sm text-teal-200 text-center md:text-right">
      © {new Date().getFullYear()} San Web Studio. <br />
      All rights reserved.
    </div>

  </div>
</footer>

    </main>
  );
}
