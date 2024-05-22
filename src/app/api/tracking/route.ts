import { NextRequest, NextResponse } from "next/server";

import { apiEndpoints } from "@/constant/endpoints";
import { apiServer } from "@/services/api";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code') as string;

    const api = await apiServer();
    const response = await api.get(apiEndpoints.getCode(code));

    return NextResponse.json(response.data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    return NextResponse.json({ status }, { status });
  }
}
