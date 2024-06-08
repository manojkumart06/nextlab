import React from 'react';
import Image from 'next/image';

function Card({ image, title, by, date, reward, place, tags, participants }) {
  return (
    <div className="mb-4 pb-2 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <Image
            src={image}
            alt={title}
            width={65}
            height={65}
            className="mr-0 sm:mr-4 mb-2 sm:mb-0 rounded-[6px]"
          />
          <div className="font-inter">
            <span className="font-semibold text-[16px] leading-[28px] text-[#252424]">{title}</span>
            <span className="font-normal text-[12px] leading-[18px] text-[#64758B] ml-0 sm:ml-2">
              by
              <span className="font-semibold text-[16px] leading-[28px] text-[#94A3B8] ml-1">{by}</span>
            </span>
            <div className="flex flex-wrap items-center space-x-4 mt-2">
              {reward && (
                <div className="flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 13.857C7.9011 13.8592 8.79377 13.6834 9.62671 13.3396C10.4596 12.9958 11.2164 12.4908 11.8536 11.8536C12.4908 11.2165 12.9958 10.4597 13.3396 9.62671C13.6834 8.79377 13.8592 7.9011 13.857 7C13.8592 6.0989 13.6834 5.20623 13.3396 4.37329C12.9958 3.54035 12.4908 2.78355 11.8536 2.14637C11.2164 1.50919 10.4596 1.00419 9.62671 0.660391C8.79377 0.316588 7.9011 0.140757 7 0.143C6.09889 0.140757 5.20623 0.316588 4.37328 0.660391C3.54034 1.00419 2.78354 1.50919 2.14636 2.14637C1.50919 2.78355 1.00419 3.54035 0.660387 4.37329C0.316584 5.20623 0.140754 6.0989 0.142996 7C0.140754 7.9011 0.316584 8.79377 0.660387 9.62671C1.00419 10.4597 1.50919 11.2165 2.14636 11.8536C2.78354 12.4908 3.54034 12.9958 4.37328 13.3396C5.20623 13.6834 6.09889 13.8592 7 13.857ZM8.886 8.084C8.886 7.086 8.286 6.743 7.086 6.601C6.229 6.486 6.057 6.258 6.057 5.856C6.057 5.457 6.344 5.2 6.914 5.2C7.429 5.2 7.716 5.371 7.857 5.8C7.887 5.886 7.973 5.941 8.059 5.941H8.513C8.53927 5.94181 8.56544 5.9373 8.58993 5.92774C8.61442 5.91817 8.63672 5.90376 8.6555 5.88536C8.67428 5.86695 8.68914 5.84495 8.69919 5.82065C8.70924 5.79636 8.71428 5.77029 8.714 5.744V5.714C8.599 5.084 8.084 4.484 7.429 4.428V3.798C7.429 3.683 7.343 3.597 7.201 3.571H6.824C6.709 3.571 6.601 3.657 6.572 3.798V4.428C5.714 4.544 5.144 5.2 5.144 5.916C5.144 6.858 5.71399 7.227 6.914 7.373C7.716 7.514 7.973 7.686 7.973 8.144C7.973 8.598 7.57 8.916 7.03 8.916C6.284 8.916 6.027 8.598 5.942 8.17C5.916 8.058 5.83 7.998 5.744 7.998H5.256C5.22962 7.99771 5.20346 8.00278 5.1791 8.01289C5.15474 8.02301 5.13268 8.03796 5.11427 8.05684C5.09585 8.07572 5.08146 8.09815 5.07196 8.12275C5.06246 8.14736 5.05805 8.17364 5.059 8.2V8.23C5.17 8.941 5.629 9.43 6.572 9.571V10.206C6.572 10.321 6.657 10.398 6.799 10.428H7.21C7.321 10.428 7.399 10.351 7.429 10.206V9.571C8.286 9.43 8.886 8.856 8.886 8.084ZM4.114 10.22C4.529 10.6 5.014 10.894 5.543 11.085C5.629 11.145 5.714 11.257 5.714 11.342V11.745C5.714 11.801 5.714 11.831 5.684 11.856C5.659 11.972 5.543 12.028 5.427 11.972C4.38721 11.6409 3.4797 10.9876 2.83571 10.1066C2.19172 9.22569 1.84462 8.16274 1.84462 7.0715C1.84462 5.98026 2.19172 4.91731 2.83571 4.03636C3.4797 3.15541 4.38721 2.50213 5.427 2.171C5.457 2.145 5.513 2.145 5.543 2.145C5.659 2.171 5.714 2.256 5.714 2.372V2.771C5.714 2.916 5.659 3.002 5.543 3.058C4.95862 3.26868 4.42781 3.60548 3.9883 4.04447C3.54879 4.48346 3.21136 5.01387 3 5.598C2.70535 6.39166 2.65387 7.25511 2.8521 8.07816C3.05034 8.90121 3.48931 9.64653 4.113 10.219M8.315 2.285C8.34 2.17 8.456 2.114 8.572 2.17C9.35742 2.42564 10.0705 2.86505 10.6519 3.45171C11.2334 4.03837 11.6664 4.75533 11.915 5.543C12.1202 6.18639 12.1966 6.86393 12.1396 7.53686C12.0827 8.20978 11.8936 8.86487 11.5832 9.46462C11.2727 10.0644 10.8471 10.597 10.3306 11.0321C9.81404 11.4671 9.21679 11.796 8.573 12C8.543 12.026 8.487 12.026 8.457 12.026C8.341 12 8.286 11.915 8.286 11.799V11.4C8.286 11.255 8.341 11.169 8.457 11.113C9.04137 10.9023 9.57218 10.5655 10.0117 10.1265C10.4512 9.68754 10.7886 9.15713 11 8.573C11.196 8.04608 11.2856 7.48556 11.2637 6.92381C11.2418 6.36206 11.1089 5.81021 10.8725 5.30013C10.6362 4.79005 10.3011 4.33185 9.88669 3.95199C9.47226 3.57213 8.98668 3.27814 8.458 3.087C8.372 3.027 8.287 2.915 8.287 2.8V2.4C8.287 2.34 8.287 2.314 8.317 2.284" fill="#2775CA"/>
                  </svg>
                  <div className="font-normal ml-1 text-[14px] w-[120px] leading-[16px] text-[#64758B]">
                    <span className="font-semibold text-[#252424]">{reward}</span>
                    <span className="text-[#252424]"> USDC</span>
                  </div>
                </div>
              )}
              {place && (
                <div className="flex items-center">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66642 1.58334C9.00879 1.58335 9.33915 1.69384 9.59433 1.8937C9.84951 2.09355 10.0116 2.36875 10.0497 2.66667H10.8341C11.1058 2.66668 11.3675 2.75614 11.5674 2.91729C11.7672 3.07844 11.8906 3.2995 11.913 3.53659L11.9167 3.61459V5.23959C11.9167 5.68924 11.7202 6.12187 11.3675 6.44871C11.0148 6.77555 10.5327 6.97184 10.02 6.99729L9.89006 7.00054C9.68375 7.56328 9.29915 8.06313 8.78101 8.44191C8.26288 8.82069 7.63254 9.06283 6.96335 9.14013V9.97917H8.0478C8.56123 9.97928 9.05517 10.1514 9.42831 10.4602C9.80146 10.769 10.0255 11.1911 10.0546 11.6399L10.0583 11.7396V12.0104C10.0583 12.1087 10.0176 12.2036 9.94379 12.2776C9.86997 12.3516 9.76803 12.3996 9.65684 12.4129L9.59436 12.4167H3.40565C3.29342 12.4168 3.18495 12.3813 3.10032 12.3168C3.0157 12.2522 2.96065 12.163 2.94539 12.0657L2.94168 12.0104V11.7396C2.94164 11.29 3.13803 10.8575 3.49059 10.5306C3.84315 10.2038 4.32515 10.0075 4.83776 9.98188L4.95221 9.97917H6.0348V9.14013C5.36583 9.06264 4.73575 8.82041 4.21785 8.44164C3.69996 8.06287 3.31554 7.56313 3.10933 7.00054L3.09386 7C2.56064 7 2.04925 6.81453 1.6722 6.48439C1.29516 6.15425 1.08333 5.70648 1.08333 5.23959V3.61459C1.08333 3.09134 1.56833 2.66667 2.16592 2.66667H2.95034C2.98839 2.36865 3.15059 2.09338 3.4059 1.89352C3.66122 1.69365 3.99172 1.58321 4.3342 1.58334H8.66642ZM8.0478 10.7917H4.95221C4.7078 10.7916 4.47054 10.8639 4.27903 10.9968C4.08752 11.1298 3.95304 11.3156 3.89745 11.524L3.88013 11.6042H9.11863C9.08376 11.3928 8.96838 11.1979 8.7912 11.0511C8.61402 10.9043 8.38542 10.8143 8.14245 10.7955L8.0478 10.7917ZM8.66642 2.39584H4.33358C4.21053 2.39584 4.09252 2.43864 4.00551 2.51482C3.9185 2.59101 3.86961 2.69434 3.86961 2.80209V6.05154C3.88021 6.65619 4.16196 7.23294 4.65404 7.65725C5.14613 8.08156 5.80906 8.31939 6.49969 8.31939C7.19033 8.31939 7.85326 8.08156 8.34534 7.65725C8.83742 7.23294 9.11918 6.65619 9.12977 6.05154V2.80209C9.12977 2.69434 9.08089 2.59101 8.99388 2.51482C8.90687 2.43864 8.78947 2.39584 8.66642 2.39584ZM10.8335 3.47917H10.0577V6.17829C10.2997 6.14818 10.5229 6.04728 10.691 5.89199C10.8591 5.7367 10.9623 5.53616 10.9838 5.323L10.9881 5.23959V3.61459C10.9881 3.58408 10.9762 3.55448 10.9546 3.53059C10.9329 3.5067 10.9026 3.48992 10.8687 3.48296L10.8335 3.47917ZM2.94168 3.47917H2.16592C2.12491 3.47917 2.08557 3.49344 2.05657 3.51883C2.02756 3.54423 2.01127 3.57867 2.01127 3.61459V5.23959C2.01123 5.46802 2.10541 5.68878 2.27647 5.86126C2.44754 6.03373 2.68398 6.14631 2.9423 6.17829L2.94168 3.47917Z"
                      fill="#64758B"
                    />
                  </svg>
                  <div className="font-normal ml-1 text-[14px] leading-[16px] text-[#64758B]">{place}</div>
                </div>
              )}
              <div className="flex flex-wrap space-x-2">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-blue-200 rounded-full px-2 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
          <span className="font-normal text-[16px] leading-[22px] text-[#64758B]">{date}</span>
          <span className="font-normal text-[16px] leading-[20px] text-[#64758B]">
            <span className="font-semibold text-[#252424]">{participants}</span> Participants
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
