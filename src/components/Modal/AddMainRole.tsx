// import { doAddMainROLE } from "";
import { Button, Divider, Form, Input, Modal, Select } from "antd";

interface AddMainROLEProps {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}
export default function AddMainRole(props: AddMainROLEProps) {
	const { Option } = Select;
	const { handleClose } = props;

	const onFinish = () => {
		handleClose(false);
	};

	const onFinishFailed = () => {};

	return (
		<>
			<Modal
				centered={true}
				width={640}
				title="Add New Role"
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
						label="Role Name"
						name={"role_name"}

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
						style={{ marginTop: "5%", display: "flex", height: "150px" }}
						label="Role Description"
						name={"role_description"}
					>
						<Input.TextArea
							style={{
								width: "400px",
								minHeight: "150px",
							}}
							placeholder="Add Role Description"
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
							Add Role
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}
