import prisma from "../db.js";
import { comparePasswords } from "./utils/password.js";
import { sign_jwt, decode_jwt } from "./utils/jwt/jwt.js";

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
        return {error: "No profile found"};
    }
    console.log(profile.password)
    const passwordComparison = await comparePasswords(password, profile.password);
    console.log(password)
    if (!passwordComparison) {
        return {error: "Wrong password"};
    }
    const token = sign_jwt({username: profile.username})
    return token;
}