import prisma from "../db";
import { comparePasswords } from "./utils/password";
import { sign_jwt, decode_jwt } from "./utils/jwt/jwt";

export async function getProfile(username: string) {
    const user_received = await prisma.user.findFirst({
        where: {
            username: username
        } 
    })
    return user_received;
}

export async function authenticate_token(token:string) {
    const decoded_token = await decode_jwt(token);
    return decoded_token;
}

export async function authenticate_username_password(username: string, password: string) {
    const profile = await getProfile(username)
    if (profile == null) {
        return {error: "Wrong password"};
    }
    const passwordComparison = await comparePasswords(password, profile.password);
    if (!passwordComparison) {
        return {error: "Wrong password"};
    }
    const token = sign_jwt({username: profile.username})
    return token;
}