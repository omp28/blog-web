"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../component/Navbar";
import React, { useState, useEffect } from "react";

const BlogPost = ({ params: { slug } }) => {
  const [blogs, setBlogs] = useState();
  const router = useRouter();
  console.log(slug);

  useEffect(() => {
    fetch(`/api/getblogs?slug=${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((parsed) => {
        console.log("Fetched Data:", parsed);
        setBlogs(parsed);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Check if router is not ready or query is not available yet

  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-between p-24">
        <div className="blogs">
          {blogs ? (
            <div className="blogItem">
              <h1 className="text-4xl text-center font-bold leading-10">
                <p>Title: {blogs.title}</p>
              </h1>
              <br />
              <p>{blogs.content}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
