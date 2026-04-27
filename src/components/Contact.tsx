import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800 p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Birlikte Çalışalım</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          Yeni projelere, iş fırsatlarına veya sadece teknoloji üzerine sohbet etmeye her zaman açığım. Bana ulaşmaktan çekinmeyin!
        </p>

        <a 
          href="mailto:ornek@email.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all mb-12"
        >
          <Mail className="w-5 h-5" />
          Mail Gönder
        </a>

        <div className="flex justify-center gap-6 border-t border-gray-800/50 pt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
