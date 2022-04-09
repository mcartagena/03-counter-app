/* react snippet rscp create react stateless component with prototype */

import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
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