import {languages} from "../utils";

export type LanguageOption = {
    label: string,
    flagImg: string,
    systemName: string
}

type LanguagesObject = (typeof languages)[number];
export type Language = LanguagesObject["systemName"];