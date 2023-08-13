import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

const { Option } = Select;

interface DataMainEES {
	company_code: string;
	company: string;
	alias_company: string;
	server_group: string;
	business_line: string;
	current_modelling_type: string;
}

interface EditMainEESProps {
	idMainEES?: string;
	dataMainEES?: DataMainEES;
	handleClose: (param: boolean) => void;
	show?: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	isVerified?: boolean;
}

export default function EditMainEES(props: EditMainEESProps) {
	const { handleClose } = props;
	const idMainEES = props.idMainEES;
	const dataMainEES = props.dataMainEES;
	const onFinish = (data: EditMainEESProps) => {
		handleClose(false);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<EditMainEESProps>) => {
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
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="Company"
						name={"company"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Company"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Survey Group"
						name={"survey_group"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Survey Group"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Business Line"
						name={"business_line"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Business Line"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Alias Company 1"
						name={"alias_company"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Alias Company 1"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Alias Company 2 (opt)"
						name={"alias_company_2"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Alias Company 2"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Alias Company 3 (opt)"
						name={"alias_company_3"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Alias Company 3"
						/>
					</Form.Item>

					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Modelling Type"
						name={"modelling_type"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Modelling Type"
						>
							<Option value="line1">Company</Option>
							<Option value="line2">Vendor</Option>
							<Option value="line3">Agent</Option>
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
