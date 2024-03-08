'use client';

import React from "react";
import "./button.css";
import { useState } from "react";

function Button({number}) {
    const [buttonColor, setButtonColor] = useState("red");

    const toggleColor = () => {
        const newColor = buttonColor === "red" ? "green" : "red";
        setButtonColor(newColor);
    };

    return (
        <div className="container">
            <button style={{ backgroundColor: buttonColor }} onClick={toggleColor}>
                {number}
            </button>
        </div>
    );
}

export default Button;