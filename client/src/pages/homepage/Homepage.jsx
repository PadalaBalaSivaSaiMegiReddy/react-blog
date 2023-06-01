
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
	console.log(location);
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	);
}
