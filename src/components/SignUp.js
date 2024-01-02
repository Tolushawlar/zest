import React, { useState } from "react";
import { AuthPage } from "../styled/Auth";
import TaskImg from "../images/undraw_completed_tasks_vs6q.svg";
import { FormElement } from "../styled/Form";
import { Button } from "../styled/Button";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    const newValue = event.target.value;
    setFirstName(newValue);
  };

  const handleLastNameChange = (event) => {
    const newValue = event.target.value;
    setLastName(newValue);
  };

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
  };

  const handlePasswordChange = (event) => {
    const newValue = event.target.value;
    setPassword(newValue);
  };

  const handleSignUp = (event) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),
    };
    fetch("http://127.0.0.1:8000/api/auth/register/", requestOptions)
      .then((response) => response.json())
      .then(() => {
        window.location.href = "/";
      });
  };
  return (
    <div>
      <AuthPage>
        <div className="authpage_left">
          <img src={TaskImg} alt="" />
        </div>
        <div className="authpage_right">
          <FormElement>
            <h2>Register</h2>
            <input
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
              type="text"
            />
            <input
              onChange={handleLastNameChange}
              placeholder="Enter your  last name"
              type="text"
            />
            <input
              onChange={handleEmailChange}
              placeholder="Enter your email"
              type="email"
            />
            <input
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              type="password"
            />
            <Button onClick={handleSignUp}>SignUp</Button>
          </FormElement>
        </div>
      </AuthPage>
    </div>
  );
}

export default SignUp;
