import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topicon fa-brands fa-square-facebook"></i>
      <i className="topicon fa-brands fa-square-twitter"></i>
      <i className="topicon fa-brands fa-square-instagram"></i>
      <i className="topicon fa-brands fa-square-linkedin"></i>
      </div>
      <div className="topcentre">
        <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
        </ul>
         </div>
      <div className="topright">
        <img className="topImg" src="https://media.licdn.com/dms/image/C5603AQH3HiDN-wwNjg/profile-displayphoto-shrink_800_800/0/1615975966329?e=2147483647&v=beta&t=8S_JJLBR6kBpLrKwHSP6BJyVTvtZl5ZS_Wf1uDvlwQU" alt="" />
        <i className="topSearchIcon fa-solid fa-search"></i>
         </div>   
      

      </div>
  )
}
