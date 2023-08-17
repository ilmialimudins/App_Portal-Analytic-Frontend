"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import { Button, Input, Table, Modal, Dropdown, Divider } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { ReactElement, useState } from "react";

import { DeleteFilled, EditFilled } from "@ant-design/icons";
import AddMainHcDashboard from "@/components/Modal/AddMainHcDasboard";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import { HiEllipsisHorizontal, HiEllipsisVertical } from "react-icons/hi2";
import EditMainHcDashboard from "@/components/Modal/EditMainHcDasboard";
import AddWorkspace from "@/components/Modal/AddWorkspace";

interface EESWorkspace {
	key: React.Key;
	report: string;
	section: string;
}
interface MPSWorkspace {
	key: React.Key;
	report: string;
	section: string;
}
interface MenuItem {
	key: string;
	label: ReactElement;
	onClick?: () => void;
}
export default function MaintainHCDaxhboard() {
	const { Search } = Input;
	const dataSourceEES: EESWorkspace[] = [];
	const dataSourceMPS: MPSWorkspace[] = [];
	for (let i = 1; i < 5; i++) {
		dataSourceEES.push({
			key: i,
			report: `SPM ${i}`,
			section: "-",
		});
		dataSourceMPS.push({
			key: i,
			report: `MPS sustainibility ${i}`,
			section: "-	",
		});
	}
	const [isOpenAddMainEES, setOpenAddMainEES] = useState(false);
	const [isOpenAddWorkspace, setOpenAddWorkspace] = useState(false);
	const [isOpenEditMainEES, setOpenEditMainEES] = useState(false);
	const handleOk = () => {
		setOpenAddMainEES(false);
		setOpenEditMainEES(false);
		setOpenAddWorkspace(false);
	};
	const handleCancel = () => {
		setOpenAddMainEES(false);
		setOpenAddWorkspace(false);
		setOpenEditMainEES(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddMainEES(data);
		setOpenAddWorkspace(false);
		setOpenEditMainEES(data);
	};
	const editDataMainEES = (idMainEES: number) => {
		setOpenEditMainEES(true);
		// setIdMainEES(idMainEES);
	};
	const { confirm } = Modal;
	const showDeleteMainEES = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Report Permanently?",
			content:
				"Report 'Survey Progress Monitoring' dan section ana dihapus dari workspace Anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelMainEES(id));
				muserage: "Sukses";
			},
			onCancel() {},
		});
	};
	const columnsEESWorkspace: ColumnType<any>[] = [
		{
			title: "Report",
			dataIndex: "report",
			key: "report",
			width: "20",
		},
		{
			title: "Section",
			dataIndex: "section",
			key: "section",
		},

		{
			title: "Action",

			key: "action",
			align: "center",
			width: "5%",

			render: (_: number, record) => {
				return (
					<span className="flex justify-center">
						<>
							<EditFilled
								style={{ color: "blue", fontSize: "15px" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => editDataMainEES(record.company)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteMainEES(record.company)}
							/>
						</>
					</span>
				);
			},
		},
	];
	const columnsMPSWorkspace: ColumnType<any>[] = [
		{
			title: "Report",
			dataIndex: "report",
			key: "report",
			width: "20",
		},
		{
			title: "Section",
			dataIndex: "section",
			key: "section",
		},

		{
			title: "Action",

			key: "action",
			align: "center",
			width: "5%",

			render: (_: number, record) => {
				return (
					<span className="flex justify-center">
						<>
							<EditFilled
								style={{ color: "blue", fontSize: "15px" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => editDataMainEES(record.company)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteMainEES(record.company)}
							/>
						</>
					</span>
				);
			},
		},
	];
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
					Edit Row
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
					<FaTrash
						style={{
							color: "red",
							fontSize: "12px",
							marginRight: "5px",
							marginTop: "5px",
						}}
						className="hover:text-red-700"
					/>
					Delete Row
				</div>
			),
			// onClick: () => showDeleteCleansingSurvey(record.age),
		},
	];
	return (
		<>
			<div
				style={{
					maxWidth: "75rem",
					minWidth: "75rem",
					scrollbarColor: "blue",
				}}
			>
				<div>
					<BackHome text="User Management" icon={`>`} tittle={"Master Menu"} />
					<div className="flex justify-between px-10 py-5">
						<strong style={{ fontSize: "24PX" }}>
							Master Menu - Maintain HC Dashboard
						</strong>
					</div>
					{isOpenAddMainEES ? (
						<AddMainHcDashboard
							show={isOpenAddMainEES}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
						/>
					) : null}
					{isOpenAddWorkspace ? (
						<AddWorkspace
							show={isOpenAddWorkspace}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
						/>
					) : null}

					{isOpenEditMainEES ? (
						<EditMainHcDashboard
							show={isOpenEditMainEES}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
							// idMainEES={idMainEES}
							//   dataMainEES={dataMainEES}
						/>
					) : null}

					<div className="flex justify-center px-10 pb-5">
						<div
							className="my-15 rounded-md border-none bg-white "
							style={{ width: "100%", padding: "20px" }}
						>
							<div
								className="border-nonepy-1 flex justify-between rounded border-none bg-white "
								style={{
									width: "100%",
									marginBottom: "20px",
								}}
							>
								<div
									style={{
										width: "100%",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<div style={{ width: 700 }}>ESS Workspace</div>
									<div
										style={{
											display: "flex",
										}}
									>
										<Button
											className="bg-white text-blue-500 "
											style={{
												height: "35px",
												fontSize: "16px",
												border: "1px rounded ",
												borderColor: "royalblue",
											}}
											onClick={() => setOpenAddMainEES(true)}
										>
											<div
												style={{
													color: "royalblue",
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<strong className="mr-20px bigger-text">+</strong>
												<strong style={{ marginLeft: "5px" }}>
													Add Report
												</strong>
											</div>
										</Button>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												margin: "0 0px 0 10px",
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
							</div>
							<Divider />

							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataSourceEES}
								columns={columnsEESWorkspace}
								pagination={false}
							></Table>
						</div>
					</div>
					<div className="flex justify-center px-10 pb-5">
						<div
							className="my-15 rounded-md border-none bg-white "
							style={{ width: "100%", padding: "20px" }}
						>
							<div
								className="border-nonepy-1 flex justify-between rounded border-none bg-white "
								style={{
									width: "100%",
									marginBottom: "20px",
								}}
							>
								<div
									style={{
										width: "100%",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<div style={{ width: 700 }}>MPS Workspace</div>
									<div
										style={{
											display: "flex",
										}}
									>
										<Button
											className="bg-white text-blue-500 "
											style={{
												height: "35px",
												fontSize: "16px",
												border: "1px rounded ",
												borderColor: "royalblue",
											}}
											onClick={() => setOpenAddMainEES(true)}
										>
											<div
												style={{
													color: "royalblue",
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<strong className="mr-20px bigger-text">+</strong>
												<strong style={{ marginLeft: "5px" }}>
													Add Report
												</strong>
											</div>
										</Button>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												margin: "0 0px 0 10px",
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
							</div>
							<Divider />

							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataSourceMPS}
								columns={columnsMPSWorkspace}
								pagination={false}
							></Table>
						</div>
					</div>
					<div className="flex justify-center px-10 pb-5">
						<div
							className="my-15 rounded-md border-none bg-transparent "
							style={{
								display: "flex",
								border: "1px dashed blue",
								justifyContent: "center",
								alignItems: "center",
								height: "40px",
								width: "100%",
								color: "blue",
							}}
							onClick={() => setOpenAddWorkspace(true)}
						>
							<FaPlusCircle />
							<label style={{ marginLeft: "10px" }}>Create Workspace</label>
						</div>
					</div>
				</div>
				<div
					style={{
						backgroundColor: "white",
						height: "30px",
						marginTop: "50px",
					}}
				></div>
			</div>
		</>
	);
}
