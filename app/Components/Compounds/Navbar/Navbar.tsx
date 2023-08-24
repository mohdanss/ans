import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.styles.css";

import { useRef } from "react";

import { Author, NavbarSectionItems, SocialMediaLinks } from "../../../MetaData/Navbar.data";
import { Spiral as Hamburger } from 'hamburger-react'

type Props = {};

const Navbar = (props: Props) => {
    const width = useRef(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return width.current > 800 ? (
        <nav
            role="navigation"
            aria-label="main navigation"
            id="dt-nav"
        >
            <ul
                role="list"
                aria-label="main navigation links"
            >
                {NavbarSectionItems.map((item) => (
                    <li
                        key={item.name}
                        role="listitem"
                        aria-label={`${item.name} page/section item`}
                    >
                        <Link
                            key={item.name}
                            href={item.link}
                            aria-label={`${item.name} page/section link`}
                        >
                            {item.name}.
                        </Link>
                    </li>
                ))}
            </ul>
            <h1
                role="note"
                aria-label="author name"
            >
                {Author}
            </h1>
            <ul
                role="list"
                aria-label="social media links"
            >
                {SocialMediaLinks.map((item) => (
                    <li
                        key={item.name}
                        role="listitem"
                        aria-label={`${item.name} social media link`}
                    >
                        <a
                            href={item.link}
                            aria-label={`${item.name} social media link`}
                        >
                            {item.name}.
                        </a>
                    </li>
                ))}
            </ul>
        </nav>) : (
        <nav
            role="navigation"
            aria-label="main navigation"
            id="mb-nav">
            <h2
                role="note"
                aria-label="author name"
                className="mb-author-name"
            >
                {Author.split(' ')[1]}
            </h2>
            <div className="hamburger-container">
                <Hamburger color="#999" size={32} onToggle={toggled => { (toggled) ? setIsMenuOpen(true) : setIsMenuOpen(false) }} />
            </div>
            {
                isMenuOpen ? (
                    <div className="mb-navitems-container">
                        <ul
                            role="list"
                            aria-label="main navigation links"
                            className="mb-ul"
                        >
                            {NavbarSectionItems.map((item) => (
                                <li
                                    key={item.name}
                                    role="listitem"
                                    aria-label={`${item.name} page/section item`}
                                >
                                    <Link
                                        key={item.name}
                                        href={item.link}
                                        aria-label={`${item.name} page/section link`}
                                    >
                                        {item.name}.
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p></p>
                )
            }
        </nav>
    );
};

export default Navbar;
