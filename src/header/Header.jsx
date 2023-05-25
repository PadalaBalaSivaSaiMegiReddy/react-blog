import "./header.css";

function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitlesSm">React & Node</span>
				<span className="headerTitlesLg">Blog</span>
			</div>
			<img
				src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt=""
				className="headerImg"
			/>
		</div>
	);
}

export default Header;
