// import { doAddMainMAPPINGUSER } from "";
import {
	Button,
	Checkbox,
	theme,
	Divider,
	Form,
	Input,
	Modal,
	Select,
	Tag,
} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import { HiEllipsisHorizontal, HiMagnifyingGlass } from "react-icons/hi2";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
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

	const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

	const showSecondModal = () => {
		setIsSecondModalVisible(true);
	};

	const handleSecondModalCancel = () => {
		setIsSecondModalVisible(false);
		setCheckedList(defaultCheckedList);
	};

	const CheckboxGroup = Checkbox.Group;

	const plainOptions = [
		"muhamamd.alimudin@astra.co.id",
		"Pear@astra.co.id",
		"Orange@astra.co.id",
		"haha@astra.co.id",
		"ihiih@astra.co.id",
		"saokda@astra.co.id",
		"asdadasd@astra.co.id",
		"qeqweqwe@astra.co.id",
		"aaaaaaaaa@astra.co.id",
		"bbbbbbbbbbbb@astra.co.id",
		"cccccccccc@astra.co.id",
		"dddddddddd@astra.co.id",
	];
	const defaultCheckedList = [""];
	const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);

	const onChange = (list: CheckboxValueType[]) => {
		setCheckedList(list.map((value) => value.toString()));
	};
	const indeterminate =
		checkedList.length > 0 && checkedList.length < plainOptions.length;

	const checkAll = plainOptions.length === checkedList.length;

	const onCheckAllChange = (e: CheckboxChangeEvent) => {
		setCheckedList(e.target.checked ? plainOptions : []);
	};
	function onFinishFailed(errorInfo: ValidateErrorEntity<any>) {
		console.log("Failed:", errorInfo);
	}

	const handleRemoveTag = (tagIndex: number) => {
		const updatedTags = checkedList.filter((_, index) => index !== tagIndex);
		setCheckedList(updatedTags);
	};

	const handleAddAllTags = () => {
		const uniqueTags = Array.from(new Set([...checkedList, ...plainOptions]));
		setCheckedList(uniqueTags);
	};
	return (
		<>
			<Modal
				centered={true}
				width={940}
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
						minWidth: 900,
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
						<div
							style={{
								display: "flex",
								minWidth: "600px",
							}}
						>
							{checkedList.includes("") ? (
								<Select
									mode="tags"
									style={{ minWidth: "600px" }}
									placeholder="Add or paste users email here"
								></Select>
							) : (
								<Select
									mode="tags"
									style={{ minWidth: "600px" }}
									placeholder="Add or paste users email here"
									onChange={(values) => {
										const filteredValues = values.filter(
											(value) => value.trim() !== ""
										);
										setCheckedList(filteredValues);
									}}
									value={checkedList}
									tokenSeparators={[","]}
									maxTagCount={12}
									maxTagTextLength={20}
									onClear={() => setCheckedList([])}
								>
									{checkedList.map((tag, index) => (
										<Tag
											key={index}
											closable
											onClose={() => handleRemoveTag(index)}
											style={{ marginRight: 8, marginBottom: 8 }}
										>
											{tag}
										</Tag>
									))}
								</Select>
							)}

							<Button
								icon={<HiEllipsisHorizontal />}
								style={{ marginLeft: "8px", backgroundColor: "white" }}
								onClick={showSecondModal}
							/>
						</div>
						<Modal
							centered={true}
							width="40%"
							title={<div style={{ fontSize: "18px" }}>Lock Up User</div>}
							visible={isSecondModalVisible}
							onCancel={handleSecondModalCancel}
							footer={null}
							style={{
								textAlign: "left",
								top: "40%",
								left: "35%",
								transform: "translate(-50%, -50%)",
							}}
						>
							<Form>
								<div
									style={{
										border: "1px solid #ddd",
										borderRadius: "5px 5px 0px 0px",
										padding: "10px 0px 10px 10px",
										backgroundColor: "#777",
										marginTop: "-10px",
										display: "flex",
										textAlign: "left",
									}}
								>
									<div style={{ color: "white", fontSize: "12px" }}>
										New User Email
									</div>
								</div>
								<div
									style={{
										padding: "10px",
										boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
										borderRadius: "0px 0px 10px 10px",
									}}
								>
									<div>
										<Input
											style={{ marginBottom: "10px", minWidth: "600px" }}
											prefix={<HiMagnifyingGlass />}
											placeholder="Search email..."
										/>
										<div style={{ maxHeight: "150px", overflow: "auto" }}>
											<Checkbox
												indeterminate={indeterminate}
												onChange={onCheckAllChange}
												checked={checkAll}
											>
												Select all
											</Checkbox>
											<CheckboxGroup
												style={{ display: "flex", flexDirection: "column" }}
												options={plainOptions}
												value={checkedList}
												onChange={onChange}
											/>
										</div>
									</div>
								</div>
							</Form>
							<div></div>
							<Divider />
							<Form.Item
								label=" "
								colon={false}
								style={{
									marginTop: "10px",
									textAlign: "right",
									marginBottom: "10px",
								}}
							>
								<Button
									htmlType="reset"
									onClick={props.clickCancel}
									className="mr-4 bg-white hover:bg-stone-100   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
									style={{
										color: "blue",
										// width: "170px",
										// height: "40px",
										fontSize: "12px",
										transition: "ease-in ",
										marginBottom: "5px",
										marginTop: "5px",
									}}
								>
									Close
								</Button>
								<Button
									htmlType="submit"
									className="mr-4 bg-blue-700 hover:bg-blue-500   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
									style={{
										color: "white",
										// width: "170px",
										// height: "40px",
										fontSize: "12px",
										transition: "ease-in ",
										marginBottom: "5px",
										marginTop: "5px",
										marginLeft: "5px",
									}}
									onClick={() => {
										setIsSecondModalVisible(false);
										handleAddAllTags;
									}}
								>
									Submit
								</Button>
							</Form.Item>
						</Modal>
					</Form.Item>
					<Form.Item
						style={{
							marginTop: "5%",
							height: "120px",
						}}
						label="Role User"
						name={"role_user"}
					>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<label
								style={{
									display: "flex",
									alignItems: "left",
									marginTop: "10px",
								}}
							>
								<Checkbox />
								<span style={{ marginLeft: "5px" }}>Admin CIR</span>
							</label>
							<label
								style={{
									display: "flex",
									alignItems: "left",
									marginTop: "10px",
								}}
							>
								<Checkbox />
								<span style={{ marginLeft: "5px" }}>Admin CIR 2</span>
							</label>
							<label
								style={{
									display: "flex",
									alignItems: "left",
									marginTop: "10px",
								}}
							>
								<Checkbox />
								<span style={{ marginLeft: "5px" }}>PIC CIR</span>
							</label>
							<label
								style={{
									display: "flex",
									alignItems: "left",
									marginTop: "10px",
								}}
							>
								<Checkbox />
								<span style={{ marginLeft: "5px" }}>PIC CIR 2</span>
							</label>
						</div>
					</Form.Item>

					<Divider />
					<Form.Item
						label=" "
						colon={false}
						style={{
							textAlign: "left",
						}}
					>
						<Button
							htmlType="reset"
							onClick={props.clickCancel}
							className="mr-4 bg-white hover:bg-stone-100   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
							style={{
								color: "blue",
								width: "170px",
								height: "40px",
								fontSize: "12px",
								transition: "ease-in ",
								marginTop: "-20px",
								marginBottom: "-20px",
								marginLeft: "100px",
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
								fontSize: "12px",
								transition: "ease-in ",
								marginTop: "-20px",
								marginBottom: "-20px",

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
