import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				src="https://images.pexels.com/photos/16889399/pexels-photo-16889399/free-photo-of-light-dawn-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt=""
				className="postimg"
			/>
			<div className="postinfo">
				<div className="postcats">
					<span className="postcat">Music</span>
					<span className="postcat">Life</span>
				</div>
				<span className="posttitle">Lorem ipsum dolor sit amet.</span>
				<hr />
				<span className="postdate">1 hour ago</span>
			</div>
			<p className="postdesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
			</p>
		</div>
	);
}
