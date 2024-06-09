import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { users } from '@/app/assets/data/data';
import { navItems } from '@/app/assets/data/data';
import SearchBar from '../Searchbar/Seachbar';

export default function MobileNav({closeSideMenu,dropdownIndex,handleDropdownToggle,theme,toggleTheme}){
    return (
        
        <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
          <div className=" h-full w-[65%] bg-white px-4 py-4">
            <section className="flex justify-end">
              <AiOutlineClose
                onClick={closeSideMenu}
                className="cursor-pointer text-4xl "
              />
            </section>
            <div className="flex flex-col text-base  gap-2 transition-all">
            {navItems.map((item, index) => (
                <Link href={item.link} key={index} className="relative group  px-2 py-3 transition-all">
                    <p className="flex cursor-pointer items-center gap-2 text-custom-gray group-hover:text-black ">
                        <span>{item.label}</span> 
                        {item.label !== "Home" && item.label !== "About 4337" && (
                        <IoIosArrowDown className=" rotate-0  transition-all group-hover:rotate-45" />
                        )}
                    </p>
                </Link>
            ))}
            </div>
            <section className="flex flex-col mt-6  items-center gap-8 ">
            <SearchBar/>
            <div className="flex flex-row items-center h-[64px] p-3 gap-1">
            {users.map((user, index) => (
                <div
                key={index}
                className="flex flex-row cursor-pointer items-center relative"
                onClick={() => handleDropdownToggle(index)}
                >
                <div className="relative font-semibold h-[40px] w-[40px] flex-none rounded-full bg-[#F9F5FF] text-[#195BDF] flex justify-center items-center mr-2 font-cambria">
                    {user.fname.charAt(0) + user.lname.charAt(0)}
                    <div className="absolute h-[10px] w-[10px] rounded-full bg-[#4CAF50] bottom-[1px] right-[1px]"></div>
                </div>
                {user.children && (
                    <div className="flex flex-col ml-2">
                    <p className="font-semibold text-[14px] leading-[20px] text-black">
                        {user.fname} {user.lname}
                    </p>
                    <p className="font-normal text-[14px] leading-[20px] text-[#5A5A62]">
                        {user.email}
                    </p>
                    {dropdownIndex === index && (
                        <div className="absolute right-0 left-1 mt-3 border border-[#DADCE0] top-12 w-[208px] flex-col gap-2 rounded-lg bg-white py-3 shadow-md transition-all">
                        {user.children.map((ch, i) => (
                            <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center py-2 pl-6 pr-8 text-black hover:text-neutral-400"
                            >
                            {ch.image && (
                                <Image src={ch.image} alt="item-icon" width={16} height={16} />
                            )}
                            <span className="whitespace-nowrap pl-3">
                                {ch.label}
                            </span>
                            </Link>
                        ))}
                        </div>
                    )}
                    </div>
                )}
                </div>
            ))}
            </div>
            <div className={`cursor-pointer ml-2 transform transition-transform ${theme === 'light' ? 'rotate-0' : 'rotate-180'}`} 
            onClick={toggleTheme}>
            <svg onClick={toggleTheme} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9553 13.5572C17.5064 13.246 17.9885 12.8294 18.375 12.333C18.3715 12.401 18.3669 12.4688 18.3612 12.5365C17.9842 12.9872 17.5279 13.368 17.0126 13.6588C16.4237 13.9912 15.7739 14.197 15.1047 14.2654V14.1484C15.7538 14.0804 16.3839 13.8798 16.9553 13.5572ZM17.2211 17.2211C18.3849 16.0573 19.1201 14.545 19.325 12.9294C19.3728 12.8657 19.4192 12.8009 19.4644 12.7351C19.111 16.3684 16.165 19.2424 12.5 19.4836V19.3668C14.2757 19.2463 15.9547 18.4875 17.2211 17.2211ZM11.5 19.3668V19.4836C7.75629 19.2372 4.76282 16.2437 4.5164 12.5H4.63321C4.75366 14.2757 5.51253 15.9547 6.77892 17.2211C8.04531 18.4875 9.72435 19.2463 11.5 19.3668ZM4.63321 11.5H4.5164C4.75767 7.83459 7.63227 4.88837 11.2661 4.53545C11.2003 4.58063 11.1355 4.62711 11.0717 4.67484C9.45574 4.87959 7.943 5.61484 6.77892 6.77892C5.51253 8.04531 4.75366 9.72435 4.63321 11.5ZM9.73466 8.89535C9.80304 8.22627 10.0089 7.5766 10.3413 6.9878C10.6323 6.4723 11.0133 6.01575 11.4644 5.63877C11.5318 5.6331 11.5993 5.62849 11.667 5.62496C11.1707 6.01157 10.7541 6.49364 10.4429 7.04472C10.1203 7.61612 9.91968 8.24625 9.85162 8.89535H9.73466ZM9.85179 9.89535C9.96577 10.9791 10.4477 11.9971 11.2253 12.7747C12.0029 13.5523 13.0209 14.0342 14.1047 14.1482V14.2651C12.99 14.1507 11.9426 13.6563 11.1431 12.8569C10.3437 12.0574 9.8493 11.01 9.73489 9.89535H9.85179Z" fill="#1F1F1F" stroke="#1F1F1F"/>
            </svg>
            </div>
            </section>   
          </div>
        </div>
    )
}
