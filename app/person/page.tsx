
import {GetPersonData} from "@/app/lib/museumApi";
import Button from '@mui/material/Button';
import Link from 'next/link';
export default async function PersonList() {
    const data = await GetPersonData( );
    return (
        <div>
            <h1>Person List</h1>
            <ul>
                {data.records.map((person) => (
                    <li key={person.id}>

                        <Link href={`/person/${person.id}`}>
                            <Button variant="contained" color="primary"
                                    sx={{height: '4vh',
                                        margin:1}}>
                                {person.displayname}
                            </Button>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}