import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { User } from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, params: Props) {
  // if (params.params.id > 10) {
  //   return NextResponse.json({ error: "id is too large" });
  // } else {
  //   return NextResponse.json({ id: params.params.id, name: "te" });
  // }
  const res = await prisma.user.findUnique({
    where: {
      id: parseInt(params.params.id),
    },
  });
  if (res) {
    return NextResponse.json(res);
  } else {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = User.safeParse(body);
  if (res.error) {
    return NextResponse.json(res.error.errors, { status: 400 });
  } else {
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
  }
}

export async function PUT(request: NextRequest, params: Props) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.params.id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  } else {
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        name: body.name,
        email: body.email,
      },
    });
    return NextResponse.json(updatedUser);
  }
}

export async function DELETE(request: NextRequest, params: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.params.id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: "not found user" }, { status: 404 });
  }
  const res = await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
