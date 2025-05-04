import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/labs");
    };
    const backHandler = () => {
        navigate(-1);
    };
    return (
        <div>
            <div className="support">
            <h1>Support</h1>
            <p>If you need help, please contact our support team.</p>
        </div>
        <button onClick={clickHandler} >Move to labs page</button>
        <button onClick={backHandler} >Back</button>
        </div>
        
    );
    
}
export default Support;