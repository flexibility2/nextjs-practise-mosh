import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { User } from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, params: Props) {
  if (params.params.id > 10) {
    return NextResponse.json({ error: "id is too large" });
  } else {
    return NextResponse.json({ id: params.params.id, name: "te" });
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
  if (params.params.id > 10) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  } else {
    return NextResponse.json({ id: params.params.id, name: body.name });
  }
}

export async function DELETE(request: NextRequest, params: Props) {
  if (params.params.id > 10) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  } else {
    return NextResponse.json({});
  }
}
