import React from 'react'
import { ProfileCard } from '../styled/Profile'
import UserImg from "../images/undraw_male_avatar_g98d.svg";

function Profile() {
  return (
    <ProfileCard>
        <img src={UserImg} alt='' />
        <h4>Username: Odeagard Allison</h4>
        <h5>Email: Odedsr33@gmail.com</h5>
        <p>Joined: 23-03-2023</p>
        <p>Password: *************</p>
    </ProfileCard>  )
}

export default Profile