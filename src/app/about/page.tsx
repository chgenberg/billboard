import React from 'react'
import Image from 'next/image'
import BlobSection from '@/components/BlobSection'

export default function AboutPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-8 pb-12 relative min-h-[80vh]">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Header blob */}
        <BlobSection className="mb-0" blobClass="h-[260px] w-[600px]" >
          <Image src="/billboardbeelogo.png" alt="Billboard Bee logo" width={220} height={220} className="mb-6 opacity-90 mx-auto" />
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2 leading-tight text-gray-900 uppercase tracking-wide text-center">OM OSS – FRÅN STILLA JORD TILL RULLANDE IDÉER</h1>
        </BlobSection>
        <BlobSection className="-ml-10 md:ml-0 md:mr-32" blobClass="h-[220px] w-[520px]" >
          <h2 className="font-bold text-lg mb-1 uppercase tracking-wide">Vår berättelse</h2>
          <p className="text-gray-800 text-sm md:text-base font-normal text-left">
            Det började med en bilresa en dimmig aprilmorgon längs E20. Vi såg samma åkrar, samma skogsdungar – men också alla tomma skyltstolpar och oanvända vägkanter. Där och då föddes tanken: Tänk om varje meter mark kunde bära ett budskap som tjänar både den som äger marken och den som vill nå ut? Vi skissade i ett kafé i Mariestad, samlade modet i ett lada-kontor utanför Uppsala och lanserade plattformen våren därpå. Sedan dess har varje ny skylt varit ett bevis på att idéer kan växa lika naturligt som råg och gran.
          </p>
          <div style={{position:'absolute',right:12,bottom:12}}>
            <img src="/bee.png" alt="Bee" width={32} height={32} style={{display:'inline'}} />
          </div>
        </BlobSection>
        <BlobSection className="md:ml-32" blobClass="h-[200px] w-[500px]" >
          <h2 className="font-bold text-lg mb-1 uppercase tracking-wide">Varför vi finns</h2>
          <p className="text-gray-800 text-sm md:text-base font-normal text-left">
            Vi tror på delad vinning.<br /><br />
            När ett lokalt mejeri vill berätta om sin nya havreglass och hyr en skylt vid riksväg 50 får torparen som äger fältet råd att byta dieselpumpen mot el.<br />
            När ett tech-bolag från Göteborg behöver synas i Norrland får skogsägaren vid E4:an likviditet till nästa plantering.<br />
            Vi frigör outnyttjad potential och låter kapital stanna i bygden där skylten står. Därför säger vi att vi arbetar från jord till ögonblick: värdet skapas i sekundsnabba blickar längs vägen men roten står kvar i marken.
          </p>
        </BlobSection>
        <BlobSection className="-ml-10 md:ml-0 md:mr-32" blobClass="h-[260px] w-[600px]" >
          <h2 className="font-bold text-lg mb-1 uppercase tracking-wide">Vad vi gör</h2>
          <p className="text-gray-800 text-sm md:text-base font-normal text-left mb-2">
            Rent Billboards är Sveriges enklaste, snabbaste och snyggaste marknadsplats för billboards. Vårt nav kopplar ihop:
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm md:text-base text-left">
            <div>
              <div className="font-semibold">Markägare</div>
              <div>Inkomster utan merarbete</div>
              <div>Vi ordnar tillstånd, montage & försäkring</div>
              <div>Månatliga utbetalningar, noll byråkrati</div>
            </div>
            <div>
              <div className="font-semibold">Annonsörer</div>
              <div>Räckvidd med karaktär</div>
              <div>Vi visar räckvidds-, trafik- & prisdata i realtid</div>
              <div>Bokning på minuter, kampanj live inom dagar</div>
            </div>
          </div>
        </BlobSection>
        <BlobSection className="md:ml-32" blobClass="h-[220px] w-[520px]" >
          <h2 className="font-bold text-lg mb-1 uppercase tracking-wide">Hur det fungerar</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 text-sm md:text-base text-left">
            <li>Lista eller hitta – fyll i GPS-koordinat eller filtrera efter region, pris och trafikflöde.</li>
            <li>Transparent kalkyl – se exakt vad du tjänar eller betalar, inga dolda avgifter.</li>
            <li>Fullservice – vårt nätverk av montörer, kreatörer och tryckerier tar hand om allt praktiskt.</li>
            <li>Spåra effekt – realtidsrapporter om visningar och energiförbrukning per skylt.</li>
          </ul>
        </BlobSection>
        <BlobSection className="-ml-10 md:ml-0 md:mr-32" blobClass="h-[220px] w-[520px]" >
          <h2 className="font-bold text-lg mb-1 uppercase tracking-wide">Vårt löfte</h2>
          <p className="text-gray-800 text-sm md:text-base font-normal text-left mb-2">
            Vi är här för att alla ska vinna:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 text-sm md:text-base text-left">
            <li>Bygden som får nytt kapital.</li>
            <li>Företaget som hittar sin publik.</li>
            <li>Resenären som möts av ett budskap som passar platsen.</li>
          </ul>
          <p className="text-gray-800 text-sm md:text-base font-normal text-left mt-2">
            När du kliver in på vår plattform ansluter du till ett ekosystem där varje resa blir lite mer meningsfull, varje markbit lite mer värdefull och varje idé lite mer möjlig. Välkommen att låta din historia ta plats på vägarna – vi gör resten.
          </p>
        </BlobSection>
      </div>
    </section>
  )
} 