import {NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";
export async function GET() {
    try {
        let db = await dbConnect();
        const customerTestimonials = await db.connection.useDb("frontendData").collection("customerTestimonials").find({}).toArray();
        return NextResponse.json(customerTestimonials)
    } catch (e) {
        return NextResponse.json(e, { status: 500 });
    }
}