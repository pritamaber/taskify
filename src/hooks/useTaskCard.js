import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function useTaskCard() {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("https://api.impritam.com/api/tasks");
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        setTaskData(data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);
  function handleDelete(taskId) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      fetch(`https://api.impritam.com/api/tasks/${taskId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to delete task");
          return response.json();
        })
        .then(() => {
          setTaskData((prevTasks) =>
            prevTasks.filter((task) => task._id !== taskId)
          );
        })
        .catch((error) => {
          console.error("❌ Error deleting task:", error);
        });

      toast.success(`Task deleted.`);
    }
  }
  return {
    taskData,
    loading,
    handleDelete,
  };
}
