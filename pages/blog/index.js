// "use client";
// // import css as this file is outside the app directory
// import "app/globals.css";
// import React, { use, useEffect, useState } from "react";
// import Link from "next/link";
// import Navbar from "../../app/component/Navbar";

// const Blogs = ({ blogsKey }) => {
//   // const [blogs, setBlogs] = useState([]);
//   console.log(blogsKey);
//   return (
//     <>
//       <Navbar />
//       <main className="flex flex-col items-center justify-between p-44">
//         <div className="blogs">
//           {blogsKey.map((blogItem) => (
//             <div className="blogItem mt-2 " key={blogItem.title}>
//               <Link href={`/blogpost/${blogItem.slug}`}>
//                 <h1 className="text-3xl pb-2 text-center leading-10">
//                   {blogItem.title}
//                 </h1>
//               </Link>
//               <p>{blogItem.content.substr(0, 220)} ........</p>
//               <p>Author: {blogItem.author}</p>
//               <div className=" flex justify-center ">
//                 {" "}
//                 <hr className=" w-[500px] border-dashed "></hr>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };
// export async function getServerSideProps() {
//   try {
//     const data = await fetch("http://localhost:3000/api/blogs");
//     const allBlog = await data.json();

//     return {
//       props: {
//         blogsKey: allBlog,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);

//     return {
//       props: {
//         blogsKey: null,
//       },
//     };
//   }
// }

// export default Blogs;

// chatgpt for conflict between serverside use and using export

// Import necessary modules
"use client";
import * as fs from "fs/promises";
import "app/globals.css";
import React from "react";
import Link from "next/link";
import Navbar from "../../app/component/Navbar";

// Define the Blogs component
const Blogs = ({ blogsKey }) => {
  console.log(blogsKey);
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-44">
        <div className="blogs">
          {blogsKey.map((blogItem) => (
            <div className="blogItem mt-2 " key={blogItem.title}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h1 className="text-3xl pb-2 text-center leading-10">
                  {blogItem.title}
                </h1>
              </Link>
              <p>{blogItem.content.substr(0, 220)} ........</p>
              <p>Author: {blogItem.author}</p>
              <div className=" flex justify-center ">
                {" "}
                <hr className=" w-[500px] border-dashed "></hr>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

// Define the getStaticProps function for static HTML export
export async function getStaticProps() {
  try {
    // const data = await fetch("http://localhost:3000/api/blogs");
    // const allBlog = await data.json();
    // replacing with logic as during build time it will not be able to fetch data from localhost
    const data = await fs.readdir("blogdata");
    let allBlogData = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const filePath = `blogdata/${item}`;

      const fileContent = await fs.readFile(filePath, "utf-8");

      allBlogData.push(JSON.parse(fileContent));
    }
    //  return NextResponse.json(allBlogData, { status: 200 });
    return {
      props: {
        blogsKey: allBlogData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        blogsKey: null,
      },
    };
  }
}

// Export the Blogs component as the default export
export default Blogs;
