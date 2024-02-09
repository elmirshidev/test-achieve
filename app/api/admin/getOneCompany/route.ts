import {NextRequest, NextResponse} from "next/server";
import dbConnect from "@/lib/mongodb";
import {revalidateTag} from "next/cache";



export async function GET(req: NextRequest) {
    try {
        let db = await dbConnect();

        let companies;

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (id) {
            companies = await db.connection
                .useDb("frontendData")
                .collection("companies")
                // @ts-ignore
                .findOne({ _id: +id });

            if (!companies) {
                return NextResponse.json(
                    { error: "Company not found" },
                    { status: 404 }
                );
            }
        }

        return NextResponse.json(companies);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function POST(req:NextRequest) {
    try {
        let db = await dbConnect();
        const newCompany = await req.json();

        const documents = await db.connection.useDb("frontendData").collection("companies").find().toArray();
        // @ts-ignore
        newCompany._id = documents.length !== 0 ? documents[documents.length - 1]._id + 1 : 1;
        const companies = await db.connection
            .useDb("frontendData")
            .collection("companies")
            .insertOne(newCompany);
        await revalidateTag("companies");
        return NextResponse.json(companies);
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

        const companies = await db.connection
            .useDb("frontendData")
            .collection("companies")
            // @ts-ignore
            .findOneAndUpdate({ _id: +id }, { $set: updatedData }, { returnOriginal: false });
        await revalidateTag("companies");
        return NextResponse.json(companies);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
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



        const companies = await db.connection
            .useDb("frontendData")
            .collection("companies")
            // @ts-ignore
            .findOneAndDelete({ _id: +id }, { returnOriginal: false });

        const deletedDocument = companies.value ? companies.value.toJSON() : null;

        await revalidateTag("companies");

        return NextResponse.json(deletedDocument);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}