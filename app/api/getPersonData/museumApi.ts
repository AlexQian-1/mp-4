'use server';
interface Person  {

        id: number;
        displayname: string;


}
interface HarvardPersonRecord {
    records: Person[];
}

export async function GetPersonData():Promise<HarvardPersonRecord> {
    const apiKey = process.env.HARVARD_API_KEY;

    const url = `https://api.harvardartmuseums.org/Person?apikey=${apiKey}&size=5`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Harvard API request failed!`);
    }

    const data = await response.json();

    return  data;
}

export async function GetPersonById(id: number):Promise<Person>{
    const apiKey = process.env.HARVARD_API_KEY;

    const url = `https://api.harvardartmuseums.org/Person/${id}?apikey=${apiKey}&`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Person not found!`);
    }
    const data = await response.json();

    return  data;
}