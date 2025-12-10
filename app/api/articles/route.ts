import {articles} from "@/data"
import { NextResponse } from "next/server"

//endpoint

export async function GET(){
    return NextResponse.json(articles);
}