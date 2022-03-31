import React, { useState, useEffect } from "react";

const HoverMenu = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    // renderedItems is an array of
    const renderedItems = props.linksArray.map((item, index) => {
        return (
            <a href={item.link} title={item.title} key={index}>
                {item.title}
            </a>
        );
    });

    return (
        <div className="menu">
            <a
                className="moremenu"
                onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave}
                href="#"
            >
                {props.headerTitle}
            </a>
            <ul id="ul_Rep">
                <li>
                    <div
                        id="divLiCat"
                        onMouseOver={handleMouseEnter}
                        onMouseOut={handleMouseLeave}
                        style={{ display: isHover ? "block" : "none" }}
                    >
                        {renderedItems}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default HoverMenu;
