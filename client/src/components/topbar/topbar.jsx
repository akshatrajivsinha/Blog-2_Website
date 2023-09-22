
import React, { useContext } from "react"
import "./topbar.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";

export default function Topbar() {


  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"


  const handleLogout = () =>{
    dispatch({ type:"LOGOUT"});
  }

  return (
    <div className='top'> 
      <div className="topLeft">
      <i className="topicon fa-brands fa-facebook"></i>
      <i className="topicon fa-brands fa-instagram"></i>
      <i className="topicon fa-brands fa-square-twitter"></i>
      <i className="topicon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListitem"><Link className="link" to="/" >HOME</Link></li>
            <li className="topListitem"> <Link className="link" to="/" >ABOUT</Link></li>
            <li className="topListitem"> <Link className="link" to="/" >CONTACT</Link></li>
            <li className="topListitem"> <Link className="link" to="/write" >WRITE</Link></li>
            <li className="topListitem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/settings">
            <img 
            className="topimage"
            src={PF + user.profilePic}
            alt="" />
            </Link>
            
            ) : (
              <ul className="topList">
            <li className="topListitem"> <Link className="link" to="/login" >Login</Link></li>
            <li className="topListitem"> <Link className="link" to="/register" >Register</Link></li>
            </ul>
            
            )
          }
        <i className="topSearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}