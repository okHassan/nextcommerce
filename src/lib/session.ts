'use server'
import { cookies } from "next/headers"
import { verifyJwt } from "./jwt"

export const getCookie = async (tokenName: any) => {
    const token = cookies().get(tokenName);

    if (!token) return false; // If no token, return false early

    try {
        const verify: any = await verifyJwt(token?.value);

        if (verify?.email) {
            return true
        } else {
            return false; // Invalid token
        }
    } catch (error) {
        console.error("Token verification failed:", error);
        return false;
    }
}


export const getUserInfo = async () => {
    const token = cookies().get('token')
    const verify: any = await verifyJwt(token?.value)
    if (verify?.email) {
        return verify
    } else return null
}