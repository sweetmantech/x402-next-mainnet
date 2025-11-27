import { NextResponse } from "next/server";

/**
 * GET handler for image generation endpoint.
 *
 * @returns {Promise<NextResponse>} JSON response with weather report data.
 */
export async function GET() {
  return NextResponse.json({
    report: {
      weather: "sunny",
      temperature: 70,
    },
  });
}
