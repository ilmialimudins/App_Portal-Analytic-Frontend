// import { doAddStopword } from "";
import {
	Alert,
	Button,
	ConfigProvider,
	Divider,
	Form,
	Input,
	Modal,
	Spin,
} from "antd";
interface loadingSpin {
	show: boolean;
	clickOk: () => void;
	clickCancel: () => void;
	handleClose: (flag: boolean) => void;
}

export default function LoadingSpin(props: loadingSpin) {
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorBgElevated: "rgba(0, 0, 0, 0)",
						colorSplit: "rgba(0, 0, 0, 0)",
						lineType: "none",
						lineWidth: 0,
						controlHeight: 70,
					},
				}}
			>
				<Modal
					centered
					footer={null}
					closable={false}
					open={true}
					destroyOnClose={true}
				>
					<Spin
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Spin>
				</Modal>
			</ConfigProvider>
		</>
	);
}
