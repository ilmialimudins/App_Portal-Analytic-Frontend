import { DropDown } from "@/config";
import React, { useState, useRef, useEffect } from "react";
import { RiSearchLine } from 'react-icons/ri'

export default function CustomMultiSelectDD({data, title, allValue = false} : {data : DropDown[], title : string, allValue? : boolean}) : JSX.Element {
    const [ddState, setDdState] = useState<boolean>(false)
    const [selected, setSelected] = useState<boolean[]>(Array(data.length + 1).fill(allValue))
    const [searchText, setSearchText] = useState<string>("")

    const dropDownRef = useRef<HTMLDivElement>(null)

    function outsideAreaHandler(event : MouseEvent) : void {
      if(dropDownRef.current && !dropDownRef.current.contains(event.target as Node)){
        setDdState(false)
      }
    }

    function selectionHandler(id : number){
      const newState = [...selected]
      newState[id] = !selected[id]
      setSelected(newState)
    }

    useEffect(() => {
      document.addEventListener("click", outsideAreaHandler)
      return () => {
        document.removeEventListener("click", outsideAreaHandler)
      }
    }, [])

    return (
    <div className="relative inline-block text-left">
        <div ref={dropDownRef}>
          {/* <span className="rounded-md shadow-sm">
            <input
              type="text"
              className="w-80 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </span> */}
            <span className="rounded-md shadow-sm">
                <button type="button" 
                    className="inline-flex justify-between w-56 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                    id="dropdown-toggle"
                    onClick={_ => setDdState((prev) => !prev)}>
                        {title}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" />
                        </svg>
                </button>
            </span>
        {ddState && <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-40" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-toggle">
        <div className="py-1" role="none">
          <div className="flex justify-center">
            <div className="relative flex items-center">
              <input 
                type="text" 
                className="pl-8 pr-2 py-2 w-52 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                placeholder="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <span className="absolute left-2 text-gray-200">
                <RiSearchLine />
              </span>
            </div>
          </div>
          {data.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())).map((eachMenu) => { 
          return <label className="flex items-center py-2 px-4" key={eachMenu.id} htmlFor={eachMenu.value}>
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" id={eachMenu.value} onChange={_=>selectionHandler(eachMenu.id)} checked={selected[eachMenu.id]}/>
            <span className="ml-2 text-sm">{eachMenu.name}</span>
          </label>
          })}
        </div>
        </div>}
        </div>
      </div>
    )
}