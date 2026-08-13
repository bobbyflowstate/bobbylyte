import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    let payload: Record<string, unknown> = {};

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        payload[key] = value;
      });
    }

    console.log("Booking enquiry payload:", payload);

    return NextResponse.json({
      success: true,
      message: "Signal received. I'll come back to you within two days.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process booking enquiry" },
      { status: 400 }
    );
  }
}
