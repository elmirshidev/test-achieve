import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

export async function GET(req: NextRequest) {
    try {
        let db = await dbConnect();
        // const services = await db.connection.useDb("frontendData").collection("services").findOne({_id:1});

        let services;

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (id) {
            services = await db.connection
                .useDb("frontendData")
                .collection("services")
                .findOne({ _id: +id });

            if (!services) {
                return NextResponse.json(
                    { error: "Service not found" },
                    { status: 404 }
                );
            }
        }

        return NextResponse.json(services);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function PUT(req: NextRequest) {
    try {
        let db = await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 }
            );
        }

        const updatedData = await req.json();
        console.log(updatedData);
        const services = await db.connection
            .useDb("frontendData")
            .collection("services")
            .findOneAndUpdate({ _id: +id }, { $set: updatedData }, { returnOriginal: false });
        await fetch("http://localhost:3000/api/revalidate?tag=services");
        return NextResponse.json(services);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}