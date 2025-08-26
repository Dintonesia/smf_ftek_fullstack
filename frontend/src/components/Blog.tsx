"use client";

import React, { useEffect, useState } from "react";

interface BlogPost {
  _id: string;
  author: { _id: string; name?: string };
  title: string;
  visibilty: boolean;
  banner?: string;
  tags: string[];
  description?: string;
  content?: string;
  createdAt: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/blog");
        const data = await res.json();
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">SMF Times</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8">
          {/* Featured Blogs (first 2) */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  {post.banner ? (
                    <img
                      src={`${post.banner}`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full"></div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-700">
                      {post.author?.name || "Anonymous"}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Rest of Blogs */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(2).map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  {post.banner ? (
                    <img
                      src={`${post.banner}`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full"></div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium text-gray-700">
                      {post.author?.name || "Anonymous"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex gap-1 flex-wrap">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
