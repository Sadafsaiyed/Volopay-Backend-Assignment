import data from '@/app/data.json'


export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const startdate = searchParams.get("startdate");
    const enddate = searchParams.get("enddate");
    const department = searchParams.get("department");

    let lseat = 0;
    const returndataarray = data.map((obj)=>{
        
        if(Date.parse(obj.date.split(" ")[0])>Date.parse(startdate) && Date.parse(obj.date.split(" ")[0])<Date.parse(enddate) && obj.department==department )
        { 
            lseat =lseat + obj.seats
        }
       
        
    })
    return new Response(lseat, { status: 200 })
    

}


// JSON.stringify({"startdate":startdate,"enddate":enddate,"department":department})