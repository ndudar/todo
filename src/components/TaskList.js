import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";

function TaskList() {
  return (
    <div>
      <p>this is the Task List</p>
      <TaskForm />
      <TaskFilter />
      <TaskCard />
    </div>
  );
}

export default TaskList;
