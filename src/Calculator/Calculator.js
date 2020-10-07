import React, { useState } from "react";
import "./Calculator.scss";

const buttons = [
    { name: "clear", symbol: "AC" },
    { name: "divide", symbol: "/" },
    { name: "multiply", symbol: "X" },
    { name: "seven", symbol: 7 },
    { name: "eight", symbol: 8 },
    { name: "nine", symbol: 9 },
    { name: "subtract", symbol: "-" },
    { name: "four", symbol: 4 },
    { name: "five", symbol: 5 },
    { name: "six", symbol: 6 },
    { name: "add", symbol: "+" },
    { name: "one", symbol: 1 },
    { name: "two", symbol: 2 },
    { name: "three", symbol: 3 },
    { name: "equals", symbol: "=" },
    { name: "zero", symbol: 0 },
    { name: "decimal", symbol: "." },
];

const Button = (props) => {
    const { name, symbol, onClickHandler } = props;

    return (
        <div className="button" id={name} onClick={onClickHandler}>
            {symbol}
        </div>
    );
};

const ButtonsContainer = (props) => {
    const { setContentDisplay } = props;
    const [elements, setElements] = useState([]);

    const onClickHandler = (e) => {
        const buttonPressed = e.target.innerText;

        if (isOperator(buttonPressed)) handleOperator(buttonPressed);
        else if (buttonPressed === ".") handleDecimalDot(buttonPressed);
        else if (buttonPressed === "AC") handleClear();
        else if (buttonPressed === "=") handleEquals();
        else handleDigit(buttonPressed);
    };

    const handleDecimalDot = (buttonPressed) => {
        let modifiedElements = [...elements];

        if (elements[elements.length - 1].includes(buttonPressed)) return;
        else if (isOperator(elements[elements.length - 1])) {
            modifiedElements.pop();
            modifiedElements[modifiedElements.length - 1] = buttonPressed;
        } else modifiedElements[modifiedElements.length - 1] += buttonPressed;

        setElements(modifiedElements);
        setContentDisplay(modifiedElements.join(""));
    };

    const handleOperator = (buttonPressed) => {
        let modifiedElements = [...elements];

        if (modifiedElements.length === 0) return;
        else if (isOperator(modifiedElements[modifiedElements.length - 1])) {
            if (
                buttonPressed === "-" &&
                !modifiedElements[modifiedElements.length - 1].includes("-")
            )
                modifiedElements[modifiedElements.length - 1] += buttonPressed;
            else if (buttonPressed !== "-")
                modifiedElements[modifiedElements.length - 1] = buttonPressed;
        } else modifiedElements.push(buttonPressed);

        setElements(modifiedElements);
        setContentDisplay(modifiedElements.join(""));
    };

    const handleClear = () => {
        setElements([]);
        setContentDisplay("0");
    };

    const handleDigit = (buttonPressed) => {
        let modifiedElements = [...elements];

        if (elements.length === 0) {
            if (buttonPressed === "0") return;

            modifiedElements.push(buttonPressed);
        } else if (isOperator(elements[elements.length - 1])) {
            if (isOperator(elements[elements.length - 2]))
                modifiedElements[modifiedElements.length - 1] += buttonPressed;
            else modifiedElements.push(buttonPressed);
        } else modifiedElements[modifiedElements.length - 1] += buttonPressed;

        setElements(modifiedElements);
        setContentDisplay(modifiedElements.join(""));
    };

    const handleEquals = () => {
        let result = parseFloat(elements[0]);

        if (elements.length < 3) return;

        if (isOperator(elements[elements.length - 1]))
            setElements(elements.slice(0, elements.length - 1));

        let minus = (elements.length % 2) + 1;

        for (let i = 1; i <= elements.length - minus; i += 2) {
            let rightElement = parseFloat(elements[i + 1]);
            let operator = "";

            if (elements[i].length > 1) {
                operator = elements[i][0];
                rightElement = -rightElement;
            } else operator = elements[i];

            result = compute(result, operator, rightElement);
        }

        setElements([result]);
        setContentDisplay(result);
    };

    const compute = (valueA, operator, valueB) => {
        let result;

        switch (operator) {
            case "+":
                result = valueA + valueB;
                break;
            case "-":
                result = valueA - valueB;
                break;
            case "X":
                result = valueA * valueB;
                break;
            case "/":
                result = valueA / valueB;
                break;
            default:
                break;
        }

        return result;
    };

    const isOperator = (buttonPressed) => {
        if (["+", "-", "X", "/"].includes(buttonPressed[0])) return true;

        return false;
    };

    const buttonsSet = buttons.map((x) => {
        return (
            <Button
                name={x.name}
                symbol={x.symbol}
                onClickHandler={onClickHandler}
            />
        );
    });

    return <div id="buttonsContainer">{buttonsSet}</div>;
};

const Display = (props) => {
    return (
        <div id="display">
            <span>{props.contentDisplay}</span>
        </div>
    );
};

const Calculator = () => {
    const [contentDisplay, setContentDisplay] = useState("0");

    return (
        <div id="calculator">
            <Display contentDisplay={contentDisplay} />
            <ButtonsContainer setContentDisplay={setContentDisplay} />
        </div>
    );
};

export default Calculator;
