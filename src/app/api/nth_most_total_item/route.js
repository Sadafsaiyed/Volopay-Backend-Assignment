import data from '@/app/data.json'


export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const startdate = searchParams.get("startdate");
    const enddate = searchParams.get("enddate");
    const item_by = searchParams.get("item_by");


    if (item_by === 'quantity') {
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
        const returndataarray = data.map((obj) => {

            if (Date.parse(obj.date.split(" ")[0]) > Date.parse(startdate) && Date.parse(obj.date.split(" ")[0]) < Date.parse(enddate)) {
                if (items.hasOwnProperty(obj.software)) {
                    items[obj.software]++;
                }
            }
        })
        const sadaf = Object.values(items).sort(function(a, b){return a - b})[Object.values(items).length-2];
        
        
        
        return new Response(Object.keys(items).find(key => items[key] === sadaf), { status: 200 })
    }
    else{
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
        const returndataarray = data.map((obj) => {

            if (Date.parse(obj.date.split(" ")[0]) > Date.parse(startdate) && Date.parse(obj.date.split(" ")[0]) < Date.parse(enddate)) {
                if (items.hasOwnProperty(obj.software)) {
                    items[obj.software] = items[obj.software]+obj.amount;
                }
            }
        })

        const sadaf = Object.values(items).sort( function(a, b){return a - b})[Object.values(items).length-4];
        
        return new Response(Object.keys(items).find(key => items[key] === sadaf), { status: 200 })

    }




    


}


// JSON.stringify({"startdate":startdate,"enddate":enddate,"department":department})