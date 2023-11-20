import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ name: "this is home page " }, { status: 200 });
}

export async function POST(request) {
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
