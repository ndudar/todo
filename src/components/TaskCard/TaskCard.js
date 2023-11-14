import { Card, Icon } from "semantic-ui-react";
import './TaskCard.css';

function TaskCard() {
  return (
    <div className="centered-container">
      <Card className="task-card">
        <Card.Content>
          <Card.Header>Task Card Title</Card.Header>
          <Card.Meta>
            <span>Due: Today</span>
          </Card.Meta>
          <Card.Description>This is the task description.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="tag" />
          Tag Here
          <br />
          <Icon name="user" />
          User Assigned
          <br />
          <Icon name="flag" />
          Status Flag
        </Card.Content>
      </Card>
    </div>
  );
}

export default TaskCard;
