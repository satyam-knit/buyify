'use client'

import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useCart } from '../../utils/useCart'
import { formatAmount } from '../../utils/stripe'
import { handleCheckout } from '../../services/checkout-cart'
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {
    const { cartCount, cartItems, cartTotal, incrementCartItems, decrementCartItems, deleteAllItems, deleteById } = useCart()
    const router = useRouter()

    const cartCheckout = async () => {
        try {
            const body = cartItems.map(item => {
                return {
                    price: item.price_id,
                    quantity: item.quantity
                }
            })
            const url = await handleCheckout(body)
            router.push(url)
        } catch (err) {
            console.log("err")
            toast.error(`checkout failed`)
        }

    }

    useEffect(() => {

        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            toast.success('Order placed! You will receive an email confirmation.');
            deleteAllItems()
        }

        if (query.get('canceled')) {
            toast.error('Order canceled -- continue to shop around and checkout when you are ready.');
        }
    }, []);

    return (
        <div className='m-5 px-20'>
            {cartCount > 0 ? (
                <>
                    <h2 className='text-4xl font-semibold'>Cart Items: {cartCount}</h2>
                    <button className='text-orange-400 mt-2 font-bold hover:text-red-600 hover:cursor-pointer'
                        onClick={deleteAllItems}
                    >
                        Clear all <TrashIcon className='inline-block w-4 h-4' />
                    </button>
                </>
            ) : (
                <>
                    <h2 className='text-4xl font-semibold'>Your shopping cart is empty !</h2>
                    <Link href='/products' className='text-xl mt-1 text-orange-500 underline'>Shop Now!!</Link>
                </>
            )}

            {
                cartCount > 0 && (
                    <div>
                        {
                            cartItems.map(item => {
                                return (
                                    <div key={item.id} className='flex justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg'>
                                        <Link href={`/products/${item.id}`} className='flex items-center'>
                                            <Image src={item.image} alt={item.name} width={80} height={80} className='w-20 h-auto' />
                                            <p className='font-semibold text-xl ml-2'>{item.name}</p>
                                        </Link>
                                        <div className='flex items-center gap-5'>
                                            <div className='flex items-center gap-3'>
                                                <button disabled={item.quantity == 1} className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'
                                                    onClick={() => decrementCartItems(item.id)}
                                                >
                                                    <MinusIcon className='w-6 h-6' />
                                                </button>
                                                <p className='font-semibold text-xl'>{item.quantity}</p>
                                                <button className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'
                                                    onClick={() => incrementCartItems(item.id)}
                                                >
                                                    <PlusIcon className='w-6 h-6' />
                                                </button>
                                            </div>
                                            <p>x <span className='text-xl font-semibold'>{formatAmount(item.price)}</span></p>
                                            <button className='text-orange-500 hover:text-red-600'
                                                onClick={() => deleteById(item.id)}
                                            >
                                                <XCircleIcon className='w-6 h-6' />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }


                        <div className='flex flex-col items-end border-t py-4 mt-8'>
                            <p className='text-xl'>
                                Total <span className='font-bold text-green-500'>{cartTotal}</span>
                            </p>
                            <button className='mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md' onClick={cartCheckout}>
                                Checkout
                            </button>
                        </div>
                    </div>
                )
            }
            <Toaster />
        </div>
    )
}

export default page 