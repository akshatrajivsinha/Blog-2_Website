import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import "./sidebar.css";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>

        <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis atque unde, numquam, 
            odio molestias corrupti sunt doloribus provident ipsam tempora 
            maxime accusamus cum eligendi esse minima quam sint neque.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c , k)=>(
            <Link key={k} to={`/?cat=${c.name}`} className='link'>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
           
        </ul>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebaricon fa-brands fa-facebook"></i>
                <i className="sidebaricon fa-brands fa-instagram"></i>
                <i className="sidebaricon fa-brands fa-square-twitter"></i>
                <i className="sidebaricon fa-brands fa-pinterest"></i>
            </div>
        </div>
      </div>
    </div>
  )
}
