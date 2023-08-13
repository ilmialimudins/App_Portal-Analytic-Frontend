// import { doAddMainMAPPINGUSER } from "";
import { Button, Checkbox, Divider, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { HiEllipsisHorizontal } from "react-icons/hi2";

interface AddMainMAPPINGUSERProps {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}
export default function AddMainMappingUser(props: AddMainMAPPINGUSERProps) {
	const { Option } = Select;
	const { handleClose } = props;

	const onFinish = () => {
		handleClose(false);
	};

	const onFinishFailed = () => {};

	// const [isModalVisible, setIsModalVisible] = useState(false);

	// const showModal = () => {
	// 	setIsModalVisible(true);
	// };

	// const handleCancel = () => {
	// 	setIsModalVisible(false);
	// };
	return (
		<>
			<Modal
				centered={true}
				width={640}
				title="Add New MappingUser"
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
										Add MappingUser
									</Button>
								</Form.Item>
								{/* Add Submit button or other actions */}
							</Form>
						</Modal>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Role User"
						name={"checkbox_6"}
					>
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
