"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from "./components/Navbar/Navbar";
import Tab from "./components/Tab/Tab";

export default function Home() {
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [theme, setTheme] = useState('light');
  const [dropdownIndex, setDropdownIndex] = useState(null);

  // Toggles between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // Handles dropdown menu toggle
  const handleDropdownToggle = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  // Opens the side menu and disables background scrolling
  function openSideMenu() {
    setSideMenue(true);
    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  }

  // Closes the side menu and enables background scrolling
  function closeSideMenu() {
    setSideMenue(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div className={`h-screen  ${theme === 'light' ? 'bg-none' : 'bg-[#EBF3FF]'}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar 
        isSideMenuOpen={isSideMenuOpen} 
        openSideMenu={openSideMenu} 
        closeSideMenu={closeSideMenu} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        dropdownIndex={dropdownIndex} 
        handleDropdownToggle={handleDropdownToggle} 
      />
      <Tab isSideMenuOpen={isSideMenuOpen} />
    </div>
  );
}
