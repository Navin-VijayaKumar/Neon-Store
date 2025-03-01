import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    googleLogout();
    localStorage.removeItem("googleAccessToken"); // Clear stored token
    console.log("Log out Successfully");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div id="SignOut">
      <button onClick={onSuccess}>Logout</button>
    </div>
  );
};

export default Logout;
