import { NextResponse } from "next/server";
import * as fs from "fs/promises";

export async function GET(request) {
  try {
    const data = await fs.readdir("blogdata");
    let allBlogData = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const filePath = `blogdata/${item}`;

      const fileContent = await fs.readFile(filePath, "utf-8");

      allBlogData.push(JSON.parse(fileContent));
    }
    return NextResponse.json(allBlogData, { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "No such Page Found" }, { status: 500 });
  }
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
