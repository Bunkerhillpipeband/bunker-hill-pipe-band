"use client";

import { useState } from "react";

const ADMIN_EMAIL = "bunkerhillpipeband@gmail.com";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const galleryImages = [
    "/images/gallery-1.jpeg",
    "/images/gallery-2.jpeg",
    "/images/gallery-3.jpeg",
    "/images/gallery-4.jpeg",
    "/images/gallery-5.jpeg",
  ];

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loginEmail.toLowerCase() === ADMIN_EMAIL) {
      setLoginMessage(
        "Admin account recognized. Final secure authentication will be connected through Supabase before launch."
      );
      return;
    }

    setLoginMessage(
      "Access request received. The administrator must approve this account before member access is granted."
    );
  }

  return (
    <main className="min-h-screen bg-[#07172E] text-white font-sans">
      {showLogin && (
        <div className="fixed inset-0 bg-black/75 z-[100] flex items-center justify-center px-6">
          <div className="bg-[#091D3A] border border-yellow-700/30 rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl">×</button>
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-3">Members Only</p>
            <h2 className="text-3xl font-bold mb-3">Member Login</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">Members may request access. The administrator account is assigned to bunkerhillpipeband@gmail.com.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} placeholder="Email address" className="w-full bg-[#07172E] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" required />
              <input type="password" placeholder="Password" className="w-full bg-[#07172E] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" required />
              <button className="w-full bg-red-700 hover:bg-red-600 transition px-6 py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg">Login / Request Access</button>
            </form>
            {loginMessage && <div className="mt-5 bg-[#07172E] border border-yellow-700/30 rounded-2xl p-4 text-sm text-gray-200">{loginMessage}</div>}
          </div>
        </div>
      )}

      <header className="border-b border-yellow-700/30 bg-[#07172E]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo.jpeg" alt="Bunker Hill Pipe Band Logo" className="w-16 h-16 rounded-full border-2 border-yellow-500 bg-white object-cover" />
            <div>
              <h1 className="text-2xl font-bold tracking-wide text-yellow-400">BUNKER HILL PIPE BAND</h1>
              <p className="text-sm uppercase tracking-[3px] text-gray-300">Charlestown, Massachusetts</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
            <a href="#reviews" className="hover:text-yellow-400 transition">Reviews</a>
            <a href="#store" className="hover:text-yellow-400 transition">Store</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>
          <button onClick={() => setShowLogin(true)} className="bg-red-700 hover:bg-red-600 transition px-5 py-3 rounded-xl font-semibold text-sm uppercase tracking-wide shadow-lg">Member Login</button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpeg')" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-44 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-yellow-400 mb-4 text-sm">Est. 1975</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">Tradition.<br />Pride.<br /><span className="text-red-600">Performance.</span></h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-xl mb-8">The Bunker Hill Pipe Band of Charlestown, Massachusetts proudly preserves the tradition of Celtic music while performing at community events, memorials, ceremonies, parades, and private functions throughout New England.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-red-700 hover:bg-red-600 px-6 py-4 rounded-xl font-semibold uppercase tracking-wide shadow-lg transition">Book The Band</a>
              <a href="#about" className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-4 rounded-xl font-semibold uppercase tracking-wide transition">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F6F1E8] text-[#07172E] py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-yellow-700 text-sm mb-4">About Our Band</p>
            <h3 className="text-5xl font-bold leading-tight mb-8">Honoring Our Heritage.<br />Inspiring Our Future.</h3>
            <p className="text-lg leading-relaxed mb-6">Founded in Charlestown, the Bunker Hill Pipe Band proudly represents the tradition, discipline, and spirit of Celtic music. From memorial performances and community events to parades, ceremonies, and competitions, the band serves communities throughout Massachusetts and New England.</p>
            <p className="text-lg leading-relaxed mb-8">With a strong commitment to musicianship and community pride, we continue to preserve a timeless tradition for future generations.</p>
          </div>
          <img src="/images/about.jpeg" alt="Bunker Hill Pipe Band with community members" className="rounded-3xl shadow-2xl border-4 border-yellow-600 w-full h-[500px] object-cover" />
        </div>
      </section>

      <section className="py-24 px-6 bg-[#091D3A] border-y border-yellow-700/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">Members Area</p>
            <h3 className="text-5xl font-bold mb-8">Secure Member Portal</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">Members can securely access tunes, rehearsal documents, announcements, event calendars, and recordings through the private member portal.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Tune Repository", "Band Calendar", "Announcements", "Sheet Music PDFs", "Audio Recordings", "Member Documents"].map((item) => (
                <div key={item} className="bg-[#10284E] border border-yellow-700/20 rounded-2xl p-4"><p className="font-medium">{item}</p></div>
              ))}
            </div>
            <button onClick={() => setShowLogin(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-4 rounded-xl font-bold uppercase tracking-wide transition">Request Member Access</button>
          </div>
          <div className="bg-[#10284E] rounded-3xl border border-yellow-700/20 p-8 shadow-2xl space-y-5">
            <div className="bg-[#07172E] p-5 rounded-2xl"><p className="text-yellow-400 text-sm uppercase tracking-wide mb-2">Member Tools</p><h4 className="text-2xl font-bold">Tunes, Calendar & Documents</h4><p className="text-gray-400 mt-2">Admin-managed content for active members.</p></div>
            <div className="bg-[#07172E] p-5 rounded-2xl"><p className="text-yellow-400 text-sm uppercase tracking-wide mb-2">Administrator</p><h4 className="text-xl font-bold break-all">bunkerhillpipeband@gmail.com</h4></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-6 bg-[#07172E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div><p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">Photo Gallery</p><h3 className="text-5xl font-bold">Moments In Music</h3></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {galleryImages.map((image) => <img key={image} src={image} alt="Bunker Hill Pipe Band gallery" className="rounded-3xl h-80 w-full object-cover shadow-2xl border border-yellow-700/20 hover:scale-[1.02] transition duration-300" />)}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#F6F1E8] text-[#07172E] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-yellow-700 text-sm mb-4">Community Reviews</p>
          <h3 className="text-5xl font-bold mb-14">What People Are Saying</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {["The Bunker Hill Pipe Band brought incredible energy and professionalism to our event.", "A proud representation of Charlestown tradition and musicianship.", "Professional, polished, and deeply passionate about Celtic music."].map((quote, i) => (
              <div key={quote} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"><div className="text-red-600 mb-4 text-xl">★★★★★</div><p className="text-lg leading-relaxed mb-6 italic">“{quote}”</p><p className="font-bold">— Community Member</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="store" className="py-24 px-6 bg-[#07172E] border-y border-yellow-700/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">Band Store</p>
          <h3 className="text-5xl font-bold mb-6">Merchandise Coming Soon</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">The store will support band merchandise, donations, tickets, and future online purchases.</p>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-[#091D3A]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">Contact The Band</p>
            <h3 className="text-5xl font-bold mb-8">Book Us For Your Event</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">Available for weddings, memorials, parades, community events, ceremonies, and private performances throughout New England.</p>
            <div className="space-y-4 text-lg"><p>📍 Charlestown, Massachusetts</p><p>✉️ bunkerhillpipeband@gmail.com</p></div>
          </div>
          <form className="bg-[#10284E] p-8 rounded-3xl border border-yellow-700/20 shadow-2xl space-y-5">
            <input type="text" placeholder="Your Name" className="w-full bg-[#07172E] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
            <input type="email" placeholder="Your Email" className="w-full bg-[#07172E] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
            <textarea rows={5} placeholder="Tell us about your event" className="w-full bg-[#07172E] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
            <button className="w-full bg-red-700 hover:bg-red-600 transition px-6 py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg">Send Inquiry</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-yellow-700/20 bg-[#07172E] px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          <div><h4 className="text-3xl font-bold text-yellow-400 mb-3">Bunker Hill Pipe Band</h4><p className="text-gray-400 max-w-md leading-relaxed">Preserving tradition. Performing with pride. Representing Charlestown and Celtic music throughout New England.</p></div>
          <div className="grid grid-cols-2 gap-10 text-sm uppercase tracking-wide">
            <div className="space-y-3"><p className="text-yellow-400 font-bold">Quick Links</p><p>About</p><p>Gallery</p><p>Reviews</p><p>Store</p></div>
            <div className="space-y-3"><p className="text-yellow-400 font-bold">Members Area</p><p>Login</p><p>Request Access</p><p>Tune Repository</p><p>Calendar</p></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-yellow-700/20 text-gray-500 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Bunker Hill Pipe Band. All rights reserved.</p>
          <p>bunkerhillpipeband.com</p>
        </div>
      </footer>
    </main>
  );
}
