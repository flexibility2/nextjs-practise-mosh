import { NextRequest, NextResponse } from "next/server";
import React from "react";

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
  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  } else {
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
  }
}
