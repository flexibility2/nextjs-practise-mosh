import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { User } from "./schema";

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

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validateRes = User.safeParse(body);
  if (!validateRes.success) {
    return NextResponse.json(validateRes.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
