"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import {
	Button,
	Input,
	Table,
	Select,
	Divider,
	DatePicker,
	DatePickerProps,
	Form,
	Alert,
	InputNumber,
} from "antd";
import { EditFilled } from "@ant-design/icons";

import { ColumnsType } from "antd/es/table";
import { data } from "autoprefixer";
import { ReactElement, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import LoadingSpin from "@/components/Modal/LoadingSpin";

interface Gender {
	key: React.Key;
	pria: number;
	wanita: number;
}
interface Golongan {
	key: React.Key;
	golongan: string;
	total: number;
	pria_tetap: number;
	wanita_tetap: number;
	pria_pkwt: number;
	wanita_pkwt: number;
	pria_harian: number;
	wanita_harian: number;
	pria_asing: number;
	wanita_asing: number;
}
interface Umur extends Gender {
	umur: string;
}

interface MasaKerja extends Gender {
	masa_kerja: string;
}
interface Pendidikan extends Gender {
	pendidikan: string;
}
interface KaryawanByGender {
	key: React.Key;
	gender: string;
	total: number;
}

interface PelatihanByGender extends KaryawanByGender {
	total_jam: number;
}

interface PelatihanByJabatan {
	key: React.Key;
	kelompok_karyawan: string;
	total_jam: number;
	total: number;
}

export default function MaintainMPS() {
	const { Option } = Select;

	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};
	const dataSourceGolongan: Golongan[] = [
		{
			golongan: "Non-Gol",
			key: "1",
			pria_tetap: 101,
			wanita_tetap: 0,
			pria_pkwt: 3,
			wanita_pkwt: 11,
			pria_harian: 2,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 118,
		},
		{
			golongan: "I",
			key: "1",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "II",
			key: "2",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "III",
			key: "3",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "IV",
			key: "4",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "V",
			key: "5",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "VI",
			key: "6",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "VII",
			key: "7",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
	];
	const dataSourceUmur: Umur[] = [
		{ umur: " <18", key: "1", pria: 1, wanita: 22 },
		{ umur: "18-25", key: "2", pria: 3, wanita: 23 },
		{ umur: "26-35", key: "3", pria: 5, wanita: 32 },
		{ umur: "36-45", key: "4", pria: 7, wanita: 52 },
		{ umur: "46-55", key: "5", pria: 9, wanita: 72 },
		{ umur: ">55", key: "5", pria: 9, wanita: 72 },
	];

	const dataSourceJumlahPekerjaOutsource: KaryawanByGender[] = [
		{ key: "1", gender: "pria", total: 3 },
		{ key: "2", gender: "wanita", total: 9 },
	];
	const dataSourcePenerimaanKaryawanBaru: KaryawanByGender[] = [
		{ key: "1", gender: "pria", total: 32 },
		{ key: "2", gender: "wanita", total: 19 },
	];
	const dataSourceJumlahPelamarKerja: KaryawanByGender[] = [
		{ key: "1", gender: "pria", total: 13 },
		{ key: "2", gender: "wanita", total: 29 },
	];
	const dataSourceTurnOver: Golongan[] = [
		{
			golongan: "Non-Gol",
			key: "1",
			pria_tetap: 101,
			wanita_tetap: 0,
			pria_pkwt: 3,
			wanita_pkwt: 11,
			pria_harian: 2,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 118,
		},
		{
			golongan: "I",
			key: "1",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "II",
			key: "2",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "III",
			key: "3",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "IV",
			key: "4",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "V",
			key: "5",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "VI",
			key: "6",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
		{
			golongan: "VII",
			key: "7",
			pria_tetap: 0,
			wanita_tetap: 0,
			pria_pkwt: 0,
			wanita_pkwt: 0,
			pria_harian: 0,
			wanita_harian: 0,
			pria_asing: 0,
			wanita_asing: 0,
			total: 0,
		},
	];
	const dataSourceMasaKerja: MasaKerja[] = [
		{
			key: "1",
			masa_kerja: "0-5 Tahun",
			pria: 101,
			wanita: 17,
		},
		{
			key: "2",
			masa_kerja: "6-10 Tahun",
			pria: 101,
			wanita: 17,
		},
		{
			key: "3",
			masa_kerja: "11-15 Tahun",
			pria: 101,
			wanita: 17,
		},
		{
			key: "4",
			masa_kerja: "16-20 Tahun",
			pria: 101,
			wanita: 17,
		},
		{
			key: "5",
			masa_kerja: "21-25 Tahun",
			pria: 101,
			wanita: 17,
		},
		{
			key: "6",
			masa_kerja: "26-30 Tahun",
			pria: 101,
			wanita: 17,
		},
		{
			key: "7",
			masa_kerja: ">30 Tahun",
			pria: 101,
			wanita: 17,
		},
	];
	const dataSourcePendidikan: Pendidikan[] = [
		{
			key: "1",
			pendidikan: "SD/SLTP",
			pria: 101,
			wanita: 17,
		},
		{
			key: "2",
			pendidikan: "SLTA",
			pria: 101,
			wanita: 17,
		},
		{
			key: "3",
			pendidikan: "Dploma",
			pria: 101,
			wanita: 17,
		},
		{
			key: "4",
			pendidikan: "S1",
			pria: 101,
			wanita: 17,
		},
		{
			key: "5",
			pendidikan: "S2/S3",
			pria: 101,
			wanita: 17,
		},
	];
	const dataSourceKaryawanByGender: KaryawanByGender[] = [
		{
			key: "1",
			gender: "Pria",
			total: 101,
		},
		{
			key: "2",
			gender: "Wanita",
			total: 17,
		},
	];
	const dataSourcePelatihanByGender: PelatihanByGender[] = [
		{
			key: "1",
			gender: "Pria",
			total: 90,
			total_jam: 10,
		},
		{
			key: "2",
			gender: "Wanita",
			total: 30,
			total_jam: 10,
		},
	];
	const dataSourcePelatihanByJabatan: PelatihanByJabatan[] = [
		{
			key: "1",
			kelompok_karyawan: "Karyawan Gol 5 Up",
			total: 44,
			total_jam: 11,
		},
		{
			key: "2",
			kelompok_karyawan: "Karyawan Gol Non s/d 4 Up",
			total: 44,
			total_jam: 11,
		},
	];

	const [dataGolongan, setDataGolongan] =
		useState<Golongan[]>(dataSourceGolongan);
	const handleInputChangeGolongan = (
		field:
			| "pria_tetap"
			| "wanita_tetap"
			| "pria_pkwt"
			| "wanita_pkwt"
			| "pria_harian"
			| "wanita_harian"
			| "pria_asing"
			| "wanita_asing",
		record: Golongan,
		value: number
	) => {
		const newData = [...dataGolongan];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataGolongan(newData);
		}
	};
	const totalGolongan = dataGolongan.reduce(
		(total, current) =>
			total +
			current.pria_tetap +
			current.pria_pkwt +
			current.pria_harian +
			current.pria_asing +
			current.wanita_tetap +
			current.wanita_pkwt +
			current.wanita_harian +
			current.wanita_asing,
		0
	);

	const columnsGolongan: ColumnsType<Golongan> = [
		{
			title: <div style={{ fontSize: "12px" }}>Golongan</div>,
			dataIndex: "golongan",
			key: "golongan",
			align: "center",
			width: 70,
			render: (golongan, record) => (
				<a>
					<div style={{ fontSize: "12px" }}>{golongan}</div>
				</a>
			),
		},

		{
			title: <div style={{ fontSize: "12px" }}>Tetap</div>,
			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_tetap",
					width: 70,

					key: "pria_tetap",
					align: "center",
					render: (pria_tetap, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_tetap}
									onChange={(value) =>
										handleInputChangeGolongan("pria_tetap", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_tetap}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_tetap",
					width: 70,

					key: "wanita_tetap",
					align: "center",
					render: (wanita_tetap, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_tetap}
									onChange={(value) =>
										handleInputChangeGolongan("wanita_tetap", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_tetap}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>PKWT</div>,

			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_pkwt",
					width: 70,

					key: "pria_pkwt",
					align: "center",
					render: (pria_pkwt, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_pkwt}
									onChange={(value) =>
										handleInputChangeGolongan("pria_pkwt", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_pkwt}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_pkwt",
					width: 70,

					key: "wanita_pkwt",
					align: "center",
					render: (wanita_pkwt, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_pkwt}
									onChange={(value) =>
										handleInputChangeGolongan("wanita_pkwt", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_pkwt}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>Harian</div>,

			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_harian",
					width: 70,

					key: "pria_harian",
					align: "center",
					render: (pria_harian, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_harian}
									onChange={(value) =>
										handleInputChangeGolongan("pria_harian", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_harian}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_harian",
					width: 70,

					key: "wanita_harian",
					align: "center",
					render: (wanita_harian, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_harian}
									onChange={(value) =>
										handleInputChangeGolongan("wanita_harian", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_harian}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>Asing</div>,

			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_asing",
					width: 70,

					key: "pria_asing",
					align: "center",
					render: (pria_asing, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_asing}
									onChange={(value) =>
										handleInputChangeGolongan("pria_asing", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_asing}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_asing",
					width: 70,

					key: "wanita_asing",
					align: "center",
					render: (wanita_asing, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditGolongan ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_asing}
									onChange={(value) =>
										handleInputChangeGolongan("wanita_asing", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_asing}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>Total</div>,
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 70,
			render: (total, record) => (
				<div>
					{record.pria_tetap +
						record.pria_pkwt +
						record.pria_harian +
						record.pria_asing +
						record.wanita_tetap +
						record.wanita_pkwt +
						record.wanita_harian +
						record.wanita_asing}
				</div>
			),
		},
	];

	const [dataUmur, setDataUmur] = useState<Umur[]>(dataSourceUmur);
	const handleInputChangeUmur = (
		field: "pria" | "wanita",
		record: Umur,
		value: number
	) => {
		const newData = [...dataUmur];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataUmur(newData);
		}
	};
	const totalUmur = dataUmur.reduce(
		(total, current) => total + current.pria + current.wanita,
		0
	);

	const columnsUmur: ColumnsType<Umur> = [
		{
			title: <div style={{ fontSize: "12px" }}>Umur</div>,
			dataIndex: "umur",
			key: "umur",
			width: 70,
			align: "left",
			render: (umur, record) => <div style={{ fontSize: "12px" }}>{umur}</div>,
		},
		{
			title: <div style={{ fontSize: "12px" }}>Pria</div>,
			dataIndex: "pria",
			key: "pria",
			width: "70px",
			align: "center",
			render: (pria, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditUmur ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={pria}
							onChange={(value) => handleInputChangeUmur("pria", record, value)}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{pria}
							</div>
						</a>
					)}
				</div>
			),
		},
		{
			title: <div style={{ fontSize: "12px" }}>Wanita</div>,
			dataIndex: "wanita",
			key: "wanita",
			width: "70px",
			align: "center",
			render: (wanita, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditUmur ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={wanita}
							onChange={(value) =>
								handleInputChangeUmur("wanita", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{wanita}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataJumlahPekerjaOutsource, setDataJumlahPekerjaOutsource] = useState<
		KaryawanByGender[]
	>(dataSourceJumlahPekerjaOutsource);
	const handleInputChangeJumlahPekerjaOutsource = (
		field: "total",
		record: KaryawanByGender,
		value: number
	) => {
		const newData = [...dataJumlahPekerjaOutsource];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataJumlahPekerjaOutsource(newData);
		}
	};
	const totalJumlahPekerjaOutsource = dataJumlahPekerjaOutsource.reduce(
		(total, current) => total + current.total,
		0
	);
	const columnsJumlahPekerjaOutSource: ColumnsType<KaryawanByGender> = [
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 100,
			render: (total, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditJumlahPekerjaOutSource ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total}
							onChange={(value) =>
								handleInputChangeJumlahPekerjaOutsource("total", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataPenerimaanKaryawanBaru, setDataPenerimaanKaryawanBaru] = useState<
		KaryawanByGender[]
	>(dataSourcePenerimaanKaryawanBaru);
	const handleInputChangePenerimaanKaryawanBaru = (
		field: "total",
		record: KaryawanByGender,
		value: number
	) => {
		const newData = [...dataPenerimaanKaryawanBaru];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataPenerimaanKaryawanBaru(newData);
		}
	};
	const totalPenerimaanKaryawanBaru = dataPenerimaanKaryawanBaru.reduce(
		(total, current) => total + current.total,
		0
	);

	const columnsPenerimaanKarywaanBaru: ColumnsType<KaryawanByGender> = [
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 100,
			render: (total, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPenerimaanKaryawanBaru ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total}
							onChange={(value) =>
								handleInputChangePenerimaanKaryawanBaru("total", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total}
							</div>
						</a>
					)}
				</div>
			),
		},
	];
	const [dataJumlahPelamarKerja, setDataJumlahPelamarKerja] = useState<
		KaryawanByGender[]
	>(dataSourceJumlahPelamarKerja);
	const handleInputChangeJumlahPelamarKerja = (
		field: "total",
		record: KaryawanByGender,
		value: number
	) => {
		const newData = [...dataJumlahPelamarKerja];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataJumlahPelamarKerja(newData);
		}
	};
	const totalJumlahPelamarKerja = dataJumlahPelamarKerja.reduce(
		(total, current) => total + current.total,
		0
	);
	const columnsPelamarKerja: ColumnsType<KaryawanByGender> = [
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
			align: "left",
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 100,
			render: (total, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditJumlahPelamarKerja ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total}
							onChange={(value) =>
								handleInputChangeJumlahPelamarKerja("total", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataTurnover, setDataTurnover] =
		useState<Golongan[]>(dataSourceTurnOver);
	const handleInputChangeTurnover = (
		field:
			| "pria_tetap"
			| "wanita_tetap"
			| "pria_pkwt"
			| "wanita_pkwt"
			| "pria_harian"
			| "wanita_harian"
			| "pria_asing"
			| "wanita_asing",
		record: Golongan,
		value: number
	) => {
		const newData = [...dataTurnover];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataTurnover(newData);
		}
	};
	const totalTurnover = dataTurnover.reduce(
		(total, current) =>
			total +
			current.pria_tetap +
			current.pria_pkwt +
			current.pria_harian +
			current.pria_asing +
			current.wanita_tetap +
			current.wanita_pkwt +
			current.wanita_harian +
			current.wanita_asing,
		0
	);
	const columnsTurnOver: ColumnsType<Golongan> = [
		{
			title: <div style={{ fontSize: "12px" }}>Golongan</div>,
			dataIndex: "golongan",
			key: "golongan",
			align: "center",
			width: 70,
			render: (golongan, record) => (
				<a>
					<div style={{ fontSize: "12px" }}>{golongan}</div>
				</a>
			),
		},

		{
			title: <div style={{ fontSize: "12px" }}>Tetap</div>,
			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_tetap",
					width: 70,

					key: "pria_tetap",
					align: "center",
					render: (pria_tetap, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_tetap}
									onChange={(value) =>
										handleInputChangeTurnover("pria_tetap", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_tetap}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_tetap",
					width: 70,

					key: "wanita_tetap",
					align: "center",
					render: (wanita_tetap, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_tetap}
									onChange={(value) =>
										handleInputChangeTurnover("wanita_tetap", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_tetap}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>PKWT</div>,

			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_pkwt",
					width: 70,

					key: "pria_pkwt",
					align: "center",
					render: (pria_pkwt, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_pkwt}
									onChange={(value) =>
										handleInputChangeTurnover("pria_pkwt", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_pkwt}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_pkwt",
					width: 70,

					key: "wanita_pkwt",
					align: "center",
					render: (wanita_pkwt, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_pkwt}
									onChange={(value) =>
										handleInputChangeTurnover("wanita_pkwt", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_pkwt}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>Harian</div>,

			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_harian",
					width: 70,

					key: "pria_harian",
					align: "center",
					render: (pria_harian, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_harian}
									onChange={(value) =>
										handleInputChangeTurnover("pria_harian", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_harian}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_harian",
					width: 70,

					key: "wanita_harian",
					align: "center",
					render: (wanita_harian, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_harian}
									onChange={(value) =>
										handleInputChangeTurnover("wanita_harian", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_harian}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>Asing</div>,

			children: [
				{
					title: <div style={{ fontSize: "10px" }}>Pria</div>,
					dataIndex: "pria_asing",
					width: 70,

					key: "pria_asing",
					align: "center",
					render: (pria_asing, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={pria_asing}
									onChange={(value) =>
										handleInputChangeTurnover("pria_asing", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{pria_asing}
									</div>
								</a>
							)}
						</div>
					),
				},
				{
					title: <div style={{ fontSize: "10px" }}>Wanita</div>,
					dataIndex: "wanita_asing",
					width: 70,

					key: "wanita_asing",
					align: "center",
					render: (wanita_asing, record) => (
						<div
							style={{
								width: "55x",
								fontSize: "12px",
								padding: 0,
								margin: 0,
								marginRight: "20px",
							}}
						>
							{isOpenEditTurnOver ? (
								<InputNumber
									style={{
										width: "53.4px",
										fontSize: "10px",
										marginRight: "20px",
									}}
									value={wanita_asing}
									onChange={(value) =>
										handleInputChangeTurnover("wanita_asing", record, value)
									}
								/>
							) : (
								<a>
									<div
										style={{
											textAlign: "center",
											width: "50px",
										}}
									>
										{wanita_asing}
									</div>
								</a>
							)}
						</div>
					),
				},
			],
		},
		{
			title: <div style={{ fontSize: "12px" }}>Total</div>,
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 70,
			render: (total, record) => (
				<div>
					{record.pria_tetap +
						record.pria_pkwt +
						record.pria_harian +
						record.pria_asing +
						record.wanita_tetap +
						record.wanita_pkwt +
						record.wanita_harian +
						record.wanita_asing}
				</div>
			),
		},
	];

	const [dataMasaKerja, setDataMasaKerja] =
		useState<MasaKerja[]>(dataSourceMasaKerja);
	const handleInputChangeMasaKerja = (
		field: "pria" | "wanita",
		record: MasaKerja,
		value: number
	) => {
		const newData = [...dataMasaKerja];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataMasaKerja(newData);
		}
	};
	const totalMasaKerja = dataMasaKerja.reduce(
		(total, current) => total + current.pria + current.wanita,
		0
	);
	const columnsMasaKerja: ColumnsType<MasaKerja> = [
		{
			title: "Masa Kerja",
			dataIndex: "masa_kerja",
			key: "masa_kerja",
			align: "left",
		},
		{
			title: "Pria",
			dataIndex: "pria",
			key: "pria",
			align: "center",
			render: (pria, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditMasaKerja ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={pria}
							onChange={(value) =>
								handleInputChangeMasaKerja("pria", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{pria}
							</div>
						</a>
					)}
				</div>
			),
		},
		{
			title: "Wanita",
			dataIndex: "wanita",
			key: "wanita",
			align: "center",
			render: (wanita, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditTurnOver ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={wanita}
							onChange={(value) =>
								handleInputChangeMasaKerja("wanita", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{wanita}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataPendidikan, setDataPendidikan] =
		useState<Pendidikan[]>(dataSourcePendidikan);
	const handleInputChangePendidikan = (
		field: "pria" | "wanita",
		record: Pendidikan,
		value: number
	) => {
		const newData = [...dataPendidikan];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataPendidikan(newData);
		}
	};
	const totalPendidikan = dataPendidikan.reduce(
		(total, current) => total + current.pria + current.wanita,
		0
	);
	const columnsPendidikan: ColumnsType<Pendidikan> = [
		{
			title: "Pendidikan",
			dataIndex: "pendidikan",
			key: "pendidikan",
			align: "left",
		},
		{
			title: "Pria",
			dataIndex: "pria",
			key: "pria",
			align: "center",
			render: (pria, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPendidikan ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={pria}
							onChange={(value) =>
								handleInputChangePendidikan("pria", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{pria}
							</div>
						</a>
					)}
				</div>
			),
		},
		{
			title: "Wanita",
			dataIndex: "wanita",
			key: "wanita",
			align: "center",
			render: (wanita, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPendidikan ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={wanita}
							onChange={(value) =>
								handleInputChangePendidikan("wanita", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{wanita}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataKaryawanByGender, setDataKaryawanByGender] = useState<
		KaryawanByGender[]
	>(dataSourceKaryawanByGender);
	const handleInputChangeKaryawanByGender = (
		field: "total",
		record: KaryawanByGender,
		value: number
	) => {
		const newData = [...dataKaryawanByGender];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataKaryawanByGender(newData);
		}
	};
	const totalKaryawanByGender = dataKaryawanByGender.reduce(
		(total, current) => total + current.total,
		0
	);
	const columnsKaryawanByGender: ColumnsType<KaryawanByGender> = [
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
			align: "center",
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 100,
			render: (total, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditKaryawanByGender ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total}
							onChange={(value) =>
								handleInputChangeKaryawanByGender("total", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataPelatihanByGender, setDataPelatihanByGender] = useState<
		PelatihanByGender[]
	>(dataSourcePelatihanByGender);
	const handleInputChangePelatihanByGender = (
		field: "total" | "total_jam",
		record: PelatihanByGender,
		value: number
	) => {
		const newData = [...dataPelatihanByGender];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataPelatihanByGender(newData);
		}
	};

	const columnsPelatihanByGender: ColumnsType<PelatihanByGender> = [
		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
			align: "left",
			width: 150,
		},
		{
			title: "Total Karyawan",
			dataIndex: "total",
			key: "total",
			align: "center",
			width: 100,
			render: (total, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPelatihanByGender ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total}
							onChange={(value) =>
								handleInputChangePelatihanByGender("total", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total}
							</div>
						</a>
					)}
				</div>
			),
		},
		{
			title: "Total Jam Pelatihan",
			dataIndex: "total_jam",
			key: "total_jam",
			align: "center",
			width: 120,
			render: (total_jam, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPelatihanByGender ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total_jam}
							onChange={(value) =>
								handleInputChangePelatihanByGender("total_jam", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total_jam}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [dataPelatihanByJabatan, setDataPelatihanByJabatan] = useState<
		PelatihanByJabatan[]
	>(dataSourcePelatihanByJabatan);
	const handleInputChangePelatihanByJabatan = (
		field: "total" | "total_jam",
		record: PelatihanByJabatan,
		value: number
	) => {
		const newData = [...dataPelatihanByJabatan];
		const targetRecord = newData.find((r) => r === record);
		if (targetRecord) {
			targetRecord[field] = value;
			setDataPelatihanByJabatan(newData);
		}
	};
	const columnsPelatihanByJabatan: ColumnsType<PelatihanByJabatan> = [
		{
			title: "Kelompok Karyawan",
			dataIndex: "kelompok_karyawan",
			key: "kelompok_karyawan",
			width: 150,
			align: "left",
		},
		{
			title: "Total Karyawan",
			dataIndex: "total",
			key: "total",
			width: 100,
			align: "center",
			render: (total, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPelatihanByJabatan ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total}
							onChange={(value) =>
								handleInputChangePelatihanByJabatan("total", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total}
							</div>
						</a>
					)}
				</div>
			),
		},
		{
			title: "Total Jam Pelatihan",
			dataIndex: "total_jam",
			key: "total_jam",
			width: 120,
			align: "center",
			render: (total_jam, record) => (
				<div
					style={{
						width: "55x",
						fontSize: "12px",
						padding: 0,
						margin: 0,
						marginRight: "20px",
					}}
				>
					{isOpenEditPelatihanByJabatan ? (
						<InputNumber
							style={{
								width: "53.4px",
								fontSize: "10px",
								marginRight: "20px",
							}}
							value={total_jam}
							onChange={(value) =>
								handleInputChangePelatihanByJabatan("total_jam", record, value)
							}
						/>
					) : (
						<a>
							<div
								style={{
									textAlign: "center",
									width: "50px",
								}}
							>
								{total_jam}
							</div>
						</a>
					)}
				</div>
			),
		},
	];

	const [isOpenEditGolongan, setOpenEditGolongan] = useState(false);
	const [isOpenEditUmur, setOpenEditUmur] = useState(false);
	const [isOpenEditJumlahPekerjaOutSource, setOpenEditJumlahPekerjaOutSource] =
		useState(false);
	const [isOpenEditPenerimaanKaryawanBaru, setOpenEditPenerimaanKaryawanBaru] =
		useState(false);
	const [isOpenEditJumlahPelamarKerja, setOpenEditJumlahPelamarKerja] =
		useState(false);
	const [isOpenEditTurnOver, setOpenEditTurnOver] = useState(false);
	const [isOpenEditMasaKerja, setOpenEditMasaKerja] = useState(false);
	const [isOpenEditPendidikan, setOpenEditPendidikan] = useState(false);
	const [isOpenEditKaryawanByGender, setOpenEditKaryawanByGender] =
		useState(false);
	const [isOpenEditPelatihanByGender, setOpenEditPelatihanByGender] =
		useState(false);
	const [isOpenEditPelatihanByJabatan, setOpenEditPelatihanByJabatan] =
		useState(false);

	const [loading, setLoading] = useState(false);
	const handleOk = () => {
		setOpenEditGolongan(false);
		setOpenEditUmur(false);
		setOpenEditJumlahPekerjaOutSource(false);
		setOpenEditPenerimaanKaryawanBaru(false);
		setOpenEditJumlahPelamarKerja(false);
		setOpenEditTurnOver(false);
		setOpenEditMasaKerja(false);
		setOpenEditPendidikan(false);
		setOpenEditKaryawanByGender(false);
		setOpenEditPelatihanByGender(false);
		setOpenEditPelatihanByJabatan(false);
	};

	const handleCancel = () => {
		setOpenEditGolongan(false);
		setOpenEditUmur(false);
		setOpenEditJumlahPekerjaOutSource(false);
		setOpenEditPenerimaanKaryawanBaru(false);
		setOpenEditJumlahPelamarKerja(false);
		setOpenEditTurnOver(false);
		setOpenEditMasaKerja(false);
		setOpenEditPendidikan(false);
		setOpenEditKaryawanByGender(false);
		setOpenEditPelatihanByGender(false);
		setOpenEditPelatihanByJabatan(false);
	};
	const handleClose = (data: boolean) => {
		setOpenEditGolongan(false);
		setOpenEditUmur(false);
		setOpenEditJumlahPekerjaOutSource(false);
		setOpenEditPenerimaanKaryawanBaru(false);
		setOpenEditJumlahPelamarKerja(false);
		setOpenEditTurnOver(false);
		setOpenEditMasaKerja(false);
		setOpenEditPendidikan(false);
		setOpenEditKaryawanByGender(false);
		setOpenEditPelatihanByGender(false);
		setOpenEditPelatihanByJabatan(false);
	};

	const [savingChanges, setSavingChanges] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const handleSaveChanges = () => {
		setSavingChanges(true);

		setTimeout(() => {
			setSavingChanges(false);
			setShowAlert(true);

			setTimeout(() => {
				setShowAlert(false);
				setOpenEditGolongan(false);
				setOpenEditUmur(false);
				setOpenEditJumlahPekerjaOutSource(false);
				setOpenEditPenerimaanKaryawanBaru(false);
				setOpenEditJumlahPelamarKerja(false);
				setOpenEditTurnOver(false);
				setOpenEditMasaKerja(false);
				setOpenEditPendidikan(false);
				setOpenEditKaryawanByGender(false);
				setOpenEditPelatihanByGender(false);
				setOpenEditPelatihanByJabatan(false);
			}, 2000);
		}, 1200);
	};
	const renderFooter = () => {
		return (
			<div className="flex justify-between py-2" color="bg-white">
				{/* {`${dataPerPage.length} data found`} {renderPaginationButtons()} */}
			</div>
		);
	};
	return (
		<>
			{savingChanges ? (
				<LoadingSpin
					show={savingChanges}
					clickOk={handleOk}
					clickCancel={handleCancel}
					handleClose={handleClose}
				/>
			) : null}
			<div
				style={{
					position: "fixed",
					top: "20px",
					left: "50%",
					transform: "translateX(-50%)",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					zIndex: 9999,
				}}
			>
				{showAlert ? (
					<Alert
						message="Changes Saved!"
						type="success"
						showIcon
						style={{ width: "300px" }}
					/>
				) : null}
			</div>
			<div
				style={{
					maxWidth: "75rem",
					minWidth: "75rem",
					scrollbarColor: "blue",
				}}
			>
				<div className="flex ">
					<BackHome text={"MPS"} icon=">" tittle="Input MPS" />
				</div>
				<div style={{ marginLeft: "40px", marginBottom: "20px" }}>
					<strong style={{ fontSize: "20px" }}>
						Input MPS - Maintain Data MPS
					</strong>
				</div>
				<div
					style={{
						display: "flex",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							marginLeft: "40px",
							marginBottom: "30px",
							minWidth: "70rem",
							fontSize: "14px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								fontSize: "16px",
							}}
						>
							<strong>Search</strong>
						</div>
						<Divider style={{ marginTop: "10px" }} />
						<div
							style={{
								display: "flex",
								padding: "10px",
							}}
						>
							<div>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "150px",
											marginBottom: "30px",
										}}
									>
										Company Name
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "10px",
											paddingTop: "2px",
										}}
									>
										<Select
											style={{
												width: "400px",
											}}
											placeholder=""
											suffixIcon={
												<RiArrowDownSFill style={{ color: "black" }} />
											}
										>
											<Option value="line1">PT. Financial Service </Option>
											<Option value="line2">PT. Management Service </Option>
											<Option value="line3">PT. Information Service </Option>
										</Select>
									</div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									marginLeft: "100px",
								}}
							>
								<div style={{ display: "flex" }}>
									<div
										style={{
											width: "100px",
											marginBottom: "30px",
										}}
									>
										Period
									</div>
									<div
										style={{
											fontSize: "14px",
											marginLeft: "10px",
											paddingTop: "2px",
										}}
									>
										<DatePicker
											onChange={onChange}
											picker="date"
											placeholder="dd-mm-yy"
											style={{ width: "230px", color: "black" }}
											suffixIcon={<FaRegCalendar style={{ color: "blue" }} />}
										/>
									</div>
								</div>
							</div>
						</div>
						<Form.Item
							label=" "
							colon={false}
							style={{
								textAlign: "center",
								marginTop: "20px",
							}}
						>
							<Button
								htmlType="reset"
								// onClick={}
								className="mr-4 bg-white hover:bg-stone-100   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
								style={{
									color: "blue",
									width: "170px",
									height: "40px",
									fontSize: "14px",
									transition: "ease-in ",
									marginBottom: "10px",
									marginTop: "5px",
								}}
							>
								Reset
							</Button>
							<Button
								htmlType="submit"
								className="mr-4 bg-blue-700 hover:bg-blue-500   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
								style={{
									color: "white",
									width: "170px",
									height: "40px",
									fontSize: "14px",
									transition: "ease-in ",
									marginBottom: "10px",
									marginTop: "5px",
									marginLeft: "10px",
								}}
							>
								Submit
							</Button>
						</Form.Item>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						minWidth: "70rem",
						maxWidth: "70rem",
						marginTop: "10px",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							marginLeft: "40px",
							marginBottom: "20px",
							minWidth: "49.5rem",
							fontSize: "14px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Table Golongan
							</strong>
							{isOpenEditGolongan ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditGolongan(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditGolongan(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataGolongan}
									columns={columnsGolongan}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
										fontSize: "12px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalGolongan}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							maxWidth: "20rem",
							marginLeft: "10px",
							marginBottom: "20px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Table Umur
							</strong>
							{isOpenEditUmur ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
													marginLeft: "10px",
												}}
												onClick={() => {
													setOpenEditUmur(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditUmur(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								fontSize: "11px",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataUmur}
									columns={columnsUmur}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "60px",
									marginBottom: "10px",
								}}
							>
								{totalUmur}
							</strong>
						</div>
						<Divider style={{ margin: "0" }} />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						minWidth: "70rem",
						maxWidth: "70rem",
						marginTop: "20px",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							marginLeft: "40px",
							minWidth: "22.95rem",
							fontSize: "14px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Jumlah Pekerja OutSource
							</strong>
							{isOpenEditJumlahPekerjaOutSource ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditJumlahPekerjaOutSource(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditJumlahPekerjaOutSource(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataJumlahPekerjaOutsource}
									columns={columnsJumlahPekerjaOutSource}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalJumlahPekerjaOutsource}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							maxWidth: "22.95rem",
							marginLeft: "10px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Penerimaan Karyawaan Baru
							</strong>
							{isOpenEditPenerimaanKaryawanBaru ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditPenerimaanKaryawanBaru(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditPenerimaanKaryawanBaru(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								fontSize: "11px",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataPenerimaanKaryawanBaru}
									columns={columnsPenerimaanKarywaanBaru}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalPenerimaanKaryawanBaru}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							maxWidth: "22.95rem",
							marginLeft: "10px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Jumlah Pelamar Kerja
							</strong>
							{isOpenEditJumlahPelamarKerja ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditJumlahPelamarKerja(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditJumlahPelamarKerja(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								fontSize: "11px",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataJumlahPelamarKerja}
									columns={columnsPelamarKerja}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalJumlahPelamarKerja}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						minWidth: "70rem",
						maxWidth: "70rem",
						marginTop: "20px",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							marginLeft: "40px",
							marginBottom: "30px",
							fontSize: "14px",
							maxWidth: "70rem",
							minWidth: "70rem",
							marginTop: "20px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "16px",
									marginBottom: "10px",
								}}
							>
								Table Employee Turnover
							</strong>
							{isOpenEditTurnOver ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditTurnOver(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditTurnOver(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataTurnover}
									columns={columnsTurnOver}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalTurnover}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						minWidth: "70rem",
						maxWidth: "70rem",
						marginTop: "20px",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							marginLeft: "40px",
							minWidth: "22.95rem",
							fontSize: "14px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Tabel Masa Kerja
							</strong>
							{isOpenEditMasaKerja ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditMasaKerja(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditMasaKerja(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataMasaKerja}
									columns={columnsMasaKerja}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalMasaKerja}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							maxWidth: "22.95rem",
							marginLeft: "10px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Tabel Pendidikan
							</strong>
							{isOpenEditPendidikan ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditPendidikan(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditPendidikan(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								fontSize: "11px",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataPendidikan}
									columns={columnsPendidikan}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalPendidikan}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							maxWidth: "22.95rem",
							marginLeft: "10px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Table Karyawan By Gender
							</strong>
							{isOpenEditKaryawanByGender ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditKaryawanByGender(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditKaryawanByGender(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								fontSize: "11px",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataKaryawanByGender}
									columns={columnsKaryawanByGender}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<strong
								style={{
									fontSize: "14px",
								}}
							>
								Total
							</strong>
							<strong
								style={{
									fontSize: "14px",
									marginLeft: "50px",
									marginRight: "70px",
									marginBottom: "10px",
								}}
							>
								{totalKaryawanByGender}
							</strong>
						</div>
						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						minWidth: "70rem",
						maxWidth: "70rem",
						marginTop: "20px",
					}}
				>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							marginLeft: "40px",
							minWidth: "34.75rem",
							fontSize: "14px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Data Pelatihan Karyawan Berdasarkan Gender
							</strong>
							{isOpenEditPelatihanByGender ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditPelatihanByGender(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditPelatihanByGender(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataPelatihanByGender}
									columns={columnsPelatihanByGender}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>

						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
					<div
						className="my-15 rounded-md border-none bg-white p-3 "
						style={{
							maxWidth: "34.75rem",
							marginLeft: "10px",
						}}
					>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none "
							style={{
								padding: "0px 10px 0px 10px",
							}}
						>
							<strong
								style={{
									width: "500px",
									marginRight: "10px",
									fontSize: "14px",
									marginBottom: "10px",
								}}
							>
								Data Pelatihan Karyawan Berdasarkan Jabatan
							</strong>
							{isOpenEditPelatihanByJabatan ? (
								<div>
									<div>
										<div style={{ display: "flex" }}>
											<button
												className="bg-white text-blue-500 hover:border hover:bg-blue-200"
												style={{
													width: "60px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "20px",
													alignItems: "center",
													border: "1px solid blue",
													justifyContent: "center",
													fontSize: "12px",
												}}
												onClick={() => {
													setOpenEditPelatihanByJabatan(false);
												}}
											>
												Cancel
											</button>
											<button
												className="bg-blue-500 text-white hover:border hover:bg-blue-200"
												style={{
													width: "100px",
													height: "30px",
													borderRadius: "10px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "5px",
													cursor: "pointer",
													marginLeft: "10px",
													border: "1px solid blue",
													fontSize: "12px",
												}}
												onClick={handleSaveChanges}
											>
												{showAlert ? "Saved!" : "Save Changes"}
											</button>
										</div>
									</div>
								</div>
							) : (
								<div
									className="border-blue-500 text-blue-500 hover:border hover:bg-blue-200"
									style={{
										width: "80px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										padding: "5px",
										cursor: "pointer",
										marginLeft: "20px",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "14px",
									}}
									onClick={() => {
										setOpenEditPelatihanByJabatan(true);
									}}
								>
									<EditFilled style={{ marginRight: "15px" }} />
									Edit
								</div>
							)}
						</div>
						<Divider style={{ margin: "0" }} />
						<div
							style={{
								backgroundColor: "white",
								fontSize: "11px",
								padding: "10px",
							}}
						>
							<div>
								<Table
									size="middle"
									dataSource={dataPelatihanByJabatan}
									columns={columnsPelatihanByJabatan}
									pagination={false}
									// footer={renderFooter}
									bordered
									scroll={{ y: "true" }}
									style={{
										marginTop: "10px",
										padding: "10px",
									}}
									rowClassName={(record, index) =>
										index % 2 === 0 ? "white-row" : "bg-stone-100"
									}
								></Table>
							</div>
						</div>

						<Divider style={{ margin: "0px 0px 20px 0px" }} />
					</div>
				</div>
				<div>
					{!isOpenEditGolongan &&
						!isOpenEditUmur &&
						!isOpenEditJumlahPekerjaOutSource &&
						!isOpenEditPenerimaanKaryawanBaru &&
						!isOpenEditJumlahPelamarKerja &&
						!isOpenEditTurnOver &&
						!isOpenEditMasaKerja &&
						!isOpenEditPendidikan &&
						!isOpenEditKaryawanByGender &&
						!isOpenEditPelatihanByGender &&
						!isOpenEditPelatihanByJabatan && (
							<div
								className="my-15 rounded-md border-none  p-3 "
								style={{
									marginLeft: "40px",
									marginBottom: "30px",
									marginTop: "30px",
									minWidth: "70rem",
									fontSize: "14px",
									display: "flex",
									justifyContent: "right",
								}}
							>
								<Button
									htmlType="submit"
									className="mr-4 bg-blue-700 hover:bg-blue-500   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
									style={{
										color: "white",
										width: "200px",
										height: "40px",
										fontSize: "14px",
										transition: "ease-in ",
										marginBottom: "10px",
										marginTop: "5px",
										marginLeft: "10px",
									}}
								>
									Submit Changes
								</Button>
							</div>
						)}
				</div>
				<div
					style={{
						backgroundColor: "white",
						height: "30px",
						marginTop: "50px",
					}}
				></div>
			</div>
		</>
	);
}
