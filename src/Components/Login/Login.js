import { useRef } from "react";
import classes from "./Login.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const Login = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    // if (isLogIn) {
    //   url =
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    // } else {
    //   url =
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
    // }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("You have succesfully Login");
          navigate("/welcome");
        });
      } else {
        return res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  };

  return (
    <div>
      <div className={classes.Login}>
        Login
        <div>
          <input placeholder="Email" ref={emailRef} />
        </div>
        <div>
          <input placeholder="Password" ref={passwordRef} />
        </div>
        <div>
          <Button onClick={Login}>Login</Button>
        </div>
        <div>Forgot password</div>
      </div>
      <div className={classes.haveAnAccount}>
        Have an account?
        <span>Login</span>
      </div>
    </div>
  );
};
export default Login;
