"use client";

import { Form, Input, Space } from "antd";
import ButtonLink from "./buttonLink";
import InputForm from "./input";
import TextLink from "./textLink";
import Trademark from "./tradmark";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { ValidateErrorEntity } from "rc-field-form/es/interface";

interface FormValues {
	email: string;
	password: string;
}

export default function CardLogin() {
	const onFinish = (values: FormValues) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: ValidateErrorEntity<FormValues>) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<>
			<div className="item-center w-1/4  rounded-lg border border-4 bg-white shadow-lg">
				<div className="mt-5 text-center">
					<p
						className=" pb-2 pt-5
					 text-2xl text-blue-800"
					>
						Login
					</p>
					<p className="px-2 text-sm text-black">
						Welcome back to your account!
					</p>
				</div>
				<div className=" justify-left flex bg-white  px-9 py-3">
					<Form
						name="basic"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						layout="vertical"
					>
						<Space direction="vertical">
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
						</Space>
						<br></br>
					</Form>
				</div>

				<div className=" justify-center px-10">
					<TextLink text={"Forgot password?"} link="www.google.com" size={""} />
					<br></br>
					<ButtonLink
						text={"Login"}
						classname="bg-blue-700 text-white flex justify-center rounded border-2 border-blue-600"
					/>
					<br></br>
					<ButtonLink
						text="Register"
						classname="bg-indigo-50 text-blue-500 flex justify-center  rounded border-2 border-blue-600"
					/>
				</div>
				<div className="py-10">
					<Trademark />
				</div>
			</div>
		</>
	);
}
