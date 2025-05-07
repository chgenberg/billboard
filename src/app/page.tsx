import Image from "next/image";
import Hero from '@/components/Hero'
import BillboardGrid from '@/components/BillboardGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <BillboardGrid />
      </main>
    </>
  );
}
