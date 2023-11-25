import { json, useNavigate } from "react-router-dom";
import classes from "./Welcome.module.css";
import { useContext, useRef } from "react";
import Context from "../../Context/Context";
import { Button } from "react-bootstrap";
import axios from "axios";

const Welcome = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const moneyRef = useRef();
  const descriptionRef = useRef();
  const catagoryRef = useRef();

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

  const addHandler = () => {
    const money = moneyRef.current.value;
    const description = descriptionRef.current.value;
    const catagory = catagoryRef.current.value;
    const expenseData = {
      id: Math.random().toString(),
      money: money,
      description: description,
      catagory: catagory,
    };

    axios
      .post(
        "https://expensetraker-e2a07-default-rtdb.firebaseio.com/expense.json",
        JSON.stringify(expenseData)
      )
      .then((res) => console.log(res));
    ctx.addExpense(expenseData);
    console.log(ctx);
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
      <div className={classes.expenseDiv}>
        <div>
          Spent Money <input ref={moneyRef} type="number" />
        </div>
        <div>
          Description <input ref={descriptionRef} />
        </div>
        <div>
          Catagory:
          <select name="cars" id="cars" ref={catagoryRef}>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
            <option value="Recharge">Recharge</option>
          </select>
        </div>
        <Button onClick={addHandler}>Add Expenses</Button>
      </div>
      <hr />
      <div>
        {ctx.expense.map((i) => (
          <div key={i.id} className={classes.expenseDiv}>
            <div>{i.money}</div>
            <div>{i.description}</div>
            <div>{i.catagory}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Welcome;
