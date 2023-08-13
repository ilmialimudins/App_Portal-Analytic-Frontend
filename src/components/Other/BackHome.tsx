import { ReactNode } from "react";
import TextLink from "../Login/textLink";
import { RiArrowRightSLine } from "react-icons/ri";

interface Props {
	text: string;
	icon: ReactNode;
	tittle?: string;
	link?: string;
}

export default function BackHome(props: Props) {
	return (
		<>
			<div
				style={{
					alignItems: "center",
					marginLeft: "40px",
					display: "flex",
					fontSize: "14px",
					// marginTop: "30px",
					height: "50px",
					marginBottom: "30px",
				}}
			>
				<div
					style={{
						marginLeft: "5px",
						alignItems: "center",

						height: "20px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<TextLink text={props.text} link="/" />
				</div>
				<div
					className="bg-stone-100 "
					style={{
						fontSize: "16px",
						marginLeft: "5px",
						alignItems: "center",

						height: "20px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "1px",
					}}
				>
					<RiArrowRightSLine />
				</div>
				<div
					className="text-bot bg-stone-100 "
					style={{
						fontSize: "14px",
						marginLeft: "5px",
						alignItems: "center",

						height: "20px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					{props.tittle}
				</div>
			</div>
		</>
	);
}

export function ToLink(props: Props) {
	return (
		<>
			<div
				style={{
					alignItems: "center",
					display: "flex",
					fontSize: "14px",
					// marginTop: "30px",
					height: "50px",
					marginBottom: "30px",
				}}
			>
				<div
					style={{
						marginLeft: "5px",
						alignItems: "center",

						height: "20px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<TextLink text={props.text} link={props.link} />
				</div>
				<div
					className="bg-stone-100 "
					style={{
						fontSize: "16px",
						marginLeft: "5px",
						alignItems: "center",

						height: "20px",
						display: "flex",
						justifyContent: "center",
						paddingTop: "1px",
					}}
				>
					<RiArrowRightSLine />
				</div>
				<div
					className=" bg-stone-100 "
					style={{
						fontSize: "14px",
						marginLeft: "5px",
						alignItems: "center",

						height: "20px",
						display: "flex",
						justifyContent: "center",
					}}
				>
					{props.tittle}
				</div>
			</div>
		</>
	);
}
