import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const demoBillboards = [
  { src: '/demo/1.jpg', desc: 'BILLBOARD', place: 'E4, MORGÅN', link: '/billboard/1' },
  { src: '/demo/2.jpg', desc: 'PLATSUPPSTÄLLNING', place: 'UPPSALA', link: '/billboard/uppsala' },
  { src: '/demo/3.jpg', desc: 'INNERSTAD', place: 'NORRKÖPING', link: '/billboard/norrkoping' },
  { src: '/demo/4.jpg', desc: 'ARENA', place: 'KINNARPS, JÖNKÖPING' },
  { src: '/demo/5.jpg', desc: 'HÅLLPLATS', place: 'GÖTEBORG' },
  { src: '/demo/6.jpg', desc: 'KONSERTHUS', place: 'STOCKHOLM' },
  { src: '/demo/7.jpg', desc: 'BUTIK', place: 'LINKÖPING' },
  { src: '/demo/8.jpg', desc: 'MOTORVÄG', place: 'E6, GÖTEBORG' },
]

export default function BillboardGrid() {
  return (
    <section className="max-w-5xl mx-auto pt-2 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {demoBillboards.map((b, i) => (
          b.link ? (
            <Link href={b.link} key={i} className="rounded-2xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-[1.04] hover:shadow-2xl cursor-pointer border border-gray-100 group block">
              <Image
                src={b.src}
                alt={b.desc + ' ' + b.place}
                width={400}
                height={400}
                className="w-full h-64 object-cover group-hover:opacity-95 transition-opacity"
                priority={i < 2}
              />
              <div className="p-3 text-sm text-center font-semibold text-gray-900">
                <div>{b.desc}</div>
                <div className="text-xs text-gray-600 font-normal">{b.place}</div>
              </div>
            </Link>
          ) : (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-[1.04] hover:shadow-2xl cursor-pointer border border-gray-100 group"
            >
              <Image
                src={b.src}
                alt={b.desc + ' ' + b.place}
                width={400}
                height={400}
                className="w-full h-64 object-cover group-hover:opacity-95 transition-opacity"
                priority={i < 2}
              />
              <div className="p-3 text-sm text-center font-semibold text-gray-900">
                <div>{b.desc}</div>
                <div className="text-xs text-gray-600 font-normal">{b.place}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  )
} 