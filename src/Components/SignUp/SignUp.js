import { useRef } from "react";
import { Button } from "react-bootstrap";
import classes from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const signUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = passwordRef.current.value;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("You have succesfully signup");
          navigate("/login");
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
      <div className={classes.signUp}>
        SignUp
        <div>
          <input placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <input placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <input placeholder="Confirm Password" ref={confirmpasswordRef} />
        </div>
        <div>
          <button onClick={signUp}>SignUp</button>
        </div>
      </div>
      <div className={classes.haveAnAccount}>
        Have an account?
        <span onClick={() => navigate("login")} className={classes.span}>
          Login
        </span>
      </div>
    </div>
  );
};
export default SignUp;
