import {createClient} from "@/lib/supabase/server";

export async function GET(req: Request, {params}: {
    params: { id: string }
}) {
    const supabase = await createClient();

    const id = params.id;

    const {data, error} = await supabase
        .from("articles")
        .select("*")
        .eq("id", id);

    if (error) {
        return Response.json({error}, {status: 500});
    }

    return Response.json(data);
}

export async function POST(req: Request, {params}: {
    params: Promise<{ id: string }>
}) {
    const supabase = await createClient();

    const {id} = await params;

    const body = await req.json();

    console.log("id:", id, "body.text:", body.text);

    const field = "description_" + body.lang;

    const {data, error} = await supabase
        .from("articles")
        .update({[field]: body.text})
        .eq("id", id)
        .select()
        .single();

    if (error) {
        return Response.json({error: error}, {status: 500});
    }

    return Response.json(data);
}