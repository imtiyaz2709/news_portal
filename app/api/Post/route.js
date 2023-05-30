import connectDb from "@/middleware/connectDb"
import Post from "@/models/Post"
import { NextResponse,NextRequest } from "next/server"


export async function GET(request){
    await connectDb();
    let data = await Post.find()
    return NextResponse.json({data})
} 


export async function POST(request){
    try{
            await connectDb(); 
            let records = await request.json()
            let data =   Post.create(records)

        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":e})
    }
} 

