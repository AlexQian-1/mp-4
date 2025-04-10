
import Link from 'next/link';
import Button from '@mui/material/Button';


export default   function Home() {

    return (
        <div>
            <h1>Welcome to the Harvard Art Museum</h1>
             <Link href="/person" >
                 <Button variant="contained" color="primary" >
                 Go to Person List
                 </Button>

            </Link>
        </div>

    ) ;
}
