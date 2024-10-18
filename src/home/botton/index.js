
import React from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";

function Button() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form");
        console.log("clicked");
    };

    return (
        <div className="button">
            <h1>Join the Affiliates Club</h1>
            <button onClick={handleClick}>Become an Affiliate</button>
        </div>
    );
}

export default Button;
