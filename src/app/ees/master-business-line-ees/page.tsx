"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import AddBusinessLineEES from "@/components/Modal/AddBusinessLineEES";
import EditBusinessLineEES from "@/components/Modal/EditBusinessLineEES";
import EditDemographyEES from "@/components/Modal/EditDemographyEES";

import BackHome from "@/components/Other/BackHome";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Input, Table, Modal, Tabs } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

interface RecordType {
	company_code: number;
}
export default function MasterBusinessLineEES() {
	const { Search } = Input;

	const dataSourceBusiness = [
		{
			key: "1",
			business_line_code: "BL0001",
			business_line: "Finalcial Service",
		},
		{
			key: "2",
			business_line_code: "BL0002",
			business_line: "Management Service",
		},
		{
			key: "3",
			business_line_code: "BL0003",
			business_line: "Information Service",
		},
		{
			key: "4",
			business_line_code: "BL0004",
			business_line: "Security Service",
		},
		{
			key: "5",
			business_line_code: "BL0005",
			business_line: "Customer Service",
		},
		{
			key: "6",
			business_line_code: "BL0006",
			business_line: "Finalcial Service",
		},
		{
			key: "7",
			business_line_code: "BL0007",
			business_line: "Management Service",
		},
		{
			key: "8",
			business_line_code: "BL0008",
			business_line: "Information Service",
		},
		{
			key: "9",
			business_line_code: "BL0009",
			business_line: "Security Service",
		},
		{
			key: "10",
			business_line_code: "BL00010",
			business_line: "Customer Service",
		},
		{
			key: "11",
			business_line_code: "BL0001",
			business_line: "Finalcial Service",
		},
		{
			key: "12",
			business_line_code: "BL0002",
			business_line: "Management Service",
		},
		{
			key: "13",
			business_line_code: "BL0003",
			business_line: "Information Service",
		},
		{
			key: "14",
			business_line_code: "BL0004",
			business_line: "Security Service",
		},
		{
			key: "15",
			business_line_code: "BL0005",
			business_line: "Customer Service",
		},
		{
			key: "16",
			business_line_code: "BL0006",
			business_line: "Finalcial Service",
		},
		{
			key: "17",
			business_line_code: "BL0007",
			business_line: "Management Service",
		},
		{
			key: "18",
			business_line_code: "BL0008",
			business_line: "Information Service",
		},
		{
			key: "19",
			business_line_code: "BL0009",
			business_line: "Security Service",
		},
		{
			key: "20",
			business_line_code: "BL00010",
			business_line: "Customer Service",
		},
	];
	const dataSourceDemography = [
		{
			key: "1",
			demography_name: "Company",
			demography_alias: "DIR",
			demography_filter: "1",
		},
		{
			key: "2",
			demography_name: "Jabatan",
			demography_alias: "DIV",
			demography_filter: "12",
		},
		{
			key: "3",
			demography_name: "Golongan",
			demography_alias: "DEPT",
			demography_filter: "13",
		},
		{
			key: "4",
			demography_name: "Job Title",
			demography_alias: "JOB",
			demography_filter: "16",
		},
		{
			key: "5",
			demography_name: "Grade",
			demography_alias: "GRD",
			demography_filter: "24",
		},
		{
			key: "6",
			demography_name: "Grade",
			demography_alias: "GRD",
			demography_filter: "24",
		},
		{
			key: "7",
			demography_name: "Job Title",
			demography_alias: "JOB",
			demography_filter: "16",
		},

		{
			key: "8",
			demography_name: "Golongan",
			demography_alias: "DEPT",
			demography_filter: "13",
		},
		{
			key: "9",
			demography_name: "Jabatan",
			demography_alias: "DIV",
			demography_filter: "12",
		},
		{
			key: "10",
			demography_name: "Company",
			demography_alias: "DIR",
			demography_filter: "1",
		},
		{
			key: "11",
			demography_name: "Company",
			demography_alias: "DIR",
			demography_filter: "1",
		},
		{
			key: "12",
			demography_name: "Jabatan",
			demography_alias: "DIV",
			demography_filter: "12",
		},
		{
			key: "13",
			demography_name: "Golongan",
			demography_alias: "DEPT",
			demography_filter: "13",
		},
		{
			key: "14",
			demography_name: "Job Title",
			demography_alias: "JOB",
			demography_filter: "16",
		},
		{
			key: "15",
			demography_name: "Grade",
			demography_alias: "GRD",
			demography_filter: "24",
		},
		{
			key: "16",
			demography_name: "Grade",
			demography_alias: "GRD",
			demography_filter: "24",
		},
		{
			key: "17",
			demography_name: "Job Title",
			demography_alias: "JOB",
			demography_filter: "16",
		},

		{
			key: "18",
			demography_name: "Golongan",
			demography_alias: "DEPT",
			demography_filter: "13",
		},
		{
			key: "19",
			demography_name: "Jabatan",
			demography_alias: "DIV",
			demography_filter: "12",
		},
		{
			key: "20",
			demography_name: "Company",
			demography_alias: "DIR",
			demography_filter: "1",
		},
	];

	const [isOpenAddBusinessLineEES, setOpenAddBusinessLineEES] = useState(false);
	const [isOpenEditBusinessLineEES, setOpenEditBusinessLineEES] =
		useState(false);
	const [isOpenEditDemographyEES, setOpenEditDemographyEES] = useState(false);

	const handleOk = () => {
		setOpenAddBusinessLineEES(false);
		setOpenEditBusinessLineEES(false);
		setOpenEditDemographyEES(false);
	};
	const handleCancel = () => {
		setOpenAddBusinessLineEES(false);
		setOpenEditBusinessLineEES(false);
		setOpenEditDemographyEES(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddBusinessLineEES(data);
		setOpenEditBusinessLineEES(data);
		setOpenEditDemographyEES(false);
	};

	const editDataBusinessLineEES = (idBusinessLineEES: number) => {
		setOpenEditBusinessLineEES(true);
		// setidBusinessLineEES(idBusinessLineEES);
	};
	const editDataDemographyEES = (idDemographyEES: number) => {
		setOpenEditDemographyEES(true);
		// setidDemographyEES(idDemographyEES);
	};
	const { confirm } = Modal;

	const showDeleteBusinessLineEES = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Business Line Permanently?",
			content:
				"Lini Bisnis 'Financial Service' akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelBusinessLineEES(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const showDeleteDemographyEES = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Demography Permanently?",
			content: "Demography 'Company' akan dihapus dari master data anda",
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
	const columnsBusinessLine: ColumnType<any>[] = [
		// {
		// 	title: "No",
		// 	dataIndex: "no",
		// 	key: "no",
		// 	width: "1%",

		// 	render: (text: string, record: [], index: number) => index + 1,
		// },
		{
			title: "Business Line Code",
			dataIndex: "business_line_code",
			key: "business_line_code",
			width: "20%",
		},
		{
			width: "70%",
			title: "Business Line ",
			dataIndex: "business_line",
			key: "business_line",
			// align: 'center',
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
								onClick={() => editDataBusinessLineEES(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteBusinessLineEES(record.company_code)}
							/>
						</>
					</span>
				);
			},
		},
	];
	const columnsDemography: ColumnType<any>[] = [
		// {
		// 	title: "No",
		// 	dataIndex: "no",
		// 	key: "no",
		// 	width: "1%",

		// 	render: (text: string, record: [], index: number) => index + 1,
		// },
		{
			title: "Demography Name",
			dataIndex: "demography_name",
			key: "demography_name",
			width: "30%",
		},
		{
			title: "Demography Alias",
			dataIndex: "demography_alias",
			key: "demography_alias",
			width: "30%",
		},
		{
			title: "Urutan Demogrpahy Filter",
			dataIndex: "demography_filter",
			key: "demography_filter",
			width: "30%",
			// align: 'center',
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
								onClick={() => editDataDemographyEES(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteDemographyEES(record.company_code)}
							/>
						</>
					</span>
				);
			},
		},
	];

	const [searchQuery, setSearchQuery] = useState("");
	const [filteredDataBusiness, setFilteredDataBusiness] =
		useState(dataSourceBusiness);
	const [filteredDataDemography, setFilteredDataDemography] =
		useState(dataSourceDemography);

	useEffect(() => {
		const filteredBusiness = filterDataBusiness(searchQuery);
		const filteredDemography = filterDataDemography(searchQuery);

		setFilteredDataBusiness(filteredBusiness);
		setFilteredDataDemography(filteredDemography);
	}, [searchQuery]);

	const filterDataBusiness = (query: string) => {
		return dataSourceBusiness.filter((item) =>
			Object.values(item).some(
				(value) =>
					typeof value === "string" &&
					value.toLowerCase().includes(query.toLowerCase())
			)
		);
	};
	const filterDataDemography = (query: string) => {
		return dataSourceDemography.filter((item) =>
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

	const handleNextPageBusiness = () => {
		if (
			pagination.current <
			Math.ceil(dataSourceBusiness.length / pagination.pageSize)
		) {
			setPagination((prevPagination) => ({
				...prevPagination,
				current: prevPagination.current + 1,
			}));
		}
	};
	const handleNextPageDemography = () => {
		if (
			pagination.current <
			Math.ceil(dataSourceDemography.length / pagination.pageSize)
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
	const renderPaginationButtonsBusiness = () => {
		const totalPageCount = Math.ceil(
			dataSourceBusiness.length / pagination.pageSize
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
				onClick={handleNextPageBusiness}
				disabled={currentPage === totalPageCount}
			>
				Next
			</Button>
		);
		return <div>{pageButtons}</div>;
	};
	const renderPaginationButtonsDemography = () => {
		const totalPageCount = Math.ceil(
			dataSourceDemography.length / pagination.pageSize
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
				onClick={handleNextPageDemography}
				disabled={currentPage === totalPageCount}
			>
				Next
			</Button>
		);

		return <div>{pageButtons}</div>;
	};

	const dataPerPageBusiness = filteredDataBusiness.slice(
		(pagination.current - 1) * pagination.pageSize,
		pagination.current * pagination.pageSize
	);
	const dataPerPageDemography = filteredDataDemography.slice(
		(pagination.current - 1) * pagination.pageSize,
		pagination.current * pagination.pageSize
	);

	const renderFooterBusiness = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPageBusiness.length} data found`}
				{renderPaginationButtonsBusiness()}
			</div>
		);
	};
	const renderFooterDemography = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPageDemography.length} data found`}
				{renderPaginationButtonsDemography()}
			</div>
		);
	};
	const onChangeTab = (key: string) => {
		console.log(key);
	};
	const item = [
		{
			key: "1",
			label: "Business Line",
			children: (
				<>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Search
							placeholder="Search Business Line"
							onSearch={handleSearch}
							allowClear
							enterButton
							style={{ width: "100%", marginRight: "20px", padding: "5px" }}
						/>
						<Button
							className="bg-white text-blue-500 hover:bg-stone-100 "
							style={{
								height: "40px",
								width: "180px",
								fontSize: "16px",
								border: "1px rounded ",
								borderColor: "royalblue",
							}}
							onClick={() => setOpenAddBusinessLineEES(true)}
						>
							<div
								className="flex justify-between "
								style={{ color: "royalblue" }}
							>
								<strong className="bigger-text ">+</strong>
								<strong className="px-2">Add Business Line</strong>
							</div>
						</Button>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Table
							scroll={{ x: true }}
							size="middle"
							dataSource={dataPerPageBusiness}
							columns={columnsBusinessLine}
							pagination={false}
							footer={renderFooterBusiness}
						></Table>
					</div>
				</>
			),
		},
		{
			key: "2",
			label: "Demography",
			children: (
				<>
					<div style={{ width: "100%" }}>
						<div
							style={{
								display: "flex",
								marginBottom: "30px",
							}}
						>
							<Search
								placeholder="Search Business Line"
								onSearch={handleSearch}
								allowClear
								enterButton
							/>
						</div>
						<div>
							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataPerPageDemography}
								columns={columnsDemography}
								pagination={false}
								footer={renderFooterDemography}
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
				<BackHome text="EES" icon={`>`} tittle={"Master Data EES"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>
						Master Data EES - Maintain Demography
					</strong>
				</div>
				{isOpenAddBusinessLineEES ? (
					<AddBusinessLineEES
						show={isOpenAddBusinessLineEES}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}

				{isOpenEditBusinessLineEES ? (
					<EditBusinessLineEES
						show={isOpenEditBusinessLineEES}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idBusinessLineEES={idBusinessLineEES}
						//   dataBusinessLineEES={dataBusinessLineEES}
					/>
				) : null}
				{isOpenEditDemographyEES ? (
					<EditDemographyEES
						show={isOpenEditDemographyEES}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idMainEES={idMainEES}
						//   dataMainEES={dataMainEES}
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
