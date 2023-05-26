import React from "react";
import "./Navbar.styles.css";

import { Author, NavbarSectionItems, SocialMediaLinks } from "../../../MetaData/Navbar.data";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav
            role="navigation"
            aria-label="main navigation"
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
                        <a
                            href={item.link}
                            aria-label={`${item.name} page/section link`}
                        >
                            {item.name}.
                        </a>
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
        </nav>
    );
};

export default Navbar;
