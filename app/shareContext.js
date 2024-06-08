"use client";

import React, { useState, createContext, useContext } from 'react';
import { data } from './assets/data/data';

// Create a context
export const shareContext = createContext();



export const utilityProvider = ({ children }) => {
    const [isSideMenuOpen, setSideMenu] = useState(false);
    const [theme, setTheme] = useState('light');
    const [dropdownIndex, setDropdownIndex] = useState(null);

    const [selectedTag, setSelectedTag] = useState(null);
    const [activeTab, setActiveTab] = useState('Completed');
    const uniqueTags = [...new Set(data.flatMap(item => item.tags))];

    const openSideMenu = () => {
        setSideMenu(true);
        if (typeof window !== 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeSideMenu = () => {
        setSideMenu(false);
        document.body.style.overflow = 'unset';
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleDropdownToggle = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleTagChange = (event) => {
        const tag = event.target.value === "All" ? null : event.target.value;
        setSelectedTag(tag);
    };

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    return (
        <shareContext.Provider
            value={{
                isSideMenuOpen,
                openSideMenu,
                closeSideMenu,
                theme,
                toggleTheme,
                dropdownIndex,
                handleDropdownToggle,
                selectedTag,
                setSelectedTag,
                activeTab,
                setActiveTab,
                uniqueTags,
                handleTagChange,
                handleTabSwitch,
            }}
        >
            {children}
        </shareContext.Provider>
    );
};


