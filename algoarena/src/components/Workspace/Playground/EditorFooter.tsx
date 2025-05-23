import React from "react";
import { BsChevronUp } from "react-icons/bs";

type EditorFooterProps = {
  handleSubmit: () => void;
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit }) => {
  return (
    <div className="flex fixed bottom-0 left-0 right-0 bg-white border-2 z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-black rounded-lg pl-3 pr-2">
            Console
            <div className="ml-1 transform transition flex items-center fill-gray-6 mx-1 fill-dark-gray-6">
              <BsChevronUp />
            </div>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button
            className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-black border-turquoise border-2 rounded-lg"
            onClick={handleSubmit}
          >
            Run
          </button>
          <button
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-turquoise hover:bg-white hover:text-turquoise border-turquoise border-2 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
