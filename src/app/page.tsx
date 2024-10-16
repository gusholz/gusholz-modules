"use client"
import Navbar from "@/components/navbar";
import styled from "styled-components";
import localFont from "next/font/local";
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
