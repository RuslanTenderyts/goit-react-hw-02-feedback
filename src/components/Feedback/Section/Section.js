import React from "react";
import PropTypes from "prop-types";

const Section = ({title, children}) => (
    <div>

        <h2>{title}</h2>     
        <div>{children}</div> 

    </div>
)

export default Section;

PropTypes.Section = {
    title: PropTypes.string,
}
