"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const billboard = {
  id: 2,
  title: 'Platsuppställning i Uppsala',
  views: 48000,
  size: '6,0 × 3,0 m',
  traffic: '48 000 fordon per dygn',
  price: 12000,
  priceUnit: 'vecka',
  images: ['/demo/2.jpg', '/demo/1.jpg', '/demo/3.jpg'],
  led: true,
  location: 'Uppsala',
  owner: {
    name: 'Anna Lindqvist',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    desc: 'Svarar oftast inom några timmar',
  },
  description: `En strategiskt placerad 6,0 × 3,0 m LED-skylt strax söder om rondellen vid Tycho Hedéns väg / Råbyleden, porten in till både Gränby centrum och Uppsala C. Här bromsar trafiken naturligt in till 40 km/h – perfekt för djupa, scroll-stoppande budskap.

Varje vardag sveper i snitt 48 000 fordon förbi: morgonpendlare från Stor-Stockholm, universitetsstudenter på el-cykel och shoppingströmmar till Gränby. Kvällstid fylls vägen av publik på väg till IFK Uppsalas matcher och konserter i Fyrishov, vilket ger en jämn trafikpuls från gryning till sen kväll.

Tack vare höjdläge ovanför cykelstråket fångar skylten även tusentals gående och cyklister som passerar mellan campus och centrum. Dubbla anslutningsskenor gör det möjligt att byta kreativet på under 15 minuter, medan den inbyggda ljussensorn automatiskt dimrar panelen nattetid för att undvika ljusspill mot närliggande bostäder.

Med 7 sekunders genomsnittlig blicktid och endast två konkurrerande ytor inom en kilometers radie blir budskapet både exklusivt och ihågkommet. Perfekt för varumärken som vill tala till Uppsala-publikens kombination av akademisk nyfikenhet, köpkraft och dynamisk livsstil – mitt i skärningspunkten mellan stad, campus och handelsnav.`
};

const fakeCalendar = [
  { day: 13, status: 'booked' },
  { day: 14, status: 'available' },
  { day: 15, status: 'available' },
  { day: 16, status: 'booked' },
  { day: 17, status: 'available' },
  { day: 18, status: 'booked' },
  { day: 19, status: 'available' },
  { day: 20, status: 'available' },
  { day: 21, status: 'booked' },
];

