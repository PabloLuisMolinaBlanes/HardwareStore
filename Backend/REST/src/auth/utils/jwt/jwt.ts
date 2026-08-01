import * as jose from 'jose'
import { initializeEncryptionParameters } from '../../../utils/encryption/cryptography'

const key = initializeEncryptionParameters()

const secret = new TextEncoder().encode(
  key.toString('hex'),
)

const alg = 'HS256'

export async function sign_jwt(object: any) {
    const jwt_message = await new jose.SignJWT(object).sign(secret);
    return jwt_message;
}

export async function decode_jwt(object: any) : Promise<any> {
    try {
        const jwt_message = await jose.jwtVerify(object, secret);
        return jwt_message;
    } catch (e) {
        return -1;
    }
}