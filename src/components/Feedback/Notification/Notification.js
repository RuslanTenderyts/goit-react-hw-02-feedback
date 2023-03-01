import React from "react";
import PropTypes from "prop-types";

const Notification = ({message}) => (
    <div>
        <p> {message}</p>
    </div>
)

export default Notification;


PropTypes.Notification = {
    message: PropTypes.string.isRequired,
}
