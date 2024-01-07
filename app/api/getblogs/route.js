// import * as fs from "fs";

// export default function handler(req, res) {
//   fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
//     if (err) {
//       res.status(500).json({ error: "No such blog found" });
//       console.error(err); // Log the error for debugging purposes
//     } else {
//       console.log(req.query.slug);
//       res.status(200).json(JSON.parse(data));
//     }
//   });
// }

// ****************************************************8
import { NextResponse } from "next/server";
import * as fs from "fs/promises";

export async function GET(request) {
  try {
    console.log("aakash");

    // Print the search parameter
    console.log("Search Parameters:", request.query);

    // Parse query parameters from the URL
    const queryParams = request.nextUrl.searchParams;
    const slug = queryParams.get("slug");
    // Check if slug is missing
    if (!slug) {
      console.error("Error: Slug is missing from the request");
      return NextResponse.json(
        { error: "Slug is missing from the request" },
        { status: 400 }
      );
    }

    const filePath = `blogdata/${slug}.json`;

    const fileContent = await fs.readFile(filePath, "utf-8");

    const blogData = JSON.parse(fileContent);

    return NextResponse.json(blogData, { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "No such blog found" }, { status: 500 });
  }
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
