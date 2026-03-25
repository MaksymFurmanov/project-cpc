import { createClient } from "@/lib/supabase/server";

export async function GET() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("date", { ascending: false });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
}

export async function POST() {

}