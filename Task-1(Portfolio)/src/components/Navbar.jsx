import "../styles/navbar.css";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            </div>
            <ul className="items">
                <ScrollLink to="about" smooth={true} duration={1000}><li>About</li></ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={1000}><li>Projects</li></ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={1000}><li>Contact</li></ScrollLink>
            </ul>
            <div className="dark-btn">
            </div>
        </nav>
    )
}

export default Navbar;