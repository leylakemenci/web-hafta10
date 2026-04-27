import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Finansal Analiz Platformu",
      description: "Büyük veri setlerini işleyerek kurumsal müşteriler için gerçek zamanlı finansal içgörüler sunan SaaS platformu. Gecikmeyi %40 azalttım.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "E-Ticaret Mikroservis Mimarisi",
      description: "Monolitik yapıyı mikroservislere bölerek sistem dayanıklılığını artırdığım e-ticaret altyapısı. Yoğun trafikli dönemlerde %99.99 uptime sağlandı.",
      tags: ["Node.js", "Docker", "RabbitMQ", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Kişisel Blog Motoru",
      description: "Markdown tabanlı, SEO uyumlu ve Lighthouse skorları 100 olan statik blog oluşturucu. İçerik yönetimini basitleştirmek için tasarlandı.",
      tags: ["Astro", "Tailwind CSS", "MDX", "Vercel"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Öne Çıkan Projeler</h2>
        <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors group">
            <div className="h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="text-gray-500 font-mono text-sm">Proje Görseli</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <FaGithub className="w-4 h-4" /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
