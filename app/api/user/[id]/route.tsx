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
