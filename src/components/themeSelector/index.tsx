"use client"
import styles from "./themeSelector.module.css"
import NextImage from "next/image";
import { useState } from "react";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  return (
    <div className={styles.iconsContainer}>
      <span 
        className={selectedTheme == "light" ? styles.selectedIcon : styles.nonSelectedIcon}
        onClick={() => setSelectedTheme("light")}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/sun.png"}
          alt="Light mode button"
        />
      </span>
      <span 
        className={selectedTheme == "dark" ? styles.selectedIcon : styles.nonSelectedIcon}
        onClick={() => setSelectedTheme("dark")}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/moon.png"}
          alt="Dark mode button"
        />
      </span>
    </div>
  )
}
