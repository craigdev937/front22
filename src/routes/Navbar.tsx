import React from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleClick = () => {
        setIsOpen(false);
    };

    const navClass = `navigation ${isOpen ? "open" : ""}`;
    const btnClass = `navigation__btn-toggle ${isOpen ? "open" : ""}`;
    const listClass = `navigation__items ${isOpen ? "open" : ""}`;

    return (
        <React.Fragment>
            <nav className={navClass}>
                <button 
                    className={btnClass} 
                    onClick={toggle}>
                </button>
                <ul className={listClass}>
                    <NavLink to="/" onClick={handleClick}
                        className="navigation__item"
                    >
                        <span>00</span>Home
                    </NavLink>
                    <NavLink to="/dest" onClick={handleClick}
                        className="navigation__item"
                    >
                        <span>01</span>Destination
                    </NavLink>
                    <NavLink to="/crew" onClick={handleClick}
                        className="navigation__item"
                    >
                        <span>02</span>Crew
                    </NavLink>
                    <NavLink to="/tech" onClick={handleClick}
                        className="navigation__item"
                    >
                        <span>03</span>Technology
                    </NavLink>
                </ul>
                <Outlet />
            </nav>
        </React.Fragment>
    );
};


