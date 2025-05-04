import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const Loginform = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard");
        // Add your login logic here
    }
    const [showPassword, setShowPassword] = useState(false);
    return (
        <form onSubmit={submitHandler}>
            <label ><p>
                Email Address<sup>*</sup>
            </p>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    value={formData.email} />

            </label>
            <label ><p>
                Password<sup>*</sup>
            </p>
                <input
                    type={showPassword ? ("text") : ("password")}
                    name="password"
                    required
                    placeholder="Enter your password"
                    onChange={changeHandler}
                    value={formData.password} />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>
                <Link to="#">
                    <p>
                        Forgot Password?
                    </p></Link>
            </label>

            <button>
                Sign In
            </button>

        </form>
    )
}
export default Loginform;