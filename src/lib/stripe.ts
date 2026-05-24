import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export async function createPaymentIntent(
  amount: number,
  email: string,
  metadata: Record<string, string>
) {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: 'eur',
    receipt_email: email,
    metadata,
  })
}

export async function refundPayment(paymentIntentId: string) {
  return await stripe.refunds.create({
    payment_intent: paymentIntentId,
  })
}
