export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto bg-gray-950/30 rounded-3xl mb-12">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Eğitim</h2>
        <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white md:mb-2">Bülent Ecevit Üniversitesi</h3>
              <h4 className="text-yellow-400 text-lg">Bilgisayar Mühendisliği</h4>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <div className="inline-block px-4 py-2 bg-gray-800 rounded-lg font-mono text-white text-sm">
                GPA: <span className="text-yellow-400 font-bold">3.20</span>/4.00
              </div>
              <p className="text-gray-400 text-sm mt-2">2020 - 2024</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-6">
            <h5 className="text-gray-400 mb-4 font-medium">Önemli Dersler:</h5>
            <div className="flex flex-wrap gap-2">
              {["Veri Yapıları & Algoritmalar", "Veritabanı Yönetim Sistemleri", "Yapay Zeka", "Web Teknolojileri", "İşletim Sistemleri", "Yazılım Mühendisliği"].map((course, i) => (
                <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
