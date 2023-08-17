"use client";

import BackHome from "@/components/Other/BackHome";
import { Tabs, Divider, Switch, ConfigProvider } from "antd";
import { ReactElement, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import MenuItem from "antd/es/menu/MenuItem";

interface MenuItem {
	key: string;
	label: ReactElement;
	onClick?: () => void;
}

export default function ManagePortalAccess() {
	const onChangeTab = (key: string) => {
		console.log(key);
	};

	const items: MenuItem[] = [
		{
			key: "1",
			label: (
				<div
					style={{
						display: "flex",
						justifyItems: "center",
					}}
				>
					<FaEdit
						style={{
							color: "blue",
							fontSize: "12px",
							marginRight: "5px",
							marginTop: "5px",
						}}
						className="mr-4 hover:text-blue-700"
					/>
					Add Sub-sub menu
				</div>
			),
			// onClick: () => EditDataCleansingSurvey(record.age),
		},
		{
			key: "2",
			label: (
				<div
					style={{
						display: "flex",
						justifyItems: "center",
					}}
				>
					<FaEdit
						style={{
							color: "blue",
							fontSize: "12px",
							marginRight: "5px",
							marginTop: "5px",
						}}
						className="mr-4 hover:text-blue-700"
					/>
					Edit Sub menu
				</div>
			),
			// onClick: () => EditDataCleansingSurvey(record.age),
		},
		{
			key: "3",
			label: (
				<div
					style={{
						display: "flex",
						justifyItems: "center",
					}}
				>
					<FaTrash
						style={{
							color: "red",
							fontSize: "12px",
							marginRight: "5px",
							marginTop: "5px",
						}}
						className="hover:text-red-700"
					/>
					Delete Sub menu
				</div>
			),
			// onClick: () => showDeleteCleansingSurvey(record.age),
		},
	];

	const [switchOn, setSwitchOn] = useState(true);

	const onChange = (checked: boolean) => {
		setSwitchOn(checked);
		console.log(`switch to ${checked}`);
	};
	const item = [
		{
			key: "1",
			label: "Admin CIR",
			children: (
				<>
					<div style={{ marginTop: "10px" }}>
						<strong>Set Akses Menu</strong>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Switch
							checked={switchOn}
							style={{
								backgroundColor: switchOn ? "#7FFFD4" : "#D3D3D3",
							}}
							onChange={onChange}
						/>
						<h1
							style={{
								marginLeft: "10px",
								color: "green",
							}}
						>
							Employee Engagement Survey
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Manpower Statistic
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Survey Progress Monitoring
						</h1>
					</div>
				</>
			),
		},
		{
			key: "2",
			label: "PIC Business Line EES",
			children: (
				<>
					<div style={{ marginTop: "10px" }}>
						<strong>Set Akses Menu</strong>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Switch
							checked={switchOn}
							style={{
								backgroundColor: switchOn ? "#7FFFD4" : "#D3D3D3",
							}}
							onChange={onChange}
						/>
						<h1
							style={{
								marginLeft: "10px",
								color: "green",
							}}
						>
							Employee Engagement Survey
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Manpower Statistic
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Survey Progress Monitoring
						</h1>
					</div>
				</>
			),
		},
		{
			key: "3",
			label: "PIC Survey Group",
			children: (
				<>
					<div style={{ marginTop: "10px" }}>
						<strong>Set Akses Menu</strong>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Switch
							checked={switchOn}
							style={{
								backgroundColor: switchOn ? "#7FFFD4" : "#D3D3D3",
							}}
							onChange={onChange}
						/>
						<h1
							style={{
								marginLeft: "10px",
								color: "green",
							}}
						>
							Employee Engagement Survey
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Manpower Statistic
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Survey Progress Monitoring
						</h1>
					</div>
				</>
			),
		},
		{
			key: "4",
			label: "PIC Affco EES",
			children: (
				<>
					<div style={{ marginTop: "10px" }}>
						<strong>Set Akses Menu</strong>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Switch
							checked={switchOn}
							style={{
								backgroundColor: switchOn ? "#7FFFD4" : "#D3D3D3",
							}}
							onChange={onChange}
						/>
						<h1
							style={{
								marginLeft: "10px",
								color: "green",
							}}
						>
							Employee Engagement Survey
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Manpower Statistic
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Survey Progress Monitoring
						</h1>
					</div>
				</>
			),
		},
		{
			key: "5",
			label: "PIC Business Line MPS",
			children: (
				<>
					<div style={{ marginTop: "10px" }}>
						<strong>Set Akses Menu</strong>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Switch
							checked={switchOn}
							style={{
								backgroundColor: switchOn ? "#7FFFD4" : "#D3D3D3",
							}}
							onChange={onChange}
						/>
						<h1
							style={{
								marginLeft: "10px",
								color: "green",
							}}
						>
							Employee Engagement Survey
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Manpower Statistic
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Survey Progress Monitoring
						</h1>
					</div>
				</>
			),
		},

		{
			key: "6",
			label: "PIC Affco MPS",
			children: (
				<>
					<div style={{ marginTop: "10px" }}>
						<strong>Set Akses Menu</strong>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Switch
							checked={switchOn}
							style={{
								backgroundColor: switchOn ? "#7FFFD4" : "#D3D3D3",
							}}
							onChange={onChange}
						/>
						<h1
							style={{
								marginLeft: "10px",
								color: "green",
							}}
						>
							Employee Engagement Survey
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Manpower Statistic
						</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center,",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<ConfigProvider
							theme={{
								token: {
									colorPrimary: "#7FFFD4",
								},
							}}
						>
							<Switch defaultChecked onChange={onChange} />
						</ConfigProvider>
						<h1
							style={{
								backgroundColor: "lemonchiffon",
								marginLeft: "10px",
								color: "green",
							}}
						>
							Survey Progress Monitoring
						</h1>
					</div>
				</>
			),
		},
	];

	return (
		<>
			<div>
				<BackHome text="User Managamenet" icon={`>`} tittle={"Master Menu"} />
				<div
					className="flex justify-between px-10 py-5 "
					style={{ maxWidth: "75rem", minWidth: "75rem" }}
				>
					<strong style={{ fontSize: "20px" }}>
						Master Menu - Maintain Menu
					</strong>
				</div>

				<div
					className="flex justify-center  px-10 pb-5"
					style={{
						maxWidth: "75rem",
						minWidth: "75rem",
						scrollbarColor: "blue",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white px-5"
						style={{
							padding: "20px",
							maxWidth: "70rem",
							minWidth: "70rem",
						}}
					>
						<div
							className="border-nonepy-1  rounded border-none bg-white "
							style={{ width: "100%%" }}
						>
							<Tabs
								defaultActiveKey="1"
								onChange={onChangeTab}
								items={item}
								size="middle"
							></Tabs>
						</div>
					</div>
				</div>
				<div style={{ backgroundColor: "white", marginTop: "50px" }}>
					<Divider />
				</div>
			</div>
		</>
	);
}
