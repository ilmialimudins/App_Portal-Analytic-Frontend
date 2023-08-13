import { title } from "process";
import React from "react";

interface Props {
    id:string,
    tittle:string,
    placeholder?:string
    type:string
    classname?:string

}
export default function InputForm( props:Props){
  
    
        return(
          <>
        <div className={` px-2 py-2   ${props.classname} ${props.type == 'vertical' ? 'flex flex-col' : 'flex flex-row'}`} >
            <div className="flex justify-start" >
          <label htmlFor={props.id}> {props.tittle}</label>
            </div>
            <div>
          <input prefix="P" id={props.id} placeholder={props.placeholder} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          </>

        )
}