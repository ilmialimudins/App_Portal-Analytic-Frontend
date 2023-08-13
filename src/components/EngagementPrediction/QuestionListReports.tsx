import SliderComponent from "@/components/EngagementPrediction/SliderComponent";
import {
    SESPQuestionListValue
} from "@/stores/dashboard.atom";
import { useAtomValue } from "jotai";
import { useState } from "react";
import QuestionList from "./QuestionList";
import QuestionReportChart from "./QuestionReportChart";

export default function QuestionListReports(): JSX.Element {
  const questions = useAtomValue(SESPQuestionListValue);
  const [indexSelected, setIndexSelected] = useState(0);

  function getCurrentQuestion() {
    return questions[indexSelected];
  }

  const currentData = getCurrentQuestion();

  return (
    <div className="relative">
      <h2 className="flex justify-center text-lg font-bold">
        Question List Report
      </h2>
      <SliderComponent>
        {questions.map((question, index) => {
          return (
            <QuestionList
              key={index}
              title={question.factor_name}
              averageScore={question.average_per_factor}
              isSelected={index === indexSelected}
              clickHandler={() => setIndexSelected(index)}
            />
          );
        })}
      </SliderComponent>
      <QuestionReportChart question={currentData} />
    </div>
  );
}
