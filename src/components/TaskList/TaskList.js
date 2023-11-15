import TaskCard from "../TaskCard/TaskCard";
import TaskForm from "../TaskForm";
import TaskFilter from "../TaskFilter";
import SearchBar from "../SearchBar";

import { Card, Container, Header } from 'semantic-ui-react';

function TaskList() {
  return (
    <div>
      <TaskForm />
      <SearchBar />
      <TaskFilter />
      <Container className="class-list-container">
        <Header as="h2">My Tasks</Header>
        <Card.Group centered>
          <TaskCard />
        </Card.Group>
      </Container>
    </div>
  );
}

export default TaskList;
