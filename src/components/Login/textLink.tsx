interface Props {
	text: string;
	link?: string;
	background?: string;
}

export default function TextLink(props: Props) {
	return (
		<>
			<div>
				<a href={props.link}>
					<div className={`flex justify-center ${props.background}`}>
						<p className={`text-blue-600 `}>{props.text}</p>
					</div>
				</a>
			</div>
		</>
	);
}
