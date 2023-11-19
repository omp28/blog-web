import Navbar from "../../component/Navbar";
import React from "react";

const Slug = ({ params }) => {
  const slug = params.slug;
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-between p-24">
        <div className="blogs">
          {/* 1 */}
          <div className="blogItem">
            <h1 className="text-4xl text-center font-bold leading-10">
              <p> {slug}</p>
            </h1>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              adipisci dolor totam, ad laborum delectus rerum asperiores ipsa
              facere expedita hic mollitia animi quas saepe doloribus eaque quos
              provident ducimus excepturi odio? Exercitationem deleniti,
              repellendus iste vero doloribus debitis dicta voluptas temporibus
              quisquam, nesciunt quasi.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slug;
