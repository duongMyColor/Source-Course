import {compare, hash} from 'bcryptjs'
import bcrypt from 'bcryptjs'

export async function hashPassword(password: string) {
    const hashedPassword = await hash(password,12)
    return hashedPassword
}

export async function verifyPassword(password:string,hashedPassword:string) {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid
}