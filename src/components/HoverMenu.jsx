import React, { useState, useEffect } from "react";

const HoverMenu = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHover(false);
        }, 100);
    };

    // renderedItems is an array of
    const renderedItems = props.linksArray.map((item, index) => {
        return (
            <li className="submenu_item" key={index}>
                <a href={item.link} title={item.title} key={index}>
                    {item.title}
                </a>
            </li>
        );
    });

    return (
        <div className="menu_container">
            <p
                className="menu_title reverse-fancy-text"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.headerTitle}
            </p>
            <div
                className="submenu"
                style={{ display: isHover ? "block" : "none" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul className="submenu_list">{renderedItems}</ul>
            </div>
        </div>
    );
};

export default HoverMenu;
