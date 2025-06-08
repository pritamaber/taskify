import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useTaskForm(mode, taskId) {
  const navigate = useNavigate();
  const isEdit = mode === "edit";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isEdit && taskId) {
      fetch(`https://api.impritam.com/api/tasks/${taskId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
          setIsCompleted(data.isCompleted);
        })
        .catch((err) => {
          console.error("Failed to load task:", err);
          toast.error("Error loading task.");
        });
    }
  }, [isEdit, taskId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.info("Fill all fields");
      return;
    }

    const taskData = { title, description, isCompleted };
    const url = isEdit
      ? `https://api.impritam.com/api/tasks/${taskId}`
      : "https://api.impritam.com/api/tasks";

    const method = isEdit ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`Task ${isEdit ? "updated" : "added"} successfully!`);
        navigate("/");
      })
      .catch((err) => {
        toast.error("Please try again.", err);
      });
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    isCompleted,
    setIsCompleted,
    handleSubmit,
    isEdit,
  };
}
