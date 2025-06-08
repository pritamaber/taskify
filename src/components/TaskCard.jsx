import { Link } from "react-router-dom";
import useTaskCard from "../hooks/useTaskCard";
import LoadingSpinner from "../components/LaodingSpinner";

function TaskCard() {
  const { taskData, loading, handleDelete } = useTaskCard();
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">📋 Taskify</h2>
        <Link
          to="/add-task"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Add Task
        </Link>
      </div>

      {/* Task List */}
      {loading ? (
        <LoadingSpinner />
      ) : taskData.length > 0 ? (
        <ul className="space-y-4">
          {taskData.map((task) => (
            <li
              key={task._id}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:shadow-sm transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium text-gray-800">
                  {task.title}
                </h3>
                <div className="flex gap-2">
                  <Link
                    to={`/edit-task/${task._id}`}
                    className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600 transition"
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(task._id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{task.description}</p>
              <p
                className={`text-sm font-medium mt-2 ${
                  task.isCompleted ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {task.isCompleted ? "✅ Completed" : "⏳ Incomplete"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No tasks available.</p>
      )}
    </div>
  );
}

export default TaskCard;
