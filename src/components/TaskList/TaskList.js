import TaskCard from "../TaskCard/TaskCard";
import TaskForm from "../TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import SearchBar from "../SearchBar";
import Notification from "../Notification/Notification";

import { Card, Container, Header } from "semantic-ui-react";

import "./TaskList.css";

function TaskList() {
  return (
    <div className="task-list-container">
      <div className="task-list-main">
        <SearchBar />
        <TaskFilter />
        <Container>
          <Header as="h2">My Tasks</Header>
          <Card.Group centered>
            <TaskCard />
          </Card.Group>
        </Container>
      </div>
      <div className="task-list-sidebar">
        <TaskForm />
        <Notification content={"this is a success message"} type={"success"} />
        <Notification content={"this is an error message"} type={"error"} />
      </div>
    </div>
  );
}

export default TaskList;
