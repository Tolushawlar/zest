import React, { useState } from "react";
import { HeaderDiv } from "../styled/Header";
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

function Header() {

  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  const handleLogout = () => {
    //localStorage.removeItem("user");
    setUser(null);
    navigate("/")
  };
  return (
    <>
      <HeaderDiv>
        <p>Zest</p>
        <div className="header__buttons">
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button>Login</Button>
              <Button>Register</Button>
            </>
          )}
        </div>
      </HeaderDiv>
    </>
  );
}

export default Header;
