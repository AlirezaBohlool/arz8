import React, { useState } from "react";
import { IoIosMoon } from "react-icons/io";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false); // وضعیت تاریک

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark"); 
    } else {
      document.documentElement.classList.add("dark"); 
    }
  };

  return (
    <div className="w-full h-20 flex items-center justify-between shadow-md">
      <div className="ml-10">
        <p className="text-md font-medium">where is world?</p>
      </div>
      <div className="mr-10">
        <button className="flex gap-1 items-center font-medium" onClick={toggleDarkMode}>
          <IoIosMoon /> DarkMode
        </button>
      </div>
    </div>
  );
}
