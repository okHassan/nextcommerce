'use server'

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key'; // Store this in env

export async function signJwt(payload: object, expiresIn: string = '1h') {
    return jwt.sign(payload, secret, { expiresIn });
}

export async function verifyJwt(token: any) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}
