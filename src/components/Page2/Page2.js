import React from "react";
import {NavLink} from "react-router-dom";

class Page2 extends React.Component {
    render() {
        return (
            <div><NavLink to="/Page1Container">Go back</NavLink></div>
        )
    }
}

export default Page2;