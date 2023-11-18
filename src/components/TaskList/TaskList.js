import TaskCard from "../TaskCard/TaskCard";
import TaskForm from "../TaskForm";
import TaskFilter from "../TaskFilter";
import SearchBar from "../SearchBar";

import { Card, Container, Header } from 'semantic-ui-react';

import './TaskList.css';

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
      <div className="task-list-sidebar">
      <TaskForm />
      </div>
      </div>
    </div>
  );
}

export default TaskList;
