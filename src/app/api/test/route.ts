import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    console.log("Hello World")
    return NextResponse.json({
        hello: "world",
    })
}   