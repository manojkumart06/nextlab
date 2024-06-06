import React from 'react';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
const navItems = [
        { label: "Home", link: "#" },
        { label: "Blockchain", link: "#" },
        { label: "Developers", link: "#" },
        { label: "More", link: "#" },
        { label: "About 4337", link: "#" }
      ];

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm"> 
       {/* left side  */}
       <section className="flex items-center gap-10">
        {/* logo */}
        {/* <Image width={194} height={36} src ={logo} alt='logo'/> */}
        <svg width="194" height="36" viewBox="0 0 194 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.6306 0.703125L35.0747 9.35883V26.3274L50.6306 34.9832L66.1865 26.3274V9.35883M50.6306 5.6523L59.0752 10.3444L50.6306 15.0365L42.2082 10.3444M15.0742 7.13063V11.4156H30.6301V7.13063M39.5192 13.7938L48.4083 18.743V28.7913L39.5192 23.8636M61.742 13.7938V23.8636L52.8529 28.7913V18.743M19.5188 15.7006V19.9856H30.6301V15.7006M23.9633 24.2706V28.5557H30.6301V24.2706" fill="#FF9800"/>
        <path d="M93.9099 10.9995H97.0962V25.8529C97.0962 26.7877 96.9295 27.5749 96.5959 28.2149C96.2623 28.8633 95.7708 29.3517 95.1212 29.6799C94.4717 30.0168 93.6773 30.1853 92.738 30.1853C92.4571 30.1853 92.1675 30.1642 91.869 30.122C91.5618 30.0883 91.2721 30.038 91 29.9706L91.0132 27.596C91.1975 27.6297 91.395 27.655 91.6057 27.6719C91.8076 27.6969 92.0007 27.7097 92.185 27.7097C92.5625 27.7097 92.8785 27.6466 93.133 27.5202C93.3876 27.394 93.5807 27.196 93.7124 26.9266C93.844 26.6571 93.9099 26.2993 93.9099 25.8529V10.9995ZM93.6334 7.41244C93.6334 6.94931 93.7957 6.56618 94.1205 6.26305C94.4453 5.9515 94.8886 5.79572 95.4504 5.79572C96.0209 5.79572 96.4642 5.9515 96.7802 6.26305C97.105 6.56618 97.2674 6.94931 97.2674 7.41244C97.2674 7.86712 97.105 8.24605 96.7802 8.54917C96.4642 8.85231 96.0209 9.00387 95.4504 9.00387C94.8886 9.00387 94.4453 8.85231 94.1205 8.54917C93.7957 8.24605 93.6334 7.86712 93.6334 7.41244ZM103.917 10.9995V24.6657H100.73V10.9995H103.917ZM100.52 7.41244C100.52 6.94931 100.678 6.56618 100.994 6.26305C101.318 5.9515 101.766 5.79572 102.337 5.79572C102.898 5.79572 103.342 5.9515 103.666 6.26305C103.991 6.56618 104.154 6.94931 104.154 7.41244C104.154 7.86712 103.991 8.24605 103.666 8.54917C103.342 8.85231 102.898 9.00387 102.337 9.00387C101.766 9.00387 101.318 8.85231 100.994 8.54917C100.678 8.24605 100.52 7.86712 100.52 7.41244ZM111.685 24.6657H108.512V9.68592C108.512 8.66706 108.709 7.81239 109.104 7.12193C109.508 6.42304 110.083 5.89677 110.829 5.54311C111.575 5.18104 112.457 5 113.476 5C113.792 5 114.103 5.02105 114.411 5.06315C114.718 5.09683 115.016 5.15157 115.306 5.22735L115.227 7.57662C115.051 7.53453 114.858 7.50505 114.648 7.48822C114.446 7.47137 114.226 7.46296 113.989 7.46296C113.506 7.46296 113.09 7.55136 112.738 7.7282C112.396 7.8966 112.133 8.145 111.948 8.47339C111.773 8.80179 111.685 9.20595 111.685 9.68592V24.6657ZM114.621 10.9995V13.2225H106.326V10.9995H114.621ZM121.218 24.6657H118.045V9.68592C118.045 8.66706 118.242 7.81239 118.637 7.12193C119.041 6.42304 119.616 5.89677 120.362 5.54311C121.108 5.18104 121.99 5 123.009 5C123.325 5 123.636 5.02105 123.943 5.06315C124.251 5.09683 124.549 5.15157 124.839 5.22735L124.76 7.57662C124.584 7.53453 124.391 7.50505 124.18 7.48822C123.979 7.47137 123.759 7.46296 123.522 7.46296C123.039 7.46296 122.622 7.55136 122.271 7.7282C121.929 7.8966 121.666 8.145 121.481 8.47339C121.306 8.80179 121.218 9.20595 121.218 9.68592V24.6657ZM124.154 10.9995V13.2225H115.859V10.9995H124.154ZM130.593 23.1754L134.464 10.9995H137.861L132.146 26.7498C132.015 27.0865 131.843 27.4528 131.633 27.8486C131.422 28.2443 131.146 28.619 130.803 28.9727C130.47 29.3348 130.053 29.6253 129.552 29.8442C129.052 30.0715 128.446 30.1853 127.735 30.1853C127.455 30.1853 127.182 30.1601 126.919 30.1095C126.665 30.0674 126.423 30.0211 126.195 29.9706L126.182 27.6466C126.269 27.655 126.375 27.6634 126.498 27.6719C126.629 27.6803 126.735 27.6844 126.814 27.6844C127.34 27.6844 127.779 27.6213 128.13 27.4949C128.481 27.3771 128.767 27.1833 128.986 26.9139C129.214 26.6444 129.408 26.2824 129.566 25.8278L130.593 23.1754ZM128.407 10.9995L131.791 21.2302L132.357 24.4384L130.158 24.9814L124.984 10.9995H128.407ZM147.67 20.965C147.67 20.6618 147.591 20.3882 147.433 20.144C147.275 19.8914 146.972 19.664 146.524 19.4619C146.086 19.2598 145.436 19.0746 144.576 18.9062C143.821 18.7462 143.127 18.5568 142.495 18.3378C141.872 18.1105 141.337 17.8368 140.889 17.5168C140.441 17.1969 140.095 16.8179 139.849 16.3801C139.603 15.9422 139.48 15.437 139.48 14.8644C139.48 14.3087 139.607 13.7824 139.862 13.2856C140.117 12.7888 140.481 12.351 140.955 11.972C141.429 11.5931 142.004 11.2942 142.68 11.0753C143.365 10.8564 144.128 10.7469 144.971 10.7469C146.165 10.7469 147.187 10.9405 148.039 11.3279C148.899 11.7068 149.557 12.2247 150.014 12.8814C150.47 13.5298 150.698 14.2624 150.698 15.0791H147.525C147.525 14.7171 147.429 14.3803 147.235 14.0687C147.051 13.7487 146.77 13.4919 146.393 13.2983C146.015 13.0962 145.541 12.9951 144.971 12.9951C144.427 12.9951 143.975 13.0793 143.615 13.2477C143.263 13.4077 143 13.6182 142.825 13.8793C142.658 14.1403 142.574 14.4266 142.574 14.7381C142.574 14.9655 142.618 15.1718 142.706 15.357C142.803 15.5339 142.961 15.6981 143.18 15.8496C143.399 15.9928 143.698 16.1275 144.075 16.2538C144.462 16.3801 144.944 16.5022 145.524 16.6201C146.612 16.839 147.547 17.1211 148.328 17.4663C149.118 17.8031 149.724 18.241 150.145 18.7799C150.567 19.3104 150.777 19.984 150.777 20.8008C150.777 21.407 150.641 21.9628 150.369 22.468C150.106 22.9647 149.72 23.3984 149.21 23.769C148.701 24.1311 148.091 24.4131 147.38 24.6152C146.678 24.8172 145.888 24.9183 145.01 24.9183C143.72 24.9183 142.627 24.6994 141.732 24.2616C140.836 23.8152 140.156 23.2469 139.691 22.5564C139.234 21.8575 139.006 21.1334 139.006 20.384H142.074C142.109 20.9481 142.272 21.3986 142.561 21.7354C142.86 22.0638 143.228 22.3038 143.667 22.4554C144.115 22.5985 144.576 22.6701 145.05 22.6701C145.62 22.6701 146.099 22.5985 146.485 22.4554C146.871 22.3038 147.165 22.1017 147.367 21.8491C147.569 21.5881 147.67 21.2934 147.67 20.965ZM159.375 22.4933C159.893 22.4933 160.358 22.3964 160.771 22.2028C161.192 22.0007 161.53 21.7228 161.785 21.3691C162.048 21.0155 162.193 20.6071 162.219 20.144H165.208C165.191 21.0281 164.919 21.8323 164.392 22.5564C163.865 23.2806 163.167 23.8573 162.298 24.2867C161.429 24.7078 160.468 24.9183 159.415 24.9183C158.326 24.9183 157.378 24.7415 156.571 24.3878C155.763 24.0257 155.092 23.5289 154.556 22.8975C154.021 22.2659 153.617 21.5376 153.345 20.7124C153.082 19.8872 152.95 19.003 152.95 18.06V17.6179C152.95 16.6748 153.082 15.7907 153.345 14.9655C153.617 14.1319 154.021 13.3993 154.556 12.7678C155.092 12.1362 155.763 11.6437 156.571 11.29C157.378 10.9279 158.322 10.7469 159.402 10.7469C160.543 10.7469 161.543 10.9658 162.404 11.4037C163.264 11.8331 163.94 12.4352 164.431 13.2098C164.932 13.9761 165.191 14.8686 165.208 15.8875H162.219C162.193 15.3823 162.061 14.9276 161.824 14.5234C161.596 14.1108 161.271 13.7824 160.85 13.5382C160.437 13.294 159.942 13.1719 159.362 13.1719C158.721 13.1719 158.19 13.2983 157.769 13.5509C157.348 13.795 157.018 14.1319 156.781 14.5613C156.544 14.9823 156.373 15.4581 156.268 15.9886C156.171 16.5106 156.123 17.0537 156.123 17.6179V18.06C156.123 18.6241 156.171 19.1714 156.268 19.7019C156.364 20.2324 156.531 20.7081 156.768 21.1292C157.014 21.5418 157.348 21.8744 157.769 22.127C158.19 22.3712 158.726 22.4933 159.375 22.4933ZM175.676 21.9249V15.4075C175.676 14.9192 175.584 14.4981 175.399 14.1445C175.215 13.7908 174.934 13.5172 174.557 13.3235C174.188 13.1298 173.723 13.033 173.161 13.033C172.643 13.033 172.195 13.1172 171.818 13.2856C171.441 13.454 171.146 13.6814 170.936 13.9677C170.725 14.254 170.62 14.5781 170.62 14.9402H167.46C167.46 14.4013 167.596 13.8793 167.868 13.374C168.14 12.8688 168.535 12.4183 169.053 12.0226C169.571 11.6268 170.19 11.3153 170.909 11.0879C171.629 10.8606 172.437 10.7469 173.332 10.7469C174.403 10.7469 175.351 10.9195 176.176 11.2647C177.01 11.61 177.664 12.132 178.138 12.8309C178.621 13.5214 178.862 14.3887 178.862 15.4328V21.5081C178.862 22.1312 178.906 22.6911 178.994 23.1879C179.09 23.6763 179.226 24.1015 179.402 24.4637V24.6657H176.15C176.001 24.3373 175.882 23.9205 175.794 23.4152C175.715 22.9016 175.676 22.4049 175.676 21.9249ZM176.137 16.3548L176.163 18.2368H173.885C173.297 18.2368 172.779 18.2915 172.331 18.401C171.884 18.502 171.511 18.6536 171.212 18.8557C170.914 19.0578 170.69 19.302 170.541 19.5882C170.392 19.8745 170.317 20.1987 170.317 20.5608C170.317 20.9229 170.405 21.2555 170.58 21.5586C170.756 21.8533 171.01 22.0849 171.344 22.2533C171.686 22.4217 172.099 22.5059 172.582 22.5059C173.231 22.5059 173.797 22.3796 174.28 22.127C174.772 21.8659 175.158 21.5502 175.439 21.1797C175.72 20.8008 175.869 20.4429 175.886 20.1061L176.913 21.4576C176.808 21.8028 176.628 22.1733 176.374 22.5691C176.119 22.9647 175.786 23.3437 175.373 23.7059C174.969 24.0594 174.482 24.35 173.911 24.5773C173.35 24.8047 172.7 24.9183 171.963 24.9183C171.032 24.9183 170.203 24.7415 169.474 24.3878C168.746 24.0257 168.175 23.5416 167.763 22.9353C167.35 22.3206 167.144 21.626 167.144 20.8513C167.144 20.1271 167.284 19.4872 167.565 18.9315C167.855 18.3673 168.276 17.8958 168.829 17.5168C169.391 17.1379 170.075 16.8516 170.883 16.658C171.691 16.4559 172.612 16.3548 173.648 16.3548H176.137ZM185.327 13.9171V24.6657H182.154V10.9995H185.143L185.327 13.9171ZM184.761 17.3274L183.734 17.3147C183.743 16.3464 183.883 15.4581 184.155 14.6497C184.436 13.8414 184.822 13.1467 185.314 12.5657C185.814 11.9847 186.411 11.5384 187.105 11.2269C187.798 10.9069 188.571 10.7469 189.422 10.7469C190.107 10.7469 190.725 10.8395 191.278 11.0248C191.84 11.2016 192.319 11.4921 192.714 11.8963C193.117 12.3004 193.425 12.8267 193.635 13.4751C193.846 14.115 193.951 14.9023 193.951 15.837V24.6657H190.765V15.8244C190.765 15.1676 190.664 14.6497 190.462 14.2708C190.269 13.8835 189.984 13.6098 189.606 13.4498C189.238 13.2814 188.777 13.1972 188.224 13.1972C187.68 13.1972 187.192 13.3067 186.762 13.5256C186.332 13.7445 185.968 14.0435 185.669 14.4224C185.38 14.8013 185.156 15.2391 184.998 15.7359C184.84 16.2327 184.761 16.7632 184.761 17.3274Z" fill="black"/>
        </svg>
        {/*Nav links*/}
        <div className="hidden md:flex items-center gap-4 transition-all">
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
        
        <div className="flex items-center justify-between p-1 gap-4 w-[300px] h-[40px] absolute left-[calc(50%-120px+298px)] top-[20px] bg-white border-2 border-gray-300 rounded-full shadow-sm">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <div className="w-[25px] h-[25px] relative ml-4 flex items-center justify-center">
                    <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M4.27087 21.4165L5.62504 14.3481L0.208374 12.2276L9.68754 1.62488L8.33337 8.69333L13.75 10.8139L4.27087 21.4165Z" fill="#FFB300"/>
                        <path d="M14.7746 10.1463C14.7495 10.0349 14.6986 9.93181 14.6263 9.84607C14.554 9.76033 14.4627 9.69463 14.3604 9.65479L9.58802 7.7783L10.8024 1.41072C10.8299 1.26277 10.8108 1.10946 10.7479 0.973924C10.685 0.838388 10.5817 0.727978 10.4537 0.659357C10.3256 0.590736 10.1798 0.567626 10.0381 0.593515C9.89648 0.619404 9.7667 0.692887 9.66838 0.802876L0.390389 11.223C0.315034 11.3063 0.260521 11.4078 0.231721 11.5185C0.202921 11.6292 0.200731 11.7456 0.225345 11.8574C0.24996 11.9692 0.300613 12.0729 0.372779 12.1592C0.444946 12.2455 0.536378 12.3117 0.638906 12.3519L5.41293 14.2284L4.20182 20.589C4.17432 20.7369 4.19347 20.8903 4.25639 21.0258C4.3193 21.1613 4.42257 21.2717 4.5506 21.3404C4.67862 21.409 4.82447 21.4321 4.96613 21.4062C5.10779 21.3803 5.23757 21.3068 5.33589 21.1968L14.6139 10.7767C14.6879 10.6934 14.7412 10.5924 14.7692 10.4825C14.7973 10.3726 14.7991 10.2571 14.7746 10.1463ZM5.95884 18.4676L6.82617 13.9192C6.85721 13.7579 6.83261 13.5903 6.75676 13.4462C6.6809 13.3021 6.55872 13.191 6.41197 13.1325L2.03475 11.4088L9.0446 3.53643L8.1781 8.08482C8.14706 8.24613 8.17166 8.41376 8.24751 8.55783C8.32336 8.70191 8.44555 8.81308 8.5923 8.87154L12.9662 10.5909L5.95884 18.4676Z" fill="#FFB300"/>
                    </svg>
                    </div>
                    <select className="h-full rounded-md mr-3 border-0 bg-transparent py-0  text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                        <option></option>
                    </select>
                    <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L0.999999 25" stroke="#DADCE0" stroke-linecap="round"/>
                    </svg>
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-full placeholder-gray-500 text-sm leading-8 font-inter font-normal focus:outline-none focus:border-none"
                    placeholder="Search an userOp"
                />
            </div>
        </div>




       </section>
       {/* right side data */}
       <section className=" hidden md:flex   items-center gap-8 ">
       <button className="h-fit text-black/90 transition-all">
          Profile
       </button>
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9553 13.5572C17.5064 13.246 17.9885 12.8294 18.375 12.333C18.3715 12.401 18.3669 12.4688 18.3612 12.5365C17.9842 12.9872 17.5279 13.368 17.0126 13.6588C16.4237 13.9912 15.7739 14.197 15.1047 14.2654V14.1484C15.7538 14.0804 16.3839 13.8798 16.9553 13.5572ZM17.2211 17.2211C18.3849 16.0573 19.1201 14.545 19.325 12.9294C19.3728 12.8657 19.4192 12.8009 19.4644 12.7351C19.111 16.3684 16.165 19.2424 12.5 19.4836V19.3668C14.2757 19.2463 15.9547 18.4875 17.2211 17.2211ZM11.5 19.3668V19.4836C7.75629 19.2372 4.76282 16.2437 4.5164 12.5H4.63321C4.75366 14.2757 5.51253 15.9547 6.77892 17.2211C8.04531 18.4875 9.72435 19.2463 11.5 19.3668ZM4.63321 11.5H4.5164C4.75767 7.83459 7.63227 4.88837 11.2661 4.53545C11.2003 4.58063 11.1355 4.62711 11.0717 4.67484C9.45574 4.87959 7.943 5.61484 6.77892 6.77892C5.51253 8.04531 4.75366 9.72435 4.63321 11.5ZM9.73466 8.89535C9.80304 8.22627 10.0089 7.5766 10.3413 6.9878C10.6323 6.4723 11.0133 6.01575 11.4644 5.63877C11.5318 5.6331 11.5993 5.62849 11.667 5.62496C11.1707 6.01157 10.7541 6.49364 10.4429 7.04472C10.1203 7.61612 9.91968 8.24625 9.85162 8.89535H9.73466ZM9.85179 9.89535C9.96577 10.9791 10.4477 11.9971 11.2253 12.7747C12.0029 13.5523 13.0209 14.0342 14.1047 14.1482V14.2651C12.99 14.1507 11.9426 13.6563 11.1431 12.8569C10.3437 12.0574 9.8493 11.01 9.73489 9.89535H9.85179Z" fill="#1F1F1F" stroke="#1F1F1F"/>
       </svg>
       </section>
    </div>
  )
}

export default Navbar
