import styles from "@/features/articles/articles.module.css";
import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabase/server";
import LogOut from "@/features/auth/LogOut";
import ArticlesByType from "@/features/articles/ArticlesByType";

export default async function ArticlesPage() {
    const supabase = await createClient();

    const {data: {user}} = await supabase.auth.getUser();

    if (!user) redirect('/login');

    const {data: profile} = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

    if (profile?.role !== 'admin') {
        redirect('/');
    }

    return (
        <main className={styles.articles}>
            <LogOut/>

            <h1>
                Članky
            </h1>

            <ArticlesByType/>
        </main>
    );
}