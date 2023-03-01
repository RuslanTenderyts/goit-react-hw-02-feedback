import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Percentage {positivePercentage} %</li>
    </ul>
);

export default Statistics;



PropTypes.Statistics = {
    good: PropTypes.func.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}



