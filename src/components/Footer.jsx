import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer dark-section">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        Hiren K <span className="gradient-text">Soni</span> &amp; Co
                    </Link>
                    <p className="footer-desc">
                        Helping businesses streamline accounting, bookkeeping, and taxation with automation and modern tools.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services">Accounting & Bookkeeping</Link></li>
                        <li><Link to="/services">Software Migration</Link></li>
                        <li><Link to="/services">Financial Automation</Link></li>
                        <li><Link to="/services">Taxation Services</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><FaMapMarkerAlt /> Ahmedabad Gujarat India 380015</li>
                        <li><FaPhone /> +91 9898243002</li>
                        <li><FaEnvelope /> CAHIRENSONI2001@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Hiren K Soni &amp; Co. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
