"use client"
import Navbar from "@/components/Navbar";
import ThemeSelector from "@/components/themeSelector";
import OverviewSection from "@/components/overviewSection";

export default function Home() {
  return (
    <div>
      <Navbar selectedPage="1" />
      <OverviewSection/>
      <ThemeSelector />
    </div>
  );
}
