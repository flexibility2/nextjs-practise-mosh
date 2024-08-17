import React from "react";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const toekn = await getToken({ req: request });
  return NextResponse.json(toekn);
}
