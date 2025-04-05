import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Submission from "@/models/Submission";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await dbConnect();
    const newSubmission = await Submission.create(data);

    return NextResponse.json({ success: true, data: newSubmission });
  } catch (error) {
    console.error("Error saving to DB:", error);
    return NextResponse.json({ success: false, error: "Failed to save" });
  }
}
