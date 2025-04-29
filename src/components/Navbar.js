import {useState} from 'react';
import Sidebar from './Sidebar';
import React from 'react';
import{faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons"
export default function Navbar(){
    const [showSidebar,setShowSidebar]=useState(false)
    const links=[
        {
            name:"Home",
            path:"/",
            icon:faHome
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon:faList
        },
        {
            name:"Settings",
            path:"/settings",
            icon:faCog
        }
    ]
    return(
        <>
        <div className="navbar container">
            <a href="#!" className="logo">F<span>oo</span>diesHub</a>
            <div className="nav-links">
                {links.map(link=>(<a href="#!" key={link.name}>{link.name}</a>))}
                {/* <a href="#!" className="active">Home</a>
                <a href="#!" className="active">Recipes</a>
                <a href="#!" className="active">Settings</a> */}
            </div>
            <div onClick={()=>setShowSidebar(!showSidebar)} className={showSidebar? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        <Sidebar links={links}/>
        </>
    )
}



