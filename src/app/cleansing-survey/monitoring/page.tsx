"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import { Button, Input, Table, Modal, Form, Select } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

interface DataType {
	key: React.Key;
	upload_by: string;
	upload_time: string;
	survey_tittle: string;
	company: string;
	year: number;
	created_time: string;
	excel_title: string;
	status_progress: string;
}
export default function MonitoringCleansingSurvey() {
	const { Search } = Input;
	const { Option } = Select;
	const dataSource: DataType[] = [];
	for (let i = 1; i < 100; i++) {
		dataSource.push({
			key: i,
			upload_by: `Ilmi ${i}`,
			upload_time: `${i} - 11 - 2022`,
			survey_tittle: `Employment EngangementSurvey - 2022 - PT PamapersadaNusantara ${i}`,
			company: `PT PamapersadaNusantara ${i}`,
			year: 2022,
			created_time: `${i}-07-2023 10:49:13 AM`,
			excel_title: `EES_VSR_Ilmi_20230731_102030_Asuransi_astra`,
			status_progress: `Successfully load datamart fact`,
		});
	}

	const columnsESS: ColumnType<any>[] = [
		{
			title: "Upload By",
			dataIndex: "upload_by",
			width: 150,
			key: "upload_by",
		},
		{
			width: 100,
			title: "Upload Time ",
			dataIndex: "upload_time",
			key: "upload_time",
		},

		{
			title: "Survey Title",
			dataIndex: "survey_tittle",
			width: 500,
		},
		{
			width: 250,

			title: "Company Group ",
			dataIndex: "company",
			key: "company",
		},
		{
			width: 70,

			title: "Year",
			dataIndex: "year",
			key: "year",
		},
		{
			width: 100,

			title: "Created Time",
			dataIndex: "created_time",
			key: "created_time",
		},
		{
			width: 450,

			title: "Excel Title",
			dataIndex: "excel_title",
			key: "excel_title",
		},
		{
			width: 250,

			title: "Status Progress",
			dataIndex: "status_progress",
			key: "status_progress",
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
			<div>
				<BackHome text="EES" icon={`>`} tittle={"Cleansing Survey"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>
						Cleansing Survey - Monitoring Data Survey Validation
					</strong>
				</div>

				<div className="flex justify-center px-10 pb-5">
					<div className="my-15 rounded-md border-none bg-white p-5">
						<div className="border-nonepy-1 flex justify-between rounded border-none ">
							<div style={{ display: "flex" }}>
								<div style={{ width: "300px", marginRight: "10px" }}>
									<Select
										style={{
											width: "300px",
										}}
										placeholder="Filter by Company"
									>
										<Option value="line1">PT. Financial Service </Option>
										<Option value="line2">PT. Management Service </Option>
										<Option value="line3">PT. Information Service </Option>
									</Select>
								</div>
								<div style={{ width: "200px" }}>
									<Select
										style={{
											width: "300px",
										}}
										placeholder="Filter by Year"
									>
										<Option value="line1">2023 </Option>
										<Option value="line2">2022 </Option>
										<Option value="line3">2021 </Option>
									</Select>
								</div>
							</div>

							<div style={{ width: "400px" }}>
								<Search
									placeholder="Search Upload Name"
									onSearch={handleSearch}
									allowClear
									enterButton
								/>
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
								}}
								rowClassName={(record, index) =>
									index % 2 === 0 ? "white-row" : "bg-stone-100"
								}
							></Table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
