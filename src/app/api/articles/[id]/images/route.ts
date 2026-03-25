import {NextRequest, NextResponse} from "next/server";
import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import {randomUUID} from "crypto";

const BUCKET = process.env.AWS_BUCKET_NAME!;
const REGION = process.env.AWS_REGION!;

const s3 = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function POST(req: NextRequest,
                           context: { params: Promise<{ id: string }> }
) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({error: "No file found"}, {status: 400});
        }

        const { id: articleId } = await context.params;
        const buffer = Buffer.from(await file.arrayBuffer());
        const name = file.name.split(".").pop();
        const key = `articles/${articleId}/${randomUUID()}.${name}`;

        const command = new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: buffer,
            ContentType: file.type,
        });

        await s3.send(command);

        const fileUrl = `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;

        return NextResponse.json({url: fileUrl});

    } catch (error) {
        console.error("Upload failed:", error);
        return NextResponse.json(
            {error: "Upload failed"}, {status: 500}
        );
    }
}

export async function DELETE(req: NextRequest,
                             context: { params: Promise<{ id: string }> }
) {
    try {
        const {url} = await req.json();

        if (!url) {
            return NextResponse.json(
                {error: "No URL provided"}, {status: 400}
            );
        }

        const baseUrl = `https://${BUCKET}.s3.${REGION}.amazonaws.com/`;
        const key = url.replace(baseUrl, "");

        const command = new DeleteObjectCommand({
            Bucket: BUCKET,
            Key: key,
        });

        await s3.send(command);

        return NextResponse.json({success: true});

    } catch (error) {
        console.error("Delete failed:", error);
        return NextResponse.json(
            {error: "Delete failed"}, {status: 500}
        );
    }
}