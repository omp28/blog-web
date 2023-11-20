// import { NextResponse } from "next/server";

// export async function GET(request) {
//   return NextResponse.json(
//     { message: "Hello World and high" },
//     { status: 200 }
//   );
// }
// export async function POST(request) {
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// **********************************

// export default function handler(req, res) {
//   res.status(200).json({ name: "om" });
// }

// **************************************
// import { NextResponse } from "next/server";
// import * as fs from "fs/promises";

// export async function GET(request) {
//   return NextResponse.json(
//     const data =fs.readFile("blogdata/learn-javascript.json", "utf8");
//       (err, data)=>{
// console.log(data)
//     }
//   )
//   );

// export async function POST(request) {
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// *******************************
// import { NextResponse } from "next/server";
// import * as fs from "fs/promises";

// export async function getHandler(request) {
//   const data = await fs.readFile("blogdata/learn-javascript.json", "utf8");
//   console.log(data);

//   return NextResponse.json({ data }, { status: 200 });
// }

// export async function postHandler(request) {
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// ************************************
import { NextResponse } from "next/server";
import * as fs from "fs/promises";

export async function GET(request) {
  const data = await fs.readFile("blogdata/learn-javascript.json", "utf8");
  console.log(JSON.parse(data));

  return NextResponse.json(JSON.parse(data), { status: 200 });
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
