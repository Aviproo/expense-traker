import { useNavigate } from "react-router-dom";
import classes from "./Welcome.module.css";
import { useEffect, useRef } from "react";

import { Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/ExpenseReducer";

const Welcome = () => {
  const expense = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moneyRef = useRef();
  const descriptionRef = useRef();
  const catagoryRef = useRef();
  let totalExpense = useSelector((state) => state.expense.totalExpense);
  let button = useSelector((state) => state.expense.button);

  useEffect(() => {
    const allData = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-contact-fe22c-default-rtdb.firebaseio.com/expenses.json"
        );
        const result = await Object.values(response.data);
        dispatch(expenseActions.addExpenses(result));
      } catch (err) {
        console.log(err);
      }
    };
    allData();
  }, []);

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

  const addHandler = async () => {
    const money = moneyRef.current.value;
    const description = descriptionRef.current.value;
    const catagory = catagoryRef.current.value;
    const expenseData = {
      id: Math.random().toString(),
      money: money,
      description: description,
      catagory: catagory,
    };

    try {
      const response = await axios.post(
        "https://ecommerce-contact-fe22c-default-rtdb.firebaseio.com/expenses.json",
        expenseData
      );
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.get(
        "https://ecommerce-contact-fe22c-default-rtdb.firebaseio.com/expenses.json"
      );
      const result = await Object.values(response.data);
      dispatch(expenseActions.addExpenses(result));
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = (e) => {
    console.log(e.currentTarget.id);
  };

  const deleteHandeler = (e) => {
    console.log(e.currentTarget.id);
  };

  const themeChange = () => {
    dispatch(expenseActions.premium());
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
        {expense.map((i) => {
          totalExpense += +i.money;
          return (
            <div key={i.id} className={classes.expenseDiv}>
              <div>{i.money}</div>
              <div>{i.description}</div>
              <div>{i.catagory}</div>
              <Button id={i.id} onClick={editHandler}>
                Edit
              </Button>
              <Button id={i.id} onClick={deleteHandeler}>
                Delete
              </Button>
            </div>
          );
        })}
        <h2>
          Total Expenses:₹{totalExpense}
          {totalExpense < 10000 ? (
            <Button style={{ marginLeft: "100px" }} disabled>
              Activate Premium
            </Button>
          ) : (
            <Button style={{ marginLeft: "100px" }} onClick={themeChange}>
              Activate Premium
            </Button>
          )}
          {button}
        </h2>
      </div>
    </div>
  );
};
export default Welcome;
