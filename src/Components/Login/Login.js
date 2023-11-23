import { useContext, useRef } from "react";
import classes from "./Login.module.css";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Context from "../../Context/Context";
const Login = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const params = useParams();

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
          ctx.addToken(data.idToken);
          localStorage.setItem("token", data.idToken);
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
    <div className={classes.mainDiv}>
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
        <div onClick={() => navigate("forgotpass")} className={classes.forgot}>
          Forgot password
        </div>
      </div>
      <div className={classes.haveAnAccount}>
        Have not account?
        <span onClick={() => navigate("/")} className={classes.span}>
          Sign
        </span>
      </div>
    </div>
  );
};
export default Login;
