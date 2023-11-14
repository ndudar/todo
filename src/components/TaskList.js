import TaskCard from "./TaskCard/TaskCard";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";
import SearchBar from "./SearchBar";

function TaskList() {
  return (
    <div>
      <p>this is the Task List</p>
      <TaskForm />
      <SearchBar />
      <TaskFilter />
      <TaskCard />
    </div>
  );
}

export default TaskList;
