"use client";
import Header from "@/components/EngagementPrediction/Header";
import GroupBreak from "@/components/EngagementPrediction/LineBreak";
import AddBusinessGroupMPS from "@/components/Modal/AddBusinessGroupMPS";
import AddLocationMPS from "@/components/Modal/AddLocationMPS";
import EditBusinessGroupMPS from "@/components/Modal/EditBusinessGroupMPS";
import EditLocationMPS from "@/components/Modal/EditStopword";

import BackHome from "@/components/Other/BackHome";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Input, Table, Modal, Tabs } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

interface RecordType {
	company_code: number;
}
export default function MasterBusinessGroupMPS() {
	const { Search } = Input;

	const dataSourceBusiness = [
		{
			key: "1",
			business_group_code: "BG0001",
			business_group: "Finalcial Service",
		},
		{
			key: "2",
			business_group_code: "BG0002",
			business_group: "Management Service",
		},
		{
			key: "3",
			business_group_code: "BG0003",
			business_group: "Information Service",
		},
		{
			key: "4",
			business_group_code: "BG0004",
			business_group: "Security Service",
		},
		{
			key: "5",
			business_group_code: "BG0005",
			business_group: "Customer Service",
		},
		{
			key: "6",
			business_group_code: "BG0006",
			business_group: "Finalcial Service",
		},
		{
			key: "7",
			business_group_code: "BG0007",
			business_group: "Management Service",
		},
		{
			key: "8",
			business_group_code: "BG0008",
			business_group: "Information Service",
		},
		{
			key: "9",
			business_group_code: "BG0009",
			business_group: "Security Service",
		},
		{
			key: "10",
			business_group_code: "BG00010",
			business_group: "Customer Service",
		},
		{
			key: "11",
			business_group_code: "BG0001",
			business_group: "Finalcial Service",
		},
		{
			key: "12",
			business_group_code: "BG0002",
			business_group: "Management Service",
		},
		{
			key: "13",
			business_group_code: "BG0003",
			business_group: "Information Service",
		},
		{
			key: "14",
			business_group_code: "BG0004",
			business_group: "Security Service",
		},
		{
			key: "15",
			business_group_code: "BG0005",
			business_group: "Customer Service",
		},
		{
			key: "16",
			business_group_code: "BG0006",
			business_group: "Finalcial Service",
		},
		{
			key: "17",
			business_group_code: "BG0007",
			business_group: "Management Service",
		},
		{
			key: "18",
			business_group_code: "BG0008",
			business_group: "Information Service",
		},
		{
			key: "19",
			business_group_code: "BG0009",
			business_group: "Security Service",
		},
		{
			key: "20",
			business_group_code: "BG00010",
			business_group: "Customer Service",
		},
	];
	const dataSourceLocation = [
		{
			key: "1",
			location_code: "L0192829",
			location: "Amdi Sunter",
		},
		{
			key: "2",
			location_code: "L019xxx",
			location: "Amdi Sunter",
		},
		{
			key: "3",
			location_code: "L0192829",
			location: "Amdi Sunter",
		},
		{
			key: "4",
			location_code: "L019xxx",
			location: "Amdi Sunter",
		},
		{
			key: "5",
			location_code: "L0192829",
			location: "Amdi Sunter",
		},
		{
			key: "6",
			location_code: "L019xxx",
			location: "Amdi Sunter",
		},
		{
			key: "7",
			location_code: "L0192829",
			location: "Amdi Sunter",
		},
		{
			key: "8",
			location_code: "L019xxx",
			location: "Amdi Sunter",
		},
		{
			key: "9",
			location_code: "L0192829",
			location: "Amdi Sunter",
		},
		{
			key: "10",
			location_code: "L019xxx",
			location: "Amdi Sunter",
		},
		{
			key: "11",
			location_code: "L019xxx",
			location: "Amdi Sunter",
		},
	];

	const [isOpenAddBusinessGroupMPS, setOpenAddBusinessGroupMPS] =
		useState(false);
	const [isOpenAddLocationMPS, setOpenAddLocationMPS] = useState(false);
	const [isOpenEditBusinessGroupMPS, setOpenEditBusinessGroupMPS] =
		useState(false);

	const [isOpenEditLocationMPS, setOpenEditLocationMPS] = useState(false);

	const handleOk = () => {
		setOpenAddBusinessGroupMPS(false);
		setOpenAddLocationMPS(false);
		setOpenEditBusinessGroupMPS(false);
		setOpenEditLocationMPS(false);
	};
	const handleCancel = () => {
		setOpenAddBusinessGroupMPS(false);
		setOpenAddLocationMPS(false);
		setOpenEditBusinessGroupMPS(false);
		setOpenEditLocationMPS(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddBusinessGroupMPS(data);
		setOpenAddLocationMPS(data);
		setOpenEditBusinessGroupMPS(data);
		setOpenEditLocationMPS(false);
	};

	const editDataBusinessGroupMPS = (idBusinessGroupMPS: number) => {
		setOpenEditBusinessGroupMPS(true);
		// setidBusinessGroupMPS(idBusinessGroupMPS);
	};
	const editDataLocationMPS = (idLocationMPS: number) => {
		setOpenEditLocationMPS(true);
		// setidLocationMPS(idLocationMPS);
	};
	const { confirm } = Modal;

	const showDeleteBusinessGroupMPS = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Business Group Permanently?",
			content:
				"Lini Bisnis 'Financial Service' akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelBusinessGroupMPS(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const showDeleteLocationMPS = (id: number) => {
		confirm({
			width: 390,
			centered: true,
			title: "Delete Location Permanently?",
			content: "Location 'Company' akan dihapus dari master data anda",
			okText: "Delete Now",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelLocationMPS(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};
	const columnsBusinessGroup: ColumnType<any>[] = [
		// {
		// 	title: "No",
		// 	dataIndex: "no",
		// 	key: "no",
		// 	width: "1%",

		// 	render: (text: string, record: [], index: number) => index + 1,
		// },
		{
			title: "Business Group Code",
			dataIndex: "business_group_code",
			key: "business_group_code",
			width: "15%",
		},
		{
			title: "Business Group ",
			dataIndex: "business_group",
			key: "business_group",
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
								onClick={() => editDataBusinessGroupMPS(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteBusinessGroupMPS(record.company_code)}
							/>
						</>
					</span>
				);
			},
		},
	];
	const columnsLocation: ColumnType<any>[] = [
		// {
		// 	title: "No",
		// 	dataIndex: "no",
		// 	key: "no",
		// 	width: "1%",

		// 	render: (text: string, record: [], index: number) => index + 1,
		// },
		{
			title: "Location Code",
			dataIndex: "location_code",
			key: "location_code",
			width: "15%",
		},
		{
			title: "Location",
			dataIndex: "location",
			key: "location",
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
								onClick={() => editDataLocationMPS(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteLocationMPS(record.company_code)}
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
	const [filteredDataLocation, setFilteredDataLocation] =
		useState(dataSourceLocation);

	useEffect(() => {
		const filteredBusiness = filterDataBusiness(searchQuery);
		const filteredLocation = filterDataLocation(searchQuery);

		setFilteredDataBusiness(filteredBusiness);
		setFilteredDataLocation(filteredLocation);
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
	const filterDataLocation = (query: string) => {
		return dataSourceLocation.filter((item) =>
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
	const handleNextPageLocation = () => {
		if (
			pagination.current <
			Math.ceil(dataSourceLocation.length / pagination.pageSize)
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
	const renderPaginationButtonsLocation = () => {
		const totalPageCount = Math.ceil(
			dataSourceLocation.length / pagination.pageSize
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
				onClick={handleNextPageLocation}
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
	const dataPerPageLocation = filteredDataLocation.slice(
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
	const renderFooterLocation = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{`${dataPerPageLocation.length} data found`}
				{renderPaginationButtonsLocation()}
			</div>
		);
	};
	const onChangeTab = (key: string) => {
		console.log(key);
	};
	const item = [
		{
			key: "1",
			label: "Business Group",
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
							placeholder="Search Business Group"
							onSearch={handleSearch}
							allowClear
							enterButton
							style={{
								width: "100%",
								marginRight: "20px",
								padding: "5px",
							}}
						/>
						<Button
							className="bg-white text-blue-500 hover:bg-stone-100 "
							style={{
								height: "40px",
								width: "200px",
								fontSize: "16px",
								border: "1px rounded ",
								borderColor: "royalblue",
							}}
							onClick={() => setOpenAddBusinessGroupMPS(true)}
						>
							<div
								className="flex justify-between "
								style={{ color: "royalblue" }}
							>
								<strong className="bigger-text ">+</strong>
								<strong className="px-2">Add Business Group</strong>
							</div>
						</Button>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Table
							scroll={{ x: true }}
							size="middle"
							dataSource={dataPerPageBusiness}
							columns={columnsBusinessGroup}
							pagination={false}
							footer={renderFooterBusiness}
						></Table>
					</div>
				</>
			),
		},
		{
			key: "2",
			label: "Location",
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
							<Search
								placeholder="Search Business Group"
								onSearch={handleSearch}
								allowClear
								enterButton
								style={{
									width: "100%",
									marginRight: "20px",
									padding: "5px",
								}}
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
								onClick={() => setOpenAddLocationMPS(true)}
							>
								<div
									className="flex justify-between "
									style={{ color: "royalblue" }}
								>
									<strong className="bigger-text ">+</strong>
									<strong className="px-2">Add Location</strong>
								</div>
							</Button>
						</div>
						<div style={{ marginTop: "20px" }}>
							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataPerPageLocation}
								columns={columnsLocation}
								pagination={false}
								footer={renderFooterLocation}
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
				<BackHome text="MPS" icon={`>`} tittle={"Master Data MPS"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24px" }}>
						Master Data MPS - Maintain Location
					</strong>
				</div>
				{isOpenAddBusinessGroupMPS ? (
					<AddBusinessGroupMPS
						show={isOpenAddBusinessGroupMPS}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}
				{isOpenAddLocationMPS ? (
					<AddLocationMPS
						show={isOpenAddLocationMPS}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}

				{isOpenEditBusinessGroupMPS ? (
					<EditBusinessGroupMPS
						show={isOpenEditBusinessGroupMPS}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idBusinessGroupMPS={idBusinessGroupMPS}
						//   dataBusinessGroupMPS={dataBusinessGroupMPS}
					/>
				) : null}
				{isOpenEditLocationMPS ? (
					<EditLocationMPS
						show={isOpenEditLocationMPS}
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
