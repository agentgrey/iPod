import React from "react";
import "./Ipod.css";
import Display from "../display/Display";
import Buttons from "../buttons/Buttons";


class Ipod extends React.Component {    

    render() {
        return (
            <div className="screen">
                <Display />
                <Buttons />
            </div>
        )
    }
}

export default Ipod;