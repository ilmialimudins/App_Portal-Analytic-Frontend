"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import AddManageParentMenu from "@/components/Modal/AddManageParentMenu";

import BackHome from "@/components/Other/BackHome";
import { Button, Input, Table, Modal, Tabs, Select, Divider } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import {
	FaPlus,
	FaEdit,
	FaTrash,
	FaEllipsisH,
	FaChevronDown,
	FaChevronUp,
} from "react-icons/fa";

interface TreeItemProps {
	text: string;
	showChildren: boolean;
	onToggleChildren: () => void;
}
interface TreeNodeProps {
	text: string;
	showChildren: boolean;
	onToggleChildren: () => void;
}

export default function MantainMenu() {
	const onChangeTab = (key: string) => {
		console.log(key);
	};
	const TreeNode: React.FC<TreeNodeProps> = ({
		text,
		showChildren,
		onToggleChildren,
	}) => {
		const [childrenVisible, setChildrenVisible] = useState(showChildren);

		const handleToggleChildren = () => {
			setChildrenVisible(!childrenVisible);
		};
		return (
			<div>
				<TreeItem
					text={text}
					showChildren={childrenVisible}
					onToggleChildren={handleToggleChildren}
				/>
				{childrenVisible && (
					<div style={{ marginLeft: "20px" }}>
						<TreeItem
							text="Child 1"
							showChildren={showChildren}
							onToggleChildren={handleToggleChildren}
						/>
						<TreeItem
							text="Child 2"
							showChildren={showChildren}
							onToggleChildren={handleToggleChildren}
						/>
						<TreeItem
							text="Child 3"
							showChildren={showChildren}
							onToggleChildren={handleToggleChildren}
						/>
						<TreeItem
							text="Child 4"
							showChildren={showChildren}
							onToggleChildren={handleToggleChildren}
						/>
						<TreeItem
							text="Child 5"
							showChildren={showChildren}
							onToggleChildren={handleToggleChildren}
						/>
					</div>
				)}
			</div>
		);
	};
	const item = [
		{
			key: "1",
			label: "1. HC Dashboard",
			children: <></>,
		},
		{
			key: "2",
			label: "2. Portal Employee Engagement Survey",
			children: (
				<>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						Portal
					</div>
				</>
			),
		},
		{
			key: "3",
			label: "3. Portal Manpower Statistic",
			children: (
				<>
					<div>
						<div
							style={{
								backgroundColor: "blue",
								borderRadius: "10px",
								color: "white",
								padding: "5px 10px",
								margin: "5px",
							}}
						>
							1.1 EES
						</div>
						<TreeNode
							text="Tree 1"
							showChildren={false}
							onToggleChildren={() => {}}
						/>
						<TreeNode
							text="Tree 2"
							showChildren={false}
							onToggleChildren={() => {}}
						/>
						<TreeNode
							text="Tree 3"
							showChildren={false}
							onToggleChildren={() => {}}
						/>
						<TreeNode
							text="Tree 4"
							showChildren={false}
							onToggleChildren={() => {}}
						/>
						<TreeNode
							text="Tree 5"
							showChildren={false}
							onToggleChildren={() => {}}
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
	const handleClose = (data: boolean) => {
		setOpenAddManageParentMenu(false);
	};

	const TreeItem: React.FC<TreeItemProps> = ({
		text,
		showChildren,
		onToggleChildren,
	}) => {
		return (
			<div style={{ display: "flex", alignItems: "center" }}>
				{showChildren ? (
					<FaChevronUp onClick={onToggleChildren} />
				) : (
					<FaChevronDown onClick={onToggleChildren} />
				)}
				<div
					style={{
						backgroundColor: "blue",
						borderRadius: "10px",
						color: "white",
						padding: "5px 10px",
						margin: "5px",
					}}
				>
					{text}
				</div>
				<div style={{ marginLeft: "auto" }}>
					<FaEdit style={{ marginRight: "5px" }} />
					<FaTrash style={{ marginRight: "5px" }} />
					<FaEllipsisH />
				</div>
			</div>
		);
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
							backgroundColor: "green",
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
