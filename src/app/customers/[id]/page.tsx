'use client'
import { NextPage } from "next";
import { usePathname} from 'next/navigation';

const Customer: NextPage = () => {

    const pathname = usePathname();
    const id = pathname.split('/')[2];
    // console.log(pathname);
    return (
        <div>
            <h1>Customer {id} </h1>
        </div>
    )
};

export default  Customer;