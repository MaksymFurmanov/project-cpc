import axios from "axios";
import {Activity} from "../types";

const AIRTABLE_BASE_ID = "appynslm7UcLg6XZ4";
const AIRTABLE_TABLE_NAME = "Events";
const AIRTABLE_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

export async function getActivities(): Promise<Activity[]> {
    try {
        const res = await axios.get(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
            {
                headers: {
                    Authorization: `Bearer ${AIRTABLE_TOKEN}`,
                },
            }
        );

        return res.data.records.map((record: any) => ({
            id: record.id,
            titleSK: record.fields["TitleSK"],
            titleUA: record.fields["TitleUA"],
            titleEN: record.fields["TitleEN"],
            descriptionSK: record.fields["DescriptionSK"],
            descriptionUA: record.fields["DescriptionUA"],
            descriptionEN: record.fields["DescriptionEN"],
            date: record.fields["Date"],
            images:
                record.fields["Image"] &&
                record.fields["Image"].length > 0
                    ? record.fields["Image"].map((img: any) => img.url)
                    : null,
        }));
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
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

        const record = res.data;

        return {
            id: record.id,
            titleSK: record.fields["TitleSK"],
            titleUA: record.fields["TitleUA"],
            titleEN: record.fields["TitleEN"],
            descriptionSK: record.fields["DescriptionSK"],
            descriptionUA: record.fields["DescriptionUA"],
            descriptionEN: record.fields["DescriptionEN"],
            date: record.fields["Date"],
            images:
                record.fields["Image"] &&
                record.fields["Image"].length > 0
                    ? record.fields["Image"].map((img: any) => img.url)
                    : null,
        }
    } catch
        (error) {
        console.error("Error fetching events:", error);
        return null;
    }
}