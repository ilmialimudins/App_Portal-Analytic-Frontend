"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome, { ToLink } from "@/components/Other/BackHome";
import { Button, Input, Table, Select, DatePickerProps, Modal } from "antd";

import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import AddDemography from "@/components/Modal/AddDemography";

interface DataType {
	key: React.Key;
	demography_name: string;
	demography_alias: string;
}
export default function MaintainDemographySPM() {
	const { Option } = Select;

	const dataSource: DataType[] = [];
	for (let i = 1; i < 100; i++) {
		dataSource.push({
			key: i,
			demography_name: `Directorate ${i}`,
			demography_alias: `DIR ${i}`,
		});
	}

	const { confirm } = Modal;
	const showDeleteDemographySPM = (id: DataType) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Demography Permanently?",
			content: "Demography 'Directorate' akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelDemographyEES(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const columnsESS: ColumnType<any>[] = [
		{
			width: 70,

			title: "Demography Name",
			dataIndex: "demography_name",
			key: "demography_name",
		},

		{
			width: 70,

			title: "Demography Alias",
			dataIndex: "demography_alias",
			key: "demography_alias",
		},
		{
			width: 10,

			title: "Action",
			dataIndex: "action",
			key: "action",
			align: "center",
			render: (action, record) => {
				return (
					<span className="flex justify-center">
						<>
							<FaTrash
								style={{ color: "red", fontSize: "15px" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => showDeleteDemographySPM(record.demography_alias)}
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

	const [isOpenAddDemography, setOpenAddDemography] = useState(false);
	const handleOk = () => {
		setOpenAddDemography(false);
	};

	const handleCancel = () => {
		setOpenAddDemography(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddDemography(data);
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
					<BackHome text={"EES"} icon={">"} />
					<ToLink
						text="Survey Progress Monitoring"
						icon=">"
						link="/"
						tittle="Invited Respondent SPM"
					/>
				</div>

				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>
						Invited Respondent SPM - Maintain Demography
					</strong>
				</div>
				{isOpenAddDemography ? (
					<AddDemography
						show={isOpenAddDemography}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}
				<div
					className=" flex justify-center px-10 py-5"
					style={{ width: "100%" }}
				>
					<div
						className=" rounded-md border-none  bg-white px-5 py-5 "
						style={{
							maxWidth: "99.5%",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none py-5"
							style={{ padding: "0px 10px 0px 10px" }}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<div style={{ marginRight: "20px" }}>
									<Select
										style={{ width: "350px" }}
										placeholder="Filter by Company"
									>
										<Option value="line1">PT. Financial Service </Option>
										<Option value="line2">PT. Management Service </Option>
										<Option value="line3">PT. Information Service </Option>
									</Select>
								</div>

								<div>
									<Select
										style={{ width: "350px" }}
										placeholder="Filter by Company"
									>
										<Option value="line1">PT. Financial Service </Option>
										<Option value="line2">PT. Management Service </Option>
										<Option value="line3">PT. Information Service </Option>
									</Select>
								</div>
							</div>
							<div>
								<Button
									htmlType="reset"
									onClick={() => setOpenAddDemography(true)}
									className=" mr-4 bg-white hover:bg-stone-100  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
									style={{
										width: "200px",
										height: "40px",
										fontSize: "14px",
										transition: "ease-in ",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										color: "blue",
									}}
								>
									<FaPlus style={{ marginRight: "10px" }} />
									Add Demography
								</Button>
							</div>
						</div>
						<div>
							<Table
								size="middle"
								dataSource={dataPerPage}
								columns={columnsESS}
								pagination={false}
								footer={renderFooter}
								bordered
								scroll={{ y: "true" }}
								style={{
									overflow: "auto",
									marginTop: "10px",
									height: "calc(61vh - 55px)",
									width: "calc(200vh - 55px)",
									padding: "10px",
								}}
								rowClassName={(record, index) =>
									index % 2 === 0 ? "white-row" : "bg-stone-100"
								}
							></Table>
						</div>
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
