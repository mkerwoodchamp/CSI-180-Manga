import React from "react";
import "./series.css";
import Button from "./button.js";

function Series({title, volumes}) {
    return (
        <div className="series">
            <h1>{title}</h1>
               {Array.from({length: volumes}, (_, i) => 
                    <Button key={i} number={i + 1} />
                )}
            </div>
    )
}

export default Series;
