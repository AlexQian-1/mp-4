
import {GetPersonById} from "@/app/api/getPersonData/museumApi";

export default async function PersonDetail({params}: { params: { id: string } }) {
    

    const getParams = await params;
    const data = await GetPersonById(Number(getParams.id));
    //https://stackoverflow.com/questions/77412027/using-next-13-5-6-app-router-how-to-get-params-of-dynamic-route
    return (
        <div>
            <h1>Person</h1>
            <p>Name:{data.displayname}</p>
            <p>ID:{data.id}</p>
        </div>
    )
}