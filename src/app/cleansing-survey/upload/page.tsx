"use client";
import Header from "@/components/EngagementPrediction/Header";
import LineBreak from "@/components/EngagementPrediction/LineBreak";
import BackHome from "@/components/Other/BackHome";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Upload, UploadProps, message } from "antd";
import { data } from "autoprefixer";

export default function UploadCleansingService() {
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
	return (
		<>
			<div>
				<BackHome text="EES" icon={`>`} tittle={"Cleansing Survey"} />
				<div className="flex justify-between px-10 py-5">
					<strong style={{ fontSize: "24PX" }}>
						Cleansing Survey - Upload Survey Validate
					</strong>
				</div>
				<div className="flex justify-center  px-10 pb-5 ">
					<div
						style={{
							backgroundColor: "white",
							height: "calc(71vh - 55px)",
							width: "calc(200vh - 55px)",
							display: "flex",
							justifyContent: "center",
							justifyItems: "center",
						}}
					>
						<div
							style={{
								height: "calc(61vh - 55px)",
								width: "calc(190vh - 55px)",
								marginTop: "50px",
								border: "1.5px Dashed grey",
								borderWidth: "1.5px",
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
		</>
	);
}
