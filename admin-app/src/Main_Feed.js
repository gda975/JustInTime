export default function Main_Feed(prop) {
	return prop.entries.map((val, index) => {
		return (
			<div className="content_page">
				<p>Author {val[1].author}</p>
				<div className="content_" key={index + ''}>
					Content : {val[1] == undefined ? '' : val[1].content}
				</div>
				<p>Time {val[1].time}</p>
			</div>
		);
	});
}
