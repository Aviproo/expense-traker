import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Pages/Welcome";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Pages/Profile";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import ForgotPass from "./Components/Pages/ForgotPass";

function App() {
  const ctx = useContext(context);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<SignUp />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="welcome/profile" element={<Profile />} />
        <Route path="login/:id" element={<ForgotPass />} />
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="/welcome" element={<Welcome />} /> */}
      </Routes>
    </div>
  );
}

export default App;
