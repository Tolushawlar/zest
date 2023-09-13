import React from "react";
import { ProfileCard } from "../styled/Profile";
import UserImg from "../images/undraw_male_avatar_g98d.svg";
import { FormElement } from "../styled/Form";
import { Button } from "../styled/Button";

function Profile() {
  return (
    <ProfileCard>
      <FormElement>
        <h2>Update Profile</h2>
        <img src={UserImg} alt="" />
        <input placeholder="Enter your username" type="text" />
        <input placeholder="Enter your name" type="text" />
        <input placeholder="Enter your email" type="email" />
        <input placeholder="Enter your password" type="password" />
        <Button>Update</Button>
      </FormElement>
    </ProfileCard>
  );
}

export default Profile;
