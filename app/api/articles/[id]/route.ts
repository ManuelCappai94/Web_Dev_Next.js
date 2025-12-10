export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { articles } from "@/data";

export async function GET(
     request: Request,
    { params }: { params: Promise <{ id: string }> }
){  
    const {id} = await params

    const article =  articles.find((a) => a.id.toString() === id);
    if (!article) {
    return NextResponse.json(
      { message: `Article with id ${id} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}
