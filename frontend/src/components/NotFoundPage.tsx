import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white-900 text-black">
      <h1 className="text-6xl font-bold mb-4">404 ❌</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to={"/"}>
        <button className="px-6 py-3 bg-amber-200 hover:bg-amber-400 rounded-lg shadow-lg text-black font-medium transition duration-200">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
