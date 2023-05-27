import "./singlepost.css";

export default function Singlepost() {
	return (
		<div className="singlepost">
			<div className="sinlepostwrapper">
				<img
					src="https://images.unsplash.com/photo-1533094108581-e96c5cf50d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
					alt=""
					className="singlepostimg"
				/>
				<h1 className="singleposttitle">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					<div className="singlepostedit">
						<i className="singleposticon fa-regular fa-pen-to-square"></i>
						<i className="singleposticon fa-solid fa-trash"></i>
					</div>
				</h1>
				<div className="singlepostinfo">
					<span className="singlepostauthorname">
						Author: <b>Megi</b>
					</span>
					<span className="singlepostdate">1 hour ago</span>
				</div>
				<p className="siglepostdesc">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia autem
					natus fugiat placeat nesciunt est et quisquam voluptates alias dicta
					suscipit qui nobis, asperiores sapiente possimus, aperiam repellendus
					ducimus voluptatibus! Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Similique fuga rem, quo enim incidunt est modi
					porro. Odio assumenda eveniet illo, cumque ea dolorum, officia
					doloribus nesciunt nisi dignissimos dolores! Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Earum quis atque nobis harum
					recusandae quod blanditiis id officiis voluptatibus temporibus nihil
					assumenda molestiae distinctio dolore odio facilis, magnam at.
					Impedit? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Nostrum tenetur est nisi reprehenderit iure! Exercitationem, eveniet
					eligendi. Et, nisi quisquam obcaecati quidem aliquid corrupti id eius
					accusantium labore fugit ipsa.
				</p>
			</div>
		</div>
	);
}
