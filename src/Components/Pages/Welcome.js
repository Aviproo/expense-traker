import { useNavigate } from "react-router-dom";
import classes from "./Welcome.module.css";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.header}>
        <div>Welcome to Expense Tracker!!!</div>
        <div className={classes.incopleteProfile}>
          Your Profile is Incomplete.{" "}
          <span onClick={() => navigate("profile")}>Complete now</span>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Welcome;
