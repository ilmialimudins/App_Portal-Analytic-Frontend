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
} from "antd";

import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { EditFilled } from "@ant-design/icons";

interface DataType {
	key: React.Key;
	year: number;
	company: string;
	company_group: string;
}
export default function ModifyDataInvitedRespondent() {
	const { Search } = Input;
	const { Option } = Select;
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};
	const dataSource: DataType[] = [];
	for (let i = 1; i < 100; i++) {
		dataSource.push({
			key: i,
			year: 2022,

			company: `PT PamapersadaNusantara ${i}`,
			company_group: `Financial${i}`,
		});
	}

	const columnsESS: ColumnType<any>[] = [
		{
			width: 20,

			title: "Year",
			dataIndex: "year",
			key: "year",
		},

		{
			width: 70,

			title: "Company",
			dataIndex: "company",
			key: "company",
		},

		{
			width: 70,

			title: "Company Group",
			dataIndex: "company_group",
			key: "company_group",
		},
		{
			width: 20,

			title: "Action",
			dataIndex: "action",
			key: "action",
			render: (_: number, record: DataType) => {
				return (
					<span className="flex justify-center">
						<>
							<a href="modify-data-invited-respondent/edit-invited-respondent">
								<EditFilled
									style={{ color: "blue", fontSize: "15px" }}
									className="mr-4 hover:text-blue-700"
								/>
							</a>
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
			<div>
				<div className="flex ">
					<BackHome text={"EES"} icon={">"} />
					<ToLink
						text="Survey Progress Monitoring"
						icon=">"
						link="ess"
						tittle="Invited Respondent SPM"
					/>
				</div>
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>
						Invited Respondent SPM - Modify
					</strong>
				</div>

				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white p-5 "
						style={{ maxWidth: "99.5%" }}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{ padding: "0px 10px 0px 10px" }}
						>
							<div style={{ width: "500px", marginRight: "10px" }}>
								<DatePicker
									onChange={onChange}
									style={{ width: "200px" }}
									picker="year"
									suffixIcon={<FaCalendar style={{ color: "grey" }} />}
								/>
							</div>

							<div style={{ width: "500px" }}>
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
