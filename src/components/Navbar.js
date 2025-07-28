import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    // Dark mode toggle logic
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const root = document.documentElement;
        if (theme === 'dark') {
            root.style.setProperty('--background-color', 'rgb(29, 29, 29)');
            root.style.setProperty('--background-light', 'rgb(77, 77, 77)');
            root.style.setProperty('--shadow-color', 'rgba(0,0,0,0.2)');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--text-light', '#eceaea');
        } else {
            root.style.setProperty('--background-color', '#fff');
            root.style.setProperty('--background-light', '#fff');
            root.style.setProperty('--shadow-color', 'rgba(0,0,0,0.2)');
            root.style.setProperty('--text-color', '#0A0A0A');
            root.style.setProperty('--text-light', '#575757');
        }
    }, [theme]);

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div className="navbar-darkmode-toggle">
                    <label className="darkmode-switch">
                        <input type="checkbox" checked={theme === 'dark'} onChange={e => setTheme(e.target.checked ? 'dark' : 'light')} />
                        <span className="slider"></span>
                    </label>
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}