import TaskForm from "../components/TaskForm";

function AddTask() {
  return (
    <div>
      <TaskForm mode="add" taskId={null} />
    </div>
  );
}

export default AddTask;
