import { NavLink } from "react-router-dom";
import './navbar.css';
import Image from '../assets/logo bambrush.jpg';
import { useRef, useState } from "react";
import Image_list from '../assets/list-task.svg'

function Navbar() {

    const [isDropdown, setDropdown] = useState(false);
    const navRef = useRef<HTMLUListElement>(null);
    const [isOpen, setisOpen] = useState(false)

    const togglebar = () => {
        setisOpen(!isOpen);
    }

    function handleMouseEnter() {
        setDropdown(true);
    }
    function handleMouseLeave() {
        setDropdown(false);
    }

    function Dropdown() {
        return (
            <div className="dropdown" onMouseEnter={handleMouseEnter}>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={togglebar}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={togglebar}>Contact</NavLink>
                </li>
            </div>
        );
    }
    
    // const inversetoggle = () => {
    //     setisOpen(!isOpen);
    // }
    return (
        <nav className="navbar">
            <div className='logos'>
                <img src={Image} alt="Bambrush Logo" className='logo' />
                <h1><span className='capB'>B</span>AMBRUSH</h1>
            </div>
            <div className="drop-down-list">
                <li>
                    <button className="nav-toggle" onClick={togglebar} onMouseEnter={togglebar}>
                        <img src={Image_list} alt="Image" />
                    </button>
                </li>
                <div className={`nav-container ${isOpen ? 'open' : ''}`} onMouseLeave={togglebar}>
                    <ul ref={navRef} className={`nav-list ${isOpen ? 'show' : ''}`}>
                        <li className="nav-item">
                            <NavLink to="/home" className={({ isActive }) => isActive ? "active" : "" }onClick={togglebar}>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onCLick={togglebar}>Products</NavLink>
                        </li>

                        <li>
                            <div className="drop-head" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                Company &#9662;
                                {
                                    isDropdown && Dropdown()
                                }
                            </div>
                        </li>
                    </ul>

                    {/* <div>
                    <NavLink to="/sign" className={({ isActive }) => isActive ? "active" : "btn btn-primary"}>sign in</NavLink>
                </div> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
