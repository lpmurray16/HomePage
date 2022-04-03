import React, { useState } from "react";

const HoverMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseClick = () => {
        setIsOpen(!isOpen);
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
                onClick={handleMouseClick}
            >
                {props.headerTitle}
            </p>
            <div
                className="submenu"
                style={{ display: isOpen ? "block" : "none" }}
            >
                <ul className="submenu_list">{renderedItems}</ul>
            </div>
        </div>
    );
};

export default HoverMenu;
