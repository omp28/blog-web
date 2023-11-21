"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-44">
        <div className="blogs">
          {blogs.map((blogItem) => (
            <div className="blogItem" key={blogItem.title}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h1 className="text-2xl text-center leading-10">
                  {blogItem.title}
                </h1>
              </Link>
              <p>{blogItem.content.substr(0, 220)} ........</p>
              <p>Author: {blogItem.author}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blogs;
