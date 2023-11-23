import { json, useNavigate } from "react-router-dom";
import classes from "./Welcome.module.css";
const Welcome = () => {
  const navigate = useNavigate();

  const verify = () => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: localStorage.getItem("token"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("We have sent a varification link on your email");
        });
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <div className={classes.header}>
        <div>Welcome to Expense Tracker!!!</div>

        <div className={classes.incopleteProfile}>
          <button onClick={logout}>Logout</button>
          Your Profile is Incomplete.
          <span onClick={() => navigate("profile")}>Complete now</span>
          <button onClick={verify}>Verify email</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Welcome;
