'use server';

import prisma from './prisma'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { signJwt } from './jwt';
import { cookies } from 'next/headers';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export async function createUser({ name, email, password }: any) {
    try {

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        const token = await signJwt({ id: user.id, email: user.email });

        cookies().set('token', token, { httpOnly: true });

        return { success: true, message: 'Logged in successfully', user };

    } catch (error) {
        throw new Error('User creation failed');
    }
}


export async function login({ email, password }: { email: string, password: string }) {
    // Fetch user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('User not found');

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error('Invalid password');

    // Sign JWT
    const token = await signJwt({ id: user.id, email: user.email });

    // Set JWT in cookies (HttpOnly cookie)
    cookies().set('token', token, { httpOnly: true });

    return { success: true, message: 'Logged in successfully' };
}