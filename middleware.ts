import { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export function middleware(req: NextRequest) {
    return updateSession(req);
}