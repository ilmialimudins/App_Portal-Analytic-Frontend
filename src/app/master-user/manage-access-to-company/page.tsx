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
import EditManageAccess from "@/components/Modal/EditManageAccess";
import { FaPlus } from "react-icons/fa";
import AddMainManageAccess from "@/components/Modal/AddMainManageAccess";

interface ManageAccess {
	key: React.Key;
	email: string;
	business_line: string;
	survey_group_company: string;
	access_to_company: string;
}
export default function ManageAccesToCompany() {
	const { Search } = Input;
	const dataSource: ManageAccess[] = [];
	for (let i = 1; i < 100; i++) {
		dataSource.push({
			key: i,
			email: `astra@astra.co.id  ${i}`,
			business_line: `Financial Service ${i}`,
			survey_group_company: `Astra Property ${i}`,
			access_to_company: `AIHO`,
		});
	}

	const [isOpenAddMappingManageAccess, setOpenAddMappingManageAccess] =
		useState(false);
	const [isOpenEditMappingManageAccess, setOpenEditMappingManageAccess] =
		useState(false);
	const handleOk = () => {
		setOpenAddMappingManageAccess(false);
		setOpenEditMappingManageAccess(false);
	};
	const handleCancel = () => {
		setOpenAddMappingManageAccess(false);
		setOpenEditMappingManageAccess(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddMappingManageAccess(data);
		setOpenEditMappingManageAccess(data);
	};

	const editDataMappingManageAccess = (idMappingManageAccess: number) => {
		setOpenEditMappingManageAccess(true);
		// setIdMappingManageAccess(idMappingManageAccess);
	};

	const { confirm } = Modal;

	const showDeleteMappingManageAccess = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Access User Permanently?",
			content: "Access User akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelMappingManageAccess(id));
				mManageAccessage: "Sukses";
			},
			onCancel() {},
		});
	};

	const columnsManageAccess: ColumnType<any>[] = [
		{
			title: "Email",
			dataIndex: "email",
			width: "10%",
			key: "email",
		},

		{
			title: "Business Line",
			dataIndex: "business_line",
			width: "10%",
			key: "business_line",
		},
		{
			title: "Survey Group Company",
			dataIndex: "survey_group_company",
			width: "10%",
			key: "survey_group_company",
		},
		{
			title: "Access To Company",
			dataIndex: "access_to_company",
			width: "10%",
			key: "access_to_company",
			render: (access_to_company) => (
				<Tag color="blue">{access_to_company}</Tag>
			),
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
								onClick={() => editDataMappingManageAccess(record.company)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteMappingManageAccess(record.company)}
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
					<BackHome
						text="ManageAccess Management"
						icon={`>`}
						tittle={"Master ManageAccess"}
					/>
					<div className="flex justify-between px-10 py-5">
						<strong style={{ fontSize: "24PX" }}>
							Master ManageAccess - Manage Access to Company
						</strong>
					</div>
					{isOpenAddMappingManageAccess ? (
						<AddMainManageAccess
							show={isOpenAddMappingManageAccess}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
						/>
					) : null}

					{isOpenEditMappingManageAccess ? (
						<EditManageAccess
							show={isOpenEditMappingManageAccess}
							clickOk={handleOk}
							clickCancel={handleCancel}
							handleClose={handleClose}
							// idMappingManageAccess={idMappingManageAccess}
							//   dataMappingManageAccess={dataMappingManageAccess}
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
								<div>
									<Button
										className="bg-white text-blue-500 "
										style={{
											height: "40px",
											width: "150px",
											fontSize: "14px",
											padding: "5px",
											border: "1px rounded ",
											borderColor: "royalblue",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
										onClick={() => setOpenAddMappingManageAccess(true)}
									>
										<div
											className="flex items-center justify-center"
											style={{ color: "royalblue" }}
										>
											<FaPlus style={{ marginRight: "10px" }} />
											<strong>Add Access</strong>
										</div>
									</Button>
								</div>
							</div>
							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataPerPage}
								columns={columnsManageAccess}
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
