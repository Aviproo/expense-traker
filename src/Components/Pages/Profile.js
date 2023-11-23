import classes from "./Profile.module.css";
const Profile = () => {
  const updateHandler = () => {
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  };
  return (
    <div>
      <div className={classes.header}>
        <div>Winners never quite, Quiters never win.</div>
        <div className={classes.incopleteProfile}>
          Your Profile is 64% complete. A complete Profile has <br /> higher
          chances of landing a job.
          <span>Complete now</span>
        </div>
      </div>
      <hr />
      <div>
        <div className={classes.contactDetail}>
          <h4>Contact Details</h4> <button>Cancel</button>
        </div>
        <div className={classes.updateDetail}>
          <div>
            Full name: <input />
          </div>
          <div>
            Profile photo url: <input />
          </div>
        </div>
        <button onClick={updateHandler}>Update</button>
        <hr />
      </div>
    </div>
  );
};
export default Profile;
