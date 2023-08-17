"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import { Button, Input, Table, Modal, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import CustomMultiSelectDD from "@/components/EngagementPrediction/CustomMultiSelectDD";
import { CSDemographyValue } from "@/stores/dashboard.atom";
import { useAtomValue } from "jotai";
import AddMainMappingUser from "@/components/Modal/AddMainMappingUser";
import EditMainMappingUser from "@/components/Modal/EditMainMappingUser";

interface User {
	key: React.Key;
	email: string;
	role: string;
}
export default function MappingUserRole() {
	const { Search } = Input;
	const demographies = useAtomValue(CSDemographyValue);
	const dataSource: User[] = [];
	for (let i = 1; i < 100; i++) {
		dataSource.push({
			key: i,
			email: `astra@astra.co.id  ${i}`,
			role: "Admin CIR",
		});
	}

	const [isOpenAddMappingUser, setOpenAddMappingUser] = useState(false);
	const [isOpenEditMappingUser, setOpenEditMappingUser] = useState(false);
	const handleOk = () => {
		setOpenAddMappingUser(false);
		setOpenEditMappingUser(false);
	};
	const handleCancel = () => {
		setOpenAddMappingUser(false);
		setOpenEditMappingUser(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddMappingUser(data);
		setOpenEditMappingUser(data);
	};

	const editDataMappingUser = (idMappingUser: number) => {
		setOpenEditMappingUser(true);
		// setIdMappingUser(idMappingUser);
	};

	const { confirm } = Modal;

	const showDeleteMappingUser = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete User Permanently?",
			content: "User akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelMappingUser(id));
				muserage: "Sukses";
			},
			onCancel() {},
		});
	};

	const columnsUSER: ColumnType<any>[] = [
		{
			title: "Email",
			dataIndex: "email",
			width: "10%",
			key: "email",
		},

		{
			title: "role",
			dataIndex: "role",
			width: "10%",
			key: "role",
			render: (role) => <Tag color="blue">{role}</Tag>,
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
								onClick={() => editDataMappingUser(record.company)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteMappingUser(record.company)}
							/>
						</>
					</span>
				);
			},
		},
	];

	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState(dataSource);

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
			<div
				style={{
					maxWidth: "75rem",
					minWidth: "75rem",
					scrollbarColor: "blue",
				}}
			>
				<div>
					<BackHome text="User Management" icon={`>`} tittle={"Master User"} />
					<div className="flex justify-between px-10 py-5">
						<strong style={{ fontSize: "24PX" }}>
							Master User - Mapping User Role
						</strong>
					</div>
					{isOpenAddMappingUser ? (
						<AddMainMappingUser
							show={isOpenAddMappingUser}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
						/>
					) : null}

					{isOpenEditMappingUser ? (
						<EditMainMappingUser
							show={isOpenEditMappingUser}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
							// idMappingUser={idMappingUser}
							//   dataMappingUser={dataMappingUser}
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
									marginTop: "10px",
									marginBottom: "20px",
								}}
							>
								<div
									style={{
										width: "60%",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<div
										style={{
											paddingTop: "5px",
											marginRight: "20px",
										}}
									>
										<CustomMultiSelectDD
											data={demographies}
											title={"Filter By Role"}
											allValue
										></CustomMultiSelectDD>
									</div>
									<div
										style={{
											width: "70%",
											paddingTop: "5px",
										}}
									>
										<Search
											placeholder="Search for email"
											onSearch={handleSearch}
											allowClear
											enterButton
										/>
									</div>
								</div>
								<div>
									<Button
										className="bg-white text-blue-500 "
										style={{
											height: "40px",
											width: "170px",
											fontSize: "16px",
											padding: "5px",
											border: "1px rounded ",
											borderColor: "royalblue",
										}}
										onClick={() => setOpenAddMappingUser(true)}
									>
										<div
											className="flex justify-between px-2 "
											style={{ color: "royalblue" }}
										>
											<strong className="bigger-text">+</strong>
											<strong>Assign User Role</strong>
										</div>
									</Button>
								</div>
							</div>
							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataPerPage}
								columns={columnsUSER}
								pagination={false}
								footer={renderFooter}
							></Table>
						</div>
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
		</>
	);
}
