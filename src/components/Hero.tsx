import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open to work
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Merhaba, Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Leyla</span>.
          <br className="hidden md:block" /> Yazılım Geliştirici.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Modern web teknolojileri ile ölçeklenebilir, performanslı ve kullanıcı odaklı dijital deneyimler tasarlıyor ve geliştiriyorum.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Benimle İletişime Geç
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gray-900 border border-gray-800 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            Projelerimi İncele
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-16 text-gray-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:ornek@email.com" className="hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
