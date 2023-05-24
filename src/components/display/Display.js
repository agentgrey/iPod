import React from "react";
import "./Display.css";
import Games from "../games/games";
import Gallery from "../gallery/gallery";
import Music from "../music/music";
import Setting from "../settings/setting";


class Display extends React.Component {

    render() {
        return (
            <div className="display">
                <div className="display-menu">
                    <h2>Menu</h2>
                    <ul>
                    <li><Gallery /></li>
                    <li><Music /></li>
                    <li><Games /></li>
                    <li><Setting /></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Display;