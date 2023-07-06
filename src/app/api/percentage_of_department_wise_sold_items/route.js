import data from '@/app/data.json'


export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const startdate = searchParams.get("startdate");
    const enddate = searchParams.get("enddate");
    const item_by = searchParams.get("item_by");

  


    let items = {
        'Marketting': 0, 'Tech': 0, 'Customer Success': 0, 'Sales': 0, 'HR': 0
    }
    const returndataarray = data.map((obj) => {

        items[obj.department]=items[obj.department]+obj.seats
    })
    

    return new Response(JSON.stringify({
        'Marketting': (items['Marketting']/30074)*100, 'Tech': (items['Tech']/30074)*100, 'Customer Success': (items['Customer Success']/30074)*100, 'Sales': (items['Sales']/30074)*100, 'HR': (items['HR']/30074)*100
    }) ,{ status: 200 })












}


// JSON.stringify({"startdate":startdate,"enddate":enddate,"department":department})
//30074