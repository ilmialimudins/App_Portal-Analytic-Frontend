"use client";
import CustomMultiSelectDD from "@/components/EngagementPrediction/CustomMultiSelectDD";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import { CSDemographyValue } from "@/stores/dashboard.atom";
import { Table, Modal, DatePicker, Upload, DatePickerProps } from "antd";
import { ColumnsType } from "antd/es/table";
import { data } from "autoprefixer";
import { useAtomValue } from "jotai";
import { ReactElement, useState } from "react";
import { FaEdit, FaRegCalendar, FaTrash } from "react-icons/fa";
interface DataType {
	key: React.Key;
	age: number;
}

interface MenuItem {
	key: string;
	label: ReactElement;
	onClick?: () => void;
}
export default function Ngram() {
	const { Dragger } = Upload;
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};
	const demographies = useAtomValue(CSDemographyValue);

	const dataSource: DataType[] = [];

	const [isOpenEditNgram, setOpenEditNgram] = useState(false);
	const handleOk = () => {
		setOpenEditNgram(false);
	};
	const handleCancel = () => {
		setOpenEditNgram(false);
	};
	const handleClose = (data: boolean) => {
		setOpenEditNgram(data);
	};

	const EditDataNgram = (idNgram: number) => {
		setOpenEditNgram(true);
		// setIdNgram(idNgram);
	};
	const { confirm } = Modal;

	const showDeleteNgram = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Company Permanently?",
			content: "Perusahaan 'Surya Artha' akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelNgram(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const columnsPositive: ColumnsType<DataType> = [
		{
			title: (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						paddingLeft: "10px",
						paddingRight: "10px",
					}}
				>
					<a style={{ fontSize: "20px" }}>Positive Sentiment</a>
					<CustomMultiSelectDD
						data={demographies}
						title={"Filter by FOR"}
					></CustomMultiSelectDD>
				</div>
			),
			children: [
				{
					title: "Qcode",
					dataIndex: "Qcode",
					width: 110,
					key: "Qcode",
				},
				{
					title: (
						<div
							style={{
								display: "flex",
								width: "100%",

								paddingLeft: "10px",
							}}
						>
							<a style={{ width: "50%" }}>Word</a>
							<a>N</a>
						</div>
					),
					dataIndex: "word_n",
					width: 210,
					key: "word_n",
				},
				{
					title: (
						<div
							style={{
								display: "flex",
								width: "100%",

								paddingLeft: "10px",
							}}
						>
							<a style={{ width: "50%" }}>Ngram</a>
							<a>Ngram Frequency</a>
						</div>
					),
					dataIndex: "Qcode",
					key: "Qcode",
					width: 410,
				},
				{
					title: "Action",
					dataIndex: "action",
					width: 100,
					key: "action",
					render: (_: number, record: DataType) => {
						return (
							<span className="flex justify-center">
								<>
									<FaEdit
										style={{ color: "blue", fontSize: "15px" }}
										className="mr-4 hover:text-blue-700"
										// onClick={() => editDataNgram(record.company_code)}
									/>
									<FaTrash
										style={{ color: "red", fontSize: "15px" }}
										className="hover:text-red-700"
										// onClick={() => showDeleteNgram(record.company_code)}
									/>
								</>
							</span>
						);
					},
				},
			],
		},
	];
	const columnsNegative: ColumnsType<DataType> = [
		{
			title: (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						paddingLeft: "10px",
						paddingRight: "10px",
					}}
				>
					<a style={{ fontSize: "20px" }}>Negative Sentiment</a>
					<CustomMultiSelectDD
						data={demographies}
						title={"Filter by FOR"}
					></CustomMultiSelectDD>
				</div>
			),
			children: [
				{
					title: "Qcode",
					dataIndex: "Qcode",
					width: 110,
					key: "Qcode",
				},
				{
					title: (
						<div
							style={{
								display: "flex",
								width: "100%",

								paddingLeft: "10px",
							}}
						>
							<a style={{ width: "50%" }}>Word</a>
							<a>N</a>
						</div>
					),
					dataIndex: "word_n",
					width: 210,
					key: "word_n",
				},
				{
					title: (
						<div
							style={{
								display: "flex",
								width: "100%",

								paddingLeft: "10px",
							}}
						>
							<a style={{ width: "50%" }}>Ngram</a>
							<a>Ngram Frequency</a>
						</div>
					),
					dataIndex: "Qcode",
					key: "Qcode",
					width: 410,
				},
				{
					title: "Action",
					dataIndex: "action",
					width: 100,
					key: "action",
					render: (_: number, record: DataType) => {
						return (
							<span className="flex justify-center">
								<>
									<FaEdit
										style={{ color: "blue", fontSize: "15px" }}
										className="mr-4 hover:text-blue-700"
										// onClick={() => editDataNgram(record.company_code)}
									/>
									<FaTrash
										style={{ color: "red", fontSize: "15px" }}
										className="hover:text-red-700"
										// onClick={() => showDeleteNgram(record.company_code)}
									/>
								</>
							</span>
						);
					},
				},
			],
		},
	];

	// const [filteredData, setFilteredData] = useState(dataSource);

	// const filterData = (query: string) => {
	// 	return dataSource.filter((item) =>
	// 		Object.values(item).some(
	// 			(value) =>
	// 				typeof value === "string" &&
	// 				value.toLowerCase().includes(query.toLowerCase())
	// 		)
	// 	);
	// };

	// const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

	// const handlePrevPage = () => {
	// 	if (pagination.current > 1) {
	// 		setPagination((prevPagination) => ({
	// 			...prevPagination,
	// 			current: prevPagination.current - 1,
	// 		}));
	// 	}
	// };

	// const handleNextPage = () => {
	// 	if (
	// 		pagination.current < Math.ceil(dataSource.length / pagination.pageSize)
	// 	) {
	// 		setPagination((prevPagination) => ({
	// 			...prevPagination,
	// 			current: prevPagination.current + 1,
	// 		}));
	// 	}
	// };
	// const handlePageChange = (page: number) => {
	// 	setPagination((prevPagination) => ({
	// 		...prevPagination,
	// 		current: page,
	// 	}));
	// };
	// const renderPaginationButtons = () => {
	// 	const totalPageCount = Math.ceil(dataSource.length / pagination.pageSize);
	// 	const currentPage = pagination.current;
	// 	const pageButtons = [];

	// 	const createPageButton = (page: number, active: boolean) => (
	// 		<Button
	// 			key={page}
	// 			type={active ? "primary" : "default"}
	// 			onClick={() => handlePageChange(page)}
	// 		>
	// 			{page}
	// 		</Button>
	// 	);

	// 	pageButtons.push(
	// 		<Button
	// 			style={{ color: "blue" }}
	// 			key="prev"
	// 			onClick={handlePrevPage}
	// 			disabled={currentPage === 1}
	// 		>
	// 			Previous
	// 		</Button>
	// 	);

	// 	if (totalPageCount <= 7) {
	// 		for (let page = 1; page < totalPageCount; page++) {
	// 			pageButtons.push(createPageButton(page, page === currentPage));
	// 		}
	// 	} else {
	// 		if (currentPage <= 4) {
	// 			for (let page = 1; page <= 6; page++) {
	// 				pageButtons.push(createPageButton(page, page === currentPage));
	// 			}
	// 			pageButtons.push(<Button key="ellipsis1">...</Button>);
	// 			pageButtons.push(
	// 				createPageButton(totalPageCount, currentPage === totalPageCount)
	// 			);
	// 		} else if (currentPage >= totalPageCount - 4) {
	// 			pageButtons.push(createPageButton(1, currentPage === 1));
	// 			pageButtons.push(<Button key="ellipsis2">...</Button>);
	// 			for (let page = totalPageCount - 5; page < totalPageCount; page++) {
	// 				pageButtons.push(createPageButton(page, page === currentPage));
	// 			}
	// 		} else {
	// 			pageButtons.push(createPageButton(1, currentPage === 1));
	// 			pageButtons.push(<Button key="ellipsis3">...</Button>);
	// 			for (let page = currentPage - 2; page <= currentPage + 2; page++) {
	// 				pageButtons.push(createPageButton(page, page === currentPage));
	// 			}
	// 			pageButtons.push(<Button key="ellipsis4">...</Button>);
	// 			pageButtons.push(
	// 				createPageButton(totalPageCount, currentPage === totalPageCount)
	// 			);
	// 		}
	// 	}

	// 	pageButtons.push(
	// 		<Button
	// 			style={{ color: "blue" }}
	// 			key="next"
	// 			onClick={handleNextPage}
	// 			disabled={currentPage === totalPageCount}
	// 		>
	// 			Next
	// 		</Button>
	// 	);

	// 	return <div>{pageButtons}</div>;
	// };
	// const dataPerPage = filteredData.slice(
	// 	(pagination.current - 1) * pagination.pageSize,
	// 	pagination.current * pagination.pageSize
	// );

	// const renderFooter = () => {
	// 	return (
	// 		<div
	// 			className="flex justify-between "
	// 			color="bg-white"
	// 			style={{ marginBottom: "20px" }}
	// 		>
	// 			{`${dataPerPage.length} data found`} {renderPaginationButtons()}
	// 		</div>
	// 	);
	// };

	return (
		<>
			<div>
				<BackHome text="EES" icon={`>`} tittle={"Edit Word"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>Edit Word - Ngram</strong>
				</div>

				{/* {isOpenEditNgram ? (
					<EditNgram
						show={isOpenEditNgram}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idNgram={idNgram}
						//   dataNgram={dataNgram}
					/>
				) : null} */}

				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white p-5"
						style={{ width: "100%" }}
					>
						<div
							className="border-nonepy-1 flex  rounded border-none "
							style={{ width: "100%" }}
						>
							<div
								style={{
									marginRight: "20px",
									display: "flex",
									justifyContent: "center",
									width: "200px",
									height: "40px",
									marginLeft: "10px",
								}}
							>
								<DatePicker
									onChange={onChange}
									picker="year"
									placeholder="Filter by Survey Year"
									style={{ width: "230px", color: "black" }}
									suffixIcon={<FaRegCalendar style={{ color: "black" }} />}
								/>
							</div>
							<div
								style={{
									marginRight: "10px",
								}}
							>
								<CustomMultiSelectDD
									data={demographies}
									title={"Filter by Company"}
								></CustomMultiSelectDD>
							</div>
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "20px",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									height: "calc(70vh - 55px)",
									width: "calc(100vh - 55px)",
									justifyItems: "center",
									marginRight: "20px",
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Table
										style={{
											height: "calc(70vh - 55px)",
											width: "calc(95vh - 55px)",
										}}
										scroll={{ x: true }}
										size="middle"
										// dataSource={dataPerPage}
										columns={columnsPositive}
										pagination={false}
										// footer={renderFooter}
										rowClassName={(record, index) =>
											index % 2 === 0 ? "white-row" : "bg-stone-100"
										}
									/>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									height: "calc(70vh - 55px)",
									width: "calc(100vh - 55px)",
									justifyItems: "center",
								}}
							>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Table
										style={{
											height: "calc(70vh - 55px)",
											width: "calc(95vh - 55px)",
										}}
										scroll={{ x: true }}
										size="middle"
										// dataSource={dataPerPage}
										columns={columnsNegative}
										pagination={false}
										// footer={renderFooter}
										rowClassName={(record, index) =>
											index % 2 === 0 ? "white-row" : "bg-stone-100"
										}
									/>
								</div>
							</div>
						</div>
						<div style={{ margin: "50px" }}></div>
					</div>
				</div>
			</div>
		</>
	);
}
