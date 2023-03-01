import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css"; 

const FeedbackOptions = ({onLeaveFeedback}) => (
    <div>
        <button 
            className={css.button}
            type="button" 
            onClick={() => onLeaveFeedback('good')}>
                Good
        </button>
        <button 
            className={css.button}
            type="button" 
            onClick={() => onLeaveFeedback('neutral')}>
                Neutral
        </button>
        <button 
            className={css.button}
            type="button" 
            onClick={() => onLeaveFeedback('bad')}> 
                Bad
        </button>
    </div>
)

export default FeedbackOptions;


PropTypes.FeedbackOptions ={
    onLeaveFeedback: PropTypes.func.isRequired,
}
