import { NextResponse } from "next/server";

export async function GET() {
  // Production Hygiene: Structured logging simulation
  console.log(JSON.stringify({
    level: "info",
    timestamp: new Date().toISOString(),
    event: "health_check",
    status: "ok"
  }));

  return NextResponse.json(
    { 
      status: "ok", 
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
