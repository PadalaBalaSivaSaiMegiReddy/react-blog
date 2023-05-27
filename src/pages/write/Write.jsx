import "./write.css"

export default function Write() {
  return (
		<div className="write">
			<form action="" className="writeform">
				<div className="writeformgroup">
					{/* labelhtmlforinput */}
					<label htmlFor="fileInput">
						<i className="fa-solid fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{display:"none"}} />
					<input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
				</div>
			</form>
		</div>
	);
}
