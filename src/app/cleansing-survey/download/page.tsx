"use client";
import CustomMultiSelectDD from "@/components/EngagementPrediction/CustomMultiSelectDD";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import { CSDemographyValue } from "@/stores/dashboard.atom";
import { Button, Input, Table, Modal, Divider, Dropdown, Menu } from "antd";
import { ColumnsType } from "antd/es/table";
import { data } from "autoprefixer";
import { useAtomValue } from "jotai";
import { ReactElement, useEffect, useState } from "react";
import { RiDownloadLine } from "react-icons/ri";
import { FaEdit, FaTrash } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import EditCleansingSurvey from "@/components/Modal/EditCleansingSurvey";
import MenuItem from "antd/es/menu/MenuItem";
interface DataType {
	key: React.Key;
	validation: string;
	respondent_id: string;
	survey_id: string;
	business_line: string;
	company: string;
	location: string;
	job_tittle: string;
	branch: string;
	plant: string;
	job_sites: string;
	directorate: string;
	division: string;
	department: string;
	grade: string;
	birth_year: string;
	entry_year_astra: string;
	entry_year_company: string;
	survey_year: string;
	age_generation: string;
	age_group: string;
	service_year: string;
	employee_status: string;
	function: string;
	region: string;
	area: string;
	sales_office: string;
	kebun: string;
	gender: string;
	entry_year_difference: string;
	filiing_time: string;
	similiar_time: string;
	complete_answear: string;
	age_this_year: string;
	age_when_entering_company: string;
	age: number;
}

