export default function Experience() {
  const experiences = [
    {
      role: "Yazılım Geliştirici Stajyeri",
      company: "Tech Corp",
      period: "Haziran 2023 - Eylül 2023",
      description: "React ve Node.js kullanarak kurumsal bir iç iletişim portalının geliştirilmesinde aktif rol aldım. API yanıt sürelerini %20 iyileştirdik."
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Çeşitli Müşteriler",
      period: "Ocak 2022 - Devam",
      description: "Yerel işletmeler için özel e-ticaret çözümleri ve yönetim panelleri (Next.js, Tailwind, Supabase) geliştirdim."
    },
    {
      role: "Açık Kaynak Katılımcısı",
      company: "GitHub Topluluğu",
      period: "Zaman Zaman",
      description: "Çeşitli open-source projelere hata düzeltmeleri ve yeni özellik (feature) PR'ları göndererek katkıda buluyorum."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Deneyim</h2>
        <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="md:grid md:grid-cols-4 md:gap-8">
              <div className="md:col-span-1 mb-2 md:mb-0 text-gray-400 font-mono text-sm pt-1">
                {exp.period}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-purple-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
