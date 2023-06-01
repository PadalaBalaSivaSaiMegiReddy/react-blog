import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/posts";
// import Single from "../single/Single";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home() {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				{/* <Single /> */}
				<Sidebar />
			</div>
		</>
	);
}
