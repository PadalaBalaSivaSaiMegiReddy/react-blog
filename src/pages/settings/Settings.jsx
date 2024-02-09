import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings"><div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form  className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                <img className="settingsImg" src="https://images.unsplash.com/photo-1617194369222-af8a7e682365?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <label htmlFor="fileInput">
                <i className=" settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Megi" />
                <label>Email</label>
                <input type="email" placeholder="megireddy21@gmail.com" />
                <label>Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
        </div>
  )
}
