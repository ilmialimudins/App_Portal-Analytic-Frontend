import React from "react";

export default function Footer(): JSX.Element {
	return (
		<footer
			className=" w-full bg-blue-800 text-white"
			style={{
				position: "fixed",
				left: "0",
				bottom: "0",
				width: "100%",
				backgroundColor: "#1E40AF",
				color: "#FFFFFF",
				padding: "0",
				zIndex: "999",
			}}
		>
			<div className="container mx-auto py-4">
				<p className="text-center">&copy; PT. ASTRA INTERNATIONAL TBK 2023.</p>
			</div>
		</footer>
	);
}
