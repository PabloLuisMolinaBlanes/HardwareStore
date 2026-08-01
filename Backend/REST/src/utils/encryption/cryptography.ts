import * as fs from 'fs';
import * as crypto from 'crypto';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var key : NonSharedBuffer;

export function initializeEncryptionParameters() {
    try {
        const encryptionparameters = fs.readFileSync(__dirname + '/encryptionparameters.txt', 'utf-8')
        key = Buffer.from(encryptionparameters.split("\n")[0], 'hex')
    } catch (err) {
        key = crypto.randomBytes(32)
        const content = `${key.toString('hex')}\n`
        fs.writeFileSync(__dirname + '/encryptionparameters.txt', content);
    }
    return key;
}