import { headers } from 'next/headers'
require('dotenv').config();

export default async function getClientIp() {
    if (process.env.DEV_ENV === "true") {
        return process.env.DEV_IP
    }

    const FALLBACK_IP_ADDRESS = '0.0.0.0'
    const forwardedFor = headers().get('x-forwarded-for')

    if (forwardedFor) {
        return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
    }

    return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}