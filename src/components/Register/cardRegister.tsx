"use client";

import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Form, Space, Input } from "antd";
import ButtonLink from "../Login/buttonLink";
import TextLink from "../Login/textLink";
import Trademark from "../Login/tradmark";

interface FormValues {
	namalengkap: string;
	email: string;
	password: string;
	konfirmasi: string;
}
export default function CardRegister() {
	const onFinish = (values: FormValues) => {
		console.log("Success:", values);
	};

	const onFinishFailed = () => {
		console.log("Failed:");
	};
	return (
		<>
			<div className="item-center w-1/4  rounded-lg border border-4 bg-white  shadow-lg ">
				<div className="mt-5 text-center">
					<p className=" pb-2 pt-5 text-2xl text-blue-800"> Register</p>
					<p className="px-2 text-sm text-black">
						Let's make your account here
					</p>
				</div>
				<div className=" justify-left flex bg-white px-9 py-7 ">
					<Form
						name="basic"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						layout="vertical"
					>
						<Space direction="vertical">
							<Form.Item
								label="Nama Lengkap"
								name="namalengkap"
								rules={[
									{ required: false, message: "Masukan Nama Lengkap Anda" },
								]}
							>
								<Input
									placeholder="Masukan Nama Lengkap Anda "
									style={{ width: "170%" }}
								/>
							</Form.Item>

							<Form.Item
								label="Email"
								name="email"
								rules={[{ required: false, message: "Masukan Email Anda" }]}
							>
								<Input
									placeholder="Masukan Email Anda "
									style={{ width: "170%" }}
								/>
							</Form.Item>
							<Form.Item
								label="Password"
								name="password"
								rules={[{ required: false, message: "Masukan Password Anda" }]}
							>
								<Input.Password
									placeholder="Masukan Password Anda"
									style={{ width: "170%" }}
									iconRender={(visible) =>
										visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
									}
								/>
							</Form.Item>
							<Form.Item
								label="Konfirmasi Password"
								name="konfirmasi"
								rules={[
									{
										required: false,
										message: "Masukan Konfirmasi Password Anda",
									},
								]}
							>
								<Input.Password
									placeholder="Masukan Konfirmasi Password Anda"
									style={{ width: "170%" }}
									iconRender={(visible) =>
										visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
									}
								/>
							</Form.Item>
						</Space>
						<br></br>
					</Form>
				</div>
				<div className=" justify-center px-10">
					<ButtonLink
						text={"Daftar"}
						classname="bg-blue-700 text-white flex justify-center rounded border-2 border-blue-600 py-2.5"
					/>
					<br></br>

					<p className="flex justify-center py-1 text-sm">
						Sudah Punya Akun?
						<TextLink text={"Login"} link="www.google.com" size={""} />
					</p>
				</div>
				<div className="py-10">
					<Trademark />
				</div>
			</div>
		</>
	);
}
