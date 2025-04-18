'use client';
import dynamic from "next/dynamic";

import Home from "../../app/components/HomePage/RiteshHomePage"
const MuksidHomePage = dynamic(() => import("../../app/components/HomePage/MuksidHomePage"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <Home></Home>
      {/* <MuksidHomePage /> */}
    </main>
  );
}