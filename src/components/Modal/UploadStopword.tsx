// import { doUploadStopword } from "";
import {
	Button,
	DatePicker,
	DatePickerProps,
	Divider,
	Form,
	Input,
	Modal,
	Select,
	Upload,
	UploadProps,
	message,
} from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

import { CloudUploadOutlined } from "@ant-design/icons";

interface UploadStopwordProps {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}

interface FormValues {
	company_name: string;
	tahun_survey: string;
}
export default function UploadStopword(props: UploadStopwordProps) {
	const { Option } = Select;
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		console.log(date, dateString);
	};
	const { Dragger } = Upload;
	const upload: UploadProps = {
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
	const { handleClose } = props;

	const onFinish = (data: any) => {
		handleClose(false);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<FormValues>) => {};

	return (
		<>
			<Modal
				centered={true}
				width={1080}
				title="Upload Stopword "
				open={props.show}
				onOk={props.clickOk}
				// confirmLoading={confirmLoading}
				onCancel={props.clickCancel}
				style={{ textAlign: "left" }}
				footer={null}
			>
				<Form
					layout="horizontal"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					style={{
						paddingLeft: "10px",
						width: 600,
					}}
				>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Company Name"
						name={"company_name"}
						rules={[{ required: true, message: "please select company name" }]}
					>
						<Select
							style={{
								width: "400px",
							}}
						>
							<Option value="line1">PT. Financial Service </Option>
							<Option value="line2">T. Management Service </Option>
							<Option value="line3">T. Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						rules={[{ required: true, message: "please select year" }]}
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="Tahun Survey"
						name={"tahun_survey"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<DatePicker onChange={onChange} picker="year" />
					</Form.Item>
					<Divider style={{ width: 1010 }} />
					<Form style={{ width: 1010, height: 300 }}>
						<div
							style={{
								border: "1.5px Dashed grey",
								borderWidth: "1.5px",
								height: "100%",
							}}
						>
							<Dragger {...upload}>
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
					</Form>
				</Form>
			</Modal>
		</>
	);
}
