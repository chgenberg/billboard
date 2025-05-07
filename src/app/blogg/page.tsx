"use client";

import Image from "next/image";

const posts = [
  {
    img: "/blogg/blogg1.png",
    title: "Så mäter du ROI på en fysisk billboard – den ultimata guiden",
    desc: "Vi går igenom nyckeltal, gratis verktyg och hur du kopplar trafik på vägen till faktiska köp online. Efter denna checklista vet marknadschefen exakt vad varje krona på skylten levererar."
  },
  {
    img: "/blogg/blogg2.png",
    title: "Från åker till extra­knäck: Anders i Jämtland ökade gårdens intäkter med 120 000 kr",
    desc: "En case-studie som följer en lantbrukare som satte upp LED-skylt och nu finansierar ny växthusinvestering – steg för steg, siffror och lärdomar."
  },
  {
    img: "/blogg/blogg3.png",
    title: "LED vs. tryckt duk 2025 – miljö, pris och effekt i praktiken",
    desc: "Objek­tiva labbtester och verkliga exempel visar energiförbrukning, CO₂-avtryck och upplevd varumärkeseffekt så att du kan välja rätt teknik för kampanjen."
  },
  {
    img: "/blogg/blogg4.png",
    title: "3 trafikdata-insikter annonsörer ofta missar när de bokar skyltplats",
    desc: "Vi bryter ned fordonstyper, rusningstidsfönster och 'dwell time' som gör att en medelstor plats kan slå ett motor­vägsmonster – om man vet vad man letar efter."
  },
  {
    img: "/blogg/blogg5.png",
    title: "Så designar AI nästa generations utomhus­reklam – intervjuer & framtidsspaning",
    desc: "Kreatörer och utvecklare berättar hur generativa modeller gör budskapen hyperlokala, datadrivna och rörliga – och vad det betyder för både mark­ägare och varumärken."
  },
];

export default function BloggPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-8 pb-12 min-h-[80vh] bg-white relative">
      {/* Blob background */}
      <svg
        viewBox="0 0 400 200"
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 w-[900px] h-[400px] z-0 opacity-90 pointer-events-none select-none"
        aria-hidden
      >
        <path
          fill="#f7f3ef"
          d="M60,40 Q100,10 200,30 Q300,50 340,100 Q380,150 300,180 Q220,210 120,180 Q20,150 60,100 Q100,50 60,40 Z"
          opacity="0.95"
        />
      </svg>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-2 text-gray-900 text-center">Blogg</h1>
        <p className="text-sm md:text-base text-gray-700 text-center mb-8 max-w-2xl leading-relaxed">
          Inspiration, guider och verkliga berättelser om utomhusreklam, markägande och digitala möjligheter.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow-md border border-sand-light flex flex-col overflow-hidden hover:shadow-xl transition group">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1 leading-tight">{post.title}</h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 