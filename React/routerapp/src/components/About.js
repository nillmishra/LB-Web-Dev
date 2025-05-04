import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/support");
    };
    return (
        <div>
            <div className="about">
            <h1>About Us</h1>
            <p>We are a company dedicated to providing the best
            services to our customers. Our team is committed to excellence and innovation.</p>
            <p>Our mission is to deliver high-quality products and services that meet the needs of our clients.</p>
            <p>We value integrity, teamwork, and customer satisfaction.</p>
            <p>Thank you for visiting our website!</p>
        </div>
        <button onClick={clickHandler} >Move to support page</button>

        </div>
        
    );
}
export default About;