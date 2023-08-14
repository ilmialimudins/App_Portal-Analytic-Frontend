// import { doAddManageParentMenu } from "";
import { Button, Divider, Form, Input, Modal, Select, Typography } from "antd";
import { useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

interface AddManageParentMenuProps {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}

export default function AddManageParentMenu(props: AddManageParentMenuProps) {
	const { Option } = Select;
	const { handleClose } = props;

	const onFinish = () => {
		handleClose(false);
	};

	const onFinishFailed = () => {};
	const { Text, Link } = Typography;

	const [parentMenus, setParentMenus] = useState<string[]>([]);

	const handleAddParent = () => {
		const newIndex = parentMenus.length + 1;
		setParentMenus([...parentMenus, `Parent ${newIndex}`]);
	};

	const handleDeleteParent = (index: number) => {
		const updatedParents = parentMenus.filter((_, i) => i !== index);
		setParentMenus(updatedParents);
	};
	return (
		<>
			<Modal
				centered={true}
				width={610}
				title="Manage Parent Menu "
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
						width: 570,
					}}
				>
					{parentMenus.map((parent, index) => (
						<Form.Item
							key={index}
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<div style={{ display: "flex", alignItems: "center" }}>
								<Text
									style={{
										backgroundColor: "grey",
										border: "1px solid #ccc",
										borderRadius: "4px 0 0 4px",
										padding: "5px 10px",
										display: "inline-block",
									}}
								>
									{parent}:
								</Text>
								<Input
									style={{
										width: "400px",
										backgroundColor: "white",
										border: "1px solid #ccc",
										borderRadius: "0px 2px 2px 0",
										padding: "5px 10px",
										display: "inline-block",
									}}
									placeholder={`Manage ${parent} Menu`}
								/>
								<FaTrash
									style={{
										color: "red",
										fontSize: "12px",
										marginLeft: "17.5px",
										cursor: "pointer",
									}}
									className="hover:text-red-700"
									onClick={() => handleDeleteParent(index)}
								/>
							</div>
						</Form.Item>
					))}
					<Form.Item>
						<div
							className="my-15 rounded-md border-none bg-transparent"
							style={{
								display: "flex",
								border: "1px dashed blue",
								justifyContent: "center",
								alignItems: "center",
								height: "40px",
								width: "90%",
								color: "blue",
							}}
						>
							<FaPlusCircle />
							<label
								style={{ marginLeft: "10px", cursor: "pointer" }}
								onClick={handleAddParent}
							>
								Add Parent Menu
							</label>
						</div>
					</Form.Item>

					<Divider />
					<Form.Item
						colon={false}
						style={{
							textAlign: "center",
						}}
					>
						<Button
							htmlType="reset"
							onClick={props.clickCancel}
							className="mr-4 bg-white hover:bg-stone-100   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
							style={{
								color: "gray",
								width: "150px",
								height: "35px",
								fontSize: "12px",
								transition: "ease-in ",
								marginLeft: "10px",
							}}
						>
							Cancel
						</Button>
						<Button
							htmlType="submit"
							className="mr-4 bg-blue-700 hover:bg-blue-500   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
							style={{
								color: "white",
								width: "150px",

								fontSize: "12px",
								transition: "ease-in ",
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
