import { ValidateErrorEntity } from "rc-field-form/es/interface";
import { Button, Checkbox, Divider, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import Search from "antd/es/input/Search";

const { Option } = Select;

interface DataMainUSER {
	company_code: string;
	company: string;
	alias_company: string;
	server_group: string;
	business_line: string;
	current_modelling_type: string;
}

interface EditMainUSERProps {
	idMainUSER?: string;
	dataMainUSER?: DataMainUSER;
	handleClose: (param: boolean) => void;
	show?: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	isVerified?: boolean;
}

// const [isModalVisible, setIsModalVisible] = useState(false);

// const showModal = () => {
// 	setIsModalVisible(true);
// };

// const handleCancel = () => {
// 	setIsModalVisible(false);
// };

export default function EditMainUser(props: EditMainUSERProps) {
	const { handleClose } = props;
	const idMainUSER = props.idMainUSER;
	const dataMainUSER = props.dataMainUSER;
	const onFinish = (data: EditMainUSERProps) => {
		handleClose(false);
	};

	const onFinishFailed = (
		errorInfo: ValidateErrorEntity<EditMainUSERProps>
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Modal
				centered={true}
				width={640}
				title="Add Access"
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
						style={{
							display: "flex",
							justifyContent: "left",
						}}
						label="Email User"
						name={"email_user"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<div style={{ display: "flex" }}>
							<Input
								style={{ width: "350px" }}
								placeholder="Add Or Paste email here"
							/>
							<Button
								icon={<HiEllipsisHorizontal />}
								style={{ marginLeft: "8px", backgroundColor: "white" }}
								// onClick={showModal}
							/>
						</div>
						<Modal
							title="New Form"
							// visible={isModalVisible}
							// onCancel={handleCancel}
							footer={null}
						>
							<Form>
								<Form.Item label="Title" name="title">
									<Input />
								</Form.Item>
								<Form.Item label="Search Email" name="search_email">
									<Input />
								</Form.Item>
								<Form.Item name="all_emails">
									<Checkbox>All Emails</Checkbox>
								</Form.Item>
								<Form.Item name="selected_emails">
									<Checkbox>Email 1</Checkbox>
									<Checkbox>Email 2</Checkbox>
									{/* Add more checkboxes for emails */}
								</Form.Item>
								<Form.Item
									label=" "
									colon={false}
									style={{ textAlign: "left", marginTop: "10px" }}
								>
									<Button
										htmlType="reset"
										onClick={props.clickCancel}
										className="mr-4 bg-white hover:bg-stone-100   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
										style={{
											color: "blue",
											// width: "170px",
											// height: "40px",
											fontSize: "14px",
											transition: "ease-in ",
											marginBottom: "10px",
											marginTop: "5px",
										}}
									>
										Clear Data
									</Button>
									<Button
										htmlType="submit"
										className="mr-4 bg-blue-700 hover:bg-blue-500   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
										style={{
											color: "white",
											// width: "170px",
											// height: "40px",
											fontSize: "14px",
											transition: "ease-in ",
											marginBottom: "10px",
											marginTop: "5px",
											marginLeft: "10px",
										}}
									>
										Add ManageAccess
									</Button>
								</Form.Item>
								{/* Add Submit button or other actions */}
							</Form>
						</Modal>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Business Line"
						name={"business_line"}
					>
						<Select
							style={{
								width: "300px",
							}}
							placeholder="Filter by Company"
						>
							<Option value="line1">PT. Financial Service </Option>
							<Option value="line2">PT. Management Service </Option>
							<Option value="line3">PT. Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Survey Group Company"
						name={"business_line"}
					>
						<Select
							style={{
								width: "300px",
							}}
							placeholder="Filter by Company"
						>
							<Option value="line1">PT. Financial Service </Option>
							<Option value="line2">PT. Management Service </Option>
							<Option value="line3">PT. Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Role User"
						name={"checkbox_6"}
					>
						<Search
							placeholder="Search Company"
							// onSearch={handleSearch}
							allowClear
							enterButton
						/>
						<Checkbox>Admin CIR</Checkbox>
						<Checkbox>Admin CIR 2</Checkbox>
						<Checkbox>PIC CIR </Checkbox>
						<Checkbox>PIC CIR 2</Checkbox>
					</Form.Item>

					<Divider />
					<Form.Item
						label=" "
						colon={false}
						style={{ textAlign: "left", marginTop: "10px" }}
					>
						<Button
							htmlType="reset"
							onClick={props.clickCancel}
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
							Cancel
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
				</Form>
			</Modal>
		</>
	);
}
