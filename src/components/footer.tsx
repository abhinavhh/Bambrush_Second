
import './footer.css'
import { NavLink } from 'react-router-dom'
import Image from "../assets/logo bambrush.jpg"
export default function Footer() {
    return (
        <footer>
            <div className='footer-first-container'>
                <div className='logo-column'>
                    <img src={Image} alt="Bambrush Logo" className='logo' />
                    <h1 className='logo-text'>BAMBRUSH</h1>
                </div>
                <div className='footer-second-container'>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul className='social-icons'>
                            <a href="#"><img src="" alt="facebook" /><i className="fab fa-facebook"></i></a>
                            <a href="#"><img src="" alt="twitter" /><i className="fab fa-twitter"></i></a>
                            <a href="#"><img src="" alt="instagram" /><i className="fab fa-instagram"></i></a>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3>Terms & Policies</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h3>Quick Link</h3>
                        <ul>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Bambrush. All rights reserved.</p>
            </div>

        </footer>
    )
}