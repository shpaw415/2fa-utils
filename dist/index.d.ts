/**
 * Generates the base32 encoded hex secret key along with QR code as an encoded image URI.
 */
export declare function generateSecret(label: string, issuer: string): Promise<{
    qrcode: string;
    otpauth: string;
    secret: string;
}>;
export declare function verify(token: string, secret: string, options?: object): boolean;
/**
 * Generates the 6-digit token.
 */
export declare function generate(secret: string): string;
