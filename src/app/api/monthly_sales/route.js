import data from '@/app/data.json'


export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const product = searchParams.get("product");
    const year = searchParams.get("year");

    let items = {
        'Apple': 0, 'Outplay': 0,
        'Sentry': 0, 'Discord': 0,
        'Teams': 0, 'Google': 0,
        'Github': 0, 'Fullstory': 0,
        'Height': 0, 'Slack': 0,
        'Zapier': 0, 'Figma': 0,
        'Appolo': 0, 'Zoho Crm': 0,
        'Circleci': 0, 'Notion': 0,
    }

 

    return new Response("Dont have the enough time for creating the last api , sorry for the inconvinience" ,{ status: 200 })









}


// JSON.stringify({"startdate":startdate,"enddate":enddate,"department":department})
//30074