import React from 'react'
import Link from 'next/link'
import { formatAmount } from '../utils/stripe'
import Image from 'next/image'

const ProductCard = ({ item, index }) => {
    return (



        <Link href={`/products/${item.id}`} className="w-full sm:w-64 h-62 rounded border border-gray-200 cursor-pointer hover:shadow-lg">
            <Image priority={index == 0} alt={item.name} src={item.images[0]} width={160} height={160} className="w-full h-40" />
            <div className="flex justify-between p-2">
                <div >
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="w-40 truncate">{item.description}</p>
                </div>
                <div className="text-green-500 py-2 font-bold">
                    {formatAmount(item.default_price.unit_amount)}
                </div>
            </div>
        </Link>


    )
}

export default ProductCard