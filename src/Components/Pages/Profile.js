import { useContext, useRef } from "react";
import classes from "./Profile.module.css";
import Context from "../../Context/Context";
const Profile = () => {
  const ctx = useContext(Context);
  const nameRef = useRef();
  const photoUrlRef = useRef();

  const fetchFirebase = async () => {
    console.log(localStorage.getItem("token"));

    const respose = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("token"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await respose.json();
  };
  fetchFirebase();

  const updateHandler = () => {
    const name = nameRef.current.value;
    const photo = photoUrlRef.current.value;

    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCvzryAZ4dVWRP2PJ-eM4EE78m3NrDF5F0";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: ctx.token,
        displayName: name,
        photoUrl: photo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          alert("Update Successfully");
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
            Full name: <input ref={nameRef} />
          </div>
          <div>
            Profile photo url: <input ref={photoUrlRef} />
          </div>
        </div>
        <button onClick={updateHandler}>Update</button>
        <hr />
      </div>
    </div>
  );
};
export default Profile;
