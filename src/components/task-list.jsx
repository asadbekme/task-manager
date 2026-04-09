import TaskItem from "./task-item";
import { Card } from "./ui/card";

const MOCK_TASKS = [
  { id: 1, title: "React komponentlar", priority: "high", isDone: true },
  { id: 2, title: "Props va Children", priority: "high", isDone: false },
  { id: 3, title: "Loyiha strukturasi", priority: "medium", isDone: false },
  { id: 4, title: "README yozish", priority: "low", isDone: false },
];

function TaskList() {
  const doneCount = MOCK_TASKS.filter((t) => t.isDone).length;
  const totalCount = MOCK_TASKS.length;

  const handleToggle = (id) => console.log("Toggle:", id);
  const handleDelete = (id) => console.log("Delete:", id);

  return (
    <Card
      title={`📋 Vazifalar (${doneCount}/${totalCount})`}
      footer={
        <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
          {totalCount - doneCount} ta vazifa qoldi
        </p>
      }
    >
      {MOCK_TASKS.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </Card>
  );
}

export default TaskList;
