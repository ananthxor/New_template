import React, { useState } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // specific styles if needed

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <span className="logo-accent">N</span>ews<span className="logo-highlight">F</span>low.
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links desktop-only">
                        <Link to="/" className="nav-link active">Home</Link>
                        <Link to="/world" className="nav-link">World</Link>
                        <Link to="/business" className="nav-link">Business</Link>
                        <Link to="/tech" className="nav-link">Tech</Link>
                        <Link to="/science" className="nav-link">Science</Link>
                        <Link to="/lifestyle" className="nav-link">Lifestyle</Link>
                    </div>

                    {/* Actions */}
                    <div className="nav-actions">
                        <button className="icon-btn" aria-label="Search">
                            <Search size={20} />
                        </button>
                        <button className="icon-btn" aria-label="Notifications">
                            <Bell size={20} />
                        </button>
                        <button
                            className="icon-btn mobile-only"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu animate-fade-in">
                        <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/world" className="mobile-link" onClick={() => setIsMenuOpen(false)}>World</Link>
                        <Link to="/business" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Business</Link>
                        <Link to="/tech" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Tech</Link>
                        <Link to="/science" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Science</Link>
                        <Link to="/lifestyle" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Lifestyle</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
