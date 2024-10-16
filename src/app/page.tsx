"use client"
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import ThemeSelector from "@/components/themeSelector";
import OverviewSection from "@/components/overviewSection";

const LektonFont = localFont({
  src: "../app/fonts/lekton.ttf",
  display: "swap"
});

export default function Home() {
  return (
    <div>
      <Navbar selectedPage="1" />
      <OverviewSection/>
      <ThemeSelector />
    </div>
  );
}
