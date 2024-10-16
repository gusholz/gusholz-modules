import getText, { ProjectTexts, SupportedLanguages } from "@/enums/texts";
import styles from "./overviewSection.module.css"
import localFont from "next/font/local";


const LektonFont = localFont({
  src: "../../app/fonts/lekton.ttf",
  display: "swap"
});

export default function OverviewSection() {
  return (
    <main className={styles.mainSection}>
      <div className={styles.container}>
        <section>
          <h1 className={`${LektonFont.className} ${styles.title}`}>About</h1>
          <p className={styles.paragraph}>
            {getText(SupportedLanguages.EN, ProjectTexts.ABOUT)}
          </p>
        </section>
        <section>
          <h1 className={`${LektonFont.className} ${styles.title}`}>Usage</h1>
          <p className={styles.paragraph}>
            {getText(SupportedLanguages.EN, ProjectTexts.USAGE)}
          </p>
        </section>
        <section>
          <h1 className={`${LektonFont.className} ${styles.title}`}>Contributions</h1>
          <p className={styles.paragraph}>
            {getText(SupportedLanguages.EN, ProjectTexts.CONTRIBUTIONS)}
          </p>
        </section>
      </div>
    </main>
  )
}