// NewTask.js
import React, { useState } from "react";
import { Button } from "../styled/Button";
import { FormElement } from "../styled/Form";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function NewTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() === "" || taskStatus.trim() === "") {
      alert("Please fill in both task title and task status.");
      return;
    }

    const storedData = localStorage.getItem("user");
    const storedObject = JSON.parse(storedData);
    const username = storedObject.username;
    
    const newTask = {
      userId: username,
      id: Date.now(), // Use a timestamp as a unique ID
      title: taskTitle,
      completed: taskStatus.toLowerCase() === "completed", // Convert status to boolean
    };

    const existingTasks = JSON.parse(localStorage.getItem("todosList")) || [];
    const updatedTasks = [...existingTasks, newTask];
    localStorage.setItem("todosList", JSON.stringify(updatedTasks));

    // Clear input fields
    setTaskTitle("");
    setTaskStatus("");
  };

  return (
    <FormElement>
      <input
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input
        placeholder="Enter task status (completed/uncompleted)"
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
      />
      <Button onClick={handleAddTask}>
        Create Task <LibraryAddIcon />
      </Button>
    </FormElement>
  );
}

export default NewTask;
