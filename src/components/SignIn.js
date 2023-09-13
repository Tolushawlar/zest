import React from "react";
import { AuthPage } from "../styled/Auth";
import TaskImg from "../images/undraw_completed_tasks_vs6q.svg";
import { FormElement } from "../styled/Form";
import { Button } from "../styled/Button";

function SignIn() {
  return (
    <div>
      <AuthPage>
        <div className="authpage_left">
          <img src={TaskImg} alt="" />
        </div>
        <div className="authpage_right">
          <FormElement>
            <h2>Login</h2>
            <input placeholder="Enter your username" type="text" />
            <input placeholder="Enter your password" type="password" />
            <Button>Login</Button>
          </FormElement>
        </div>
      </AuthPage>
    </div>
  );
}

export default SignIn;
