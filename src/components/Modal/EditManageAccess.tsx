import { ValidateErrorEntity } from "rc-field-form/es/interface";
import {
	Button,
	Checkbox,
	Divider,
	Form,
	Input,
	Modal,
	Select,
	Tag,
} from "antd";
import { useState } from "react";
import { HiEllipsisHorizontal, HiMagnifyingGlass } from "react-icons/hi2";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";

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
	const idMainUSER = props.idMainUSER;
	const dataMainUSER = props.dataMainUSER;
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
		"PT Astra International Tbk",
		"PT Astra Otoparts Tbk",
		"PT Astra Honda Motor",
		"PT Astra Daihatsu Motor",
		"PT Astra Agro Lestari Tbk",
		"PT United Tractors Tbk",
		"PT Astra Graphia Tbk",
		"PT Astra Sedaya Finance",
		"PT Serasi Autoraya (SERA)",
		"PT Astra Credit Companies",
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
				width={900}
				title={
					<div
						style={{
							fontSize: "18px",
							marginBottom: "20px",
							marginTop: "-10px",
							marginLeft: "10px",
						}}
					>
						Edit Access
					</div>
				}
				open={props.show}
				onOk={props.clickOk}
				// confirmLoading={confirmLoading}
				onCancel={props.clickCancel}
				footer={null}
			>
				<Form
					layout="horizontal"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					style={{
						minWidth: 860,
						fontSize: "12px",
						margin: "10px",
						height: "500px",
						overflowY: "auto",
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
											style={{ marginBottom: "10px" }}
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
							display: "flex",
							minWidth: "600px",
						}}
						label="Business Line"
						name={"business_line"}
					>
						<Select
							style={{
								width: "600px",
							}}
							placeholder="Filter by Company"
						>
							<Option value="line1">PT. Financial Service </Option>
							<Option value="line2">PT. Management Service </Option>
							<Option value="line3">PT. Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ display: "flex", minWidth: "600px" }}
						label="Survey Group Company"
						name={"survey_group_company"}
					>
						<Select
							style={{
								width: "600px",
							}}
							placeholder="Filter by Company"
						>
							<Option value="line1">PT. Financial Service </Option>
							<Option value="line2">PT. Management Service </Option>
							<Option value="line3">PT. Information Service </Option>
						</Select>
					</Form.Item>

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
								Access to Company
							</div>
						</div>
						<div
							style={{
								padding: "20px 0 0 20px",
								boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
								borderRadius: "0px 0px 10px 10px",
								fontSize: "12px",
							}}
						>
							<div>
								<Input
									style={{ marginBottom: "20px", minWidth: "600px" }}
									prefix={<HiMagnifyingGlass />}
									placeholder="Search email..."
								/>
								<div style={{ maxHeight: "165px", overflow: "auto" }}>
									<Checkbox
										indeterminate={indeterminate}
										onChange={onCheckAllChange}
										checked={checkAll}
									>
										Select all
									</Checkbox>
									<div
										style={{ margin: "10px 0px 10px 0px", fontSize: "16px" }}
									>
										A
									</div>
									<div style={{ display: "flex", flexDirection: "row" }}>
										<div style={{ flex: 1 }}>
											<CheckboxGroup
												style={{ display: "flex", flexDirection: "column" }}
												options={plainOptions.slice(
													0,
													Math.ceil(plainOptions.length / 2)
												)}
												value={checkedList}
												onChange={onChange}
											/>
										</div>
										<div style={{ flex: 1 }}>
											<CheckboxGroup
												style={{ display: "flex", flexDirection: "column" }}
												options={plainOptions.slice(
													Math.ceil(plainOptions.length / 2)
												)}
												value={checkedList}
												onChange={onChange}
											/>
										</div>
									</div>
									<div
										style={{ margin: "10px 0px 10px 0px", fontSize: "16px" }}
									>
										B
									</div>
									<div style={{ display: "flex", flexDirection: "row" }}>
										<div style={{ flex: 1 }}>
											<CheckboxGroup
												style={{ display: "flex", flexDirection: "column" }}
												options={plainOptions.slice(
													0,
													Math.ceil(plainOptions.length / 2)
												)}
												value={checkedList}
												onChange={onChange}
											/>
										</div>
										<div style={{ flex: 1 }}>
											<CheckboxGroup
												style={{ display: "flex", flexDirection: "column" }}
												options={plainOptions.slice(
													Math.ceil(plainOptions.length / 2)
												)}
												value={checkedList}
												onChange={onChange}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Form>
					<div></div>
					<Divider style={{ marginTop: "15px", marginBottom: "15px" }} />

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
								width: "150px",
								height: "30px",
								fontSize: "12px",
								transition: "ease-in ",
								marginTop: "-40px",
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
								width: "150px",
								height: "30px",
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
