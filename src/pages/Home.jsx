import TaskCard from "../components/TaskCard";
import Searchbar from "../components/Searchbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🚀 Taskify
      </h1>

      <div className="mb-6">
        <Searchbar />
      </div>

      <div className="max-w-3xl mx-auto">
        <TaskCard />
      </div>
    </div>
  );
}

export default Home;
