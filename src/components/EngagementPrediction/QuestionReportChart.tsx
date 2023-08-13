import { CHART_COLOR, Question } from "@/config";
import { ChartData, Plugin } from "chart.js";
import { Bar } from "react-chartjs-2";

const color = [CHART_COLOR["BLUE"], CHART_COLOR["ORANGE"], CHART_COLOR["RED"]];

const myBarLabelPlugin: Plugin<"bar"> = {
  id: "my_bar_label_plugin",
  afterDraw(chart, args, options) {
    const { ctx, data, scales } = chart;

    const datasets = data.datasets;

    datasets.forEach((dataset, datasetIndex) => {
      const datasetMeta = chart.getDatasetMeta(datasetIndex);
      const bars = datasetMeta.data;

      bars.forEach((bar, index) => {
        const value = dataset.data[index];
        const {
          x: _x,
          y: _y,
          base,
          height,
        } = bar.getProps(["x", "y", "base", "heigh"]);
        const barHeight = Math.abs(_x - base);

        if (typeof value !== "number") return;
        let x = bar.x - barHeight / 2;
        const y = bar.y;
        const label = value.toString() + "%";

        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(label, x, y);
        if (datasetIndex === 2) {
          ctx.fillStyle = "#383b3f";
          ctx.fillRect(bar.x + 25, y - 20, 50, 40);
          ctx.fillStyle = "white";
          ctx.fillText(index.toString(), bar.x + 50, y + 0);
        }
      });
    });
    ctx.restore();
  },
};

export default function QuestionReportChart({
  question,
}: {
  question: Question;
}): JSX.Element {
  if (!question.result) return <div>No Data</div>;

  // mapping data question
  const result = {
    // console.log(e)
    blue: [
      ...question.result[0].qcode.map((item) => item.average_per_qcode * 10),
    ],
    orange: [
      ...question.result[1].qcode.map((item) => item.average_per_qcode * 10),
    ],
    red: [
      ...question.result[2].qcode.map((item) => item.average_per_qcode * 10),
    ],
  };

  const data: ChartData<"bar"> = {
    labels: result?.blue.map((_, idx) => `Q${idx + 1}`),
    datasets: Object.values(result).map((eachResult, index) => {
      const borderRadius = index === Object.values(result).length - 1 ? 10 : 0; // Check if it's the last dataset

      return {
        label: "Label1",
        data: eachResult,
        backgroundColor: color[index],
        borderRadius: {
          bottomLeft: borderRadius,
          bottomRight: borderRadius,
          topLeft: borderRadius,
          topRight: borderRadius,
        },
        barThickness: 40,
      };
    }),
  };

  return (
    <div className="my-5 flex gap-4 rounded-md border-2 px-4">
      <div className="w-full">
        <Bar
          data={data}
          options={{
            layout: {
              padding: {
                right: 100,
              },
            },
            indexAxis: "y",
            plugins: {
              title: {
                display: true,
                text: question.factor_name,
                align: "start",
                font: {
                  size: 30,
                },
                color: "black",
                padding: {
                  top: 5,
                  bottom: 5,
                },
              },
              subtitle: {
                display: true,
                text: `Complete report of ${question.factor_name} Question List`,
                align: "start",
                position: "top",
                font: {
                  size: 18,
                },
                padding: {
                  top: 0,
                  bottom: 10,
                },
              },
              tooltip: {
                callbacks: {
                  label: ({ datasetIndex, dataIndex }) => {
                    const value = data.datasets[datasetIndex].data[dataIndex];
                    const average = question.result
                      ? question.result[datasetIndex].qcode[dataIndex]
                          .percentage_all_favorabletype
                      : 0;
                    const respondent = question.result
                      ? question.result[datasetIndex].qcode[dataIndex]
                          .count_respondent
                      : 0;
                    const questionUser = question.result
                      ? question.result[datasetIndex].qcode[dataIndex].question
                      : "";
                    return [
                      `%Favorable: ${value}% | Average score: ${average} | Respondent: ${respondent}`,
                      questionUser,
                    ];
                  },
                },
              },
              legend: {
                display: false,
              },
            },
            responsive: true,
            scales: {
              x: {
                display: false,
                stacked: true,
                grid: {
                  display: false,
                },
              },
              y: {
                stacked: true,
                grid: {
                  display: false,
                },
              },
            },
            elements: {
              bar: {
                borderRadius: {
                  bottomLeft: 10,
                  bottomRight: 10,
                  topLeft: 10,
                  topRight: 10,
                },
              },
            },
          }}
          plugins={[myBarLabelPlugin]}
        />
      </div>
      {/* <div className="flex flex-col pt-32 gap-28">
            {Array(amountOfQuestion).fill(1).map((_,idx) => {
                return <span key={idx} className="border-2 w-16 text-center rounded-md border-gray-700 bg-gray-700 text-white p-1">{idx}</span>
            })}
        </div> */}
    </div>
  );
}
