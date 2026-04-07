import {ArticlePage, ArticleType, MultilingualArticle} from "../types";
import {supabase} from "../lib/supabaseClient";

const PAGE_SIZE = 3;

export async function getArticlesPage(
    type: ArticleType,
    page: number
): Promise<ArticlePage> {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const {data, error, count} = await supabase
        .from("articles")
        .select("*", {count: "exact"})
        .eq("type", type.toLowerCase())
        .order("date", {ascending: false})
        .range(from, to);

    if (error) throw new Error(error.message);

    return {
        articles: data as MultilingualArticle[],
        totalCount: count ?? 0
    };
}

export async function getArticleById(
    id: string
): Promise<MultilingualArticle | null> {
    const {data, error} = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("Error fetching article:", error);
        return null;
    }

    return data as MultilingualArticle;
}
