import React, { useEffect } from "react";
import "./servics.css";
import twitter from '../../img/download__1_-removebg-preview.png';
import telegram from '../../img/images__1_-removebg-preview.png'
import facebook from '../../img/isolated-facebook-logo-vector-removebg-preview.png'
import linkedin from '../../img/hd-white-linkedin-in-icon-text-symbol-sign-png-701751695045688q5zeqpwik8-removebg-preview.png'
import visa from '../../img/visa-logo-visa-icon-transparent-free-png.webp'
import master from '../../img/mcbc_debit-rev_84px-removebg-preview.png'

function Servics() {


    return (
        <div className="servics">
            <div className="container">

                <div className="list">

                    <ul>
                        <li><h4>Services</h4></li>
                        <li>Buy & Sell Crypto</li>
                        <li>Buy Bitcoin</li>
                        <li>Buy Ethereum</li>
                        <li>BTC to USD</li>
                        <li>Buy Crypto With Paypal</li>
                        <li>Buy Bitcoin With Bank Account</li>
                        <li>Buy Bitcoin With Prepaid Card</li>
                        <li>Buy Crypto With Apple Pay</li>
                        <li></li>
                    </ul>
                    <ul>
                        <li><h4>About</h4></li>
                        <li>About Us</li>
                        <li>University</li>
                        <li>Contacts</li>
                        <li>Team</li>
                        <li>Legal & Security</li>
                        <li>Terms of Use</li>
                        <li>Refund Policy</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>Help Centre</li>
                        <li>Sitemap</li>

                    </ul>
                    <ul>
                        <li><h4>Information</h4></li>
                        <li>Limits and Commissions</li>
                        <li>How to Buy Crypto</li>
                        <li>Bitcoin Halving</li>
                        <li>Fee Schedule</li>
                        <li>Getting Started</li>
                        <li>Identity Verification Guide</li>
                        <li>Card Verification Guide</li>
                        <li>Giveaways & Competitions</li>
                        <li>Crypto Trading Competition</li>
                    </ul>
                    <ul className="tool">

                        <li ><h4>Tools</h4></li>
                        <li>API</li>
                        <li>Bitcoin Calculator</li>
                        <li>Bitcoin Price Widget</li>
                        <li>Mobile App</li>
                        <li>Cryptocurrency Affiliate Program</li>
                        <li>Crypto deposit recovery</li>
                    </ul>
                </div>

                <h2>Follow</h2>
                <div className="follow">

                    <li><img src={twitter} alt="logo" className="logoImage" /></li>
                    <li><img src={telegram} alt="logo" className="logoImage" /></li>
                    <li><img src={facebook} alt="logo" className="logoImage" id="padding" /></li>
                    <li><img src={linkedin} alt="logo" className="logoImage" /></li>
                </div>
                <button className="status">Status</button>

            </div>
            <div className="followpayment">

                <li><img src={visa} alt="logo" className="logoImagePayment" id="paddingVisa" /></li>
                <li><img src={master} alt="logo" className="logoImagePayment" /></li>
               
            </div>


        </div>
    );
}

export default Servics;



