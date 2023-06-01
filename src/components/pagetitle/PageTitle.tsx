import React from "react";
import "./PageTitle.css";
import { IDest } from "../../models/Interfaces";

// Passed down from Destination component.
export const PageTitle = ({ num, text }: IDest) => {
    return (
        <React.Fragment>
            <h1 className="page__title">
                <span>{num}</span>{text}
            </h1>
        </React.Fragment>
    );
};


