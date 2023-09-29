import React, { useState } from "react";
import { AuthPage } from "../styled/Auth";
import TaskImg from "../images/undraw_completed_tasks_vs6q.svg";
import { FormElement } from "../styled/Form";
import { Button } from "../styled/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/UserSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      username,
      password,
    };
    console.log(userCredentials);
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setUsername("");
        setPassword("");
        navigate("/dashboard");
      }
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
            <h2>Login</h2>
            {error ? <p>{error}</p> : ""}

            <input
              placeholder="Enter your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLoginEvent}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </FormElement>
        </div>
      </AuthPage>
    </div>
  );
}

export default SignIn;
