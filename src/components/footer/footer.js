import React from "react";
import pic from '../../img/purple_logo_design_2-removebg-preview.png';
import "./footer.css"
function Footer(){
return(
    <div className="footer">
    <div className="container">
    <footer>
    <div className="row">
    <img src={pic} alt="logo" className="logo"/>
<p>thousands of our affiliate partners who are already earning with the CEX.IO Affiliate Program. Get your unique affiliate link 
for free.CEX.IO to your audience and invite them to join the platform with your affiliate link.</p>
        <div className="col">
            <h3>Office</h3>
            <p>ABC road</p>
            <p>WhiteField karachi</p>
            <p>Sindh,PIN 560066, pakistan</p>
            <p className="email-id">cheenashaikh934@gmail.com</p>
            <h4>+92-3345785-898</h4>
        </div>
    
    </div>
    </footer>
    </div>
    </div>
);
}export default Footer;