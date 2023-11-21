"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../component/Navbar";
import React, { useState, useEffect } from "react";
const Slug = () => {
  const [blogs, setBlogs] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady || !router.query) return;

    const slug = router.query.slug;

    fetch(`/api/getblog?slug=${slug}`)
      .then((response) => response.json())
      .then((parsed) => {
        console.log("Fetched Data:", parsed);
        setBlogs(parsed);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [router.isReady, router.query]);

  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-between p-24">
        <div className="blogs">
          <div className="blogItem">
            <h1 className="text-4xl text-center font-bold leading-10">
              {/* Use optional chaining to safely access nested properties */}
              <p>Title : {blogs?.title}</p>
            </h1>
            <br />
            <p>{blogs?.content}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slug;
