import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar'
import CategoryChips from './CategoryChips'

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-8 pb-2 relative">
      <div className="relative flex flex-col items-center w-full max-w-2xl">
        {/* Blob background */}
        <svg
          viewBox="0 0 400 200"
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-[420px] h-[220px] z-0"
          aria-hidden
        >
          <path
            fill="#f7f3ef"
            d="M60,40 Q100,10 200,30 Q300,50 340,100 Q380,150 300,180 Q220,210 120,180 Q20,150 60,100 Q100,50 60,40 Z"
            opacity="0.95"
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center px-8 py-8 w-full">
          <Image src="/billboardbeelogo.png" alt="Billboard Bee logo" width={240} height={240} className="mb-6 opacity-90" />
          <h1 className="text-xl md:text-2xl font-extrabold mb-0 leading-tight text-gray-900 uppercase tracking-wide whitespace-nowrap">NÄR MARKEN FÅR TALA, LYSSNAR HELA LANDET.</h1>
          <p className="text-sm md:text-base text-gray-700 font-normal max-w-3xl mt-2">
            Från vägkanten i Västergötland till fjällsluttningen i Jämtland förvandlar vi stilla ytor till levande berättelser – och låter vinsten stanna där den hör hemma. Klicka, filtrera, hitta din plats. Resten är bara resan från jord till{' '}
            <span className="whitespace-nowrap">ögonblick.</span>
          </p>
          <SearchBar />
          <CategoryChips />
        </div>
      </div>
    </section>
  )
} 