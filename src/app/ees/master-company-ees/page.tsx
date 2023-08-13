"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import AddMainEES from "@/components/Modal/AddMainEES";
import EditMainEES from "@/components/Modal/EditMainEES";
import BackHome from "@/components/Other/BackHome";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Input, Table, Modal } from "antd";
import { ColumnType } from "antd/es/table";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

interface RecordType {
	company_code: number;
}
export default function MasterCompanyESS() {
	const { Search } = Input;

	const dataSource = [
		{
			key: "1",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "2",
			company_code: "132312",
			company: "Pt. Pamapersada Nusantara",
			alias_company: "PN",
			survey_group: "Pt. Pamapersada Nusantara",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "3",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "4",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "5",
			company_code: "132312",
			company: "Pt. Pamapersada Nusantara",
			alias_company: "PN",
			survey_group: "Pt. Pamapersada Nusantara",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "6",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "7",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "8",
			company_code: "132312",
			company: "Pt. Pamapersada Nusantara",
			alias_company: "PN",
			survey_group: "Pt. Pamapersada Nusantara",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "9",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "10",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},

		{
			key: "11",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "12",
			company_code: "132312",
			company: "Pt. Pamapersada Nusantara",
			alias_company: "PN",
			survey_group: "Pt. Pamapersada Nusantara",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "13",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "14",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "15",
			company_code: "132312",
			company: "Pt. Pamapersada Nusantara",
			alias_company: "PN",
			survey_group: "Pt. Pamapersada Nusantara",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "16",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "17",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "18",
			company_code: "132312",
			company: "Pt. Pamapersada Nusantara",
			alias_company: "PN",
			survey_group: "Pt. Pamapersada Nusantara",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
		{
			key: "19",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "20",
			company_code: "132313",
			company: "Surya Artha",
			alias_company: "SANF",
			server_group: "Astra Property",
			business_line: "Financial Service",
			current_modelling_type: "Company",
		},
	];

	const [isOpenAddMainEES, setOpenAddMainEES] = useState(false);
	const [isOpenEditMainEES, setOpenEditMainEES] = useState(false);
	const handleOk = () => {
		setOpenAddMainEES(false);
		setOpenEditMainEES(false);
	};
	const handleCancel = () => {
		setOpenAddMainEES(false);
		setOpenEditMainEES(false);
	};
	const handleClose = (data: boolean) => {
		setOpenAddMainEES(data);
		setOpenEditMainEES(data);
	};

	const editDataMainEES = (idMainEES: number) => {
		setOpenEditMainEES(true);
		// setIdMainEES(idMainEES);
	};

	const { confirm } = Modal;

	const showDeleteMainEES = (id: number) => {
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
				// dispatch(doDelMainEES(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const columnsESS: ColumnType<any>[] = [
		{
			title: "Company Code",
			dataIndex: "company_code",
			width: "10%",
			key: "company_code",
		},
		{
			width: "21%",
			title: "Company ",
			dataIndex: "company",
			key: "company",
			// align: 'center',
		},

		{
			title: "Alias Company",
			dataIndex: "alias_company",
			width: "10%",
		},
		{
			width: "21%",
			title: "Server Group ",
			dataIndex: "server_group",
			key: "server_group",
			// align: 'center',
		},
		{
			width: "10%",
			title: "Business Line",
			dataIndex: "business_line",
			key: "business_line",
			// align: 'center',
		},
		{
			width: "10%",
			title: "Current Modelling Type",
			dataIndex: "current_modelling_type",
			key: "business_line",
			// align: 'center',
		},
		{
			title: "Action",

			key: "action",
			align: "center",

			width: "5%",

			render: (_: number, record: RecordType) => {
				return (
					<span className="flex justify-center">
						<>
							<EditFilled
								style={{ color: "blue", fontSize: "15px" }}
								className="mr-4 hover:text-blue-700"
								onClick={() => editDataMainEES(record.company_code)}
							/>
							<DeleteFilled
								style={{ color: "red", fontSize: "15px" }}
								className="hover:text-red-700"
								onClick={() => showDeleteMainEES(record.company_code)}
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
			<div>
				<BackHome text="EES" icon={`>`} tittle={"Master Data EES"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24PX" }}>
						Master Data EES - Maintain Master Data
					</strong>
				</div>
				{isOpenAddMainEES ? (
					<AddMainEES
						show={isOpenAddMainEES}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
					/>
				) : null}

				{isOpenEditMainEES ? (
					<EditMainEES
						show={isOpenEditMainEES}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idMainEES={idMainEES}
						//   dataMainEES={dataMainEES}
					/>
				) : null}

				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white "
						style={{ width: "100%", padding: "20px" }}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none bg-white "
							style={{ width: "100%", marginTop: "10px", marginBottom: "20px" }}
						>
							<div
								style={{
									width: "100%",
									paddingTop: "5px",
									marginRight: "20px",
								}}
							>
								<Search
									placeholder="Search Company"
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
										width: "170px",
										fontSize: "16px",
										padding: "5px",
										border: "1px rounded ",
										borderColor: "royalblue",
									}}
									onClick={() => setOpenAddMainEES(true)}
								>
									<div
										className="flex justify-between px-2 "
										style={{ color: "royalblue" }}
									>
										<strong className="bigger-text">+</strong>
										<strong>Add Company</strong>
									</div>
								</Button>
							</div>
						</div>
						<Table
							scroll={{ x: true }}
							size="middle"
							dataSource={dataPerPage}
							columns={columnsESS}
							pagination={false}
							footer={renderFooter}
						></Table>
					</div>
				</div>
			</div>
		</>
	);
}
