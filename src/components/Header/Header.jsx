import React from "react";
import logo from "../../assets/img/Airbnb_Logo.png";

function Header() {
  return (
    <div className="grid grid-cols-3 sticky top-0 z-50 shadow-md px-5 py-3 md:px-10">
      {/* left */}
      <div className="w-28 h-10 relative flex items-center cursor-pointer my-auto">
        <img src={logo} alt="" className="object-cover" />
      </div>
      {/* middle */}
      <div className="flex items-center justify-between  py-2 md:border-2 hover:md:shadow-lg rounded-full w-[23rem]">
        {/* <input
          type="text"
          placeholder="Start your search"
          className="rounded-full  pl-3 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        /> */}
        <div className="flex justify-between">
            <button className=" pl-5 pr-3 text-slate-900">Anywhere</button>
            <button className="border-x-2 pl-3 pr-3 text-slate-900">Any Week</button>
            <button className="pl-3 text-gray-400">Add Guests</button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 text-white rounded-full bg-red-400 cursor-pointer hidden md:inline-flex p-2 md:mx-2"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* right */}
      <div className="flex items-center space-x-2 justify-end font-medium">
        <p className="cursor-pointer hidden md:inline hover:bg-slate-100 rounded-full w-40 h-10 pt-2 pl-3 items-center">AirBnB your Home</p>
        <div className="rounded-full hover:bg-slate-100 w-10 h-10 pt-2 pl-2  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        </div>
        

        <div className="flex  items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 p-1 hidden md:inline bg-gray-600 rounded-full text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
