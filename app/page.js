import Link from "next/link";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex  flex-col items-center justify-between p-24">
        <img className=" rounded-md mb-20" src="./homeimg.avif" alt="" />
        <div className="blogs">
          <div className="blogItem">
            <h1 className=" text-2xl text-center leading-10 ">
              how to learn react ?
            </h1>
            <p>javascipt is used to add functionality in website</p>
          </div>
          <div className="blogItem">
            <h1 className=" text-2xl text-center leading-10 ">
              how to learn react ?
            </h1>
            <p>javascipt is used to add functionality in website</p>
          </div>
          <div className="blogItem">
            <h1 className=" text-2xl text-center leading-10 ">
              how to learn react ?
            </h1>
            <p>javascipt is used to add functionality in website</p>
          </div>
        </div>
      </main>
    </>
  );
  ui;
}
