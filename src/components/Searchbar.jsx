import React from "react";

function Searchbar() {
  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search tasks"
      />
    </div>
  );
}

export default Searchbar;
