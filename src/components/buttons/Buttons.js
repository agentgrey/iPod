import React from "react";
import "./Buttons.css";


class Buttons extends React.Component {

    render() {
        return (
            <div className="buttons">
                <button className="select">
                    SELECT
                </button>
                <button className="menu">
                    MENU
                </button>
                <button className="backward">
                    <i className="fa-solid fa-backward-fast"></i>
                </button>
                <button className="forward">
                    <i className="fa-solid fa-forward-fast"></i>
                </button>
                <button className="play">
                    <i className="fa-regular fa-circle-play"></i>
                </button>
            </div>
        )
    }
}

export default Buttons;