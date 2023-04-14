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
                    className={listClass} 
                    onClick={toggle}
                    >
                        <NavLink to="/" onClick={handleClick}>
                            <li className="navigation__item">
                                <span>00</span>Home
                            </li>
                        </NavLink>
                        <NavLink to="/dest" onClick={handleClick}>
                            <li className="navigation__item">
                                <span>01</span>Destination
                            </li>
                        </NavLink>
                        <NavLink to="/crew" onClick={handleClick}>
                            <li className="navigation__item">
                                <span>02</span>Crew
                            </li>
                        </NavLink>
                        <NavLink to="/tech" onClick={handleClick}>
                            <li className="navigation__item">
                                <span>03</span>Technology
                            </li>
                        </NavLink>
                </button>
                <Outlet />
            </nav>
        </React.Fragment>
    );
};


