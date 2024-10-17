"use client"
import styles from "./themeSelector.module.css"
import NextImage from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

enum Themes {
  light = "light",
  dark = "dark"
}

export default function ThemeSelector() {
  const {theme, setTheme} = useTheme();
  const [selectedThemeClass, setSelectedThemeClass] = useState<Themes>(Themes.light);

  useEffect(() => {
    let newThemeClass = theme === "light" ? Themes.light : Themes.dark
    setSelectedThemeClass(newThemeClass)
  }, [theme]);

  return (
    <div className={styles.iconsContainer}>
      <span 
        className={selectedThemeClass == "light" ? styles.selectedIcon : styles.nonSelectedIcon}
        onClick={() => setTheme("light")}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/sun.png"}
          alt="Light mode button"
        />
      </span>
      <span 
        className={selectedThemeClass == "dark" ? styles.selectedIcon : styles.nonSelectedIcon}
        onClick={() => setTheme("dark")}
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
