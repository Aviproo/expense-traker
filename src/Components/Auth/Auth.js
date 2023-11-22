import { useRef } from "react";
import { Button } from "react-bootstrap";
import classes from "./Auth.module.css";
const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const signUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = passwordRef.current.value;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";
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
        confirmPassword: confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("You have succesfully signup");
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
      <div className={classes.auth}>
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
          <Button onClick={signUp}>SignUp</Button>
        </div>
      </div>
      <div className={classes.haveAnAccount}>
        Have an account?
        <span>Login</span>
      </div>
    </div>
  );
};
export default Auth;
