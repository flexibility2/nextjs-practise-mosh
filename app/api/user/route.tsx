import { NextRequest, NextResponse } from "next/server";
import React from "react";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "te" },
    { id: 2, name: "aa" },
  ]);
}
