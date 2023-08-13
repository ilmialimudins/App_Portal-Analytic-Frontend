import Breadcrumb from "@/components/EngagementPrediction/Breadcrumb";
import CustomSelectOption from '@/components/EngagementPrediction/CustomSelectOption';
import { dropDownValue } from "@/stores/dashboard.atom";
import { useAtomValue } from "jotai";

export default function Header(): JSX.Element {
  const dropDown = useAtomValue(dropDownValue);
  return (
    <>
      <div className="py-5">
        <Breadcrumb />
      </div>
      <div className="flex justify-between py-5">
        <h1 className="text-lg font-bold">Engagement Prediction Dashboard</h1>
        <CustomSelectOption variant='half' options={dropDown} title='Select Company'/>
      </div>
    </>
  );
}
