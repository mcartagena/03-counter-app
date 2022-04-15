/* react snippet rscp create react stateless component with prototype */

import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);

    const handleEvent = (event) => {
        setCounter(counter + 1);
        //setCounter((counter) => counter + 1);
    };
    const handleReset = (event) => {
        setCounter(value);
    };
    const handleSubstract = (event) => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleEvent}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;