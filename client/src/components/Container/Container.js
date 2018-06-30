import React from "react";
import "./container.css"

const Container = props => (
    <div id="container">{props.children}</div>
);

export default Container;