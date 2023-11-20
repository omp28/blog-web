import { NextResponse } from "next/server";
import * as fs from "fs/promises";

export async function GET(request) {
  // next 2 line dont know what is doing
  const queryParams = new URL(request.url).searchParams;
  const slug = queryParams.get("slug");

  try {
    const data = await fs.readFile(`blogdata/${slug}.json`, "utf8");
    console.log("Data:", JSON.parse(data));
    return NextResponse.json(JSON.parse(data), { status: 200 });
  } catch (err) {
    console.log("No such Page Found:", err.message);
    return NextResponse.json({ error: "No such Page Found:" }, { status: 500 });
  }
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
