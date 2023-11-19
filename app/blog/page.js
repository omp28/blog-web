import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <div className="blogs">
          {/* 1 */}
          <div className="blogItem">
            <Link href="/blogpost/learn-javascript">
              <h1 className="text-2xl text-center leading-10">
                How to learn JavaScript?
              </h1>
            </Link>
            <p>JavaScript is used to add functionality to websites.</p>
          </div>
          {/* 2 */}
          <div className="blogItem">
            <h1 className="text-2xl text-center leading-10">
              How to learn React?
            </h1>
            <p>JavaScript is used to add functionality to websites.</p>
          </div>
          {/* 3 */}
          <div className="blogItem">
            <h1 className="text-2xl text-center leading-10">
              How to learn React?
            </h1>
            <p>JavaScript is used to add functionality to websites.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
