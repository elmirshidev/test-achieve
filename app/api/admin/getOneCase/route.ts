import {NextRequest, NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";

export async function GET(req: NextRequest) {
    try {
        let db = await dbConnect();

        let cases;

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (id) {
            cases = await db.connection
                .useDb("frontendData")
                .collection("cases")
                // @ts-ignore
                .findOne({ _id: +id });

            if (!cases) {
                return NextResponse.json(
                    { error: "Case not found" },
                    { status: 404 }
                );
            }
        }

        return NextResponse.json(cases);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function POST(req:NextRequest) {
    try {
        let db = await dbConnect();
        const newCase = await req.json();

        const documents = await db.connection.useDb("frontendData").collection("cases").find().toArray();
        // @ts-ignore
        newCase._id = documents.length !== 0 ? documents[documents.length - 1]._id + 1 : 1;
        const cases = await db.connection
            .useDb("frontendData")
            .collection("case")
            .insertOne(newCase);
        await fetch("http://localhost:3000/api/revalidate?tag=cases");
        return NextResponse.json(cases);
    } catch (e) {
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

        const cases = await db.connection
            .useDb("frontendData")
            .collection("cases")
            // @ts-ignore
            .findOneAndUpdate({ _id: +id }, { $set: updatedData }, { returnOriginal: false });
        await fetch("http://localhost:3000/api/revalidate?tag=cases");
        return NextResponse.json(cases);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}