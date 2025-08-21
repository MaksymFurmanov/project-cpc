import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const importAllNs = (r) => {
    return r.keys().reduce((acc, file) => {
        const ns = file
            .replace("./", "")
            .replace(".json", "");
        acc[ns] = r(file);
        return acc;
    }, {});
}

const resources = {
    en: importAllNs(require.context("./en", false, /\.json$/)),
    sk: importAllNs(require.context("./sk", false, /\.json$/)),
    ua: importAllNs(require.context("./ua", false, /\.json$/)),
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ua",
    fallbackLng: "en",
    ns: Object.keys(resources.en),

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
