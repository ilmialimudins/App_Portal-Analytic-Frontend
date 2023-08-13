// import { doEditInvitedRespondent } from "";
import { Button, Checkbox, Divider, Form, Input, Modal, Select } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";

interface EditInvitedRespondentProps {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}

export default function EditInvitedRespondents(
	props: EditInvitedRespondentProps
) {
	const { Option } = Select;
	const { handleClose } = props;

	const onFinish = () => {
		handleClose(false);
	};

	const onFinishFailed = () => {};
	const CheckboxGroup = Checkbox.Group;

	const plainOptions = [
		{ label: "312341", value: "312341" },
		{ label: "787368", value: "787368" },
		{ label: "121343", value: "121343" },
	];
	const defaultCheckedList = [""];

	const [checkedList, setCheckedList] =
		useState<CheckboxValueType[]>(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);

	const onChange = (list: CheckboxValueType[]) => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
	};

	const onCheckAllChange = (e: CheckboxChangeEvent) => {
		setCheckedList(
			e.target.checked ? plainOptions.map((option) => option.value) : []
		);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	return (
		<>
			<Modal
				centered={true}
				width={640}
				title={
					<>
						Edit SurveyID
						<div style={{ fontSize: "12px", color: "gray" }}>
							Select SurveyID you wantto include in the data
						</div>
					</>
				}
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
						label=""
						name={"demography"}
					>
						<Checkbox
							indeterminate={indeterminate}
							onChange={onCheckAllChange}
							checked={checkAll}
						>
							All SurveyID
						</Checkbox>
						<Divider />
						<CheckboxGroup
							style={{ display: "flex", flexDirection: "column" }}
							options={plainOptions}
							value={checkedList}
							onChange={onChange}
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
