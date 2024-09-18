"use client"
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import localFont from "next/font/local";
import ThemeSelector from "@/components/ThemeSelector";

const LektonFont = localFont({
  src: "../app/fonts/lekton.ttf",
  display: "swap"
});

const StyledMainSection = styled.main`
  background-color: #FAE3D9;
  width: calc(100vw - 250px);
  height: 100vh;
  margin-left: 250px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 10vh;
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledH1 = styled.h1`
  color: #282828;
`;

const StyledP = styled.p`
  color: #282828;
`;


export default function Home() {
  return (
    <div>
      <Navbar selectedPage="1" />
      <StyledMainSection>
        <StyledDiv>
          <section>
            <StyledH1 className={LektonFont.className}>About</StyledH1>
            <StyledP>
              Texto para texto par testar o layout do texto mesmo tlgd Texto para texto par testar o layout do texto mesmo tlgd Texto para texto par testar o layout do texto mesmo tlgd
            </StyledP>
          </section>
          <section>
            <StyledH1 className={LektonFont.className}>Usage</StyledH1>
            <StyledP>
              Texto para texto par testar o layout do texto mesmo tlgd Texto para texto par testar o layout do texto mesmo tlgd Texto para texto par testar o layout do texto mesmo tlgd
            </StyledP>
          </section>
          <section>
            <StyledH1 className={LektonFont.className}>Contributions</StyledH1>
            <StyledP>
              Texto para texto par testar o layout do texto mesmo tlgd Texto para texto par testar o layout do texto mesmo tlgd Texto para texto par testar o layout do texto mesmo tlgd
            </StyledP>
          </section>
        </StyledDiv>
      </StyledMainSection>
      <ThemeSelector />
    </div>
  );
}
