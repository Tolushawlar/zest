import React, { useState } from "react";
import { ProfileCard } from "../styled/Profile";
import UserImg from "../images/undraw_male_avatar_g98d.svg";
import { Button } from "../styled/Button";
import { useNavigate } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Profile() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  
  return (
    <>
      {user ? (
        <ProfileCard>
          <img src={user.image} alt="" />
          <h4>Username: {user.user.first_name} {user.user.last_name}</h4>
          <h5>Email: {user.user.email}</h5>
        </ProfileCard>
      ) : (
        <Button onClick={navigate("/")}>Login</Button>
      )}
    </>
  );
}

export default Profile;
