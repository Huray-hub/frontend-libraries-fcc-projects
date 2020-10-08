import React from "react";
import { Link } from "react-router-dom";
import { useLink } from "../util";
import "./HomePage.scss";

const HomePage = () => {
    useLink(
        "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "stylesheet"
    );

    return (
        <div className="homepage container">
            <div className="page-body">
                <h1>
                    <i class="fa fa-free-code-camp" aria-hidden="true"></i>{" "}
                    FreeCodeCamp Projects
                </h1>

                <ul className="project-links">
                    <li>
                        <Link to={"/random-quote-machine"}>
                            <button className="btn-icon-only">
                                <i
                                    class="fa fa-quote-left"
                                    aria-hidden="true"
                                ></i>{" "}
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/markdown-previewer"}>
                            <button className="btn-icon-only">
                                <i class="fa fa-magic" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/drum-machine"}>
                            <button className="btn-icon-only">
                                {" "}
                                <i class="fa fa-music" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/calculator"}>
                            <button className="btn-icon-only">
                                {" "}
                                <i
                                    class="fa fa-calculator"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/pomodoro-clock"}>
                            <button className="btn-icon-only">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
