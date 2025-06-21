import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to the PLP Task Manager
      </h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
        Use the navigation bar to manage your tasks.
      </p>

      <Link
        to="/tasks"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Go to Task Manager
      </Link>
    </div>
  );
};

export default Home;
