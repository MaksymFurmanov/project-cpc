import axios from "axios";
import {ActivitiesPage, Activity} from "../types";

const AIRTABLE_BASE_ID = "appynslm7UcLg6XZ4";
const AIRTABLE_TABLE_NAME = "Events";
const APP_MODE = process.env.REACT_APP_APP_MODE;
const AIRTABLE_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;
const PAGE_SIZE = 4;


function mapActivity(record: any): Activity {
    return {
        id: record.id,
        titleSK: record.fields["TitleSK"],
        titleUA: record.fields["TitleUA"],
        titleEN: record.fields["TitleEN"],
        descriptionSK: record.fields["DescriptionSK"],
        descriptionUA: record.fields["DescriptionUA"],
        descriptionEN: record.fields["DescriptionEN"],
        date: record.fields["Date"],
        showDate: record.fields["ShowDate"],
        images:
            record.fields["Image"] &&
            record.fields["Image"].length > 0
                ? record.fields["Image"].map((img: any) => img.url)
                : null,
    };
}

export async function getActivitiesPage(
    offset?: string
): Promise<ActivitiesPage> {
    const res = await axios.get(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
            headers: {
                Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
            params: {
                pageSize: PAGE_SIZE,
                offset,
                sort: [
                    {
                        field: "Date",
                        direction: "desc",
                    },
                ],
                view: APP_MODE === "dev" ? undefined : "Published",
            },
        }
    );

    return {
        activities: res.data.records.map(mapActivity),
        nextOffset: res.data.offset,
    };
}

export async function getActivityById(id: string): Promise<Activity | null> {
    try {
        const res = await axios.get(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${AIRTABLE_TOKEN}`,
                },
            }
        );

        return mapActivity(res.data);
    } catch (error) {
        console.error("Error fetching events:", error);
        return null;
    }
}