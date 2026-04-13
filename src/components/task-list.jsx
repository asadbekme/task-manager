import TaskItem from "./task-item";

function TaskList({ filteredTasks, search, toggleTask, deleteTask }) {
  return (
    <div>
      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#9ca3af", padding: "32px 0" }}>
          {search
            ? `"${search}" bo'yicha hech narsa topilmadi 🔍`
            : "Vazifalar yo'q ☝️"}
        </p>
      ) : (
        filteredTasks.map((task) => (
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
