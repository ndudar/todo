import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import "./TaskFilter.css";

function TaskFilter() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e, { value }) => {
    setSelectedFilter(value);
    // Add logic to handle the filter change (e.g., update the displayed tasks)
  };

  const filterOptions = [
    { key: "all", text: "All Tasks", value: "" },
    { key: "todo", text: "To-Do", value: "todo" },
    { key: "inProgress", text: "In Progress", value: "inProgress" },
    { key: "completed", text: "Completed", value: "completed" },
  ];

  return (
    <div className="task-filter">
      <Dropdown
        placeholder="Filter by Status"
        selection
        options={filterOptions}
        value={selectedFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default TaskFilter;
