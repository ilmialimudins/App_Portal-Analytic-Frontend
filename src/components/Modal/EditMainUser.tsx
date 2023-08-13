import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

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
				title="Add New User"
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
							alignItems: "center",
						}}
						label="NPK"
						name={"npk"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<Input
							style={{
								width: "400px",
							}}
							// placeholder="Add NPK"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Full Name"
						name={"full_name"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Full Name"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Phone Number"
						name={"phone_number"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Phone Number"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>

					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Company"
						name={"company"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Company"
						>
							<Option value="line1">Company</Option>
							<Option value="line2">Vendor</Option>
							<Option value="line3">Agent</Option>
							{/* Add more options as needed */}
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Email"
						name={"email"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Email"
						/>
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
							Clear Data
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
							Add User
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
