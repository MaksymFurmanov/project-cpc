import {createClient} from "@/lib/supabase/server";
import {ArticleType} from "@cpc/article-system";
import {Language} from "@cpc/languages";

export async function GET(req: Request,
                          {params}: { params: Promise<{ id: string }> }
) {
    const supabase = await createClient();

    const {id} = await params;

    const {data, error} = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return Response.json({error}, {status: 500});
    }

    return Response.json(data);
}

type UpdateArticleBody = {
    lang: Language,
    title: string,
    description: string,
    date: string,
    type: ArticleType,
    images: string[],
    published: boolean,
}

export async function POST(req: Request, {params}: {
    params: Promise<{ id: string }>
}) {
    const supabase = await createClient();
    const {id} = await params;

    const body: UpdateArticleBody = await req.json();

    const titleField = `title_${body.lang}`;
    const descriptionField = `description_${body.lang}`;

    const {data, error} = await supabase
        .from("articles")
        .update({
            [titleField]: body.title,
            [descriptionField]: body.description,

            date: body.date,
            type: body.type,
            images: body.images,
            published: body.published,
        })
        .eq("id", id)
        .select()
        .single();

    if (error) {
        return Response.json(
            {error: error.message},
            {status: 500}
        );
    }

    return Response.json(data);
}