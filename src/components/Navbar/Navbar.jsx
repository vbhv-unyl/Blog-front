import React, { useState } from 'react';
import './Navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="main-container">
            <div className={`container ${isOpen ? 'shift' : ''}`}>
                <div className="hamburger-menu">
                    <button className="hamburger-button" onClick={toggleMenu}>
                        ☰
                    </button>
                    <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                        <a href="/add" onClick={toggleMenu}>Add Blog</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;