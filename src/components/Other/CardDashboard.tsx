// import { TeamOutlined } from "@ant-design/icons";
// import { Card } from "antd";
// import { ReactElement, useState } from "react";
// import DropdownArrow, {
// 	DropdownArrow1,
// 	DropdownArrow2,
// 	DropdownArrow3,
// 	DropdownArrow4,
// } from "./DropDown";

// interface Props {
// 	icon?: ReactElement;
// 	iconRight?: ReactElement;
// 	text: string;
// 	height?: string;
// 	labelName1?: string;
// 	labelName2?: string;
// 	labelName3?: string;
// 	labelName4?: string;
// 	labelName5?: string;
// 	labelName6?: string;
// 	labelName7?: string;
// 	labelName8?: string;
// }

// export default function CardDashboard(props: Props) {
// 	return (
// 		<>
// 			<div
// 				className=" bg-blue-200 "
// 				style={{
// 					width: "75%",
// 					border: "1px solid white",
// 					borderRadius: "4px",
// 					boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Card
// 					style={{
// 						width: 330,
// 						background: "white",
// 						borderTop: "none",
// 						border: "1px solid white",
// 						borderRadius: "0px 9px  47px 0px",
// 						maxHeight: "90px",
// 						display: "flex",
// 						alignItems: "center",
// 					}}
// 					bodyStyle={{
// 						textAlign: "left",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<div
// 						className=" mt-10px  flex items-center"
// 						style={{ height: `${props.height}` }}
// 					>
// 						<p
// 							style={{
// 								fontSize: "38px",
// 								marginRight: "15px",
// 								marginBottom: "20px",
// 							}}
// 						>
// 							{props.icon}
// 						</p>
// 						<p>{props.text}</p>
// 					</div>
// 				</Card>
// 				<p
// 					style={{
// 						marginRight: "17px",
// 						marginBottom: "5px",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					{props.iconRight}
// 				</p>
// 			</div>
// 		</>
// 	);
// }
// export function CardDashboard1(props: Props) {
// 	return (
// 		<>
// 			<div
// 				className=" bg-blue-200 "
// 				style={{
// 					width: "75%",
// 					border: "1px solid white",
// 					borderRadius: "4px",
// 					boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Card
// 					style={{
// 						width: 330,
// 						background: "white",
// 						borderTop: "none",
// 						border: "1px solid white",
// 						borderRadius: "0px 9px  47px 0px",
// 						maxHeight: "90px",
// 						display: "flex",
// 						alignItems: "center",
// 					}}
// 					bodyStyle={{
// 						textAlign: "left",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<div
// 						className=" mt-10px  flex items-center"
// 						style={{ height: `${props.height}` }}
// 					>
// 						<p
// 							style={{
// 								fontSize: "38px",
// 								marginRight: "10px",
// 								marginBottom: "20px",
// 							}}
// 						>
// 							{props.icon}
// 						</p>
// 						<p>{props.text}</p>
// 					</div>
// 				</Card>
// 				<div
// 					style={{
// 						marginBottom: "5px",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<DropdownArrow1
// 						label1={props.labelName1}
// 						iconRight={props.iconRight}
// 					></DropdownArrow1>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
// export function CardDashboard2(props: Props) {
// 	return (
// 		<>
// 			<div
// 				className=" bg-blue-200 "
// 				style={{
// 					width: "75%",
// 					border: "1px solid white",
// 					borderRadius: "4px",
// 					boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Card
// 					style={{
// 						width: 330,
// 						background: "white",
// 						borderTop: "none",
// 						border: "1px solid white",
// 						borderRadius: "0px 9px  47px 0px",
// 						maxHeight: "90px",
// 						display: "flex",
// 						alignItems: "center",
// 					}}
// 					bodyStyle={{
// 						textAlign: "left",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<div
// 						className=" mt-10px  flex items-center"
// 						style={{ height: `${props.height}` }}
// 					>
// 						<p
// 							style={{
// 								fontSize: "38px",
// 								marginRight: "10px",
// 								marginBottom: "20px",
// 							}}
// 						>
// 							{props.icon}
// 						</p>
// 						<p>{props.text}</p>
// 					</div>
// 				</Card>
// 				<div
// 					style={{
// 						marginBottom: "5px",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<DropdownArrow2
// 						label1={props.labelName1}
// 						label2={props.labelName2}
// 						iconRight={props.iconRight}
// 					></DropdownArrow2>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
// export function CardDashboard3(props: Props) {
// 	return (
// 		<>
// 			<div
// 				className=" bg-blue-200 "
// 				style={{
// 					width: "75%",
// 					border: "1px solid white",
// 					borderRadius: "4px",
// 					boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Card
// 					style={{
// 						width: 330,
// 						background: "white",
// 						borderTop: "none",
// 						border: "1px solid white",
// 						borderRadius: "0px 9px  47px 0px",
// 						maxHeight: "90px",
// 						display: "flex",
// 						alignItems: "center",
// 					}}
// 					bodyStyle={{
// 						textAlign: "left",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<div
// 						className=" mt-10px  flex items-center"
// 						style={{ height: `${props.height}` }}
// 					>
// 						<p
// 							style={{
// 								fontSize: "38px",
// 								marginRight: "10px",
// 								marginBottom: "20px",
// 							}}
// 						>
// 							{props.icon}
// 						</p>
// 						<p>{props.text}</p>
// 					</div>
// 				</Card>
// 				<div
// 					style={{
// 						marginBottom: "5px",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<DropdownArrow3
// 						label1={props.labelName1}
// 						label2={props.labelName2}
// 						label3={props.labelName3}
// 						iconRight={props.iconRight}
// 					></DropdownArrow3>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
// export function CardDashboard4(props: Props) {
// 	return (
// 		<>
// 			<div
// 				className=" bg-blue-200 "
// 				style={{
// 					width: "75%",
// 					border: "1px solid white",
// 					borderRadius: "4px",
// 					boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 				}}
// 			>
// 				<Card
// 					style={{
// 						width: 330,
// 						background: "white",
// 						borderTop: "none",
// 						border: "1px solid white",
// 						borderRadius: "0px 9px  47px 0px",
// 						maxHeight: "90px",
// 						display: "flex",
// 						alignItems: "center",
// 					}}
// 					bodyStyle={{
// 						textAlign: "left",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<div
// 						className=" mt-10px  flex items-center"
// 						style={{ height: `${props.height}` }}
// 					>
// 						<p
// 							style={{
// 								fontSize: "38px",
// 								marginRight: "10px",
// 								marginBottom: "20px",
// 							}}
// 						>
// 							{props.icon}
// 						</p>
// 						<p>{props.text}</p>
// 					</div>
// 				</Card>
// 				<div
// 					style={{
// 						marginBottom: "5px",
// 						fontWeight: "bold",
// 						fontSize: "15px",
// 					}}
// 				>
// 					<DropdownArrow4
// 						label1={props.labelName1}
// 						label2={props.labelName2}
// 						label3={props.labelName3}
// 						label4={props.labelName4}
// 						iconRight={props.iconRight}
// 					></DropdownArrow4>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
