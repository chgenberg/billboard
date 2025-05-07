"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  { q: "Hur lång tid tar det från bokning till att min kampanj syns?", a: "Vanligtvis 3–7 arbetsdagar beroende på om du laddar upp färdigt material eller beställer designhjälp via oss." },
  { q: "Vad kostar det att lägga upp min mark på plattformen?", a: "Det är helt kostnadsfritt. Du betalar inga abonnemangsavgifter – vi tar provision först när skylten hyrs ut." },
  { q: "Behöver jag som markägare söka bygglov själv?", a: "Nej. Vårt juridik-team hanterar bygglov och Trafikverkets tillstånd från start till mål." },
  { q: "Vilka format stöder LED-skärmarna?", a: "PNG, JPEG och MP4 (högst 15 sek, 1080 × 576 px eller proportion 16:9)." },
  { q: "Kan jag ändra mitt kreativa budskap under pågående hyresperiod?", a: "Ja, LED-skyltar kan uppdateras kostnadsfritt upp till en gång per vecka. Tryckta dukar kräver nytt print & montage." },
  { q: "Hur ofta får jag som markägare betalt?", a: "Utbetalning sker automatiskt den 1:a varje månad för föregående månads bokningar." },
  { q: "Finns det någon bindningstid för annonsörer?", a: "Minsta bokningsperiod är en vecka. Därefter väljer du fritt vecka-till-vecka eller ett längre block." },
  { q: "Vad händer om skylten går sönder?", a: "Vi har 24 h service-SLA. Driftstopp som överstiger 12 h ersätts proportionerligt i hyran." },
  { q: "Är elförbrukningen inkluderad i priset?", a: "Ja. Alla priser är 'all-inclusive' – el, drift, underhåll och försäkring ingår." },
  { q: "Kan jag se statistik över visningar i realtid?", a: "LED-platser har en dashboard med trafikräknare & exponeringar. Tryckta skyltar visar uppskattade räckvidds­tal." },
  { q: "Hur säger jag upp min skyltplats som markägare?", a: "Skicka ett mejl 30 dagar innan nästa hyresperiod börjar så avslutar vi utan kostnad." },
  { q: "Vilka områden har störst efterfrågan just nu?", a: "Storstadsinfarter (E4/E6/E18), handelscentra och turiststråk längs E45 under sommaren." },
  { q: "Kan jag boka flera skyltar i ett enda köp?", a: "Absolut. Lägg skyltarna i 'kampanjkorgen' och betala dem gemensamt; du får volymrabatt efter tre ytor." },
  { q: "Accepterar ni politisk reklam?", a: "Ja, men alla politiska budskap granskas manuellt och måste följa Myndigheten för Press, Radio och TV:s regler." },
  { q: "Hur stor provision tar Signly av markhyran?", a: "20 % på nettobeloppet. Resterande 80 % betalas direkt till markägaren." },
  { q: "Är skyltarna klimatkompenserade?", a: "För LED täcks elen till 100 % med ursprungsmärkt vattenkraft. Tryckta dukar klimat­kompenseras via Plan Vivo." },
  { q: "Vad krävs för att min mark ska godkännas?", a: "Minst 30 m till korsningar, fri sikt i 100 m, stabilt underlag för fundament och tillgång till 230 V eller 400 V el." },
  { q: "Vilka betalningssätt accepteras?", a: "Kort (Visa/Mastercard), faktura (30 dagar) och direkt­betalning via Swish Företag." },
  { q: "Kan jag avboka som annonsör om planerna ändras?", a: "Ja, kostnadsfri avbokning fram till 14 dagar före start. Därefter 50 % debitering." },
  { q: "Erbjuder ni hjälp med design?", a: "Ja, vårt kreatörsteam tar fram statiska eller animerade motiv inom 48 h till fast paketpris." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
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
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-2 text-gray-900 text-center flex items-center justify-center gap-2">HAR DU FRÅGOR PÅ TUNGAN?
          <Image src="/bee.png" alt="Bee" width={36} height={36} style={{display:'inline',marginLeft:'8px'}} />
        </h2>
        <p className="text-sm md:text-base text-gray-700 text-center mb-8 max-w-2xl leading-relaxed">
          Vi vet – när idéer ska upp i storformat kan det dyka upp både vardagsfunderingar och små nippriga detaljer. Därför har vi samlat de vanligaste frågorna och svaren här nedanför. Ta en stund, scrolla igenom – kanske hittar du precis det du undrar över.<br /><br />
          Fortsätter frågetecknet att blinka? Släng i väg ett mejl till <a href="mailto:hello@signly.com" className="underline text-accent hover:text-accent-dark">hello@signly.com</a> så återkommer vi snabbare än nästa spårvagn lämnar hållplatsen.
        </p>
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6 text-gray-900 text-center">Vanliga frågor & svar (FAQ)</h1>
        <div className="w-full flex flex-col gap-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white/80 rounded-2xl shadow-sm border border-sand-light p-0 overflow-hidden transition-all">
              <button
                className="w-full text-left px-6 py-3 text-sm md:text-base font-semibold text-gray-900 flex justify-between items-center focus:outline-none focus:bg-sand-light hover:bg-sand-light transition group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={`ml-4 transition-transform ${open === i ? 'rotate-90' : ''}`}>▶</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 pt-1 text-xs md:text-sm text-gray-700 animate-fadein">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 