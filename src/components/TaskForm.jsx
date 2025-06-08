import useTaskForm from "../hooks/useTaskForm";

function TaskForm({ mode, taskId }) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    isCompleted,
    setIsCompleted,
    handleSubmit,
    isEdit,
  } = useTaskForm(mode, taskId);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        {isEdit ? "✏️ Edit Task" : "📝 Add New Task"}
      </h1>

      <form
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-200"
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-200"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700">
              {isCompleted ? "✅ Completed" : "⏳ Incomplete"}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isEdit ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
