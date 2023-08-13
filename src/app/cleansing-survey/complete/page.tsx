"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";

import BackHome from "@/components/Other/BackHome";
import { Button, Input, Table, Modal, Tabs, Select, Divider } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

interface DataType {
	key: React.Key;
	company: string;
	survey_id: number;
	title_survey: string;
	date_version: string;
	user_name: string;
	validated_time: string;
}
export default function CompleteCleansingSurvey() {
	const { Search } = Input;
	const { Option } = Select;

	const dataSourceValidation: DataType[] = [];
	for (let i = 5; i < 100; i++) {
		dataSourceValidation.push({
			key: i,
			company: `PT. PamaPersada Nusantara  ${2020 + i}`,
			survey_id: 3000 + i,
			title_survey: `Employment EngangementSurvey - 2022 - PT PamapersadaNusantara ${i}`,
			date_version: `${i}-07-2022`,
			user_name: `Ilmi `,
			validated_time: `${i + 1}-07-2022`,
		});
	}

	const { confirm } = Modal;

	const columnsValidation: ColumnType<any>[] = [
		{
			title: "Company",
			dataIndex: "company",
			key: "company",
			width: 350,
			render: (text: string) => <a>{text}</a>,
		},
		{
			title: "Survey Id",
			dataIndex: "survey_id",
			key: "survey_id",
			width: 100,
		},
		{
			title: "Title Survey",
			dataIndex: "title_survey",
			key: "title_survey",
			width: 350,
		},
		{
			title: "Date Version",
			dataIndex: "date_version",
			key: "date_version",
			width: 100,
		},
		{
			title: "User Name",
			dataIndex: "user_name",
			key: "user_name",
			width: 200,
		},
		{
			title: "Validated Time",
			dataIndex: "Validated Time",
			key: "Validated Time",
			width: 200,
		},
	];

	const [searchQuery, setSearchQuery] = useState("");
	const [filteredDataValidation, setFilteredDataValidation] =
		useState(dataSourceValidation);

	useEffect(() => {
		const filteredValidation = filterDataValidation(searchQuery);
		setFilteredDataValidation(filteredValidation);
	}, [searchQuery]);

	const filterDataValidation = (query: string) => {
		return dataSourceValidation.filter((item) =>
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

	const handleNextPageValidation = () => {
		if (
			pagination.current <
			Math.ceil(dataSourceValidation.length / pagination.pageSize)
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
	const renderPaginationButtonsValidation = () => {
		const totalPageCount = Math.ceil(
			dataSourceValidation.length / pagination.pageSize
		);

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
			<Button
				style={{ color: "blue" }}
				key="prev"
				onClick={handlePrevPage}
				disabled={currentPage === 1}
			>
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
				style={{ color: "blue" }}
				key="next"
				onClick={handleNextPageValidation}
				disabled={currentPage === totalPageCount}
			>
				Next
			</Button>
		);
		return <div>{pageButtons}</div>;
	};

	const dataPerPageValidation = filteredDataValidation.slice(
		(pagination.current - 1) * pagination.pageSize,
		pagination.current * pagination.pageSize
	);

	const renderFooterValidation = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPageValidation.length} data found`}
				{renderPaginationButtonsValidation()}
			</div>
		);
	};

	const onChangeTab = (key: string) => {
		console.log(key);
	};
	const item = [
		{
			key: "1",
			label: "Need Validation",
			children: (
				<>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
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
									placeholder="Filter by Date Version"
								>
									<Option value="line1">12-11-2023 </Option>
									<Option value="line2">12-11-2022 </Option>
									<Option value="line3">12-11-2021 </Option>
								</Select>
							</div>
						</div>
						<Search
							placeholder="Search User Name"
							onSearch={handleSearch}
							allowClear
							enterButton
							style={{ width: "400px" }}
						/>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Table
							scroll={{ x: true }}
							size="middle"
							dataSource={dataPerPageValidation}
							columns={columnsValidation}
							pagination={false}
							rowSelection={{ type: "checkbox" }}
							footer={renderFooterValidation}
							rowClassName={(record, index) =>
								index % 2 === 0 ? "white-row" : "bg-stone-100"
							}
						></Table>
					</div>
				</>
			),
		},
		{
			key: "2",
			label: "Validated",
			children: (
				<>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
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
									placeholder="Filter by Date Version"
								>
									<Option value="line1">12-11-2023 </Option>
									<Option value="line2">12-11-2022 </Option>
									<Option value="line3">12-11-2021 </Option>
								</Select>
							</div>
						</div>
						<Search
							placeholder="Search User Name"
							onSearch={handleSearch}
							allowClear
							enterButton
							style={{ width: "400px" }}
						/>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Table
							scroll={{ x: true }}
							size="middle"
							dataSource={dataPerPageValidation}
							columns={columnsValidation}
							pagination={false}
							footer={renderFooterValidation}
							rowClassName={(record, index) =>
								index % 2 === 0 ? "white-row" : "bg-stone-100"
							}
						></Table>
					</div>
				</>
			),
		},
	];
	return (
		<>
			<div>
				<BackHome text="EES" icon={`>`} tittle={"Cleansing Survey"} />
				<div className="flex justify-between px-10 py-5 ">
					<strong style={{ fontSize: "24px" }}>
						Cleansing Survey - Complete Survey Validation
					</strong>
				</div>

				<div
					className="flex justify-center  px-10 pb-5"
					style={{
						padding: "10px",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white px-5"
						style={{ padding: "10px" }}
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
						<div
							style={{
								marginTop: "20px",
								justifyContent: "right",
								display: "flex",
							}}
						>
							<Button
								className="bg-blue-500 text-white "
								style={{
									height: "50px",
									width: "170px",
									fontSize: "16px",
									padding: "10px",
									border: "1px rounded ",
									borderColor: "royalblue",
								}}
								// onClick={() => set(true)}
							>
								<div
									style={{
										color: "white",
										height: "80px",
									}}
								>
									<h1>Complete</h1>
								</div>
							</Button>
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
