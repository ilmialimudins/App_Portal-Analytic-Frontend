"use client";
import { Dropdown, Button, MenuProps } from "antd";
import { ReactElement } from "react";
import { DEFAULT_API_CONFIG } from "@/services/api-config";
import Link from "next/link";

interface Props {
	iconRight?: ReactElement;
	tittle?: string;
	label1?: string;
	label2?: string;
	label3?: string;
	label4?: string;
	label5?: string;
	label6?: string;
	label7?: string;
	url1?: string;
	url2?: string;
	url3?: string;
	url4?: string;
	rel1?: string;
	rel2?: string;
	rel3?: string;
	rel4?: string;
	relRight1?: string;
	relRight2?: string;
	relRight3?: string;
	relRight4?: string;
	relRight5?: string;
	relRight6?: string;
	relRight7?: string;
	relRight8?: string;
	relRight9?: string;
	relRight10?: string;
	relRight11?: string;
	relRight12?: string;

	urlRight1?: string;
	urlRight2?: string;
	urlRight3?: string;
	urlRight4?: string;
	urlRight5?: string;
	urlRight6?: string;
	urlRight7?: string;
	urlRight8?: string;
	urlRight9?: string;
	urlRight10?: string;
	urlRight11?: string;
	urlRight12?: string;

	dropRight1?: string;
	dropRight2?: string;
	dropRight3?: string;
	dropRight4?: string;
	dropRight5?: string;
	dropRight6?: string;
	dropRight7?: string;
	dropRight8?: string;
	dropRight9?: string;
	dropRight10?: string;
	dropRight11?: string;
	dropRight12?: string;

	relRightRight1?: string;
	relRightRight2?: string;
	urlRightRight1?: string;
	urlRightRight2?: string;
	dropRightRight1?: string;
	dropRightRight2?: string;
}

interface MenuItem {
	key: string;
	label: ReactElement;
	children?: Array<{
		key: string;
		label: ReactElement;
		children?: Array<{ key: string; label: ReactElement }>;
	}>;
}

export function DropdownHCDashBoard(props: Props) {
	const items: MenuItem[] = [
		{
			key: "1",
			label: (
				// <a rel={props.rel1} href={`${DEFAULT_API_CONFIG.url}${props.url1}`}>
				// 	{props.label1}
				// </a>
				<a>{props.label1}</a>
			),
			children: [
				{
					key: "1-1",
					label: (
						<div>
							<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight1}`}>
								{props.dropRight1}
							</Link>
						</div>
					),
				},
				{
					key: "1-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight2}`}>
							{props.dropRight2}
						</Link>
					),
				},
				{
					key: "1-3",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight3}`}>
							{props.dropRight3}
						</Link>
					),
				},
				{
					key: "1-4",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight4}`}>
							{props.dropRight4}
						</Link>
					),
				},
				{
					key: "1-5",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight5}`}>
							{props.dropRight5}
						</Link>
					),
					children: [
						{
							key: "1-5-1",
							label: (
								<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRightRight2}`}>
									{props.dropRightRight1}
								</Link>
							),
						},
						{
							key: "1-5-2",
							label: (
								<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRightRight2}`}>
									{props.dropRightRight2}
								</Link>
							),
						},
					],
				},
			],
		},
		{
			key: "2",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url2}`}>
				// 	{props.label2}
				// </Link>
				<div> {props.label2}</div>
			),
			children: [
				{
					key: "2-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight6}`}>
							{props.dropRight6}
						</Link>
					),
				},
				{
					key: "2-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight7}`}>
							{props.dropRight7}
						</Link>
					),
				},
				{
					key: "2-3",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight8}`}>
							{props.dropRight8}
						</Link>
					),
				},
				{
					key: "2-4",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight9}`}>
							{props.dropRight9}
						</Link>
					),
				},
				{
					key: "2-5",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight10}`}>
							{props.dropRight10}
						</Link>
					),
				},
				{
					key: "2-6",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight11}`}>
							{props.dropRight11}
						</Link>
					),
				},
				{
					key: "2-7",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight12}`}>
							{props.dropRight12}
						</Link>
					),
				},
			],
		},
	];

	return (
		<>
			<div style={{ background: "transparent" }}>
				<Dropdown menu={{ items }} placement="bottomRight" arrow>
					<Button
						style={{
							color: "black",
							fontSize: "18px",
							border: "none",
							boxShadow: "none",
						}}
					>
						<div
							style={{
								fontSize: "15px",
								padding: "2px",
							}}
						>
							{props.tittle}
							{props.iconRight}
						</div>
					</Button>
				</Dropdown>
			</div>
		</>
	);
}

export function DropdownEmployee(props: Props) {
	const items: MenuItem[] = [
		{
			key: "1",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url1}`}>
				// 	{props.label1}
				// </Link>
				<a>{props.label1}</a>
			),
			children: [
				{
					key: "1-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight1}`}>
							{props.dropRight1}
						</Link>
					),
				},
				{
					key: "1-2",
					label: <Link href={`${props.urlRight2}`}>{props.dropRight2}</Link>,
				},
				{
					key: "1-3",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight3}`}>
							{props.dropRight3}
						</Link>
					),
				},
				{
					key: "1-4",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight4}`}>
							{props.dropRight4}
						</Link>
					),
				},
			],
		},
		{
			key: "2",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url2}`}>
				// 	{props.label2}
				// </Link>
				<a>{props.label2}</a>
			),
			children: [
				{
					key: "2-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight5}`}>
							{props.dropRight5}
						</Link>
					),
				},
				{
					key: "2-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight6}`}>
							{props.dropRight6}
						</Link>
					),
				},
			],
		},
		{
			key: "3",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url3}`}>
				// 	{props.label3}
				// </Link>

				<a>{props.label3}</a>
			),
			children: [
				{
					key: "3-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight7}`}>
							{props.dropRight7}
						</Link>
					),
				},
				{
					key: "3-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight8}`}>
							{props.dropRight8}
						</Link>
					),
				},
				{
					key: "3-3",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight9}`}>
							{props.dropRight9}
						</Link>
					),
				},
			],
		},
		{
			key: "4",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url4}`}>
				// 	{props.label4}
				// </Link>
				<a>{props.label4}</a>
			),
			children: [
				{
					key: "4-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight10}`}>
							{props.dropRight10}
						</Link>
					),
				},
				{
					key: "4-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight11}`}>
							{props.dropRight11}
						</Link>
					),
				},
			],
		},
	];

	return (
		<>
			<div style={{ background: "transparent" }}>
				<Dropdown menu={{ items }} placement="bottomRight" arrow>
					<Button
						style={{
							color: "black",
							fontSize: "18px",
							border: "none",
							boxShadow: "none",
						}}
					>
						<div style={{ fontSize: "15px", padding: "2px" }}>
							{props.tittle}
							{props.iconRight}
						</div>
					</Button>
				</Dropdown>
			</div>
		</>
	);
}

