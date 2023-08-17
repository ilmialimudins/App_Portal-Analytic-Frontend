export default function MasterCompanyESS() {
	const embedUrl =
		"https://app.powerbi.com/reportEmbed?reportId=d07fdf19-89a1-4340-823f-a7495b2bbdb2&groupId=534762b4-8d6a-45f8-b58a-efe6f4704cda&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d&pageName=ReportSectione34ae07f287b753796ec";

	return (
		<div>
			<h1>Halaman Master Company ESS</h1>
			<iframe
				src={embedUrl}
				width="800"
				height="600"
				frameBorder="0"
				allowFullScreen
			></iframe>
		</div>
	);
}
