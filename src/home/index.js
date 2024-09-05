import React from "react";
import "./home.css";
import Count from "./count";
import Element from "./elements";
import Button from "./botton";


function Home() {

    return (
        <div className="home">
            <div className="image">
                {/* <img src="https://st4.depositphotos.com/6375600/30120/i/450/depositphotos_301207464-stock-photo-abstract-background-waves-black-and.jpg"></img> */}
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ev0DaD-bQyyHHnbR5YnkvnYRugek50JroQ&s"/> */}
                <img src="https://images3.alphacoders.com/830/thumb-1920-83067.jpg"/>
            </div>
            <div className="container">
                <div className="text">
                    <h1><span>Endless</span>  Opportunity to Earn Money</h1>
                    <h4>with the CEX.IO Crypto Affiliate Program</h4>
                    <button>Become an Affiliate</button>
                </div>
            </div>
            <Count/>
            <Element/>
            <Button/>

        </div>

    );

} export default Home