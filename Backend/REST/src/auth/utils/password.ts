import bcrypt from 'bcrypt'

export async function hashPassword(password : string) : Promise<string> {
    return await bcrypt.hash(password, 10)
}

export function comparePasswords(password : string, passwordHash : string) : Promise<boolean> {
    return bcrypt.compare(password, passwordHash)
}