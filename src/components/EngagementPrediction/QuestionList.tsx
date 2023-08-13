import { atom, useAtom } from "jotai";
import React from "react";

export default function QuestionList({
    title, 
    averageScore, 
    isSelected = false,
    clickHandler
    } : {
        title : string, 
        averageScore : number, 
        isSelected? : boolean
        clickHandler? : React.MouseEventHandler
    }) : JSX.Element{

    return (
    <div className={`border-2 p-4 m-2 rounded-md cursor-pointer border-t-4 ${isSelected ? "border-t-blue-500" : ""}`} onClick={clickHandler} >
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-500">Average Score : {averageScore}</p>
    </div>
    )
}