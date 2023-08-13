interface Props {
	text: string;
	classname: string;
}

export default function ButtonLink(props: Props) {
	return (
		<>
			<div className={props.classname}>
				<button>{props.text} </button>
			</div>
		</>
	);
}
