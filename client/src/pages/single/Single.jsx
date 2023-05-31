import Sidebar from "../../components/sidebar/sidebar";
import Singlepost from "../../components/singlepost/Singlepost";
import "./single.css";

export default function Single() {
	return (
		<div className="single">
			<Singlepost />
			<Sidebar />
		</div>
	);
}
