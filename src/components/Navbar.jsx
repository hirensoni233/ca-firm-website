import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    H<span className="gradient-text">KS</span>
                </Link>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"><NavLink to="/" end className="nav-links">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" className="nav-links">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/services" className="nav-links">Services</NavLink></li>
                    <li className="nav-item"><NavLink to="/projects" className="nav-links">Projects</NavLink></li>
                    <li className="nav-item"><Link to="/contact" className="btn btn-primary nav-btn">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
