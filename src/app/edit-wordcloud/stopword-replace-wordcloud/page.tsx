"use client";
import Header from "@/components/EngagementPrediction/Header";
import GroupBreak from "@/components/EngagementPrediction/LineBreak";
import AddStopword from "@/components/Modal/AddStopword";
import UploadStopword from "@/components/Modal/UploadStopword";
import AddReplaceWordcloud from "@/components/Modal/AddReplaceWordcloud";
import EditStopword from "@/components/Modal/EditStopword";

import BackHome from "@/components/Other/BackHome";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Input, Table, Modal, Tabs } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { FaDownload, FaUpload } from "react-icons/fa";
import UploadReplaceWordcloud from "@/components/Modal/UploadReplaceWordcloud";
import EditReplaceWordcloud from "@/components/Modal/EditReplaceWordcloud";

interface DataStopword {
	key: React.Key;
	stopword: string;
	company_name: string;
	survey_year: number;
}
interface DataLocation {
	key: React.Key;
	original_text: string;
	replacement_text: string;
	company_name: string;
	survey_year: number;
}
interface RecordType {
	company_code: number;
}
export default function StopwordAndReplaceWordloud() {
	const { Search } = Input;

	const dataSourceStopword: DataStopword[] = [];
	for (let i = 1; i < 100; i++) {
		dataSourceStopword.push({
			key: i,
			stopword: `perusahaan penghasilan ${i}`,
			company_name: `Default`,
			survey_year: 2019,
		});
	}

	const dataSourceReplaceWordcloud: DataLocation[] = [];
	for (let i = 1; i < 100; i++) {
		dataSourceReplaceWordcloud.push({
			key: i,
			original_text: `perusahaan penghasilan ${i}`,
			replacement_text: `penghasilan ${i}`,
			company_name: "Default",
			survey_year: 2019,
		});
	}

	const [isOpenAddStopword, setOpenAddStopword] = useState(false);
	const [isOpenUploadStopword, setOpenUploadStopword] = useState(false);
	const [isOpenUploadReplaceWordcloud, setOpenUploadReplaceWordcloud] =
		useState(false);
	const [isOpenAddReplaceWordcloud, setOpenAddReplaceWordcloud] =
		useState(false);
	const [isOpenEditStopword, setOpenEditStopword] = useState(false);

	const [isOpenEditReplaceWordcloud, setOpenEditReplaceWordcloud] =
		useState(false);

	const handleOk = () => {
		setOpenAddStopword(false);
		setOpenAddReplaceWordcloud(false);
		setOpenEditStopword(false);
		setOpenEditReplaceWordcloud(false);
		setOpenUploadStopword(false);
		setOpenUploadReplaceWordcloud(false);
	};
	const handleCancel = () => {
		setOpenAddStopword(false);
		setOpenUploadStopword(false);
		setOpenAddReplaceWordcloud(false);
		setOpenEditStopword(false);
		setOpenUploadReplaceWordcloud(false);
		setOpenEditReplaceWordcloud(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddStopword(data);
		setOpenUploadStopword(data);
		setOpenAddReplaceWordcloud(data);
		setOpenEditStopword(data);
		setOpenUploadReplaceWordcloud(false);
		setOpenEditReplaceWordcloud(false);
	};

	const editDataStopword = (idStopword: number) => {
		setOpenEditStopword(true);
		// setidStopword(idStopword);
	};
	const editDataReplaceWordcloud = (idReplaceWordcloud: number) => {
		setOpenEditReplaceWordcloud(true);
		// setidReplaceWordcloud(idReplaceWordcloud);
	};
	const { confirm } = Modal;

	const showDeleteStopword = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Stopword Permanently?",
			content:
				"Lini Bisnis 'Financial Service' akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelStopword(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const showDeleteReplaceWordcloud = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Word Replacement?",
			content:
				"Kata Pengganti untuk 'perusahaanpenghasilan' akan dihapus dari database anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelReplaceWordcloud(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};
	const columnsStopword: ColumnType<any>[] = [
		// {
		// 	title: "No",
		// 	dataIndex: "no",
		// 	key: "no",
		// 	width: "1%",

		// 	render: (text: string, record: [], index: number) => index + 1,
		// },
		{
			title: "Stopword ",
			dataIndex: "stopword",
			key: "stopword",
			width: "40%",
		},
		{
			title: "Company Name",
			dataIndex: "company_name",
			key: "company_name",
			width: "40%",
			// align: 'center',
		},
		{
			title: "Survey Year",
			dataIndex: "survey_year",
			key: "survey_year",
			// align: 'center',
			width: "10%",
		},

		{
			title: "Action",

			key: "action",
			align: "center",

			width: "10%",

			render: (_: number, record: RecordType) => {
				return (
					<span className="flex justify-center">
						<>
							<EditFilled
								style={{ color: "blue", fontSize: "15px" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => editDataStopword(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteStopword(record.company_code)}
							/>
						</>
					</span>
				);
			},
		},
	];
	const columnsReplaceWordcloud: ColumnType<any>[] = [
		{
			title: "Original Text",
			dataIndex: "original_text",
			key: "original_text",
			width: "26%",
		},
		{
			title: "Replacement Text",
			dataIndex: "replacement_text",
			width: "27%",
			key: "replacement_text",
		},
		{
			title: "Company Name",
			dataIndex: "company_name",
			width: "27%",
			key: "company_name",
		},
		{
			title: "Survey Year",
			dataIndex: "survey_year",
			key: "survey_year",
			width: "10%",
		},
		{
			title: "Action",

			key: "action",
			align: "center",

			width: "10%",

			render: (_: number, record: RecordType) => {
				return (
					<span className="flex justify-center">
						<>
							<EditFilled
								style={{ color: "blue", fontSize: "15px" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => editDataReplaceWordcloud(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteReplaceWordcloud(record.company_code)}
							/>
						</>
					</span>
				);
			},
		},
	];

	const [searchQuery, setSearchQuery] = useState("");
	const [filteredDataStopword, setFilteredDataStopword] =
		useState(dataSourceStopword);
	const [filteredDataReplaceWordcloud, setFilteredDataReplaceWordcloud] =
		useState(dataSourceReplaceWordcloud);

	useEffect(() => {
		const filteredStopword = filterDataStopword(searchQuery);
		const filteredReplaceWordcloud = filterDataReplaceWordcloud(searchQuery);

		setFilteredDataStopword(filteredStopword);
		setFilteredDataReplaceWordcloud(filteredReplaceWordcloud);
	}, [searchQuery]);

	const filterDataStopword = (query: string) => {
		return dataSourceStopword.filter((item) =>
			Object.values(item).some(
				(value) =>
					typeof value === "string" &&
					value.toLowerCase().includes(query.toLowerCase())
			)
		);
	};
	const filterDataReplaceWordcloud = (query: string) => {
		return dataSourceReplaceWordcloud.filter((item) =>
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

	const handleNextPageStopword = () => {
		if (
			pagination.current <
			Math.ceil(dataSourceStopword.length / pagination.pageSize)
		) {
			setPagination((prevPagination) => ({
				...prevPagination,
				current: prevPagination.current + 1,
			}));
		}
	};
	const handleNextPageReplaceWordcloud = () => {
		if (
			pagination.current <
			Math.ceil(dataSourceReplaceWordcloud.length / pagination.pageSize)
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
	const renderPaginationButtonsStopword = () => {
		const totalPageCount = Math.ceil(
			dataSourceStopword.length / pagination.pageSize
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
				onClick={handleNextPageStopword}
				disabled={currentPage === totalPageCount}
			>
				Next
			</Button>
		);
		return <div>{pageButtons}</div>;
	};
	const renderPaginationButtonsReplaceWordcloud = () => {
		const totalPageCount = Math.ceil(
			dataSourceReplaceWordcloud.length / pagination.pageSize
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
				onClick={handleNextPageReplaceWordcloud}
				disabled={currentPage === totalPageCount}
			>
				Next
			</Button>
		);

		return <div>{pageButtons}</div>;
	};

	const dataPerPageStopword = filteredDataStopword.slice(
		(pagination.current - 1) * pagination.pageSize,
		pagination.current * pagination.pageSize
	);
	const dataPerPageReplaceWordcloud = filteredDataReplaceWordcloud.slice(
		(pagination.current - 1) * pagination.pageSize,
		pagination.current * pagination.pageSize
	);

	const renderFooterStopword = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPageStopword.length} data found`}
				{renderPaginationButtonsStopword()}
			</div>
		);
	};
	const renderFooterReplaceWordcloud = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPageReplaceWordcloud.length} data found`}
				{renderPaginationButtonsReplaceWordcloud()}
			</div>
		);
	};
	const onChangeTab = (key: string) => {
		console.log(key);
	};
	const item = [
		{
			key: "1",
			label: "Stopword Group",
			children: (
				<>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div style={{ width: "100%" }}>
							<Search
								placeholder="Search Word"
								onSearch={handleSearch}
								allowClear
								enterButton
								style={{
									width: "55%",
								}}
							/>
						</div>
						<Button
							className="bg-white text-blue-500 hover:bg-stone-100 "
							style={{
								height: "40px",
								width: "200px",
								fontSize: "16px",
								border: "1px rounded ",
								borderColor: "royalblue",
								marginRight: "20px",
							}}
							onClick={() => setOpenAddStopword(true)}
						>
							<div
								className="flex justify-between "
								style={{ color: "royalblue" }}
							>
								<strong className="bigger-text ">+</strong>
								<strong className="px-2">Add Stopword</strong>
							</div>
						</Button>
						<Button
							className="bg-white text-blue-500 hover:bg-stone-100 "
							style={{
								height: "40px",
								width: "200px",
								fontSize: "16px",
								border: "1px rounded ",
								borderColor: "royalblue",
								marginRight: "20px",
							}}
							onClick={() => setOpenUploadStopword(true)}
						>
							<div
								className="flex justify-between "
								style={{
									color: "royalblue",
									borderColor: "royalblue",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<strong className="bigger-text ">
									<FaUpload />
								</strong>
								<strong className="px-2">Upload Stopword</strong>
							</div>
						</Button>
						<Button
							className=" bg-white text-blue-500 hover:bg-stone-100 "
							style={{
								height: "40px",
								width: "40px",
								fontSize: "16px",
								border: "1px rounded ",
								borderColor: "royalblue",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginRight: "10px",
							}}
							// onClick={() => setOpenDownloadStopword(true)}
						>
							<div
								className="flex justify-between "
								style={{ color: "royalblue" }}
							>
								<strong className="bigger-text " style={{}}>
									<FaDownload />
								</strong>
							</div>
						</Button>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Table
							scroll={{ x: true }}
							size="middle"
							dataSource={dataPerPageStopword}
							columns={columnsStopword}
							pagination={false}
							footer={renderFooterStopword}
						></Table>
					</div>
				</>
			),
		},
		{
			key: "2",
			label: "Replace Wordcloud",
			children: (
				<>
					<div style={{ width: "100%" }}>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div style={{ width: "100%" }}>
								<Search
									placeholder="Search Stopword Group"
									onSearch={handleSearch}
									allowClear
									enterButton
									style={{
										marginRight: "20px",
										width: "50%",
									}}
								/>
							</div>

							<Button
								className="bg-white text-blue-500 hover:bg-stone-100 "
								style={{
									height: "40px",
									width: "270px",
									fontSize: "16px",
									border: "1px rounded ",
									borderColor: "royalblue",
									marginRight: "20px",
								}}
								onClick={() => setOpenAddReplaceWordcloud(true)}
							>
								<div
									className="flex justify-between "
									style={{ color: "royalblue" }}
								>
									<strong className="bigger-text ">+</strong>
									<strong className="px-2">Add Wordcloud Replacement </strong>
								</div>
							</Button>
							<Button
								className="bg-white text-blue-500 hover:bg-stone-100 "
								style={{
									height: "40px",
									width: "310",
									fontSize: "16px",
									border: "1px rounded ",
									borderColor: "royalblue",
									marginRight: "20px",
								}}
								onClick={() => setOpenUploadReplaceWordcloud(true)}
							>
								<div
									className="flex justify-between "
									style={{
										color: "royalblue",
										borderColor: "royalblue",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<strong className="bigger-text ">
										<FaUpload />
									</strong>
									<strong className="px-2">Upload Wordcloud Replacement</strong>
								</div>
							</Button>
							<Button
								className=" bg-white text-blue-500 hover:bg-stone-100 "
								style={{
									height: "40px",
									width: "40px",
									fontSize: "16px",
									border: "1px rounded ",
									borderColor: "royalblue",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginRight: "10px",
								}}
								// onClick={() => setOpenAddStopword(true)}
							>
								<div
									className="flex justify-between "
									style={{ color: "royalblue" }}
								>
									<strong className="bigger-text " style={{}}>
										<FaDownload />
									</strong>
								</div>
							</Button>
						</div>
						<div style={{ marginTop: "20px" }}>
							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataPerPageReplaceWordcloud}
								columns={columnsReplaceWordcloud}
								pagination={false}
								footer={renderFooterReplaceWordcloud}
							></Table>
						</div>
					</div>
				</>
			),
		},
	];
	return (
		<>
			<div>
				<BackHome text="MPS" icon={`>`} tittle={"Edit Wordcloud"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>
						Edit Word - Stopword & Replace
					</strong>
				</div>
				{isOpenAddStopword ? (
					<AddStopword
						show={isOpenAddStopword}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}
				{isOpenUploadStopword ? (
					<UploadStopword
						show={isOpenUploadStopword}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}
				{isOpenUploadReplaceWordcloud ? (
					<UploadReplaceWordcloud
						show={isOpenUploadReplaceWordcloud}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}
				{isOpenAddReplaceWordcloud ? (
					<AddReplaceWordcloud
						show={isOpenAddReplaceWordcloud}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}

				{isOpenEditStopword ? (
					<EditStopword
						show={isOpenEditStopword}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idStopword={idStopword}
						//   dataStopword={dataStopword}
					/>
				) : null}
				{isOpenEditReplaceWordcloud ? (
					<EditReplaceWordcloud
						show={isOpenEditReplaceWordcloud}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idMainMPS={idMainMPS}
						//   dataMainMPS={dataMainMPS}
					/>
				) : null}

				<div className="flex justify-center  px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white px-5"
						style={{ width: "100%" }}
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
			</div>
		</>
	);
}