export function DropdownManPower(props: Props) {
	const items: MenuItem[] = [
		{
			key: "1",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url2}`}>
				// 	{props.label1}
				// </Link>
				<a>{props.label1}</a>
			),
			children: [
				{
					key: "1-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight1}`}>
							{props.dropRight1}
						</Link>
					),
				},
				{
					key: "1-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight2}`}>
							{props.dropRight2}
						</Link>
					),
				},
			],
		},
		{
			key: "2",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url3}`}>
				// 	{props.label2}
				// </Link>
				<a>{props.label2}</a>
			),
			children: [
				{
					key: "2-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight3}`}>
							{props.dropRight3}
						</Link>
					),
				},
				{
					key: "2-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight4}`}>
							{props.dropRight4}
						</Link>
					),
				},
			],
		},
	];
	return (
		<>
			<div style={{ background: "transparent" }}>
				<Dropdown menu={{ items }} placement="bottomRight" arrow>
					<Button
						style={{
							color: "black",
							fontSize: "18px",
							border: "none",
							boxShadow: "none",
						}}
					>
						<div style={{ fontSize: "15px", padding: "2px" }}>
							{props.tittle}
							{props.iconRight}
						</div>
					</Button>
				</Dropdown>
			</div>
		</>
	);
}
export function DropdownUserManagament(props: Props) {
	const items: MenuItem[] = [
		{
			key: "1",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url2}`}>
				// 	{props.label1}
				// </Link>
				<a>{props.label1}</a>
			),
			children: [
				{
					key: "1-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight1}`}>
							{props.dropRight1}
						</Link>
					),
				},
				{
					key: "1-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight2}`}>
							{props.dropRight2}
						</Link>
					),
				},
				{
					key: "1-3",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight3}`}>
							{props.dropRight3}
						</Link>
					),
				},
				{
					key: "1-4",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight4}`}>
							{props.dropRight4}
						</Link>
					),
				},
			],
		},
		{
			key: "2",
			label: (
				// <Link href={`${DEFAULT_API_CONFIG.url}${props.url3}`}>
				// 	{props.label2}
				// </Link>
				<a>{props.label2}</a>
			),
			children: [
				{
					key: "2-1",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight5}`}>
							{props.dropRight5}
						</Link>
					),
				},
				{
					key: "2-2",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight6}`}>
							{props.dropRight6}
						</Link>
					),
				},
				{
					key: "2-3",
					label: (
						<Link href={`${DEFAULT_API_CONFIG.url}${props.urlRight7}`}>
							{props.dropRight7}
						</Link>
					),
				},
			],
		},
	];
	return (
		<>
			<div style={{ background: "transparent" }}>
				<Dropdown menu={{ items }} placement="bottomRight" arrow>
					<Button
						style={{
							color: "black",
							fontSize: "18px",
							border: "none",
							boxShadow: "none",
						}}
					>
						<div style={{ fontSize: "15px", padding: "2px" }}>
							{props.tittle}
							{props.iconRight}
						</div>
					</Button>
				</Dropdown>
			</div>
		</>
	);
}

export function DropdownButton(props: Props) {
	const items: MenuItem[] = [
		{
			key: "1",
			label: (
				<Link href={`${DEFAULT_API_CONFIG.url}${props.url1}`}>
					{props.label1}
				</Link>
			),
		},
	];

	return (
		<>
			<div style={{ background: "transparent" }}>
				<Dropdown menu={{ items }} placement="bottomRight" arrow>
					<Button
						style={{
							color: "black",
							fontSize: "18px",
							border: "none",
							boxShadow: "none",
						}}
					>
						<div style={{ fontSize: "15px", padding: "2px" }}>
							{props.tittle}
							{props.iconRight}
						</div>
					</Button>
				</Dropdown>
			</div>
		</>
	);
}
