// NewTask.js
import React, { useState } from "react";
import { Button } from "../styled/Button";
import { FormElement } from "../styled/Form";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function NewTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const user = JSON.parse(localStorage.getItem("user")).user.email;
  const token = JSON.parse(localStorage.getItem("user")).token;
  const csrfToken = "{% csrf_token %}";

  const addNewTask = (event) => {
    const apiUrl = "http://127.0.0.1:8000/api/todos/item/";
    let originalDate = selectedDate.toLocaleDateString("en-US");
    originalDate = originalDate.replace(/\//g, "-");

    function formatDate(originalDate) {
      const parts = originalDate.split("-");
      if (parts.length === 3) {
        const [month, day, year] = parts;
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      } else {
        return originalDate;
      }
    }

    const formattedDate = formatDate(originalDate);

    const data = {
      title: taskTitle,
      completed: taskStatus,
      due_date: formattedDate,
      user: user,
    };

    axios
      .post(apiUrl, data, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
           Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const DatePickerComponent = () => {
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return <DatePicker selected={selectedDate} onChange={handleDateChange} />;
  };

  return (
    <FormElement id="submit-form-id">
      <input
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <select
        id="taskStatus"
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="true">Completed</option>
        <option value="false">Uncompleted</option>
      </select>

      <DatePickerComponent />
      <Button onClick={addNewTask}>
        Create Task <LibraryAddIcon />
      </Button>
    </FormElement>
  );
}
