import { CHART_COLOR, SustainableComparison } from "@/config";
import { Plugin } from 'chart.js';
import { Bar } from "react-chartjs-2";

export default function SustainableComparisonChart({data} : {data : SustainableComparison[]}) : JSX.Element {
    const myBarLabelPlugin : Plugin<"bar"> = {
        id : "my_bar_label_plugin",
        afterDraw(chart, args, options) {
            const {ctx, data} = chart
    
            const datasets = data.datasets
    
            datasets.forEach((dataset, datasetIndex) => {
                const datasetMeta = chart.getDatasetMeta(datasetIndex)
                const bars = datasetMeta.data
                // const barThickness = datasetMeta.data[0].
    
                bars.forEach((bar, index) => {
                    const value = dataset.data[index]
                    const {x : _x, y : _y} = bar.getProps(["x","y"])
    
                    if(typeof value !== "number") return
                    const x = bar.x
                    const y = bar.y + 20
    
                    ctx.fillStyle = "white"
                    ctx.textAlign = "center"
                    ctx.textBaseline = "middle"
                    
                    ctx.fillText(value.toString(), x, y)
                })
            })
            ctx.restore()
        },
    }
    
    return (
        <Bar data={{
            labels : data.map(el => el.title),
            datasets : Object.keys(data[0].value).map((el, idx) => {
                return {
                    label : el,
                    data : data.map(eachElem => Object.values(eachElem.value)[idx]),
                    backgroundColor : idx === 0 ? CHART_COLOR["BLUE"] : CHART_COLOR["GRAY"],
                    borderWidth: 5,
                    borderColor: "rgba(0,0,0,0)",
                    barThickness: 55
                }
            })
        }} options={{
            responsive : true,
            scales : {
                x : {
                    beginAtZero : true,
                    grid : {
                        display : false
                    }
                },
                y : {
                    beginAtZero : true,
                    max : 5,
                    ticks : {
                        stepSize : 1
                    },
                    grid : {
                        display : false
                    }
                }
            },
            plugins : {
                title : {
                    display : true,
                    text : "Sustainable Engagement Comparison",
                    padding : {
                        top : 10,
                        bottom : 10
                    },
                    font : {
                        size : 20
                    },
                    color : "rgb(0,0,0)"
                },
                legend : {
                    display : true,
                    position : "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rect'
                    },
                    onClick: () => false
                },
            },
        }} plugins={[myBarLabelPlugin]} />
    )
}
