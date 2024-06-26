"use client";

import React, { useState } from 'react';
import Card from '../Card/Card';
import { data } from '@/app/assets/data/data';

const Tab = ({ isSideMenuOpen }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [activeTab, setActiveTab] = useState('Completed');
    const uniqueTags = [...new Set(data.flatMap(item => item.tags))];
  
    const handleTagChange = (event) => {
      const tag = event.target.value === "All" ? null : event.target.value;
      setSelectedTag(tag);
    };

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };
    
  return (
    
    <div className={`mx-auto flex flex-col w-full max-w-7xl px-4 py-2 text-sm ${isSideMenuOpen ? 'hidden md:flex' : ''}`}>
      <section className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="font-inter font-semibold text-20px text-custom-black">Work History</div>
          <div className="w-6 h-0 border border-[#EBEBEB] rotate-90"></div>
          <div className={`font-inter font-normal text-18px leading-[21px] ${activeTab === 'Completed' ? 'text-custom-black' : 'text-primary cursor-pointer'}`}
            onClick={() => handleTabSwitch('Completed')}>
            Completed
          </div>
          <div className={`font-inter font-normal text-18px leading-[21px] ${activeTab === 'In Review' ? 'text-custom-black' : 'text-primary cursor-pointer'}`}
            onClick={() => handleTabSwitch('In Review')}>
            In Review
            </div>
        </div>
        <div className="flex items-center gap-1 ml-[0px] sm:ml-auto">
        <div className="w-6 h-0 border border-[#EBEBEB] rotate-90"></div>
          <div className="flex items-center  cursor-pointer gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 3H15.25C15.4489 3 15.6397 3.07902 15.7803 3.21967C15.921 3.36032 16 3.55109 16 3.75C16 3.94891 15.921 4.13968 15.7803 4.28033C15.6397 4.42098 15.4489 4.5 15.25 4.5H0.75C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790176 4.13968 0 3.94891 0 3.75C0 3.55109 0.0790176 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3ZM3 7.75C3 7.55109 3.07902 7.36032 3.21967 7.21967C3.36032 7.07902 3.55109 7 3.75 7H12.25C12.4489 7 12.6397 7.07902 12.7803 7.21967C12.921 7.36032 13 7.55109 13 7.75C13 7.94891 12.921 8.13968 12.7803 8.28033C12.6397 8.42098 12.4489 8.5 12.25 8.5H3.75C3.55109 8.5 3.36032 8.42098 3.21967 8.28033C3.07902 8.13968 3 7.94891 3 7.75ZM6 11.75C6 11.5511 6.07902 11.3603 6.21967 11.2197C6.36032 11.079 6.55109 11 6.75 11H9.25C9.44891 11 9.63968 11.079 9.78033 11.2197C9.92098 11.3603 10 11.5511 10 11.75C10 11.9489 9.92098 12.1397 9.78033 12.2803C9.63968 12.421 9.44891 12.5 9.25 12.5H6.75C6.55109 12.5 6.36032 12.421 6.21967 12.2803C6.07902 12.1397 6 11.9489 6 11.75Z" fill="#94A3B8"/>
            </svg>
            <div className="font-inter text-[14px] leading-[18px] text-[#64748B]">Filter By</div>
            <div className="flex items-center justify-start gap-2 w-[130px] h-[34px] border border-[#EBEBEB] rounded-[4px]">
                <select className="cursor-pointer h-full w-full rounded-md border-0 bg-transparent py-0 text-[#6366F1] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                onChange={handleTagChange}>
                {/* Initial empty option */}
                <option value="">All</option>
                {uniqueTags.map((tag, i) => (
                <option className="flex cursor-pointer items-center py-2 pl-6 pr-8 text-[#101010] transition-colors duration-300 hover:bg-[#f0f0f0] hover:text-indigo-600" key={i}>{tag}</option>
                ))}
                </select>
            </div>
          </div>
        </div>
        <div className="relative">
            <div className="w-[600px] h-0 ml-[255px] sm:ml-auto border border-[#EBEBEB] absolute top-[280px] left-[-290px] rotate-90"></div>
        </div>
        <div className="flex items-center w-full sm:w-[320px] h-[40px] ml-5 bg-[#F1F5F9] border-2 border-[#F1F5F9] rounded-full shadow-sm">
          <div className="flex items-center gap-2 px-3">
            <svg width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43207 2.04546 6.24275 2.98759 4.61517 4.61517C2.98759 6.24275 2.04546 8.43207 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8482 21.6171 21.7738 21.71 21.68C21.8903 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9923 4.13453 9.63439C4.40463 8.27653 5.07131 7.02925 6.05028 6.05028C7.02925 5.07131 8.27653 4.40463 9.63439 4.13453C10.9923 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9498 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="#64758B"/>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="flex-grow mr-1 bg-[#F1F5F9] placeholder-gray-500 text-sm leading-8 font-inter font-normal focus:outline-none"
            placeholder="Search Bounties, Profiles, and more..."
          />
        </div> 
      </section>
    
      {/* Line that appears below the active tab */}
      <div className="relative hidden sm:block">
                {activeTab === 'Completed' && <div className="absolute my-2 w-[90px] border-2 border-[#6366F1] left-[165px]"></div>}
                {activeTab === 'In Review' && <div className="absolute my-2 w-[90px] border-2 border-[#6366F1] left-[255px]"></div>}
      </div>
      <div className="my-2 w-full max-w-[900px] border border-[#EBEBEB]"></div>

      <div className="flex-col mt-2 ml-3 max-w-[860px] h-[116px]">
      {data.map((c, i) => {
          // Render only the cards with the selected tag or all cards if no tag is selected
          if (!selectedTag || c.tags.includes(selectedTag)) {
            return (
              <Card
                key={i}
                image={c.image}
                title={c.title}
                by={c.by}
                date={c.date}
                reward={c.reward}
                place={c.place}
                tags={c.tags}
                participants={c.participants}
                Completed={activeTab === 'Completed'}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
)
};

export default Tab;
