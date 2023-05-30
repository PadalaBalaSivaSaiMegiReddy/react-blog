import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<TopBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/settings">
						<Settings />
					</Route>
					<Route path="/write">
						<Write />
					</Route>
					<Route path="/post/:postId">
						<Single />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
