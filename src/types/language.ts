import {languages} from "../utils";

type LanguageObject = (typeof languages)[number];
export type Language = LanguageObject["systemName"];