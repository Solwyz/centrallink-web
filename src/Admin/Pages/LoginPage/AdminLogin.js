import React, { useState } from "react";
import { loginAdmin } from "../../../Admin/Services/Services"; // Import login function
import logo from "../../../Assets/Logo.svg";
import ResetPassword from "./ResetPassword";

function AdminLogin() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    phoneOrEmail: "",
    password: "",
  });
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false); // To track API call status
  const [apiError, setApiError] = useState(""); // To handle API errors

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiError("");

    try {
      // Call the login service
      const data = await loginAdmin(phoneOrEmail, password);

      // Assuming a token is returned in the response
      if (data && data.token) {
        localStorage.setItem("adminToken", data.token);
        alert("Login successful!");
      } else {
        setApiError("Unexpected response from the server.");
      }
    } catch (error) {
      setApiError(error); // Display error from service
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneOrEmail") {
      setPhoneOrEmail(value);

      if (value.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          phoneOrEmail: "This field is required.",
        }));
      } else if (!/^\S+@\S+\.\S+$/.test(value) && !/^\d+$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          phoneOrEmail: "Enter a valid email or phone number.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phoneOrEmail: "" }));
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, password: "This field is required." }));
      } else if (value.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 6 characters.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const isFormValid =
    phoneOrEmail && password && !errors.phoneOrEmail && !errors.password;

  return (
    <div className="flex flex-col min-h-screen bg-bannerLogin bg-cover ">
      {/* Logo at Top Left */}
      <div className="absolute top-[60px] right-[72px]">
        <img src={logo} alt="Logo" className="h-[36px] w-[161px]" />
      </div>

      {/* Centered Login Section */}
      <div className="flex flex-1 justify-center items-center">
        {!isForgotPassword ? (
          <div className="bg-white p-12 max-w-[474px] rounded-lg drop-shadow-lg border">
            <div className="text-[24px] font-medium text-[#0C1421]">
              Welcome Back
            </div>
            <div className="text-[14px] font-normal text-[#947F41] tracking-wide max-w-[330px] mt-6">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </div>

            <form onSubmit={handleSignIn}>
              <div className="mt-[48px]">
                <label className="text-sm font-normal text-[#1C2532]">
                  Email/Phone Number
                </label>
                <input
                  type="text"
                  name="phoneOrEmail"
                  value={phoneOrEmail}
                  onChange={handleInputChange}
                  className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                  placeholder="Enter your phone number or email"
                />
                {errors.phoneOrEmail && (
                  <p className="text-red-500 text-[12px]">
                    {errors.phoneOrEmail}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <label className="text-sm font-normal text-[#1C2532]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  className="w-full mt-2 h-[48px] px-4 py-4 border border-[#EDEDED] bg-[#F7FBFF] rounded-xl focus:outline-none text-base font-light placeholder:text-[#AEAEAE] placeholder:text-[12px] placeholder:font-light"
                  placeholder="Enter password"
                />
                {errors.password && (
                  <p className="text-red-500 text-[12px]">{errors.password}</p>
                )}
              </div>
              <div
                className="text-[14px] text-[#1E4AE9] tracking-wide font-normal mt-4 cursor-pointer w-fit ml-auto"
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot Password?
              </div>
              {apiError && (
                <p className="text-red-500 text-[12px] mt-4">{apiError}</p>
              )}
              <button
                type="submit"
                className={`w-full py-2 px-2 rounded-lg mt-6 font-normal text-white ${
                  isFormValid && !loading
                    ? "bg-[#947F41]"
                    : "bg-[#D0D0D0] cursor-not-allowed"
                }`}
                disabled={!isFormValid || loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>
        ) : (
          <ResetPassword />
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
