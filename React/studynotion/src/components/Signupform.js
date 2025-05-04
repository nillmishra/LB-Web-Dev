import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);


    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match")
            return;
        }
        // Add your signup logic here
        setIsLoggedIn(true);
        toast.success("Account Created")
        const userData = {...formData };
        console.log(userData);
        navigate("/dashboard");
    }
    return (
        <div>
            <div>
                <button className="btn btn-primary">Student</button>
                <button className="btn btn-primary">Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>
                            First Name<sup>*</sup>
                        </p>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            onChange={changeHandler}
                            value={formData.firstName} />
                    </label>
                    <label>
                        <p>
                            Last Name<sup>*</sup>
                        </p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            onChange={changeHandler}
                            value={formData.lastName} />
                    </label>

                </div>

                <label>
                    <p>
                        Email Address<sup>*</sup>
                    </p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={changeHandler}
                        value={formData.email} />
                </label>
                <div>
                    <label>
                        <p>
                            Create Password<sup>*</sup>
                        </p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            placeholder="Enter Password"
                            required
                            onChange={changeHandler}
                            value={formData.password} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label>
                        <p>
                            Confirm Password<sup>*</sup>
                        </p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            onChange={changeHandler}
                            value={formData.confirmPassword} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                <button>
                    Create Account
                </button>

            </form>
        </div>


    );
}

export default SignupForm;