"use client"
import { SESPComparisonValue, SESPDemographyValue, SESPDivisionValue, SESPDriverValue } from '@/stores/dashboard.atom'
import { useAtomValue } from 'jotai'
import { FcBarChart } from 'react-icons/fc'
import { HiDownload } from "react-icons/hi"
import AverageDriver from './AverageDriver'
import CustomSelectOption from './CustomSelectOption'
import QuestionListReports from './QuestionListReports'
import SustainableComparisonChart from './SustainableComparisonChart'
import TableSESP from './TableSESP'


export default function SustainableEngagementSP() : JSX.Element{
    const divisions = useAtomValue(SESPDivisionValue)
    const drivers = useAtomValue(SESPDriverValue)
    const demographies = useAtomValue(SESPDemographyValue)
    const sustainableComparison = useAtomValue(SESPComparisonValue)

    return <div className='py-5'>
        <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
                <FcBarChart size={30}/>
                <h2 className="text-lg font-bold">Sustainable Engagement Score Prediction</h2>
            </div>
        </div>
        <div className="bg-white my-5 rounded-md">
            <div className="bg-gray-400 flex rounded-t-md p-5">
                <h2 className="text-lg font-bold text-white">Search</h2>
            </div>
            <div className="p-8 pb-5">
                <div className="flex gap-x-10 items-center mb-6">
                    <label className="block text-lg font-medium text-gray-900 w-40">Demography</label>
                    <CustomSelectOption variant='full' options={demographies} title='Select Demography'/>
                </div>
                <div className="flex gap-x-10 items-center mb-6">
                    <label className="block text-lg font-medium text-gray-900 w-40">Divisi</label>
                    <CustomSelectOption variant='full' options={divisions} title='Select division'/>
                </div>
                <div className='flex justify-center gap-4 my-5'>
                    <button className='px-4 py-2 w-52 text-blue-600 bg-white rounded-md border border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2'>Reset</button>
                    <button className='px-4 py-2 w-52 text-white bg-blue-600 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500'>Search</button>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-10">
            <span className="text-lg font-semibold">Showing Prediction for Accounting Division</span>
            <button className="px-4 py-2 text-blue-600 bg-white rounded-md  border border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2"
                onClick={() => {
                    console.log('Download button clicked!');
                }}
                >
                    <div className="flex gap-x-1 items-center">
                        <HiDownload size={17} />
                        <span>Download Data</span>
                    </div>
            </button>
        </div>
        <div className='bg-white my-5 p-5 rounded-md'>
            <div className="grid grid-cols-2 gap-4">
                <div className="row-span-2 text-black py-4 px-6 border-2 rounded">
                    <AverageDriver />
                </div>
                <div className="border-2 rounded-md text-gray-700 py-4 px-6">
                    <TableSESP />
                </div>
                <div className="border-2 rounded-md text-gray-700 py-4 px-6">
                    <SustainableComparisonChart data={sustainableComparison}/>
                </div>
            </div>
        </div>
        <div className='bg-white my-5 p-5 rounded-md'>
            <QuestionListReports />
        </div>
    </div>
}
