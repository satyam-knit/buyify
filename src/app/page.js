import React from 'react'
import ShareBtn from '../components/ShareBtn'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
import { getProducts } from '../services/productService'


export const dynamic = "force-dynamic"   //this value is default auto 



const Page = async () => {
    console.log("home page returned ")
    const products = await getProducts(5)
    return (
        <div>

            <div className="bg-gray-900 h-72">

                <h1 className="text-white text-5xl font-bold pt-28 text-center">India's Most Loved <span className="text-orange-400">Fashion</span>Platform For <span className="text-rose-500">CODERS!!</span></h1>
            </div>

            <div>
                <div className="m-4 flex flex-wrap gap-2">
                    {products.data.map((item, index) => {
                        return <ProductCard key={item.id} item={item} index={index} />
                    })}


                </div>

            </div>

            <Link href="/products" className="inline-block text-orange-400 px-4 py-4 font-bold hover:underline">View More {">"}</Link>
        </div>
    )
}

export default Page