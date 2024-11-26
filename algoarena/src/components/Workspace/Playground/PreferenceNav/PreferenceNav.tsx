import React from "react";
import { AiOutlineSetting, AiOutlineFullscreen } from "react-icons/ai";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {
  return (
    <div className="flex items-center justify-between bg-white h-11 w-full border-b border-teal-200">
      {/* Left Section */}
      <div className="flex items-center text-teal-700">
        <button className="flex cursor-pointer items-center rounded text-left focus:outline-none bg-teal-50 text-teal-700 hover:bg-teal-100 px-2 py-1.5 font-medium shadow-sm">
          <div className="flex items-center px-1">
            <div className="text-xs">JavaScript</div>
          </div>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center m-2">
        {/* Settings Button */}
        <button className="relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex ml-auto p-1 mr-2 hover:bg-teal-100 group">
          <div className="h-4 w-4 text-teal-600 font-bold text-lg">
            <AiOutlineSetting />
          </div>
          <div className="absolute w-auto p-2 text-sm min-w-max translate-x-3 right-0 top-5 z-10 rounded-md shadow-md text-white bg-teal-600 origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100">
            Settings
          </div>
        </button>

        {/* Full Screen Button */}
        <button className="relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex ml-auto p-1 mr-2 hover:bg-teal-100 group">
          <div className="h-4 w-4 text-teal-600 font-bold text-lg">
            <AiOutlineFullscreen />
          </div>
          <div className="absolute w-auto p-2 text-sm min-w-max translate-x-3 right-0 top-5 z-10 rounded-md shadow-md text-white bg-teal-600 origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100">
            Full Screen
          </div>
        </button>
      </div>
    </div>
  );
};

export default PreferenceNav;
