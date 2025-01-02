import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link href="/" className="dropdown-toggle active" data-toggle="dropdown" >Home</Link>
                    
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Company</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                      <li><Link href="/strategy">Strategy</Link></li>
                      <li><Link href="/testimonial">Testimonial</Link></li>
                    </ul>
                </li>
                <li >
                    <Link href="/product" className="dropdown-toggle" data-toggle="dropdown" >Products</Link>
                   
                </li>
                <li>
                    <Link href="/services" className="dropdown-toggle" data-toggle="dropdown" >Services</Link>
                    
                </li>
                <li >
                    <Link href="/blog" className="dropdown-toggle" data-toggle="dropdown" >Blog</Link>
                  
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;