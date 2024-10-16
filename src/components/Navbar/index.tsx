'use client'
import Link from "next/link";
import styles from "./navbar.module.css"
import localFont from "next/font/local";
import NextImage from "next/image";

const TankerFont = localFont({
  src: "../../app/fonts/tanker.woff2",
  display: "swap"
});

const LektonFont = localFont({
  src: "../../app/fonts/lekton.ttf",
  display: "swap"
});

const KoulenFont = localFont({
  src: "../../app/fonts/koulen.ttf",
  display: "swap"
})

export default function Navbar(props: { selectedPage: string }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={`${TankerFont.className} ${styles.navTitle}`}>GUSHOLZ MODULES</h1>
        <ul className={styles.pagesList}>
          <li className={styles.pagesListItem}>
            <Link
              id="1"
              className={props.selectedPage === '1' ? KoulenFont.className : LektonFont.className}
              href={'/'}>Home</Link>
          </li>
          <li className={styles.pagesListItem}>
            <Link
              id="2"
              className={props.selectedPage === '2' ? KoulenFont.className : LektonFont.className}
              href={'/navbars'}>
              Navbars
            </Link>
          </li>
          <li className={styles.pagesListItem}>
            <Link
              id="3"
              className={props.selectedPage === '3' ? KoulenFont.className : LektonFont.className}
              href={'/headers'}>
              Headers
            </Link>
          </li>
          <li className={styles.pagesListItem}>
            <Link
              id="4"
              className={props.selectedPage === '4' ? KoulenFont.className : LektonFont.className}
              href={'/tables'}>
              Tables
            </Link>
          </li>
          <li className={styles.pagesListItem}>
            <Link
              id="5"
              className={props.selectedPage === '5' ? KoulenFont.className : LektonFont.className}
              href={'/tabs'}>
              Tabs
            </Link>
          </li>
        </ul>
        <NextImage
          width={44}
          height={25}
          src={"/static/images/arrow.png"}
          alt="Arrow button"
        />
      </div>
    </nav>
  );
}