export default function BillboardUppsalaPage() {
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showAnna, setShowAnna] = useState(false);
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
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Main image and gallery */}
        <div className="flex-1 min-w-0">
          <Image
            src={billboard.images[0]}
            alt={billboard.title}
            width={800}
            height={500}
            className="rounded-2xl object-cover w-full h-[340px] md:h-[420px] mb-4 shadow"
            priority
          />
          <div className="flex gap-3 mb-4">
            {billboard.images.map((img) => (
              <Image
                key={img}
                src={img}
                alt={billboard.title + ' galleri'}
                width={120}
                height={80}
                className="rounded-xl object-cover w-28 h-20 border border-gray-200 hover:border-accent transition cursor-pointer"
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 flex gap-4 mb-2">
            <span>{billboard.views.toLocaleString('sv-SE')} visningar per vecka</span>
            <span>{billboard.size}</span>
            <span>{billboard.traffic}</span>
          </div>
        </div>
        {/* Right: Info panel */}
        <aside className="w-full md:w-[320px] flex flex-col gap-4">
          <div className="bg-sand-light rounded-2xl border border-sand-dark/30 shadow-sm p-6 flex flex-col gap-2">
            <div className="flex gap-2 mb-2">
              {billboard.led && <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-gray-700 border">LED</span>}
              <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-gray-700 border">{billboard.location}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{billboard.price.toLocaleString('sv-SE')} kr <span className="text-base font-medium text-gray-500">/ {billboard.priceUnit}</span></div>
            <button
              className="w-full py-2 mt-2 rounded-xl bg-sand-dark text-gray-900 font-semibold text-lg shadow-sm hover:bg-sand hover:scale-[1.02] hover:shadow-md focus:bg-sand-dark/80 focus:ring-2 focus:ring-sand-dark/40 transition-all duration-200 border border-sand-dark/40"
              onClick={() => setShowModal(true)}
            >
              BOKA NU
            </button>
          </div>
          <div className="bg-sand-light rounded-2xl border border-sand-dark/30 shadow-sm p-4">
            <div className="font-semibold mb-2">Tillgänglighet</div>
            <button className="flex items-center gap-2 text-accent hover:underline text-sm" onClick={() => setShowMap(true)}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M7 22l5-20 5 20" /></svg>
              Visa kartstig
            </button>
          </div>
          <div className="bg-sand-light rounded-2xl border border-sand-dark/30 shadow-sm p-4 flex items-center gap-4">
            <Image src={billboard.owner.avatar} alt={billboard.owner.name} width={48} height={48} className="rounded-full object-cover" />
            <div>
              <button className="font-semibold text-left text-accent hover:underline focus:outline-none" onClick={() => setShowAnna(true)}>{billboard.owner.name}</button>
              <div className="text-xs text-gray-500">{billboard.owner.desc}</div>
            </div>
          </div>
          <Link href="/contact" className="w-full py-2 rounded-xl border border-accent text-accent font-semibold shadow-sm hover:bg-sand-dark hover:text-gray-900 transition text-center">Skicka meddelande</Link>
        </aside>
      </div>
      {/* Description section */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-sand-light">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-4 text-gray-900">Beskrivning av &quot;{billboard.title}&quot;</h2>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {billboard.description}
          </p>
        </div>
      </div>
      {/* Modal for booking calendar */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[95vw] max-w-md relative animate-fadein">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Stäng"
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-900">Bokningskalender</h3>
            <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
              <span className="font-semibold">Mån</span>
              <span className="font-semibold">Tis</span>
              <span className="font-semibold">Ons</span>
              <span className="font-semibold">Tor</span>
              <span className="font-semibold">Fre</span>
              <span className="font-semibold">Lör</span>
              <span className="font-semibold">Sön</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 21 }).map((_, i) => {
                const day = i + 13;
                const status = fakeCalendar.find(d => d.day === day)?.status;
                return (
                  <span
                    key={day}
                    className={`rounded-lg px-0.5 py-1 font-semibold select-none
                      ${status === 'available' ? 'bg-green-100 text-green-700 border border-green-300' : ''}
                      ${status === 'booked' ? 'bg-red-100 text-red-700 border border-red-300 line-through' : ''}
                    `}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center font-bold">
              BESKRIVNING AV
            </div>
          </div>
        </div>
      )}
      {/* Modal for Google Maps */}
      {showMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-xl p-0 w-[95vw] max-w-2xl relative animate-fadein flex flex-col">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold z-10"
              onClick={() => setShowMap(false)}
              aria-label="Stäng"
            >
              ×
            </button>
            <div className="p-6 pb-2">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-gray-900">Karta: Tycho Hedéns väg 14, Uppsala</h3>
            </div>
            <iframe
              src="https://www.google.com/maps?q=Tycho+Hed%C3%A9ns+v%C3%A4g+14,+Uppsala&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '0 0 16px 16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karta Uppsala"
            ></iframe>
          </div>
        </div>
      )}
      {/* Modal for Anna Lindqvist */}
      {showAnna && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-2xl shadow-xl p-0 w-[95vw] max-w-md relative animate-fadein flex flex-col">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold z-10"
              onClick={() => setShowAnna(false)}
              aria-label="Stäng"
            >
              ×
            </button>
            <div className="flex flex-col items-center p-8 pb-6">
              <Image src={billboard.owner.avatar} alt={billboard.owner.name} width={72} height={72} className="rounded-full object-cover mb-4 shadow" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Anna Lindqvist</h3>
              <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed max-w-xs">
                <span className="font-semibold text-accent">Passion för skyltar, människor och magiska ögonblick.</span><br /><br />
                Anna är inte bara vår kontaktperson i Uppsala – hon är själva hjärtat bakom varje lyckad kampanj. Med ett öga för detaljer och en fingertoppskänsla för vad som verkligen berör, guidar hon både annonsörer och markägare genom hela processen – från första idé till färdig, lysande skylt.<br /><br />
                Hennes drivkraft? Att skapa möten mellan varumärken och verkliga människor, där varje budskap får chansen att bli en del av stadens puls. Anna tror på kraften i det limbiska systemet: känslor, minnen och intryck som fastnar – och hon vet exakt hur en välplacerad skylt kan väcka just den där känslan av &quot;det här vill jag vara en del av&quot;.<br /><br />
                När hon inte hjälper kunder att synas, hittar du henne ofta på cykel genom Uppsala, alltid med ett leende och nya idéer i bakfickan. Behöver du någon som lyssnar, inspirerar och levererar – då är Anna din person.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-6xl mx-auto mt-8">
        {/* Kalender och extra info kan läggas här */}
      </div>
    </section>
  );
} 