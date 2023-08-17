"use client";
import AddManageParentMenu from "@/components/Modal/AddManageParentMenu";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

import BackHome from "@/components/Other/BackHome";
import { Button, Tabs, Divider, Dropdown } from "antd";
import Tree, { AntTreeNodeProps, DataNode, TreeProps } from "antd/es/tree";
import { ReactElement, useState } from "react";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import MenuItem from "antd/es/menu/MenuItem";

interface MenuItem {
	key: string;
	label: ReactElement;
	onClick?: () => void;
}

export default function MantainMenu() {
	const onChangeTab = (key: string) => {
		console.log(key);
	};

	const [expandedKeys, setExpandedKeys] = useState<string[]>(["0-0-0"]);

	const onExpand = (expandedKeys: React.Key[] | string[]) => {
		setExpandedKeys(expandedKeys as string[]);
	};

	const switcherIcon = (props: AntTreeNodeProps) => {
		const isExpanded = expandedKeys.includes(props.eventKey as string);

		return isExpanded ? <UpOutlined /> : <DownOutlined />;
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
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const treeDataESS: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 1.1 EES</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.1.1 EES Dashboard</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.1.2 Benchmark Dashboard</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.1.3 Prediction Dashboard</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-3",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.1.4 Detail Respondent Dashboard</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-4",
				},
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "left",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									marginTop: "0px",
									marginLeft: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div style={{ width: "310px" }}>
										1.1.5 Survey Progress Monitoring Dashboard
									</div>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										backgroundColor: "",
										margin: "0",
										padding: "0",
										justifyContent: "",
									}}
								>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					switcherIcon: (
						<div
							style={{
								width: "385px",
								height: "30px",
								display: "flex",
								backgroundColor: "lightskyblue",
								borderRadius: "10px",
								color: "black",
								padding: "0px",
								marginLeft: "35px",
								cursor: "default",
								flexDirection: "row-reverse",
								alignItems: "center",
							}}
							onClick={toggleExpand}
						>
							{expanded ? (
								<div
									style={{
										display: "flex",
										height: "20px",
										backgroundColor: "lightskyblue",
										marginRight: "10px",
									}}
								>
									<div
										style={{
											display: "flex",
											width: "20px",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
											height: "23px",
										}}
									>
										<div
											className="hover:bg-white hover:text-blue-500 "
											style={{
												width: "20px",
												height: "30px",
												alignItems: "center",
												display: "flex",
												justifyContent: "center",
												cursor: "pointer",
											}}
										>
											<UpOutlined />
										</div>
									</div>
								</div>
							) : (
								<div
									style={{
										display: "flex",
										height: "20px",
										backgroundColor: "lightskyblue",
										marginRight: "10px",
									}}
								>
									<div
										style={{
											display: "flex",
											width: "20px",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
											height: "23px",
										}}
									>
										<div
											className="hover:bg-white hover:text-blue-500 "
											style={{
												width: "20px",
												height: "30px",
												alignItems: "center",
												display: "flex",
												justifyContent: "center",
												cursor: "pointer",
											}}
										>
											<DownOutlined />
										</div>
									</div>
								</div>
							)}
						</div>
					),
					key: "0-0-0-5",
					children: [
						{
							title: (
								<div style={{ cursor: "default" }}>
									<div
										style={{
											width: "365x",
											height: "30px",
											display: "flex",
											justifyContent: "space-between",
											backgroundColor: "lightskyblue",
											color: "black",
											borderRadius: "10px",
											padding: "5px 10px",
											margin: "5px",
											cursor: "default",
										}}
									>
										<div>
											<div> 1.1.5.1 Survey Progress Monitoring Open</div>
										</div>
										<div style={{ display: "flex", alignItems: "center" }}>
											<Dropdown
												menu={{ items }}
												trigger={["click"]}
												placement="bottomRight"
											>
												<HiEllipsisHorizontal
													style={{
														fontSize: "8px",
														height: "30px",
														cursor: "pointer",
														width: "30px",
														alignItems: "center",
													}}
													className="mr-4 hover:text-blue-700"
												/>
											</Dropdown>
										</div>
									</div>
								</div>
							),
							key: "0-0-0-5-1",
						},
					],
				},
			],
		},
	];
	const treeDataMPS: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 1.2 MPS</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.1 Executive Summary</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.2 Executive Summary - Sumamry Table</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.3 Sustainbility Overview</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-3",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.4 Demography Analysis</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-4",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.5 Comparison</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-4",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.6 Manpower Trend</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-4",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 1.2.7 Recruitment & Training</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-4",
				},
			],
		},
	];
	const treeDataCleansingSurvey: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 2.1 Cleansing Survey</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 2.1.1 Download</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 2.1.2 Upload</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.1.3 Monitoring</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-3",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.1.4 Complete</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-4",
				},
			],
		},
	];

	const treeDataEditWorkcloud: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 2.2 Edit Workcloud</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div> 2.2.1 Stoprword & Replace</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.2.2 Ngram</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
			],
		},
	];
	const treeDataInvitedRespondentEES: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 2.3 Invited Respondent SPM</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.3.1 Upload Invited Respondent</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.3.2 Modify Data Invited Respondent</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.3.3 Maintain Demography</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-3",
				},
			],
		},
	];
	const treeDataMasterDataEES: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 2.4 Master Data EES</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.4.1 Maintain Master Data</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.4.2 Maintain Demography</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>2.3.3 Maintain Demography</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-3",
				},
			],
		},
	];
	const treeDataMPSDashboard: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 3.1 MPS Dashboard</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
		},
	];
	const treeDataInputMPS: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 3.2 Input MPS</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>3.2.1 Upload MPS</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>3.2.2 Maintain Data</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
			],
		},
	];
	const treeDataInvitedRespondentMPS: DataNode[] = [
		{
			disabled: true,
			title: (
				<div style={{ cursor: "default" }}>
					<div
						style={{
							width: "970px",
							display: "flex",
							justifyContent: "space-between",
							borderRadius: "0 20 0 20px ",
							color: "white",
							padding: "10px 0 10 10px",
							margin: "5px",
							alignItems: "center",
							height: "35px",
							paddingLeft: "20px",
						}}
					>
						<div> 3.3 Invited Respondent SPM</div>
						<div
							style={{
								display: "flex",
								height: "35px",
								backgroundColor: "royalblue",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "85px",
									justifyContent: "space-between",
									alignItems: "center",
									borderRight: "1px solid white",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaPlusCircle />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<FaEdit />
								</div>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<FaTrash />
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			switcherIcon: (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						borderRadius: "0 20px 20px 0",
						color: "white",
						height: "35px",
						margin: "5px",
						width: "1005px",
						flexDirection: "row-reverse",
						marginLeft: "50px",
						paddingLeft: "20px",
						backgroundColor: "royalblue",
						cursor: "default",
					}}
					onClick={toggleExpand}
				>
					{expanded ? (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<UpOutlined />
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								height: "20px",
								backgroundColor: "royalblue",
								marginRight: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "35px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
									cursor: "pointer",
								}}
							>
								<div
									className="hover:bg-white hover:text-blue-500 "
									style={{
										width: "20px",
										height: "30px",
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
										cursor: "pointer",
									}}
								>
									<DownOutlined />
								</div>
							</div>
						</div>
					)}
				</div>
			),
			key: "0-0-0",
			children: [
				{
					title: (
						<div style={{ cursor: "default" }}>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>3.3.1 Maintain Master Data</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-1",
				},
				{
					title: (
						<div>
							<div
								style={{
									width: "350px",
									height: "30px",
									display: "flex",
									justifyContent: "space-between",
									backgroundColor: "lightskyblue",
									borderRadius: "10px",
									color: "black",
									padding: "5px 10px",
									margin: "5px",
									cursor: "default",
								}}
							>
								<div>
									<div>3.3.2 Maitain Demography</div>
								</div>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Dropdown
										menu={{ items }}
										trigger={["click"]}
										placement="bottomRight"
									>
										<HiEllipsisHorizontal
											style={{
												fontSize: "8px",
												height: "30px",
												cursor: "pointer",
												width: "30px",
												alignItems: "center",
											}}
											className="mr-4 hover:text-blue-700"
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					),
					key: "0-0-0-2",
				},
			],
		},
	];
	const item = [
		{
			key: "1",
			label: "1. HC Dashboard",
			children: (
				<>
					<div style={{ cursor: "default" }}>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataESS}
							onExpand={onExpand}
						/>
					</div>
					<div style={{ cursor: "default" }}>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataMPS}
							onExpand={onExpand}
							style={{ marginTop: "20px" }}
						/>
					</div>
				</>
			),
		},
		{
			key: "2",
			label: "2. Portal Employee Engagement Survey",
			children: (
				<>
					<div style={{ cursor: "default" }}>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataCleansingSurvey}
							onExpand={onExpand}
							style={{ marginTop: "20px" }}
						/>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataEditWorkcloud}
							onExpand={onExpand}
							style={{ marginTop: "20px" }}
						/>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataInvitedRespondentEES}
							onExpand={onExpand}
							style={{ marginTop: "20px" }}
						/>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataMasterDataEES}
							onExpand={onExpand}
							style={{ marginTop: "20px" }}
						/>
					</div>
				</>
			),
		},
		{
			key: "3",
			label: "3. Portal Manpower Statistic",
			children: (
				<>
					<div style={{ cursor: "default" }}>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataMPSDashboard}
							onExpand={onExpand}
						/>
					</div>
					<div style={{ cursor: "default" }}>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataInputMPS}
							onExpand={onExpand}
						/>
					</div>
					<div style={{ cursor: "default" }}>
						<Tree
							showLine
							switcherIcon={switcherIcon}
							defaultExpandedKeys={["0-0-0"]}
							treeData={treeDataInvitedRespondentMPS}
							onExpand={onExpand}
						/>
					</div>
				</>
			),
		},
	];

	const [isOpenAddManageParentMenu, setOpenAddManageParentMenu] =
		useState(false);

	const handleOk = () => {
		setOpenAddManageParentMenu(false);
	};
	const handleCancel = () => {
		setOpenAddManageParentMenu(false);
	};
	const handleClose = () => {
		setOpenAddManageParentMenu(false);
	};

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
					<Button
						className="bg-white text-blue-500 hover:bg-stone-200 "
						style={{
							height: "35px",
							fontSize: "14px",
							border: "1px rounded ",
						}}
						onClick={() => setOpenAddManageParentMenu(true)}
					>
						{isOpenAddManageParentMenu ? (
							<AddManageParentMenu
								show={isOpenAddManageParentMenu}
								clickOk={handleOk}
								clickCancel={handleCancel}
								handleClose={handleClose}
							/>
						) : null}
						<div
							style={{
								color: "royalblue",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<strong style={{ marginLeft: "5px" }}>Manage Parent Menu</strong>
						</div>
					</Button>
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
