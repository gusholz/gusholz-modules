'use client'
import Link from "next/link";
import styled from "styled-components";
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

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #D9D9D9;
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
`

const StyledH1 = styled.h1`
  color: #282828;
  text-align: center;
  font-size: 64px;
`

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLi = styled.li`
  font-size: 36px;
`

export default function Navbar(props: { selectedPage: string }) {
  return (
    <StyledNavbar>
      <StyledContainer>
        <StyledH1 className={TankerFont.className}>GUSHOLZ MODULES</StyledH1>
        <StyledUl>
          <StyledLi>
            <Link
              id="1"
              className={props.selectedPage === '1' ? KoulenFont.className : LektonFont.className}
              href={'/'}>Home</Link>
          </StyledLi>
          <StyledLi>
            <Link
              id="2"
              className={props.selectedPage === '2' ? KoulenFont.className : LektonFont.className}
              href={'/navbars'}>
              Navbars
            </Link>
          </StyledLi>
          <StyledLi>
            <Link
              id="3"
              className={props.selectedPage === '3' ? KoulenFont.className : LektonFont.className}
              href={'/headers'}>
              Headers
            </Link>
          </StyledLi>
          <StyledLi>
            <Link
              id="4"
              className={props.selectedPage === '4' ? KoulenFont.className : LektonFont.className}
              href={'/tables'}>
              Tables
            </Link>
          </StyledLi>
          <StyledLi>
            <Link
              id="5"
              className={props.selectedPage === '5' ? KoulenFont.className : LektonFont.className}
              href={'/tabs'}>
              Tabs
            </Link>
          </StyledLi>
        </StyledUl>
        <NextImage
          width={44}
          height={25}
          src={"/static/images/arrow.png"}
          alt="Arrow button"
        />
      </StyledContainer>
    </StyledNavbar>
  );
}