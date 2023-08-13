import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

const { Option } = Select;

interface DataBusinessGroupMPS {
	business_group: string;
	business_group_code: number;
}

interface EditBusinessGroupMPSProps {
	idBusinessGroupMPS?: string;
	dataBusinessGroupMPS?: DataBusinessGroupMPS;
	handleClose: (param: boolean) => void;
	show?: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	isVerified?: boolean;
}

export default function EditBusinessGroupMPS(props: EditBusinessGroupMPSProps) {
	const { handleClose } = props;
	const idBusinessGroupMPS = props.idBusinessGroupMPS;
	const dataBusinessGroupMPS = props.dataBusinessGroupMPS;
	const onFinish = (data: EditBusinessGroupMPSProps) => {
		handleClose(false);
	};

	const onFinishFailed = (
		errorInfo: ValidateErrorEntity<EditBusinessGroupMPSProps>
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Modal
				centered={true}
				width={640}
				title="Edit Business Group"
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
						label="Business Group Code"
						name={"business_group_code"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Edit Business Group Code"
							disabled={true}
						/>
					</Form.Item>
					<Form.Item
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="Business Group"
						name={"business_group"}

						// rules={[{ required: true, message: "Please input company name!" }]}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Edit Business Group"
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
