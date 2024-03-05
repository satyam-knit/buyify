import Stripe from 'stripe';
export const stripe = Stripe(process.env.STRIPE_SK);


export const formatAmount = (amount) => {
    return ` ₹${amount / 100}`
}