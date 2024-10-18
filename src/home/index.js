import React from "react";
import "./home.css";
import Count from "./count";
import Element from "./elements";
import Button from "./botton";
import Text from "./text";
import { useNavigate } from "react-router-dom";
import Servics from "./servics";
import Navbarmenu from "../components/menu/Navbarmenu";
import Footer from "../components/footer/footer";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/form");
    };

    return (
        <div className="home">
          <Navbarmenu />
            <div className="image">
                <img src="https://images3.alphacoders.com/830/thumb-1920-83067.jpg" alt="background" />
            </div>
            <div className="container">
                <div className="text">
                    <h1><span>Endless</span> Opportunity to Earn Money</h1>
                    <h4>with the CEX.IO Crypto Affiliate Program</h4>
                    <button onClick={handleClick}>Become an Affiliate</button>
                </div>
            </div>
            <Count />
            <Element />
            <Text />
            <Button />
            <Servics />
            <Footer/>
          
        </div>
    );
}

export default Home;
