import React from 'react'
import BlobSection from '@/components/BlobSection'
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-8 pb-12 relative min-h-[80vh]">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <BlobSection blobClass="h-[260px] w-[700px]">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight text-gray-900 uppercase tracking-wide text-center flex items-center justify-center gap-2">
            Hojta till – vi hörs längs vägen <span role="img" aria-label="bil och pratbubbla">🚗💬</span>
            <Image src="/bee.png" alt="Bee" width={36} height={36} style={{display:'inline',marginLeft:'8px'}} />
          </h1>
          <p className="text-gray-800 text-sm md:text-base font-normal text-center max-w-xl mx-auto mb-6">
            Har du en idé som vill ut på resan, en åker som längtar efter uppmärksamhet, eller bara en snabb fråga om hur allt funkar? Slå en signal, droppa ett mejl eller stick in huvudet förbi skyltdjungeln på Drottninggatan – kaffet står på.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-6 items-center md:items-start justify-center mb-6">
            <div className="bg-white/70 rounded-xl shadow p-4 inline-block text-left text-sm md:text-base min-w-[220px] max-w-xs">
              <div className="font-bold">Signly AB</div>
              <div>Drottninggatan 22<br />111 51 Stockholm</div>
              <div className="mt-2">Telefon <a href="tel:0733333333" className="underline hover:text-accent">0733-33 33 33</a></div>
              <div>E-post <a href="mailto:hej@signly.com" className="underline hover:text-accent">hej@signly.com</a></div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <iframe
                title="Signly kontor karta"
                src="https://www.google.com/maps?q=Drottninggatan+22,+Stockholm&output=embed"
                width="100%"
                height="260"
                className="rounded-2xl border border-sand-dark/30 shadow-md min-w-[250px] max-w-xl"
                style={{ minWidth: 250, border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </BlobSection>
      </div>
    </section>
  )
} 