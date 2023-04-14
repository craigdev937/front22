import React from "react";
import "./Header.css";
import Logo from "@public/shared/logo.svg";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <section className="header__logo">
                    <Link to="/">
                        <img src={Logo} alt="Space Tourism" />
                    </Link>
                </section>
                <Navbar />
            </header>
        </React.Fragment>
    );
};

