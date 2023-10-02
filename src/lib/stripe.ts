import Stripe from 'stripe'

let stripe: Stripe | undefined;

// Get the STRIPE_SECRET_KEY from the environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Check if the stripeSecretKey is not empty or undefined
if (stripeSecretKey) {
  // Create the Stripe instance with the secret key
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Ignite Shop'
    }
  });
} else {
  // Handle the case where the secret key is empty or undefined
  console.error('STRIPE_SECRET_KEY is not set or is empty.');
}

export { stripe };

