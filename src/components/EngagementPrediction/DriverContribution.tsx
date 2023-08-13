"use client"
import { driverChartValue, sortDDValue } from '@/stores/dashboard.atom'
import { atom, useAtom, useAtomValue } from 'jotai'
import { FcBarChart } from 'react-icons/fc'
import CustomChart from './CustomChart'
import CustomSelectOption from './CustomSelectOption'

const sortOrder = atom<string>("l2h")

export default function DriverContribution() : JSX.Element{
    const [order,setOrder] = useAtom(sortOrder)
    const [charts, setCharts] = useAtom(driverChartValue)
    const sortOrderValue = useAtomValue(sortDDValue)

    return <div className='py-5'>
        <div className='flex justify-between'>
            <div className='flex gap-5 items-center'>
                <FcBarChart size={30}/>
                <h2 className="text-lg font-bold">Driver Contribution</h2>
            </div>
            {/* <select className="border-2 block w-64 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setOrder(e.target.value)} defaultValue={order}>
                <option value="l2h">Low to High</option>
                <option value="h2l">High to Low</option>
            </select> */}
            <CustomSelectOption variant='half' options={sortOrderValue} title='Order' />
        </div>
        <div className="grid grid-cols-3 gap-5 my-5">
            {charts.map((chart, idx) => {
                return <div className='flex-1 bg-white rounded-lg p-3' key={idx}>
                    <CustomChart data={chart.value} title={chart.title} />
                </div>
            })}
        </div>
    </div>
}
