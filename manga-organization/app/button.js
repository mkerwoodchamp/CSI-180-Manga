'use client';

import React from "react";
import "./globals.css";
import { useState } from "react";

function Button({number}) {
    const [buttonColor, setButtonColor] = useState();

    return (
        <div className="container">
            <button className="button" onClick={() => setButtonColor("green")} style={{backgroundColor: {buttonColor}}}>
                {number}
            </button>
        </div>
    );
}

export default Button;