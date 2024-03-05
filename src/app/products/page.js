import React from 'react'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../services/productService'

export const dynamic = "force-dynamic"

const Product = async () => {
  console.log("All product returned")
  const products = await getProducts()
  return (
    <div className="my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {products.data.map((item, index) => {
        return <ProductCard key={item.id} item={item} index={index} />
      })}

    </div>
  )
}

export default Product