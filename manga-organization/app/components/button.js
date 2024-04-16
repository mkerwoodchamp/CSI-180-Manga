'use client';

import React from "react";
import "./button.css";
import { useState, useEffect } from "react";

function Button({number}) {
    const [buttonColor, setButtonColor] = useState("red");

    useEffect(() => {
        const storedColor = localStorage.getItem(`buttonColor-${number}`);
        if (storedColor) {
            setButtonColor(storedColor);
        }
    }, [number]);

    const toggleColor = () => {
        const newColor = buttonColor === "red" ? "green" : "red";
        setButtonColor(newColor);
        localStorage.setItem(`buttonColor-${number}`, newColor);
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