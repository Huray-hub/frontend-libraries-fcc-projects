import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import NavBar from "./NavBar";
import RandomQuoteMachine from "./RandomQuoteMachine/RandomQuoteMachine";
import MarkdownPreviewer from "./MarkdownPreviewer/MarkdownPreviewer";
import DrumMachine from "./DrumMachine/DrumMachine";
import Calculator from "./Calculator/Calculator";
import PomodoroClock from "./PomodoroClock/PomodoroClock";
import "./App.scss";

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route
                path={"/(.+)"}
                render={() => (
                    <Fragment>
                        <NavBar />
                        <Switch>
                            <Route
                                exact
                                path="/random-quote-machine"
                                component={RandomQuoteMachine}
                            />
                            <Route
                                exact
                                path="/markdown-previewer"
                                component={MarkdownPreviewer}
                            />
                            <Route
                                exact
                                path="/drum-machine"
                                component={DrumMachine}
                            />
                            <Route
                                exact
                                path="/calculator"
                                component={Calculator}
                            />
                            <Route
                                exact
                                path="/pomodoro-clock"
                                component={PomodoroClock}
                            />
                        </Switch>
                    </Fragment>
                )}
            />
        </Router>
    );
};

export default App;
