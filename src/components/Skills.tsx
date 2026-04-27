export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Astro", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful API", "GraphQL"]
    },
    {
      title: "DevOps & Araçlar",
      skills: ["Docker", "Git / GitHub Actions", "Linux", "Fly.io", "Coolify", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto bg-gray-950/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Yetkinlikler</h2>
        <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
        <p className="mt-4 text-gray-400 max-w-2xl">Gerçek dünya projelerinde kullandığım, sürekli geliştirmeye devam ettiğim teknolojiler ve araçlar.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium border border-gray-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
