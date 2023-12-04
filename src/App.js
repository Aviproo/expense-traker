import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Pages/Welcome";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Pages/Profile";
import ForgotPass from "./Components/Pages/ForgotPass";
import Expenses from "./Components/Pages/Expenses";
import { useSelector } from "react-redux";

function App() {
  const background = useSelector((state) => state.expense.background);
  const color = useSelector((state) => state.expense.color);

  return (
    <div
      className="App"
      style={{ background: `${background}`, color: `${color}` }}
    >
      <Routes>
        <Route path="*" element={<SignUp />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="welcome/profile" element={<Profile />} />
        <Route path="login/:id" element={<ForgotPass />} />
        <Route path="login/expenses" element={<Expenses />} />
      </Routes>
    </div>
  );
}

export default App;
