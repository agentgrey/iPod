import React from "react";
import "./Ipod.css";
import Display from "../display/Display";
import Buttons from "../buttons/Buttons";


class Ipod extends React.Component {    

    render() {
        return (
            <div className="screen">
                <Display />
                <Buttons 
                        toggleMenu={this.toggleMenu}
                        />
            </div>
        )
    }

     toggleMenu = () => {
        let displayMenu = document.getElementsByClassName('display-menu')[0].classList;
        if (displayMenu.contains('display-menu-hidden')) { 
            displayMenu.remove('display-menu-hidden');
        }
        else {
            displayMenu.add('display-menu-hidden');
        }
    }
}

export default Ipod;