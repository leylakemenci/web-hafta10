import { Camera, Coffee, Code2, Mountain } from "lucide-react";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Kahve Demleme",
      description: "Farklı kahve çekirdeklerini (V60, Aeropress) deneyimlemek ve tadım notları çıkarmak.",
      icon: <Coffee className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Açık Kaynak Kod Okuma",
      description: "Büyük ölçekli React kütüphanelerinin kaynak kodlarını okuyup yeni tasarım desenleri keşfetmek.",
      icon: <Code2 className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Doğa Yürüyüşleri",
      description: "Hafta sonları teknolojiden uzaklaşıp uzun doğa yürüyüşlerine (trekking) çıkarak zihni sıfırlamak.",
      icon: <Mountain className="w-6 h-6 text-green-400" />
    },
    {
      title: "Mobil Fotoğrafçılık",
      description: "Gündelik anları, ışık ve simetriye odaklanarak telefon kameralarıyla yakalamayı seviyorum.",
      icon: <Camera className="w-6 h-6 text-pink-400" />
    }
  ];

  return (
    <section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ben Kimim? (Hobiler)</h2>
        <div className="w-20 h-1 bg-pink-500 rounded-full"></div>
        <p className="mt-4 text-gray-400 max-w-2xl">Kod yazmadığım zamanlarda beni bu aktivitelerle uğraşırken bulabilirsiniz.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col items-start hover:-translate-y-1 transition-transform">
            <div className="p-3 bg-gray-800 rounded-xl mb-4">
              {hobby.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{hobby.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
