import { useState } from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";

function TaskForm() {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: '',
    assignedTo: '',
  });

  const handleChange = (e, { name, value }) => {
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission (you can add your logic here)
    console.log('Form submitted:', taskData);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field
          control={Input}
          label="Title"
          placeholder="Enter task title"
          name="title"
          value={taskData.title}
          onChange={handleChange}
        />
        <Form.Field
          control={TextArea}
          label="Description"
          placeholder="Enter task description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          label="Due Date"
          placeholder="Enter due date"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          label="Category"
          placeholder="Enter task category"
          name="category"
          value={taskData.category}
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          label="Assigned To"
          placeholder="Enter assigned user"
          name="assignedTo"
          value={taskData.assignedTo}
          onChange={handleChange}
        />
        <Button type="submit" color="blue">
          Add Task
        </Button>
      </Form>
    </div>
  );
}

export default TaskForm;
