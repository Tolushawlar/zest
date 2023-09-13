import React from "react";
import { HeaderDiv } from "../styled/Header";
import { Button } from "../styled/Button";

function Header() {
  return (
    <>
      <HeaderDiv>
        <p>Zest</p>
        <div className="header__buttons">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </HeaderDiv>
    </>
  );
}

export default Header;
