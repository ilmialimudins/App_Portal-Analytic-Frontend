// import { doEditMainUSER } from "";
import { Button, Divider, Form, Input, Modal, Select, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { styled } from "@tanstack/react-query-devtools/build/lib/utils";
import { useState } from "react";

interface EditMainHcDashboardrops {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}
interface Section {
	key: React.Key;
	no: string;
	section_name: string;
	section_id: string;
}
export default function EditMainHcDashboard(props: EditMainHcDashboardrops) {
	const { handleClose } = props;
	const onFinish = () => {
		handleClose(false);
	};
	const onFinishFailed = () => {};
	const [dataSource, setDataSource] = useState<Section[]>([
		{
			key: "0",
			section_name: "Edward King 0",
			section_id: "32",
			no: "London, Park Lane no. 0",
		},
		{
			key: "1",
			section_name: "Edward King 1",
			section_id: "32",
			no: "London, Park Lane no. 1",
		},
	]);
	const handleSectionNameChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		key: React.Key
	) => {
		const newData = dataSource.map((item) => {
			if (item.key === key) {
				return { ...item, section_name: e.target.value };
			}
			return item;
		});
		setDataSource(newData);
	};
	const handleSectionIdChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		key: React.Key
	) => {
		const newData = dataSource.map((item) => {
			if (item.key === key) {
				return { ...item, section_id: e.target.value };
			}
			return item;
		});
		setDataSource(newData);
	};
	const columnsSection: ColumnType<Section>[] = [
		{
			title: "No",
			dataIndex: "no",
			key: "no",
			width: "20",
		},
		{
			title: "Section Name",
			dataIndex: "section_name",
			key: "section_name",
			render: (_, record: Section) => (
				<Input
					value={record.section_name}
					onChange={(e) => handleSectionNameChange(e, record.key)}
				/>
			),
		},
		{
			title: "Section ID",
			dataIndex: "section_id	",
			key: "section_id	",
			render: (_, record: Section) => (
				<Input
					value={record.section_id}
					onChange={(e) => handleSectionIdChange(e, record.key)}
				/>
			),
		},

		{
			title: "Action",

			key: "action",
			align: "center",
			width: "5%",

			render: (_, record: { key: React.Key }) =>
				dataSource.length >= 1 ? (
					<span className="flex justify-center">
						<DeleteFilled
							style={{ color: "red", fontSize: "15px" }}
							className="hover:text-red-700"
							onClick={() => handleDelete(record.key)}
						/>
					</span>
				) : null,
		},
	];
	const [count, setCount] = useState(2);
	const handleEdit = () => {
		const newData: Section = {
			key: count,
			section_name: `Edward King ${count}`,
			section_id: "32",
			no: `London, Park Lane no. ${count}`,
		};
		setDataSource([...dataSource, newData]);
		setCount(count + 1);
	};
	const handleDelete = (key: React.Key) => {
		const newData = dataSource.filter((item) => item.key !== key);
		setDataSource(newData);
	};
	return (
		<>
			<Modal
				centered={true}
				width={640}
				title={<h2 style={{ fontSize: "18px" }}>Edit Report</h2>}
				open={props.show}
				onOk={props.clickOk}
				// confirmLoading={confirmLoading}
				onCancel={props.clickCancel}
				style={{ textAlign: "left", margin: "10px" }}
				footer={null}
			>
				<div
					style={{
						maxHeight: "480px",
						maxWidth: "650px",
						minWidth: "600px",
					}}
				>
					<Form
						layout="horizontal"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							style={{
								display: "flex",
								alignItems: "center",
								height: "30px",
								marginBottom: "10px",
							}}
							label="Workspace"
							name={"workspace"}

							// rules={[{ required: true, messsection_id: "Please input company name!" }]}
						>
							<Input
								disabled={true}
								style={{
									width: "400px",
								}}
								placeholder="Edit Workspace"
							/>
						</Form.Item>
						<Form.Item
							style={{
								marginBottom: "10px",
							}}
							label="Report Name"
							name={"report"}
						>
							<Input
								style={{
									width: "400px",
								}}
								placeholder="Edit Report Name"
							/>
						</Form.Item>

						<Form.Item
							style={{
								marginBottom: "10px",
							}}
							label="RaportID"
							name={"raport_id"}
						>
							<Input
								style={{
									width: "400px",
								}}
								placeholder="Edit Raport"
							/>
						</Form.Item>
						<Form.Item
							style={{
								marginBottom: "10px",
							}}
							label="URL Raport"
							name={"url_raport"}
						>
							<Input
								style={{
									width: "400px",
								}}
								placeholder="Edit URL Raport"
							/>
						</Form.Item>
						<Form.Item
							style={{
								marginBottom: "10px",
							}}
							label="Manage Section"
							name={"mananage_section"}
						></Form.Item>
						<Form.Item
							style={{
								marginBottom: "10px",
								fontSize: "12px",
							}}
						>
							<Table
								scroll={{ x: true }}
								size="small"
								dataSource={dataSource}
								columns={columnsSection}
								pagination={false}
								style={{
									overflow: "auto",
									maxHeight: "200px",
									fontSize: "12px",
								}}
							></Table>

							<div
								style={{ color: "blue", cursor: "pointer" }}
								onClick={handleEdit}
							>
								+ Edit New Section
							</div>
						</Form.Item>
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
									height: "35px",
									fontSize: "14px",
									transition: "ease-in ",
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
									height: "35px",
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
				</div>
			</Modal>
		</>
	);
}
