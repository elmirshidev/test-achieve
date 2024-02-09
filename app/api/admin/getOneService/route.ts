import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import {revalidateTag} from "next/cache";

const basePath = process.env.BASE_PATH;

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
                // @ts-ignore
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


        const services = await db.connection
            .useDb("frontendData")
            .collection("services")
            // @ts-ignore
            .findOneAndUpdate({ _id: +id }, { $set: updatedData }, { returnOriginal: false });
        await revalidateTag("services");
        return NextResponse.json(services);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}