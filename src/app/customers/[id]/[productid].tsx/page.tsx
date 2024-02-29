'use client'
import { NextPage } from 'next';
import { usePathname} from 'next/navigation';

const Product = () => {

    const pathname = usePathname();
    const id = pathname.split('/')[3];
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
};

export default Product;