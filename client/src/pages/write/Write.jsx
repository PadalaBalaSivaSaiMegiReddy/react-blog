import "./write.css"
export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg" alt="" />
      <form className="writeForm">
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}} />
        <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
      </div>
      <div className="writeFormGroup">
        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>

      </div>
      <button className="writeSubmit">
        Publish
      </button>
      </form>
      </div>
  )
}