interface MenuItem {
	key: string;
	label: ReactElement;
	onClick?: () => void;
}
export default function DownloadCleansingSurvey() {
	const { Search } = Input;
	const demographies = useAtomValue(CSDemographyValue);

	const dataSource: DataType[] = [
		{
			key: "1",
			validation: "Non complete",
			respondent_id: " 78",
			survey_id: " 7113949",
			business_line: " Astra Line II",
			company: " Toyota Sales Operation",
			location: " Amdi - Sunter",
			job_tittle: " Admin",
			branch: " Sunter",
			directorate: "Marketing & After Sales Service",
			job_sites: "",
			plant: "",
			division: " Accounting",
			department: "Admin",
			grade: " 2",
			age: 20,
			birth_year: " 1990",
			entry_year_astra: " 2019",
			entry_year_company: " 2019",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "2",
			validation: " complete",
			respondent_id: " 100",
			survey_id: " 7113949",
			business_line: " Astra Line II",
			company: " Astra World Operation",
			location: " Amdi - Sunter",
			job_tittle: " Officer",
			branch: " Sukabumi",
			directorate: "Reseaarch & Development and Production",
			job_sites: "",
			plant: "",
			division: " Astra Management Development Institute",
			department: "Aftersales Service",
			grade: " 2",
			age: 20,
			birth_year: " 1973",
			entry_year_astra: " 2010",
			entry_year_company: " 2010",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Baby Boomer",
			service_year: " 5-10<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},

		{
			key: "3",
			validation: "Non complete",
			respondent_id: " 132",
			survey_id: " 6897899",
			business_line: " Astra Line II",
			company: " BMW Sales Operation",
			location: " Business Operation",
			job_tittle: " Research & Development and Production",
			branch: " Smg Majapahit",
			directorate: "Operation Directorate",
			job_sites: "",
			plant: "",
			division: " Corp. Busdev",
			department: "Corporate Communication Divison",
			grade: " S",
			age: 20,
			birth_year: " 1980",
			entry_year_astra: " 2011",
			entry_year_company: " 2011",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "4",
			validation: " complete",
			respondent_id: " 997",
			survey_id: " 6897899",
			business_line: " Astra Line II",
			company: "PT.Serasi Autoraya (TRAC) - TREMO",
			location: " Cabang",
			job_tittle: " Research & Development and Production",
			branch: " Bks Sudirman",
			directorate: "Sunter Assembly Plant",
			job_sites: "",
			plant: "",
			division: " Corporate Communication",
			department: "Corporate Management System",
			grade: " 3",
			age: 20,
			birth_year: " 1989",
			entry_year_astra: " 2008",
			entry_year_company: " 2008",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "5",
			validation: " complete",
			respondent_id: " 1078",
			survey_id: " 7113949",
			business_line: " Astra Line II",
			company: "PT. Surya Artha Nusantara Finance) - TREMO",
			location: " Cabang/Sales Office",
			job_tittle: " Officer",
			branch: " Bks Sudirman",
			directorate: "Operation Directorate",
			job_sites: "",
			plant: "",
			division: "Corporate Strategic Planning",
			department: "Corporate Planning & Development",
			grade: " 2",
			age: 20,
			birth_year: " 1998",
			entry_year_astra: " 2020",
			entry_year_company: " 2020",
			survey_year: " 2022",
			age_group: " 26-30 years",
			age_generation: " Gen X",
			service_year: " 5-10<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "6",
			validation: " complete",
			respondent_id: " 100",
			survey_id: " 6897899",
			business_line: " Astra Line II",
			company: "BMW Sales Operaion",
			location: " Head Office",
			job_tittle: " Research & Development and Production",
			branch: " Sukabumi",
			directorate: "Operation Directorate",
			job_sites: "",
			plant: "",
			division: " Accounting",
			department: "Admin",
			grade: " 2",
			age: 20,
			birth_year: " 1973",
			entry_year_astra: " 2010",
			entry_year_company: " 2010",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Baby Boomers",
			service_year: " 5-10<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "7",
			validation: "Non complete",
			respondent_id: " 132",
			survey_id: " 6897899",
			business_line: " Astra Line II",
			company: "Toyota Sales Operation",
			location: " Head Office",
			job_tittle: " Research & Development and Production",
			branch: " Sunter",
			directorate: "Marketing & After Sales Service",
			job_sites: "",
			plant: "",
			division: " Astra Management Development Institute",
			department: "Aftersales Service",
			grade: " S",
			age: 20,
			birth_year: " 1980",
			entry_year_astra: " 2011",
			entry_year_company: " 2011",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 5-10<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "8",
			validation: " complete",
			respondent_id: " 997",
			survey_id: " 7113949",
			business_line: " Astra Line II",
			company: "Toyota Sales Operation",
			location: " Menara Astra - Sudirman",
			job_tittle: " Research & Development and Production",
			branch: " Smg Majapahit",
			directorate: "Marketing & After Sales Service",
			job_sites: "",
			plant: "",
			division: " Corp. Busdev",
			department: "Corporate Communication Divison",
			grade: " 3",
			age: 20,
			birth_year: " 1998",
			entry_year_astra: " 2008",
			entry_year_company: " 2008",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "9",
			validation: "Non complete",
			respondent_id: " 1078",
			survey_id: " 7113949",
			business_line: " Astra Line II",
			company: "BMW Sales Operation",
			location: " Menara Astra - Sudirman",
			job_tittle: " Admin",
			branch: " Smg Majapahit",
			directorate: "Reseaarch & Development and Production",
			job_sites: "",
			plant: "",
			division: " Corporate Communication",
			department: "Corporate Management System",
			grade: " 33",
			age: 20,
			birth_year: " 1992",
			entry_year_astra: " 2020",
			entry_year_company: " 2020",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "10",
			validation: " complete",
			respondent_id: " 1079",
			survey_id: " 6897899",
			business_line: " Astra Line II",
			company: "BMW Sales Operation",
			location: " Menara Astra - Sudirman",
			job_tittle: " Admin",
			branch: " Bks Sudirman",
			directorate: "Reseaarch & Development and Production",
			job_sites: "",
			plant: "",
			division: "Corporate Strategic Planning",
			department: "Corporate Management System",
			grade: " 3",
			age: 20,
			birth_year: " 1992",
			entry_year_astra: " 2019",
			entry_year_company: " 2019",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
		{
			key: "11",
			validation: "Non complete",
			respondent_id: " 1079",
			survey_id: " 6897899",
			business_line: " Astra Line II",
			company: "Toyota Sales Operation",
			location: " Menara Astra - Sudirman",
			job_tittle: " Admin",
			branch: " Sukabumi",
			directorate: "Reseaarch & Development and Production",
			job_sites: "",
			plant: "",
			division: "Corporate Strategic Planning",
			department: "Corporate Management System",
			grade: " 3",
			age: 20,
			birth_year: " 1991",
			entry_year_astra: " 2019",
			entry_year_company: " 2019",
			survey_year: " 2022",
			age_group: " 31-35 years",
			age_generation: " Gen X",
			service_year: " 2-5<years",
			employee_status: " ",
			function: " ",
			region: " ",
			area: " ",
			sales_office: " ",
			kebun: " ",
			gender: " ",
			entry_year_difference: " ",
			filiing_time: " ",
			similiar_time: " ",
			complete_answear: " ",
			age_this_year: " <55&>17th",
			age_when_entering_company: " <55&>17th",
		},
	];

	const [isOpenEditCleansingSurvey, setOpenEditCleansingSurvey] =
		useState(false);
	const handleOk = () => {
		setOpenEditCleansingSurvey(false);
	};
	const handleCancel = () => {
		setOpenEditCleansingSurvey(false);
	};
	const handleClose = (data: boolean) => {
		setOpenEditCleansingSurvey(data);
	};

	const EditDataCleansingSurvey = (idMainEES: number) => {
		setOpenEditCleansingSurvey(true);
		// setIdMainEES(idMainEES);
	};
	const { confirm } = Modal;

	const showDeleteCleansingSurvey = (id: number) => {
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
				// dispatch(doDelCleansingSurvey(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};
	const showDownload = () => {
		confirm({
			width: 390,
			centered: true,
			title: "Download",
			content: "Tekan download untuk lanjutkan",
			okText: "Download",
			okType: "default",
			cancelText: "Cancel",
			style: { padding: 10 },

			onOk() {
				// dispatch(doDelCleansingSurvey(id));
				message: "Sukses";
			},
			onCancel() {},
		});
	};

	const handleSearch = (value: string) => {
		setSearchQuery(value);
	};
	const columnsESS: ColumnsType<DataType> = [
		{
			title: "Validation",
			children: [
				{
					title: <div style={{ width: "100px", height: "10px" }}></div>,
					dataIndex: "validation",
					width: 200,
					key: "validation",
				},
			],
		},
		{
			title: "Respondent ID",
			children: [
				{
					title: <div style={{ width: "100px" }}></div>,
					width: 200,
					dataIndex: "respondent_id",
					key: "respondent_id",
				},
			],
		},
		{
			title: "SurveyID",

			children: [
				{
					title: (
						<div
							style={{
								width: "230px",
								background: "white",
								border: "1px solid white",
								borderRadius: "10px",
							}}
						>
							<Search
								placeholder=""
								onSearch={handleSearch}
								allowClear
								enterButton
								style={{
									backgroundColor: "transparent",
									color: "white",
									borderInlineColor: "white",
								}}
							/>
						</div>
					),
					dataIndex: "survey_id",
					key: "survey_id",
					width: 200,
				},
			],
		},
		{
			title: "Business Line",
			children: [
				{
					title: (
						<div style={{ width: "230px" }}>
							<CustomMultiSelectDD
								data={demographies}
								title={"Show All Columns"}
								allValue
							></CustomMultiSelectDD>
						</div>
					),
					dataIndex: "business_line",
					width: 200,
					key: "business_line",
				},
			],
		},
		{
			title: "Compnay",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "company",
					width: 200,
					key: "company",
				},
			],
		},
		{
			title: "Location",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "location",
					width: 200,
					key: "location",
				},
			],
		},
		{
			title: "Job Tittle",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "job_tittle",
					width: 200,
					key: "job_tittle",
				},
			],
		},
		{
			title: "Branch",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "branch",
					width: 200,
					key: "branch",
				},
			],
		},
		{
			title: "Plant",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "plant",
					width: 200,
					key: "plant",
				},
			],
		},
		{
			title: "Job Sites",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "job_sites",
					width: 200,
					key: "job_sites",
				},
			],
		},
		{
			title: "Directorate",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "directorate",
					width: 200,
					key: "directorate",
				},
			],
		},
		{
			title: "Division",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "division",
					width: 200,
					key: "division",
				},
			],
		},
		{
			title: "Department",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "department",
					width: 200,
					key: "department",
				},
			],
		},
		{
			title: "Grade",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "grade",
					width: 200,
					key: "grade",
				},
			],
		},
		{
			title: "Age",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "age",
					width: 200,
					key: "age",
				},
			],
		},
		{
			title: "Birth_Year",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "birth_year",
					width: 200,
					key: "birth_year",
				},
			],
		},
		{
			title: "Entry Year (Astra)",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "entry_year_astra",
					width: 200,
					key: "entry_year_astra",
				},
			],
		},
		{
			title: "Entry Year (Company)",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "entry_year_company",
					width: 200,
					key: "entry_year_company",
				},
			],
		},
		{
			title: "Survey Year",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "survey_year",
					width: 200,
					key: "survey_year",
				},
			],
		},

		{
			title: "Age Generation",
			children: [
				{
					title: <div style={{ width: "100px" }}></div>,
					dataIndex: "age_generation",
					width: 200,
					key: "age_generation",
				},
			],
		},
		{
			title: "Age Group",
			children: [
				{
					title: <div style={{ width: "100px" }}></div>,
					dataIndex: "age_group",
					width: 200,
					key: "age_group",
				},
			],
		},
		{
			title: "Service Year",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "service_year",
					width: 200,
					key: "service_year",
				},
			],
		},
		{
			title: "Employee Status",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "employee_status",
					key: "employee_status",
					width: 200,
				},
			],
		},
		{
			title: "Function",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "function",
					width: 200,
					key: "function",
				},
			],
		},
		{
			title: "Region",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "region",
					width: 200,
					key: "region",
				},
			],
		},
		{
			title: "Area",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "area",
					key: "area",
					width: 200,
				},
			],
		},
		{
			title: "Sales Office",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "sales_office",
					key: "sales_office",
					width: 200,
				},
			],
		},
		{
			title: "Kebun",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "kebun",
					key: "kebun",
					width: 200,
				},
			],
		},
		{
			title: "Gender",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "gender",
					key: "gender",
					width: 200,
				},
			],
		},
		{
			title: "Entry Year Difference",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "entry_year_difference",
					key: "entry_year_difference",
					width: 200,
				},
			],
		},
		{
			title: "Filiing Time",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "filiing_time",
					key: "filiing_time",
					width: 200,
				},
			],
		},
		{
			title: "Similiar Time",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "similiar_time",
					key: "similiar_time",
					width: 200,
				},
			],
		},
		{
			title: "Complete Answear",
			children: [
				{
					title: <div style={{ width: "100px" }}></div>,
					dataIndex: "complete_answear",
					key: "complete_answear",
					width: 200,
				},
			],
		},
		{
			title: "Age This Year",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "age_this_year",
					key: "age_this_year",
					width: 200,
				},
			],
		},
		{
			title: "Age When Entering Company",
			children: [
				{
					title: (
						<CustomMultiSelectDD
							data={demographies}
							title={"Show All Columns"}
							allValue
						></CustomMultiSelectDD>
					),
					dataIndex: "age_when_entering_company",
					key: "age_when_entering_company",
				},
			],
		},
		{
			title: <div></div>,
			children: [
				{
					title: (
						<div
							style={{
								width: "50px",
								alignItems: "center",
								boxShadow: "-5px 0 5px -5px rgba(0, 0, 0, 0.5)",
							}}
						></div>
					),
					dataIndex: "action",
					key: "action",
					width: 240,
					fixed: "right",
					render: (_: number, record: DataType) => {
						const items: MenuItem[] = [
							{
								key: "1",
								label: (
									<div
										style={{
											display: "flex",
											justifyItems: "center",
										}}
									>
										<FaEdit
											style={{
												color: "blue",
												fontSize: "12px",
												marginRight: "5px",
												marginTop: "5px",
											}}
											className="mr-4 hover:text-blue-700"
										/>
										Edit Row
									</div>
								),
								onClick: () => EditDataCleansingSurvey(record.age),
							},
							{
								key: "2",
								label: (
									<div
										style={{
											display: "flex",
											justifyItems: "center",
										}}
									>
										<FaTrash
											style={{
												color: "red",
												fontSize: "12px",
												marginRight: "5px",
												marginTop: "5px",
											}}
											className="hover:text-red-700"
										/>
										Delete Row
									</div>
								),
								onClick: () => showDeleteCleansingSurvey(record.age),
							},
						];

						return (
							<Dropdown
								menu={{ items }}
								trigger={["click"]}
								placement="bottomRight"
							>
								<HiEllipsisVertical
									style={{
										fontSize: "8px",
										height: "20px",
										cursor: "pointer",
										width: "50px",
										alignItems: "center",
										boxShadow: "-5px 0 5px -5px rgba(0, 0, 0, 0.5)",
									}}
									className="mr-4 hover:text-blue-700"
								/>
							</Dropdown>
						);
					},
				},
			],
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

	const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

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
			<div
				className="flex justify-between "
				color="bg-white"
				style={{ marginBottom: "20px" }}
			>
				{`${dataPerPage.length} data found`} {renderPaginationButtons()}
			</div>
		);
	};

	return (
		<>
			<div>
				<BackHome text="EES" icon={`>`} tittle={"Cleansing Survey"} />
				<div className="flex justify-between px-10 py-5 ">
					<strong style={{ fontSize: "24px" }}>
						Cleansing Survey - Validate Survey Result
					</strong>
				</div>

				{isOpenEditCleansingSurvey ? (
					<EditCleansingSurvey
						show={isOpenEditCleansingSurvey}
						clickOk={handleOk}
						clickCancel={handleCancel}
						handleClose={handleClose}
						// idCleansingSurvey={idCleansingSurvey}
						//   dataCleansingSurvey={dataCleansingSurvey}
					/>
				) : null}

				<div className="flex justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white p-5"
						style={{ width: "100%" }}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{ width: "100%" }}
						>
							<div style={{ width: "100%" }}>
								<strong>Table Demography</strong>
							</div>
							<div style={{ marginRight: "10px" }}>
								<CustomMultiSelectDD
									data={demographies}
									title={"Show All Columns"}
								></CustomMultiSelectDD>
							</div>
							<div>
								<Button
									className="bg-white text-blue-500 "
									style={{
										height: "38px",
										width: "150px",
										fontSize: "16px",
										padding: "5px",
										border: "1px rounded ",
										borderColor: "royalblue",
									}}
									onClick={() => showDownload()}
								>
									<div
										style={{
											color: "royalblue",
											display: "flex",
											justifyContent: "space-evenly",
										}}
									>
										<div
											style={{
												paddingTop: "5px",
											}}
										>
											<RiDownloadLine />
										</div>
										<div>
											<strong>Download</strong>
										</div>
									</div>
								</Button>
							</div>
						</div>
						<div>
							<Divider />
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								backgroundColor: "",
							}}
						>
							<Table
								scroll={{ x: true }}
								size="middle"
								dataSource={dataPerPage}
								columns={columnsESS}
								pagination={false}
								footer={renderFooter}
								rowClassName={(record, index) =>
									index % 2 === 0 ? "white-row" : "bg-stone-100"
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
