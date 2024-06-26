import React, { useState } from 'react';

const SearchBar = ({isVisibleNav}) => {
  const [searchValue, setSearchValue] = useState('');

  const handlePaste = (event) => {
    // Handle paste logic here
    const pastedData = event.clipboardData.getData('text');
    setSearchValue(pastedData);
  };

  return (
    <div className={`items-center justify-between w-[220px] sm:w-[300px] h-[40px] bg-white border-2 border-gray-300 rounded-full shadow-sm transition-all hover:shadow-md focus-within:border-[#195BDF] focus-within:shadow-md hover:border-orange-200 ${isVisibleNav ? 'hidden md:flex' : ''}`}>
      <div className="flex items-center gap-2 sm:gap-4  w-full px-3">
        <div className="flex items-center gap-0 sm:gap-1">
          <div className="w-[25px] h-[25px] relative flex items-center justify-center">
            <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" d="M4.27087 21.4165L5.62504 14.3481L0.208374 12.2276L9.68754 1.62488L8.33337 8.69333L13.75 10.8139L4.27087 21.4165Z" fill="#FFB300"/>
              <path d="M14.7746 10.1463C14.7495 10.0349 14.6986 9.93181 14.6263 9.84607C14.554 9.76033 14.4627 9.69463 14.3604 9.65479L9.58802 7.7783L10.8024 1.41072C10.8299 1.26277 10.8108 1.10946 10.7479 0.973924C10.685 0.838388 10.5817 0.727978 10.4537 0.659357C10.3256 0.590736 10.1798 0.567626 10.0381 0.593515C9.89648 0.619404 9.7667 0.692887 9.66838 0.802876L0.390389 11.223C0.315034 11.3063 0.260521 11.4078 0.231721 11.5185C0.202921 11.6292 0.200731 11.7456 0.225345 11.8574C0.24996 11.9692 0.300613 12.0729 0.372779 12.1592C0.444946 12.2455 0.536378 12.3117 0.638906 12.3519L5.41293 14.2284L4.20182 20.589C4.17432 20.7369 4.19347 20.8903 4.25639 21.0258C4.3193 21.1613 4.42257 21.2717 4.5506 21.3404C4.67862 21.409 4.82447 21.4321 4.96613 21.4062C5.10779 21.3803 5.23757 21.3068 5.33589 21.1968L14.6139 10.7767C14.6879 10.6934 14.7412 10.5924 14.7692 10.4825C14.7973 10.3726 14.7991 10.2571 14.7746 10.1463ZM5.95884 18.4676L6.82617 13.9192C6.85721 13.7579 6.83261 13.5903 6.75676 13.4462C6.6809 13.3021 6.55872 13.191 6.41197 13.1325L2.03475 11.4088L9.0446 3.53643L8.1781 8.08482C8.14706 8.24613 8.17166 8.41376 8.24751 8.55783C8.32336 8.70191 8.44555 8.81308 8.5923 8.87154L12.9662 10.5909L5.95884 18.4676Z" fill="#FFB300"/>
            </svg>
          </div>
          <select className="h-full rounded-md border-0 bg-transparent py-0 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm mr-3">
            <option></option>
          </select>
          <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L0.999999 25" stroke="#DADCE0" strokeLinecap="round"/>
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="w-full placeholder-gray-500 text-[12px] sm:text-sm leading-8 font-inter font-normal focus:outline-none focus:border-none"
          placeholder="Search an userOp"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onPaste={handlePaste}            
        />
      </div>
    </div>     
  );
};

export default SearchBar;
