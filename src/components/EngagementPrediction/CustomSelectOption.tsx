import { SESPDropdownOption } from "@/config";
import { useEffect, useRef, useState } from "react";

export default function CustomSelectOption({ options, title, variant } : {options : SESPDropdownOption[], title : string, variant: 'full' | 'half'}) : JSX.Element {
  const [selectedOption, setSelectedOption] = useState<SESPDropdownOption|null>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option : SESPDropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const selecOptionDDRef = useRef<HTMLDivElement>(null)

  function outsideHanlerClick(event : MouseEvent) : void {
    if(selecOptionDDRef.current && !selecOptionDDRef.current.contains(event.target as Node)){
        setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", outsideHanlerClick)
    return () => {
        document.removeEventListener("click", outsideHanlerClick)
    }
  },[])

  return (
    <div className={`relative inline-block text-left ${variant === 'full' ? 'w-full' : ''}`}>
      <div ref={selecOptionDDRef}>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex justify-between w-56 px-4 py-2 text-sm font-normal text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${variant === 'full' ? 'w-full' : ''}`}
            id="dropdown-toggle"
            onClick={toggleDropdown}
          >
            {selectedOption ? selectedOption.name : title}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" />
            </svg>
          </button>
        </span>
        {isOpen && (
          <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50 ${variant === 'full' ? 'w-full' : ''}`}>
            {options.map((option) => (
              <div
                key={option.id}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
