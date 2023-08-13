"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import { data } from "autoprefixer";
import BackHome, { ToLink } from "@/components/Other/BackHome";
import {
	Button,
	Input,
	Select,
	DatePicker,
	DatePickerProps,
	Upload,
	UploadProps,
	message,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { FaCalendar } from "react-icons/fa";

export default function UploadInvitedRespondent() {
	const { Search } = Input;
	const { Option } = Select;

	const { Dragger } = Upload;

	const props: UploadProps = {
		name: "file",
		multiple: true,
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		},
	};
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};
	return (
		<>
			<div>
				<div
					style={{
						display: "flex",
						height: "80px",
						alignItems: "center",
						justifyContent: "left",
						alignContent: "center",
						paddingTop: "20px",
					}}
				>
					<div
						style={{
							display: "flex",
							height: "20px",
							alignItems: "center",
							justifyContent: "left",
							alignContent: "center",
							paddingTop: "20px",
						}}
					>
						<BackHome text={"EES"} icon={">"} />
						<ToLink
							text="Survey Progress Monitoring"
							icon=">"
							link="ess"
							tittle="Invited Respondent SPM"
						/>
					</div>
				</div>
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24PX" }}>
						Invited Respondent SPM - Upload
					</strong>
				</div>

				<div className=" justify-center px-10 pb-5">
					<div
						className="my-15 rounded-md border-none bg-white "
						style={{
							width: "100%",
							padding: "20px 20px 20px 0",
						}}
					>
						<div
							className="border-nonepy-1  flex rounded border-none bg-white "
							style={{
								width: "100%",
								marginTop: "10px",
								marginBottom: "20px",
								backgroundColor: "white",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
									width: "40px",
									backgroundColor: "blue",
									color: "white",
									height: "50px",
									borderTopRightRadius: "7px",
									borderBottomRightRadius: "7px",
									marginRight: "20px",
									marginBottom: "30px",
								}}
							>
								1.
							</div>
							<div>
								<div>Dowload & Template</div>
								<div>
									Dowload & Isi Template sesuai dengan tipe ynag dipilih
								</div>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none bg-white "
							style={{
								width: "100%",
								marginTop: "10px",
								marginBottom: "20px",
								marginRight: "10px",
							}}
						>
							<div
								style={{
									width: "50%",
									marginRight: "30px",
									marginLeft: "50px",
								}}
							>
								<div>Company Group</div>
								<div>
									<Select
										style={{
											width: "700px",
											marginTop: "10px",
										}}
										placeholder=""
									>
										<Option value="line1">PT. Financial Service </Option>
										<Option value="line2">PT. Management Service </Option>
										<Option value="line3">PT. Information Service </Option>
									</Select>
								</div>
							</div>
							<div
								style={{
									width: "50%",
									marginRight: "20px",
									marginLeft: "50px",
								}}
							>
								<div>Company Name</div>
								<div>
									<Select
										style={{
											width: "700px",
											marginTop: "10px",
										}}
										placeholder=""
									>
										<Option value="line1">PT. Financial Service </Option>
										<Option value="line2">PT. Management Service </Option>
										<Option value="line3">PT. Information Service </Option>
									</Select>
								</div>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none bg-white "
							style={{
								width: "100%",
								marginTop: "10px",
								marginBottom: "20px",
							}}
						>
							<div
								style={{
									width: "50%",
									marginRight: "20px",
									marginLeft: "50px",
								}}
							>
								<div>SurveyID</div>
								<div>
									<Input
										style={{
											width: "700px",
											marginTop: "10px",
										}}
										placeholder=""
									></Input>
								</div>
							</div>
							<div
								style={{
									width: "50%",
									marginRight: "20px",
									marginLeft: "50px",
								}}
							>
								<div>Tahun Survey</div>
								<div>
									<DatePicker
										onChange={onChange}
										picker="year"
										suffixIcon={<FaCalendar />}
										placeholder="yyyy"
										style={{
											marginTop: "10px",
										}}
									/>
								</div>
							</div>
						</div>

						<div
							className="border-nonepy-1 flex justify-between rounded border-none bg-white "
							style={{
								width: "100%",
								marginTop: "10px",
								marginBottom: "20px",
							}}
						>
							<div
								style={{
									width: "100%",
									paddingTop: "5px",
									marginRight: "20px",
								}}
							></div>
							<div>
								<Button
									className="bg-blue-800  hover:bg-blue-500 "
									style={{
										height: "40px",
										width: "170px",
										fontSize: "16px",
										padding: "5px",
										border: "1px rounded ",
										borderColor: "royalblue",
										marginTop: "50px",
										marginRight: "20px",
									}}
									// onClick={() => setDownload(true)}
								>
									<div
										className="flex justify-center px-2 "
										style={{ color: "white" }}
									>
										<strong>Download</strong>
									</div>
								</Button>
							</div>
						</div>
					</div>
					<div
						className="my-15 rounded-md border-none bg-white "
						style={{
							width: "100%",
							padding: "20px 20px 20px 0",
							marginTop: "20px",
						}}
					>
						<div
							className="border-nonepy-1  flex rounded border-none bg-white "
							style={{
								width: "100%",
								marginTop: "10px",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
									width: "40px",
									backgroundColor: "blue",
									color: "white",
									height: "50px",
									borderTopRightRadius: "7px",
									borderBottomRightRadius: "7px",
									marginRight: "20px",
									marginBottom: "30px",
								}}
							>
								2.
							</div>
							<div>
								<div>Uplaod Template</div>
								<div>
									Pilih file yang telah diisi atau dragfile ke kolom di bawah
								</div>
							</div>
						</div>
						<div
							className="border-nonepy-1 flex justify-between rounded border-none bg-white "
							style={{
								width: "100%",
								marginTop: "10px",
								marginBottom: "20px",
							}}
						>
							<div
								style={{
									width: "100%",
									marginRight: "20px",
									marginLeft: "50px",
									height: "400px",
								}}
							>
								<Dragger {...props}>
									<p className="ant-upload-drag-icon">
										<CloudUploadOutlined />
									</p>
									<p className="ant-upload-text " style={{ fontSize: "14px" }}>
										Drag and drop file or
									</p>
									<div>
										<Button
											className="mr-4 bg-blue-700 hover:bg-blue-500 hover:text-red-700  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
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
											Browse File
										</Button>
									</div>
									<p className="ant-upload-hint">Max size per file: 30MB</p>
								</Dragger>
							</div>
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
