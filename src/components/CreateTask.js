import React, { Component } from "react";
import { FormElement } from "../styled/Form";
import { TaskElement } from "../styled/CreateTask";
import { Button } from "../styled/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CreateTask extends Component {
  render() {
    return (
      <TaskElement>
        <FormElement>
          <input
            type="text"
            placeholder="Enter task title"
            //value={this.state.workName}
            onChange={this.handleInputChange}
            name="workName"
          />
          <input
            type="text"
            placeholder="Enter task description"
            //value={this.state.description}
            onChange={this.handleInputChange}
            name="description"
          />
          <input type="text" placeholder="Enter task status" />
          <Button onClick={this.addTodo}>Create task</Button>
        </FormElement>
      </TaskElement>
    );
  }
}

export default CreateTask;
