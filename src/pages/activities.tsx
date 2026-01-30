import styles from "./pages.module.css";
import {useTranslation} from "react-i18next";
import ActivitiesList from "../components/activities/activities-list";
import ActivitiesListLoading from "../components/skeletons/activities-list-loading";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";

export default function Activities() {
    const {t} = useTranslation(["activities"]);

    return (
        <div>
            <h1 className={styles.pageTitle}>
                {t("pageTitle")}
            </h1>

            <ErrorBoundary fallback={<div></div>}>
                <Suspense fallback={<ActivitiesListLoading/>}>
                    <ActivitiesList/>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}