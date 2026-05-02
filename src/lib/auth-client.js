import { createAuthClient } from "better-auth/react"

const baseURL = typeof window !== 'undefined' 
  ? window.location.origin 
  : `https://sun-cart-ivory.vercel.app` || 'http://localhost:3000'

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: baseURL
})

export const { signIn, signUp, useSession } = createAuthClient()