"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const billboard = {
  id: 1,
  title: 'Billboard vid E4, Morgån',
  views: 130000,
  size: '7,2 × 3,4 m',
  traffic: '30 000 fordon per dygn',
  price: 15000,
  priceUnit: 'vecka',
  images: ['/demo/1.jpg', '/demo/2.jpg', '/demo/3.jpg'],
  led: true,
  location: 'Veide',
  owner: {
    name: 'Erik Andersson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'Svarar oftast inom ett dygn',
  },
  description: `En majestätisk, fristående LED-skylt placerad precis i ytterkurvan av E4:an strax före avfarten Morgån – där hastigheten sänks och blickarna automatiskt söker sig framåt. Här passerar i snitt 30 000 fordon per dygn: morgonpendlare från Sundsvall, helgturister mot fjällen och långtradare som förser Norrlandskusten med varor.

Skyltens format 7,2 × 3,4 m ger rikligt utrymme för djärva budskap utan att bli överväldigande i det natursköna, tallklädda landskapet. Tack vare full­färgs-LED med automatisk ljussensor syns kampanjen kristallklart i både midvinter­gryning och högsommar­sol – samtidigt som energieffektiviteten håller driftskostnaden låg.

Placeringen erbjuder cirka 6 sekunders obruten exponering vid 90 km/h och är helt fri från konkurrerande skyltar inom 500 meter, vilket ger exklusiv uppmärksamhet. Tre­fas-ström och fjärrstyrd mediaplayer ingår; kreativet kan bytas på distans med 24 h varsel.

Kort sagt: en premiumyta som kombinerar hög räckvidd, lång visningstid och minimal visuellt brus – perfekt för varumärken som vill äga ögonblicket där skogen möter vägen.`
}

const fakeCalendar = [
  // 0 = söndag, 1 = måndag, ...
  { day: 13, status: 'booked' },
  { day: 14, status: 'available' },
  { day: 15, status: 'available' },
  { day: 16, status: 'booked' },
  { day: 17, status: 'available' },
  { day: 18, status: 'booked' },
  { day: 19, status: 'available' },
  { day: 20, status: 'available' },
  { day: 21, status: 'booked' },
]

export default function BillboardPage() {
  const [showModal, setShowModal] = useState(false)
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
            <button className="flex items-center gap-2 text-accent hover:underline text-sm">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M7 22l5-20 5 20" /></svg>
              Visa kartstig
            </button>
          </div>
          <div className="bg-sand-light rounded-2xl border border-sand-dark/30 shadow-sm p-4 flex items-center gap-4">
            <Image src={billboard.owner.avatar} alt={billboard.owner.name} width={48} height={48} className="rounded-full object-cover" />
            <div>
              <div className="font-semibold">{billboard.owner.name}</div>
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
                const day = i + 13
                const status = fakeCalendar.find(d => d.day === day)?.status
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
                )
              })}
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center font-bold">
              BESKRIVNING AV
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-6xl mx-auto mt-8">
        {/* Kalender och extra info kan läggas här */}
      </div>
    </section>
  )
} 