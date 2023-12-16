# 2fa-util

Lightweight utility to generate a two-factor TOTP secret with QR code to be used by authenticators such as Google or Microsoft Authenticator.

### Usage

```typescript
import { generateSecret, verify } from "@shpaw415/2fa-utils";

await generateSecret("John Doe", "Company");
// Output:
// {
//   qrcode: 'data:image/png;base64,[...base64Data]',
//   otpauth: 'otpauth://totp/Company:John%20Doe?secret=P4IU2RIZBBFEGDYD&period=30&digits=6&algorithm=SHA1&issuer=Company',
//   secret: 'P4IU2RIZBBFEGDYD'
// }

await verify("<token from authenticator app>", "<secret>");
// Output: true/false
```
