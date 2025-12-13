import BetterProducts from "@/components/BetterProducts";
import TheyHaveSaid from "@/components/TheyHaveSaid";
import WhatsDifferent from "@/components/WhatsDifferent";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BetterProducts />
      <WhatsDifferent />
      <TheyHaveSaid />
    </main>
  );
}
