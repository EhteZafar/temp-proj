'use client'
import React from 'react'
import { NextPage } from 'next'
import { usePathname} from 'next/navigation';

const Hello: NextPage = () => {

    const pathname = usePathname();
    const id = pathname.split('/')[2];
    console.log(pathname);

    return (
        <React.Fragment>
            <h1>customer {id}</h1>
        </React.Fragment>
    )
};

export default Hello;