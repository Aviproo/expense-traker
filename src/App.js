import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          <Route path="/welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
