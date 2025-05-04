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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");  


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

        const finalData = {
            ...userData,
            accountType: accountType,
        }
        console.log(finalData);
        navigate("/dashboard");
    }
    return (
        <div>
            <div
            className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button onClick={() => setAccountType("student")} className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}>Student</button>
                <button onClick={() => setAccountType("instructor")} className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex justify-between gap-x-4 mb-4"> 
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            onChange={changeHandler}
                            value={formData.firstName} 
                            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                    </label >
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name<sup sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            onChange={changeHandler}
                            value={formData.lastName} 
                            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                    </label>

                </div>

                <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={changeHandler}
                        value={formData.email} 
                        className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                </label>
                <div className="flex justify-between mt-4 gap-x-4">
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            placeholder="Enter Password"
                            required
                            onChange={changeHandler}
                            value={formData.password} 
                            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password<sup sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
                        <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>
                <button className="w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
                    Create Account
                </button>

            </form>
        </div>


    );
}

export default SignupForm;