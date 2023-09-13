import React from "react";
import { FormElement } from "../styled/Form";
import { TaskElement } from "../styled/CreateTask";
import { Button } from "../styled/Button";

function CreateTask() {
  return (
    <TaskElement>
      <FormElement>
        <input type="text" placeholder="Enter task title" />
        <input type="text" placeholder="Enter task status" />
        <Button>Create task</Button>
      </FormElement>
    </TaskElement>
  );
}

export default CreateTask;
