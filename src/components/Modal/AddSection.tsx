// import { doAddSection } from "";
import { Button, Divider, Form, Input, Modal, Select } from "antd";

interface AddSectionProps {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}

export default function AddSection(props: AddSectionProps) {
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
				title="Add Section "
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
						label="Demography"
						name={"demography"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder=""
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
								color: "gray",
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
