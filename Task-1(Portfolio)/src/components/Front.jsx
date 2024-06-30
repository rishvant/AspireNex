import "../styles/front.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";

const Front = () => {
    return (
        <section className="front-container">
            <div className="front-content">
                <p className="front-content-1">
                    I'M <span className="large-text">Rishvant Singh</span>
                </p>
                <div className="text-1">
                    <span className="text-2">I'M </span>
                    <span className="large-text animation">Developer</span>
                </div>
                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={1000}
                    className="front-content-btn"
                >
                    Contact Me
                </ScrollLink>
            </div>
            <div className="front-social">
                <div className="social-line-cont">
                    <span className="social-line"></span>
                </div>
                <Link
                    to="https://www.linkedin.com/in/rishvant-singh/"
                    target="_blank"
                    style={{ width: "30px" }}
                >
                    <FaLinkedin className="linkedin-social social-icons" />
                </Link>
                <Link
                    to="https://twitter.com/RishvantSingh"
                    target="_blank"
                    style={{ width: "30px" }}
                >
                    <img src="/twitter.svg" className="twitter-social social-icons" />
                </Link>
                <Link
                    to="https://www.instagram.com/rishvantsp/"
                    target="_blank"
                    style={{ width: "30px" }}
                >
                    <img src="/instagram.svg" className="instagram-social social-icons" />
                </Link>
                <Link
                    to="https://github.com/rishvant"
                    target="_blank"
                    style={{ width: "30px" }}
                >
                    <FaGithub className="github-social social-icons" />
                </Link>
            </div>
        </section>
    );
}

export default Front;