import React from "react";
import { Link } from "react-router-dom";
import {useLink} from "../util";
import "./HomePage.scss";

const HomePage = () => {
    useLink("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "stylesheet");

    return (
        <div>
             <h1><i class="fa fa-free-code-camp" aria-hidden="true"></i> FreeCodeCamp Projects</h1>

             <ul className="project-links">
             <li>
                    <Link to={"/random-quote-machine"}>
                        <button ><i class="fa fa-quote-left" aria-hidden="true"></i> </button>
                    </Link>                                     
                </li>
                <li>
                    <Link to={"/markdown-previewer"}>
                        <button><i class="fa fa-magic" aria-hidden="true"></i></button>
                    </Link>                                     
                </li>
                <li>
                    <Link to={"/drum-machine"}>
                        <button > <i class="fa fa-music" aria-hidden="true"></i></button>
                    </Link>                                     
                </li>
                <li>
                    <Link to={"/calculator"}>
                        <button > <i class="fa fa-calculator" aria-hidden="true"></i></button>
                    </Link>                                     
                </li>
                <li>
                    <Link to={"/pomodoro-clock"}>
                        <button ><i class="fa fa-clock-o" aria-hidden="true"></i></button>
                    </Link>                                     
                </li>               
             </ul>
        </div>
       
    );

}

export default HomePage;