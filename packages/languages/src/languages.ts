import enFlag from "./assets/en.webp";
import skFlag from "./assets/sk.webp";
import uaFlag from "./assets/ua.webp";

import type { LanguageOption } from "./types";

export const languages: LanguageOption[] = [
    {
        label: "SK",
        flagImg: skFlag.src,
        systemName: "sk",
    },
    {
        label: "EN",
        flagImg: enFlag.src,
        systemName: "en",
    },
    {
        label: "UA",
        flagImg: uaFlag.src,
        systemName: "uk",
    },
];