"use client"
import LineBreak from '@/components/EngagementPrediction/LineBreak'
import DriverContribution from '@/components/EngagementPrediction/DriverContribution'
import SustainableEngagementSP from '@/components/EngagementPrediction/SustainableEngagementSP'
import Header from '@/components/EngagementPrediction/Header'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, SubTitle, Legend} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title, SubTitle, Legend)

export default function Page({params} : {params : {name : string}}){

  return <div className="px-10 py-5">
    <Header />
    <LineBreak />
    <DriverContribution />
    <LineBreak />
    <SustainableEngagementSP />
  </div> 
};

