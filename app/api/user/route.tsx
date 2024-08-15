import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

export async function GET(request: NextRequest) {
  // return NextResponse.json([
  //   { id: 1, name: "te" },
  //   { id: 2, name: "aa" },
  // ]);
  const res = await prisma.user.findMany();
  if (res) {
    return NextResponse.json(res);
  } else {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}
