import { Button } from "react-bootstrap";
import classes from "./ForgotPass.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
const ForgotPass = () => {
  const navigate = useNavigate();
  const emailRef = useRef();

  const resetPassword = () => {
    const email = emailRef.current.value;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("Reset link sent to your mail");
        });
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };
  return (
    <div className={classes.mainDiv}>
      <div className={classes.Login}>
        Enter the email with you have registered
        <div>
          <input placeholder="Email" ref={emailRef} />
        </div>
        <Button onClick={resetPassword}>Send Link</Button>
      </div>
      <div className={classes.haveAnAccount}>
        Already an User?
        <span onClick={() => navigate("/login")} className={classes.span}>
          Login
        </span>
      </div>
    </div>
  );
};
export default ForgotPass;
