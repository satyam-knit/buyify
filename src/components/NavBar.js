'use client'
import Link from 'next/link'
import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../utils/useCart'

const NavBar = () => {
  const { cartCount } = useCart()
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href="/" className='text-orange-500 font-bold text-3xl'>Dev Store</Link>
      <Link href="/cart" className='text-orange-500 px-4 py-2 font-bold hover:text-red-600 hover:cursor-pointer'>
        <ShoppingCartIcon className='w-7 h-7 inline-block' /> Cart
        <span> ({cartCount})</span>
      </Link>
    </nav>
  )
}

export default NavBar