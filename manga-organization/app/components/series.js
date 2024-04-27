import React, { useState } from "react";
import "./series.css";
import Button from "./button.js";

function Series({title, synopsis, volumes, onRemove}) {

    const [showSynopsis, setShowSynopsis] = useState(false);

    const toggleSynopsis = () => {
        setShowSynopsis(!showSynopsis);
    };

    const shortenedSynopsis = synopsis.split('\n').slice(0, 4).join('\n');
    const displaySynopsis = showSynopsis ? synopsis : shortenedSynopsis;

    const rows = [];
    for (let i = 0; i < volumes; i+=8) {
        const buttons = [];
        for (let j = i; j < Math.min(i + 10, volumes); j++) {
            buttons.push(<Button key={j} number={j + 1} />);
        }
        rows.push(<div class="button-row" key={i}>
            {buttons}
        </div>)
    }

    return (
        <div className="series">
            <div className='series-header'>
                <h1 class="title">{title}</h1>
                <button className="remove" onClick={onRemove}>
                    ❌
                </button>
            </div>
            <h2 class="center">{synopsis}</h2>
            <div class="button-container">
                {rows}
            </div>
        </div>
    )
}

export default Series;