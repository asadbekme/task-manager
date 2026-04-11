import TaskItem from "./task-item";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            padding: "40px 0",
          }}
        >
          Vazifalar yo'q. Yangi vazifa qo'shing! ☝️
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
