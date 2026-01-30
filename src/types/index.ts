export type Activity = {
    id: string,
    titleEN: string,
    titleSK: string,
    titleUA: string,
    descriptionSK: string,
    descriptionUA: string,
    descriptionEN: string,
    date: string,
    showDate: boolean,
    images: string[],
}

export type ActivitiesPage = {
    activities: Activity[],
    nextOffset?: string
}