import { useNavigate } from "react-router-dom";
import classes from "./Welcome.module.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/ExpenseReducer";
import { db } from "./db";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let moneyRef = useRef();
  let descriptionRef = useRef();
  let catagoryRef = useRef();
  let totalExpense = useSelector((state) => state.expense.totalExpense);
  let button = useSelector((state) => state.expense.button);
  let value = collection(db, "expenses");

  const [val, setVal] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const dbValue = await getDocs(value);
      setVal(dbValue.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

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

    await addDoc(value, expenseData);
  };

  const editHandler = async (id, money, description, catagory) => {
    const deleteVal = doc(db, "expenses", id);
    await deleteDoc(deleteVal);
    console.log(id, money, description, catagory);
    moneyRef.current.value = money;
    descriptionRef.current.value = description;
    catagoryRef.current.value = catagory;
  };

  const deleteHandeler = async (id) => {
    const deleteVal = doc(db, "expenses", id);
    await deleteDoc(deleteVal);
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
        {val.map((i) => {
          totalExpense += +i.money;
          return (
            <div key={i.id} className={classes.expenseDiv}>
              <div>{i.money}</div>
              <div>{i.description}</div>
              <div>{i.catagory}</div>
              <Button
                id={i.id}
                onClick={() =>
                  editHandler(i.id, i.money, i.description, i.catagory)
                }
              >
                Edit
              </Button>
              <Button id={i.id} onClick={() => deleteHandeler(i.id)}>
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
