import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

const { Option } = Select;

interface DataBusinessLineEES {
	business_line: string;
	business_line_code: number;
}

interface EditBusinessLineEESProps {
	idBusinessLineEES?: string;
	dataBusinessLineEES?: DataBusinessLineEES;
	handleClose: (param: boolean) => void;
	show?: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	isVerified?: boolean;
}

export default function EditBusinessLineEES(props: EditBusinessLineEESProps) {
	const { handleClose } = props;
	const idBusinessLineEES = props.idBusinessLineEES;
	const dataBusinessLineEES = props.dataBusinessLineEES;
	const onFinish = (data: EditBusinessLineEESProps) => {
		handleClose(false);
	};

	const onFinishFailed = (
		errorInfo: ValidateErrorEntity<EditBusinessLineEESProps>
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Modal
				centered={true}
				width={640}
				title="Edit Business Line"
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
						label="Business Line Code"
						name={"business_line_code"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Edit Business Line Code"
							disabled={true}
						/>
					</Form.Item>
					<Form.Item
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="Business Line"
						name={"business_line"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Edit Business Line"
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
							Save Changes
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
