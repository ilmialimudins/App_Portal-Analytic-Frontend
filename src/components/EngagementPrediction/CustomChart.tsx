import { CHART_COLOR } from '@/config'
import {Bar} from 'react-chartjs-2'

export default function CustomChart({data, title} : {data : any, title : string}) : JSX.Element{
    const pair = Object.entries(data)
    return <Bar data={{
        labels : pair.map(el => el[0]),
        datasets : [{
            data : pair.map(el => el[1]),
            label : title,
            backgroundColor : CHART_COLOR["BLUE"]
        }]
    }} options={{
        scales : { 
            y : {
                beginAtZero : true,
                display : false
            }, 
            x : {
                beginAtZero : true,
                grid : {
                    display : false
                }
            }
        } ,
        responsive : true, 
        plugins : {
            title : {
                display : true, 
                text : title
            }, 
            legend : {
                display : false
            }
        }
    }}/>
}
