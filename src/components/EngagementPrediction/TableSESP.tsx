import { SESPBehaviourValue } from "@/stores/dashboard.atom"
import { useAtomValue } from "jotai"
export default function TableSESP() : JSX.Element {
    const behaviours = useAtomValue(SESPBehaviourValue)

    return <div>
      <h3 className="text-center font-black text-md my-5">Sustainable Engagement Improvement Result</h3>
      <table className="table-auto w-full divide-y divide-gray-200">
      <thead className="bg-gray-700 text-left text-white text-sm font-thin">
        <tr>
          <th className="py-2 px-4 w-auto">Behaviour</th>
          <th className="py-2 px-4">Score</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 text-sm text-black">
        {behaviours.map((behaviour, idx) => {
          return <tr className={idx%2 === 0 ? "bg-white" : "bg-gray-100"} key={behaviour.id}>
              <td className="py-2 px-4">{behaviour.name}</td>
              <td className="py-2 px-4">{behaviour.score}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}
