import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  return <TaskForm mode="edit" taskId={id} />;
}
