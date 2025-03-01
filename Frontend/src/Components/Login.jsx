import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId = "815729641544-52hsjip01ocg0u9lf81d5prae31g3fco.apps.googleusercontent.com"; // Replace with your actual client ID

function Login() {
  const navigate = useNavigate(); // Correctly use useNavigate

  useEffect(() => {
    const token = localStorage.getItem("googleAccessToken");
    if (token) {
      navigate("/"); // Redirect if token exists
    }
  }, [navigate]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div id="SignIn" className="w-screen h-screen flex flex-col justify-center items-center gap-12">
        <h1 className="text-9xl py-10 px-10 text-center">
          Welcome to <span className="text-green-600">Musify</span>
        </h1>
        <h1 className="text-blue-700 text-3xl text-center">
          Enjoy listening to your favorite music with your friends!
        </h1>
        <GoogleLogin
          onSuccess={(response) => {
            console.log("Login Success:", response);
            const accessToken = response.credential;
            localStorage.setItem("googleAccessToken", accessToken);
            navigate("/"); // Redirect after login
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
