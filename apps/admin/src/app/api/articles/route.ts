import {createClient} from "@/lib/supabase/server";

export async function GET(req: Request) {
    const supabase = await createClient();

    const {searchParams} = new URL(req.url);
    const type = searchParams.get("type");

    const {data, error} = await supabase
        .from("articles")
        .select("*")
        .eq("type", type)
        .eq("published", true)
        .order("date", {ascending: false});

    if (error) {
        return Response.json({error}, {status: 500});
    }

    return Response.json(data);
}