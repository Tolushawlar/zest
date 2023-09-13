import React from "react";
import { ListView } from "../styled/List";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function List() {
  return (
    <ListView>
      <div className="listView__list">
        <p>Create the content for the page</p>
        <p>12-04-2023</p>
        <p>In progress</p>
        <RemoveRedEyeIcon style={{ color: "blue" }} />
        <EditNoteIcon style={{ color: "green" }} />
        <DeleteSweepIcon style={{ color: "red" }} />
      </div>
      <div className="listView__details">
        <p>Create the content for the page</p>
        <p>12-04-2023</p>
        <p>In progress</p>
      </div>
    </ListView>
  );
}

export default List;
