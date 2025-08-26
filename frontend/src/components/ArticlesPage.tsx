import { useNavigate } from "react-router-dom";

export default function ArticlesPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Articles</h1>
        <div className="h-px bg-border mt-4"></div>
      </div>
      <div className="max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Your Articles</h2>
          <button
            onClick={() => navigate("/dashboard/articles/create")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            Create Article
          </button>
        </div>

        <div className="grid gap-4">
          {/* Example article card */}
          <div className="border border-border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Getting Started with React</h3>
                <p className="text-sm text-muted-foreground">
                  Published • March 10, 2024
                </p>
                <p className="text-sm mt-2">
                  A comprehensive guide to building your first React application
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/dashboard/articles/1/edit")}
                  className="px-3 py-1 text-sm border border-border rounded"
                >
                  Edit
                </button>
                <button className="px-3 py-1 text-sm text-red-600 border border-red-200 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
