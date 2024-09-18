"use client"
import styled from "styled-components";
import NextImage from "next/image";
import { useState } from "react";

const StyledIconsDiv = styled.div`
  position: fixed;
  top: 4%;
  right: 4%;
  display: flex;
  gap: 30px;
`;

const StyledIcon = styled.div<{ selected: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => (selected ? '#FFB6B9' : 'transparent')};
  border-radius: 20%;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(255, 182, 185, 0.4); /* Light pink with 60% opacity */
  }
`;


export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');

  return (
    <StyledIconsDiv>
      <StyledIcon
        selected={selectedTheme === 'light'}
        onClick={() => setSelectedTheme('light')}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/sun.png"}
          alt="Light mode button"
        />
      </StyledIcon>
      <StyledIcon
        selected={selectedTheme === 'dark'}
        onClick={() => setSelectedTheme('dark')}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/moon.png"}
          alt="Dark mode button"
        />
      </StyledIcon>
    </StyledIconsDiv>
  )
}
