"use client";
import * as fs from "fs/promises";
import "../../../app/globals.css";
import Navbar from "../../../app/component/Navbar";
import React, { useState, useEffect } from "react";

const BlogPost = ({ blogsKey }) => {
  const [blogs, setBlogs] = useState(blogsKey);
  useEffect(() => {
    setBlogs(blogsKey);
  }, [blogsKey]);

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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "learn-javascript" } },
      { params: { slug: "learn-mongodb" } },
      { params: { slug: "learn-nextjs" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params || {};
  if (!slug) {
    console.error("Error: Slug is missing from the request");
    return {
      notFound: true,
    };
  }

  console.log("sluggggggggggggs", slug);
  try {
    // .... (your existing code)

    // Check if slug is missing
    if (!slug) {
      console.error("Error: Slug is missing from the request");
      return NextResponse.json(
        { error: "Slug is missing from the request" },
        { status: 400 }
      );
    }

    const filePath = `blogdata/${slug}.json`;

    // ... (continue with your existing code)

    const fileContent = await fs.readFile(filePath, "utf-8");

    const blogData = JSON.parse(fileContent);

    return {
      props: {
        blogsKey: blogData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {},
    };
  }
}

export default BlogPost;
