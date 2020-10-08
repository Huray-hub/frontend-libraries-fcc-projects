import React, { useEffect, useState } from "react";
import "./PomodoroClock.scss";
import { useLink, useFreeCodeCampTests } from "../util";

const LengthControl = (props) => {
    const { name, isPlaying, length, setLength } = props;

    const descreaseLength = () => {
        if (length > 1 && !isPlaying) setLength(length - 1);
    };

    const increaseLength = () => {
        if (length < 60 && !isPlaying) setLength(length + 1);
    };

    return (
        <div className="length-control">
            <div className="label" id={`${name}-label`}>
                {props.name}
            </div>
            <button
                className="btn btn-level btn-icon-only"
                id={`${name}-decrement`}
                onClick={descreaseLength}
            >
                <i class="fa fa-arrow-down fa-2x"></i>
            </button>
            <div className="btn btn-level" id={`${name}-length`}>
                {length}
            </div>
            <button
                className="btn btn-level btn-icon-only"
                id={`${name}-increment`}
                onClick={increaseLength}
            >
                <i class="fa fa-arrow-up fa-2x"></i>
            </button>
        </div>
    );
};

const Timer = (props) => {
    const {
        isPlaying,
        sessionLength,
        breakLength,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        isSession,
        setIsSession,
        toggleSound,
    } = props;

    const formatTimeElement = (element) =>
        element < 10 ? `0${element}` : element;

    const decreaseTime = () => {
        if (seconds === 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
        } else setSeconds(seconds - 1);
    };

    const changeSession = () => {
        if (isSession) {
            setIsSession(false);
            setMinutes(breakLength);
        } else {
            setIsSession(true);
            setMinutes(sessionLength);
        }

        setSeconds(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                if (minutes > 0 || seconds > 0) {
                    decreaseTime();
                } else {
                    changeSession();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        if (!isPlaying) {
            setMinutes(sessionLength);
            setSeconds(0);
        }
    }, [sessionLength]);

    useEffect(() => {
        if (minutes === 0 && seconds === 0) toggleSound();
    }, [minutes, seconds]);

    return (
        <div id="timer-wrapper">
            <div className="label" id="timer-label">
                {isSession ? "Session" : "Break"}
            </div>
            <div id="time-left">
                {formatTimeElement(minutes)}:{formatTimeElement(seconds)}
            </div>
        </div>
    );
};

const StartStopButton = (props) => {
    const { isPlaying, setIsPlaying } = props;

    const handlePlayButton = () => {
        if (isPlaying) setIsPlaying(false);
        else setIsPlaying(true);
    };

    return (
        <button
            className="btn btn-icon-only"
            id="start_stop"
            onClick={handlePlayButton}
        >
            <i class="fa fa-play fa-2x"></i>
            <i class="fa fa-pause fa-2x"></i>
        </button>
    );
};

const ResetButton = (props) => {
    const {
        setBreakLength,
        setSessionLength,
        setIsPlaying,
        setMinutes,
        setSeconds,
        setIsSession,
        toggleSound,
    } = props;

    const handleResetButton = () => {
        setIsPlaying(false);
        setBreakLength(5);
        setSessionLength(25);
        setMinutes(25);
        setSeconds(0);
        setIsSession(true);
        toggleSound(true);
    };

    return (
        <button
            className="btn btn-icon-only"
            id="reset"
            onClick={handleResetButton}
        >
            <i class="fa fa-refresh fa-2x"></i>
        </button>
    );
};

const PomodoroClock = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [isPlaying, setIsPlaying] = useState(false);
    const [minutes, setMinutes] = useState(sessionLength);
    const [seconds, setSeconds] = useState(0);
    const [isSession, setIsSession] = useState(true);

    //add fontawesome
    useLink(
        "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "stylesheet"
    );

    useFreeCodeCampTests();

    const toggleSound = (forceStop = false) => {
        let sound = document.getElementById("beep");

        if (sound.paused && !forceStop) sound.play();
        else {
            sound.pause();
            sound.currentTime = 0;
        }
    };

    return (
        <div className="pomodoro-clock container">
           <h1 className="title">Pomodoro Clock</h1>
            <div id="wrapper">
                <LengthControl
                    name={"break"}
                    length={breakLength}
                    setLength={setBreakLength}
                    isPlaying={isPlaying}
                />
                <LengthControl
                    name={"session"}
                    length={sessionLength}
                    setLength={setSessionLength}
                    isPlaying={isPlaying}
                />

                <Timer
                    isPlaying={isPlaying}
                    sessionLength={sessionLength}
                    breakLength={breakLength}
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    isSession={isSession}
                    setIsSession={setIsSession}
                    toggleSound={toggleSound}
                />

                <div className="timer-control">
                    <StartStopButton
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                    <ResetButton
                        setBreakLength={setBreakLength}
                        setSessionLength={setSessionLength}
                        setIsPlaying={setIsPlaying}
                        setMinutes={setMinutes}
                        setSeconds={setSeconds}
                        setIsSession={setIsSession}
                        toggleSound={toggleSound}
                    />
                </div>
                <audio
                    id="beep"
                    preload="auto"
                    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
                ></audio>
            </div>         
        </div>
    );
};

export default PomodoroClock;
