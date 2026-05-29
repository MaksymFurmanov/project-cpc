import {ArticleType, MultilingualArticle} from "../../types";

function mapType(type: string): ArticleType {
    switch (type) {
        case "Event":
            return ArticleType.EVENT;
        case "News":
            return ArticleType.NEWS;
        default:
            return ArticleType.NEWS;
    }
}

export default function mapArticle(record: any): MultilingualArticle {
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
        type: mapType(record.fields["Type"]),
    };
}