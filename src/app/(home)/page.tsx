'use client';
import dynamic from "next/dynamic";

const MuksidHomePage = dynamic(() => import("../../app/components/HomePage/MuksidHomePage"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <MuksidHomePage />
    </main>
  );
}