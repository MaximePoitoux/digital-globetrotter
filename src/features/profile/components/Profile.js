import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../../contexts/AuthContext";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// OK

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/cities");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      {error && <div>{error}</div>}
      <div>{currentUser.email}</div>
      <IconButton>
        <Avatar
          style={{ background: "rgb(238, 82, 83)" }}
          onClick={handleLogout}
        >
          <ExitToAppIcon></ExitToAppIcon>
        </Avatar>
      </IconButton>
    </>
  );
};

export default Profile;
