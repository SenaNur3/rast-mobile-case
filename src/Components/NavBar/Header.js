import React from "react";
import { Menu } from "antd";
import { Image } from "antd";
import "./Header.css";
function Header() {

  return (
    <div className="header">

      <div className="left-icon">
      <div className="logo"></div>
      </div>

      <div className="navbar">
     
       {/* <Menu mode="horizontal" items={items} className="field" />*/} 
       <a href="url" className="link">Hakkımızda</a>
       <a href="url" className="link">Jüri-yarışma Yazılımı</a>
       <a href="url" className="link">Word Ninja</a>
       <a href="url" className="link">Word Pyramids</a>
      </div>


      <div className="right-icon">
       
      <div className="youtube"></div>
      <div className="instagram"></div>
      <div className="be"></div>
      <div className="linked"></div>
     
      
       
      </div>
     
    </div>
  );
}

export default Header;
