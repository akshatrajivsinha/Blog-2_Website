import React from 'react';
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img className="headerimg"
       src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
       alt="" />
    </div>
  )
}
