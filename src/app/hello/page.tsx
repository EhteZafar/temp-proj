import React from 'react';
import AddItem from '@/Components/AddItem';
import { NextPage } from 'next';

const Hello: NextPage = () => {
    return (
        <React.Fragment>
            <h1>TODO NEXT APP</h1>
            <AddItem />
        </React.Fragment>
    )
}

export default Hello;