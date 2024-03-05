
import Link from 'next/link'
export default function ProductLayout({ children }) {
   return (
      <div>
         <Link href="/products" className="inline-block text-orange-400 px-4 py-4 font-bold hover:underline">All Products</Link>
         {children}</div>
   )
}
