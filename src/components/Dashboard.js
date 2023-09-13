import React from "react";
import { Button } from "../styled/Button";
import { DashboardElement } from "../styled/Dashboard";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FilterListIcon from "@mui/icons-material/FilterList";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import List from "./List";

function Dashboard() {
  return (
    <DashboardElement>
      <div className="dashboard__buttons">
        <Button>
          All Task <BookmarkBorderIcon />
        </Button>
        <Button>
          Filter Task <FilterListIcon />
        </Button>
        <Button>
          Create Task <LibraryAddIcon />
        </Button>
      </div>
      <div className="dashboard__card">
        <List/>
        
      </div>
    </DashboardElement>
  );
}

export default Dashboard;
