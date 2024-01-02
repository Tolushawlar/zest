import React, { useEffect, useState } from "react";
import { ListView } from "../styled/List";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../Store/TodoSlice";

function getTodoList() {
  let todoList = localStorage.getItem("todos");
  if (todoList) {
    todoList = JSON.parse(todoList);
  } else {
    todoList = [];
  }
  return todoList;
}

const List = () => {
  const [todos, setTodos] = useState(getTodoList());
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleRemoveRedEyeClick = (todo) => {
    setSelectedTodo(todo);
    setShowDetails(!showDetails);
  };

  const trimText = (text) => {
    if (typeof text === "string") {
      return text.length > 50 ? text.slice(0, 30) + "..." : text;
    } else {
      return "";
    }
  };

  return (
    <ListView>
      {todos.length > 0 ? (
        <>
          {todos.map((item) => (
            <div className="listView__list " key={item.id}>
              <p>{trimText(item.title)}</p>
              <p>{item.completed}</p>
              <RemoveRedEyeIcon
                onClick={() => handleRemoveRedEyeClick(item)}
                style={{ color: "blue" }}
              />
              <EditNoteIcon style={{ color: "green" }} />
              <DeleteSweepIcon style={{ color: "red" }} />
            </div>
          ))}
        </>
      ) : (
        <p>You Have Not Created Any Todo's</p>
      )}
      {showDetails && selectedTodo && (
        <div className="listView__details">
          <p>{selectedTodo.title}</p>
          <p>{selectedTodo.due_date}</p>
          <p>
            {selectedTodo.completed.toString() ? "Completed" : "Uncomplete"}
          </p>
        </div>
      )}
    </ListView>
  );
};

export default List;
