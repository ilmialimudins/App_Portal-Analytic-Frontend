import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

const { Option } = Select;

interface CleansingSurvey {
	validation: string;
	respondent_id: string;
	survey_id: string;
	business_line: string;
	company: string;
	location: string;
	job_tittle: string;
	branch: string;
	plant: string;
	job_sites: string;
	directorate: string;
	division: string;
	department: string;
	grade: string;
	birth_year: string;
	entry_year_astra: string;
	entry_year_company: string;
	survey_year: string;
	age_generation: string;
	age_group: string;
	service_year: string;
	employee_status: string;
	function: string;
	region: string;
	area: string;
	sales_office: string;
	kebun: string;
	gender: string;
	entry_year_difference: string;
	filiing_time: string;
	similiar_time: string;
	complete_answear: string;
	age_this_year: string;
	age_when_entering_company: string;
	age: string;
}

interface EditCleansingSurveyProps {
	idCleansingSurvey?: number;
	cleansingSurvey?: CleansingSurvey;
	handleClose: (param: boolean) => void;
	show?: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	isVerified?: boolean;
}

export default function EditCleansingSurvey(props: EditCleansingSurveyProps) {
	const { handleClose } = props;
	const idCleansingSurvey = props.idCleansingSurvey;
	const cleansingSurvey = props.cleansingSurvey;
	const onFinish = (data: EditCleansingSurveyProps) => {
		handleClose(false);
	};

	const onFinishFailed = (
		errorInfo: ValidateErrorEntity<EditCleansingSurveyProps>
	) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Modal
				centered={true}
				width={670}
				title={
					<>
						<div style={{ marginBottom: "5px" }}>Add Company</div>
						<Divider />
					</>
				}
				open={props.show}
				onOk={props.clickOk}
				onCancel={props.clickCancel}
				style={{ textAlign: "left" }}
				footer={null}
				bodyStyle={{
					display: "flex",
					flexDirection: "column",
					maxHeight: "75vh",
					overflowY: "auto",
					paddingRight: "20px",
				}}
				maskStyle={{
					backdropFilter: "blur(1px)",
				}}
			>
				<Form
					layout="horizontal"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					style={{
						paddingLeft: "10px",
						width: 610,
					}}
				>
					<Form.Item
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="RespondentID"
						name={"respondent_id"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add RespondentID"
						/>
					</Form.Item>
					<Form.Item
						style={{ display: "flex" }}
						label="Validation"
						name={"validation"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Validation"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="SurveyID"
						name={"survey_id"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add SurveyID"
						/>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Date Version"
						name={"date_version"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Date Version"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
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
						label="Company"
						name={"company"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Company"
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
							placeholder="Add Location"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Directore"
						name={"directore"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Directore"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Division"
						name={"division"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Division"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Department"
						name={"department"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Department"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Branch"
						name={"branch"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Branch"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Job Title"
						name={"job_title"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Job Title"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Grade"
						name={"grade"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Grade"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Education"
						name={"education"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Education"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Birth Year"
						name={"birth_year"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Birth Year"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>
					<Form.Item
						style={{ marginTop: "5%", display: "flex" }}
						label="Entry Year (Astra)"
						name={"entry_year_astra"}
					>
						<Select
							style={{
								width: "400px",
							}}
							placeholder="Add Entry Year (Astra)"
						>
							<Option value="line1">Financial Service </Option>
							<Option value="line2">Management Service </Option>
							<Option value="line3">Information Service </Option>
						</Select>
					</Form.Item>

					<Form.Item
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="Entry Year (Company)"
						name={"entry_year_company"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Entry Year (Company)"
						/>
					</Form.Item>
					<Form.Item
						style={{
							display: "flex",
							alignItems: "center",
						}}
						label="Survey Year"
						name={"survey_year"}
					>
						<Input
							style={{
								width: "400px",
							}}
							placeholder="Add Survey Year"
						/>
					</Form.Item>
					<Divider />
					<Form.Item
						label=" "
						colon={false}
						style={{
							textAlign: "left",
							height: "35px",
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
