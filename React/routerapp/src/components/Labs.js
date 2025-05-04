import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate("/about");
    };
    return (
        <div>
            <div className="labs">
                <h1>Welcome to the Labs Page</h1>
                <p>This is the labs page of our application.</p>
            </div>
            <button onClick={clickHandler} >Move to about page</button>
        </div>

    );
}
export default Labs;