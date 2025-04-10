
import {GetPersonById} from "@/app/api/getPersonData/museumApi";

export default  async  function PersonDetail({params}: { params: Promise<{ id: string }>}) {

    const { id } = await params;
    // const getParams = await params;
     const data = await GetPersonById(Number( id));
    //https://stackoverflow.com/questions/77412027/using-next-13-5-6-app-router-how-to-get-params-of-dynamic-route
    //https://stackoverflow.com/questions/79124951/type-error-in-next-js-route-type-params-id-string-does-not-satis
    return (
        <div>
            <h1>Person</h1>
            <p>Name:{data.displayname}</p>
            <p>ID:{data.id}</p>
        </div>
    )
}