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
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    { message: "Hello World and high" },
    { status: 200 }
  );
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
