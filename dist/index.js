import { authenticator } from "otplib";
import { toDataURL } from "qrcode";
/**
 * Generates the base32 encoded hex secret key along with QR code as an encoded image URI.
 */
export async function generateSecret(label, issuer) {
    const secret = authenticator.generateSecret();
    const otpauth = authenticator.keyuri(label.trim(), issuer.trim(), secret);
    return {
        qrcode: await toDataURL(otpauth),
        otpauth,
        secret,
    };
}
/*
    Verify the token from auth App
*/
export function verify(token, secret, options = {}) {
    return authenticator
        .create({
        ...authenticator.allOptions(),
        ...options,
    })
        .verify({ token, secret });
}
/**
 * Generates the 6-digit token.
 */
export function generate(secret) {
    return authenticator.generate(secret);
}
