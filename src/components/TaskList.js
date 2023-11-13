import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

function TaskList() {
  return (
    <div>
      <p>this is the Task List</p>
      <TaskForm />
      <TaskCard />
    </div>
  );
}

export default TaskList;
