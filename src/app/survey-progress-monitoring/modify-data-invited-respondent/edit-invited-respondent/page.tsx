"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome, { ToLink } from "@/components/Other/BackHome";
import {
	Button,
	Input,
	Table,
	Select,
	DatePicker,
	DatePickerProps,
	Divider,
	Modal,
	Dropdown,
} from "antd";
import { EditFilled } from "@ant-design/icons";

import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { ReactElement, useEffect, useState } from "react";
import { FaPlus, FaPlusCircle, FaTrash } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import AddSection from "@/components/Modal/AddSection";
import EditInvitedRespondents from "@/components/Modal/EditInvitedRespondent";

interface Diroctorate {
	key: React.Key;
	no: number;
	directorate: string;
	invited_respondent: string;
}
interface Diroctorate {
	key: React.Key;
	no: number;
	directorate: string;
	invited_respondent: string;
}
interface MenuItem {
	key: string;
	label: ReactElement;
	onClick?: () => void;
}
export default function EditInvitedRespondent() {
	const { Search } = Input;
	const { Option } = Select;

	const dataSource: Diroctorate[] = [];
	for (let i = 1; i < 100; i++) {
		dataSource.push({
			key: i,
			no: i,
			directorate: `Marketing & After Service ${2000 + i}`,
			invited_respondent: `${10 + i}`,
		});
	}

	const columnsESS: ColumnType<any>[] = [
		{
			width: 5,

			title: "no",
			dataIndex: "no",
			key: "no",
		},

		{
			width: 70,

			title: "Directorate",
			dataIndex: "directorate",
			key: "directorate",
		},

		{
			width: 30,

			title: "Invited Respondent",
			dataIndex: "invited_respondent",
			key: "invited_respondent",
			render: (_: number, record: Diroctorate) => {
				const invitedRespondentData = record.invited_respondent;

				return (
					<span className="justify-left flex">
						<>
							<div
								style={{
									width: "200px",
									height: "30px",
									border: "1px solid grey",
									borderRadius: "10px",
									marginLeft: "10px",
								}}
							>
								<div
									style={{
										marginLeft: "10px",
										alignItems: "center",
										display: "flex",
										paddingTop: "3px",
									}}
								>
									{invitedRespondentData}
								</div>
							</div>
						</>
					</span>
				);
			},
		},
		{
			width: 10,

			title: "Action",
			dataIndex: "action",
			key: "action",
			render: (_: number, record: Diroctorate) => {
				return (
					<span className="flex justify-center">
						<>
							<FaTrash
								style={{ color: "red", fontSize: "15px", cursor: "pointer" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => showDeleteDirectorate(record.no)}
							/>
						</>
					</span>
				);
			},
		},
	];

	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState(dataSource);
	const { confirm } = Modal;

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
					<FaTrash
						style={{
							color: "red",
							fontSize: "12px",
							marginRight: "5px",
							marginTop: "5px",
						}}
						className="mr-4 hover:text-blue-700"
					/>
					Delete Section
				</div>
			),
			// onClick: () => (record.age),
		},
	];
	const showDeleteDirectorate = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete This Directorate from List?",
			content:
				"Apakah anda yakin akan menghapus directorate ' Researh & Development and Production dari list ini",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelCleansingSurvey(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};
	const [isOpenAddSection, setOpenAddSection] = useState(false);
	const [isOpenEditInvitedRespondent, setOpenEditInvitedRespondent] =
		useState(false);
	const handleOk = () => {
		setOpenAddSection(false);
		setOpenEditInvitedRespondent(false);
	};

	const handleCancel = () => {
		setOpenEditInvitedRespondent(false);
		setOpenAddSection(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddSection(data);
		setOpenEditInvitedRespondent(false);
	};

	useEffect(() => {
		const filtered = filterData(searchQuery);
		setFilteredData(filtered);
	}, [searchQuery]);

	const filterData = (query: string) => {
		return dataSource.filter((item) =>
			Object.values(item).some(
				(value) =>
					typeof value === "string" &&
					value.toLowerCase().includes(query.toLowerCase())
			)
		);
	};
	const handleSearch = (value: string) => {
		setSearchQuery(value);
	};

	const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

	const handlePrevPage = () => {
		if (pagination.current > 1) {
			setPagination((prevPagination) => ({
				...prevPagination,
				current: prevPagination.current - 1,
			}));
		}
	};

	const handleNextPage = () => {
		if (
			pagination.current < Math.ceil(dataSource.length / pagination.pageSize)
		) {
			setPagination((prevPagination) => ({
				...prevPagination,
				current: prevPagination.current + 1,
			}));
		}
	};
	const handlePageChange = (page: number) => {
		setPagination((prevPagination) => ({
			...prevPagination,
			current: page,
		}));
	};
	const renderPaginationButtons = () => {
		const totalPageCount = Math.ceil(dataSource.length / pagination.pageSize);
		const currentPage = pagination.current;
		const pageButtons = [];

		const createPageButton = (page: number, active: boolean) => (
			<Button
				key={page}
				type={active ? "primary" : "default"}
				onClick={() => handlePageChange(page)}
			>
				{page}
			</Button>
		);

		pageButtons.push(
			<Button key="prev" onClick={handlePrevPage} disabled={currentPage === 1}>
				Previous
			</Button>
		);

		if (totalPageCount <= 7) {
			for (let page = 1; page < totalPageCount; page++) {
				pageButtons.push(createPageButton(page, page === currentPage));
			}
		} else {
			if (currentPage <= 4) {
				for (let page = 1; page <= 6; page++) {
					pageButtons.push(createPageButton(page, page === currentPage));
				}
				pageButtons.push(<Button key="ellipsis1">...</Button>);
				pageButtons.push(
					createPageButton(totalPageCount, currentPage === totalPageCount)
				);
			} else if (currentPage >= totalPageCount - 4) {
				pageButtons.push(createPageButton(1, currentPage === 1));
				pageButtons.push(<Button key="ellipsis2">...</Button>);
				for (let page = totalPageCount - 5; page < totalPageCount; page++) {
					pageButtons.push(createPageButton(page, page === currentPage));
				}
			} else {
				pageButtons.push(createPageButton(1, currentPage === 1));
				pageButtons.push(<Button key="ellipsis3">...</Button>);
				for (let page = currentPage - 2; page <= currentPage + 2; page++) {
					pageButtons.push(createPageButton(page, page === currentPage));
				}
				pageButtons.push(<Button key="ellipsis4">...</Button>);
				pageButtons.push(
					createPageButton(totalPageCount, currentPage === totalPageCount)
				);
			}
		}

		pageButtons.push(
			<Button
				key="next"
				onClick={handleNextPage}
				disabled={currentPage === totalPageCount}
			>
				Next
			</Button>
		);

		return <div>{pageButtons}</div>;
	};
	const dataPerPage = filteredData.slice(
		(pagination.current - 1) * pagination.pageSize,
		pagination.current * pagination.pageSize
	);

	const renderFooter = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPage.length} data found`} {renderPaginationButtons()}
			</div>
		);
	};
	return (
		<>
			<div>
				<div className="flex ">
					<BackHome
						text={"Back to modify Invited Respondent"}
						link="/modify-data-invited-respondent"
						icon=""
					/>
				</div>
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>Edit Invited Respondent</strong>
				</div>

				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white p-5 "
						style={{
							width: "100%",
						}}
					>
						{isOpenEditInvitedRespondent ? (
							<EditInvitedRespondents
								show={isOpenEditInvitedRespondent}
								clickOk={handleOk}
								clickCancel={handleCancel}
								handleClose={handleClose}
							/>
						) : null}
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "18px",
									marginBottom: "10px",
								}}
							>
								Info
							</strong>
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								display: "flex",
								padding: "10px",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{
									maxWidth: "50%",
									minWidth: "50%",
									overflow: "auto",
								}}
							>
								<div style={{ display: "flex", overflow: "hidden" }}>
									<div
										style={{
											width: "150px",
											marginBottom: "30px",
										}}
									>
										Company Group
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "50px",
											paddingTop: "2px",
										}}
									>
										Financial Service
									</div>
								</div>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "150px",
											marginBottom: "30px",
										}}
									>
										Company Name
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "50px",
											paddingTop: "2px",
										}}
									>
										Surya Artha
									</div>
								</div>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "150px",
											marginBottom: "30px",
										}}
									>
										Survey Year
									</div>

									<div
										style={{
											fontSize: "14px",
											marginLeft: "50px",
											paddingTop: "2px",
										}}
									>
										2022
									</div>
								</div>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "150px",
											marginBottom: "30px",
										}}
									>
										Start Survey
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "50px",
											paddingTop: "2px",
										}}
									>
										22 - 10-2022
									</div>
								</div>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "150px",
											marginBottom: "30px",
										}}
									>
										Close Survey
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "50px",
											paddingTop: "5px",
										}}
									>
										24 - 10 -2022
									</div>
								</div>
							</div>
							<div style={{ maxWidth: "50%", minWidth: "50%" }}>
								<div
									style={{
										display: "flex",
										maxWidth: "100%",
										overflow: "hidden",
									}}
								>
									<div style={{ fontSize: "1rem", marginBottom: "30px" }}>
										SurveyID
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "20px",
											paddingTop: "2px",
										}}
									>
										<div style={{ display: "flex" }}>
											<div
												className="bg-blue-200"
												style={{
													width: "110px",
													height: "55",
													borderRadius: "20px",
													display: "flex",
													justifyContent: "center",
													padding: "5px",
												}}
											>
												24 - 10 -2022
											</div>
											<div
												className="bg-blue-200"
												style={{
													width: "110px",
													height: "55",
													borderRadius: "20px",
													display: "flex",
													justifyContent: "center",
													padding: "5px",
													marginLeft: "20px",
												}}
											>
												24 - 10 -2022
											</div>
											<div
												className="bg-blue-200"
												style={{
													width: "110px",
													height: "55",
													borderRadius: "20px",
													display: "flex",
													justifyContent: "center",
													padding: "5px",
													marginLeft: "20px",
												}}
											>
												24 - 10 -2022
											</div>
											<div
												className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "80px",
													height: "55",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
												}}
												onClick={() => {
													setOpenEditInvitedRespondent(true);
												}}
											>
												<EditFilled
													style={{
														marginRight: "15px",
														paddingTop: "3px",
													}}
												/>
												Edit
											</div>
										</div>
									</div>
								</div>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "180px",
											marginBottom: "30px",
										}}
									>
										Total Invited Company
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "20px",
											paddingTop: "2px",
										}}
									>
										<div
											style={{
												width: "90px",
												height: "40px",
												display: "flex",
												alignItems: "center",
												justifyContent: "left",
												paddingLeft: "10px",
												border: "1px solid  rgba(128, 128, 128, 0.5)",
												color: "rgba(128, 128, 128, 0.5)",
											}}
										>
											0
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white p-5 "
						style={{
							width: "100%",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "18px",
									marginBottom: "10px",
								}}
							>
								Directorate
							</strong>
							<Dropdown
								menu={{ items }}
								trigger={["click"]}
								placement="bottomRight"
							>
								<HiEllipsisVertical
									style={{
										fontSize: "8px",
										height: "20px",
										cursor: "pointer",
										width: "50px",
										alignItems: "center",
										boxShadow: "-5px 0 5px -5px rgba(0, 0, 0, 0.5)",
									}}
									className="mr-4 hover:text-blue-700"
								/>
							</Dropdown>
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div
								className="border-nonepy-1  rounded border-none "
								style={{
									padding: "0px 10px 0px 10px",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										width: "500px",
									}}
								>
									<Search
										placeholder="Search Upload Name"
										onSearch={handleSearch}
										allowClear
										enterButton
									/>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "0px 10px 0px 10px",
									}}
								>
									<Button
										htmlType="reset"
										// onClick={}
										className=" mr-4 bg-white hover:bg-stone-100  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
										style={{
											width: "170px",
											height: "40px",
											fontSize: "14px",
											transition: "ease-in ",
											marginBottom: "10px",
											marginTop: "5px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											color: "blue",
										}}
									>
										<FaPlus style={{ marginRight: "10px" }} />
										Add Directorate
									</Button>
								</div>
							</div>
							<div>
								<Table
									size="middle"
									dataSource={dataPerPage}
									columns={columnsESS}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										overflow: "auto",
										marginTop: "10px",

										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white p-5 "
						style={{
							width: "100%",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "18px",
									marginBottom: "10px",
								}}
							>
								Divison
							</strong>
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div
								className="border-nonepy-1  rounded border-none "
								style={{
									padding: "0px 10px 0px 10px",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										width: "500px",
									}}
								>
									<Search
										placeholder="Search Upload Name"
										onSearch={handleSearch}
										allowClear
										enterButton
									/>
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "0px 10px 0px 10px",
									}}
								>
									<Button
										htmlType="reset"
										// onClick={}
										className=" mr-4 bg-white hover:bg-stone-100  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
										style={{
											width: "170px",
											height: "40px",
											fontSize: "14px",
											transition: "ease-in ",
											marginBottom: "10px",
											marginTop: "5px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											color: "blue",
										}}
									>
										<FaPlus style={{ marginRight: "10px" }} />
										Add Division
									</Button>
								</div>
							</div>
							<div>
								<Table
									size="middle"
									dataSource={dataPerPage}
									columns={columnsESS}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										overflow: "auto",
										marginTop: "10px",

										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center px-10 pb-5">
					<div
						className=" rounded-md border-none   "
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "centers",
						}}
					>
						<Button
							className=" text-blue-500 hover:bg-blue-200 "
							style={{
								width: "100%",
								height: "40px",
								fontSize: "16px",
								border: "2px dashed rgba(0, 0, 255, 0.5) ",
							}}
							onClick={() => setOpenAddSection(true)}
						>
							<div
								className="flex justify-center "
								style={{ color: "royalblue" }}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<FaPlusCircle />
									<strong className="px-2">Add Section</strong>
								</div>
							</div>
						</Button>
						;
					</div>
				</div>
				<div
					style={{
						backgroundColor: "white",
						height: "50px",
						marginTop: "100px",
					}}
				></div>
			</div>
		</>
	);
}
