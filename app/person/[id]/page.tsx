
import {GetPersonById} from "@/app/lib/museumApi";
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
export default async function PersonDetail({params}: Props) {
    

    const getParams = await params;
    const data = await GetPersonById(Number(getParams.id));
    //https://github.com/vercel/next.js/discussions/46131
    return (
        <div>
            <h1>Person</h1>
            <p>Name:{data.displayname}</p>
            <p>ID:{data.id}</p>
        </div>
    )
}