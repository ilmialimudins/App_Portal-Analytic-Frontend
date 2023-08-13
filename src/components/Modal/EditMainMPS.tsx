import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

const { Option } = Select;

interface DataMainMPS {
	company_code: string;
	company: string;
	alias_company: string;
	server_group: string;
	business_line: string;
	current_modelling_type: string;
}

interface EditMainMPSProps {
	idMainMPS?: string;
	dataMainMPS?: DataMainMPS;
	handleClose: (param: boolean) => void;
	show?: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	isVerified?: boolean;
}

export default function EditMainMPS(props: EditMainMPSProps) {
	const { handleClose } = props;
	const idMainMPS = props.idMainMPS;
	const dataMainMPS = props.dataMainMPS;
	const onFinish = (data: EditMainMPSProps) => {
		handleClose(false);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<EditMainMPSProps>) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Modal
				centered={true}
				width={640}
				title="Edit Company"
				open={props.show}
				onOk={props.clickOk}
				onCancel={props.clickCancel}
				style={{ textAlign: "left", paddingLeft: "10px" }}
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
						label="Company"
						name={"company"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Select Company"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Business Group"
						name={"business_group"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Select Business Group"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Ownership Status"
						name={"ownership_status"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Select Ownership Status"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Location"
						name={"location"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Select Location"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="CLA"
						name={"cla"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Select CLA"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Direct Reviwer"
						name={"direct_review"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Select Direct Reviwer"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
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
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
