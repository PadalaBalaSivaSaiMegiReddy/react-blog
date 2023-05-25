import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home() {
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
