import React from "react";
import "./series.css";
import Button from "./button.js";

function Series({title, synopsis, volumes}) {
    const rows = [];
    for (let i = 0; i < volumes; i+=8) {
        const buttons = [];
        for (let j = i; j < Math.min(i + 8, volumes); j++) {
            buttons.push(<Button key={j} number={j + 1} />);
        }
        rows.push(<div class="button-row" key={i}>
            {buttons}
        </div>)
    }
    return (
        <div className="series">
            <h1 class="title">{title}</h1>
            <h2 class="center">{synopsis}</h2>
            <div class="button-container">
                {rows}
            </div>
        </div>
    )
}

export default Series;
