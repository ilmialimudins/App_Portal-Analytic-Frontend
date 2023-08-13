import { CHART_COLOR } from '@/config'
import { SESPAverageDriverListValue } from '@/stores/dashboard.atom'
import { useAtom } from 'jotai'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'

function MySlider({defaultValue, title} : {defaultValue : number, title : string}) : JSX.Element {
    const [value, setValue] = useState<number>(defaultValue | 0)

    function changeHandler(value : number | number[]){
        if(typeof value === "object") return
        setValue(value)
    }

    const marks = {
        [Math.floor(defaultValue)] : <div className='flex justify-center mt-2'><div className='absolute h-6 w-[2px] bg-gray-600 bottom-[80%]'></div><span className=''>{value}</span></div>
    }

    return <div className='my-5'>
        <h3 className='font-bold text-gray-700 text-sm'>{title}</h3>
        <div className='flex flex-row gap-4 items-center'>
            <Slider 
                value={value} 
                onChange={changeHandler} 
                min={0} 
                max={5} 
                marks={marks}
                step={0.05} 
                trackStyle={{height : 10, backgroundColor : CHART_COLOR["BLUE"]}}
                handleStyle={{height : 20, width : 20, borderColor : CHART_COLOR["BLUE"], backgroundColor : 'rgb(255, 255, 255)', borderWidth : 5}}
                railStyle={{height : 10}}
                dotStyle={{display: 'none'}}
                className='z-10'
            />
            <span className='border-2 rounded-md px-3 py-1 w-20 text-center'>
                {value}
            </span>
        </div>
    </div>
}


export default function AverageDriver() : JSX.Element {
    const [drivers, setDrivers] = useAtom(SESPAverageDriverListValue)

    return (
    <>
        <h2 className='text-center font-bold text-lg'>Average Driver</h2>
        {
            drivers.map(driver => {
                return <MySlider key={driver.id} defaultValue={driver.averageScore} title={driver.title}/>
            })
        }
    </>)
}
