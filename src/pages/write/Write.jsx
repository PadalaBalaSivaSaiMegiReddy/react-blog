import "./write.css";

export default function Write() {
	return (
		<div className="write">
			<img className="writeimg"
				src="https://images.unsplash.com/photo-1684785459021-761c8ee14e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
				alt=""
			/>
			<form action="" className="writeform">
				<div className="writeFormGroup">
					{/* labelhtmlforinput */}
					<label htmlFor="fileInput">
						<i className=" writeicon fa-solid fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Write your story..."
						type="text"
						className="writeInput writeText"
					></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	);
}
