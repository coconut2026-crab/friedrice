# Data Security Policy

## Overview

CIPHER is a **fully client-side** image encryption tool. All cryptographic operations run entirely in the user's browser using the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API). No data is transmitted to any server.

## Encryption Details

| Parameter | Value |
|-----------|-------|
| Algorithm | AES-256-GCM |
| Key Derivation | PBKDF2 |
| Iterations | 100,000 |
| Hash | SHA-256 |
| Salt | 16 bytes (random) |
| IV | 12 bytes (random) |

## Security Architecture

- **No backend** — The application is a static single-page app with no server component.
- **No network requests** — Images and passwords never leave the browser. No telemetry, analytics, or external API calls are made during encryption/decryption.
- **Browser-native cryptography** — All operations use `crypto.subtle`, which provides hardware-accelerated, constant-time implementations resistant to timing attacks.
- **Unique salt and IV** — Every encryption operation generates a fresh random salt and initialization vector, ensuring identical files encrypted with the same password produce different ciphertext.

## Encrypted File Format

```
Offset  Length  Content
0       16      Salt (random)
16      12      IV (random)
28      N       AES-GCM ciphertext (includes authentication tag)
```

## Password Handling

- Passwords are never stored, logged, or cached.
- Passwords exist in memory only for the duration of the encryption/decryption operation.
- There is no password recovery mechanism — if the password is lost, the data cannot be recovered.

## Threat Model

| Threat | Mitigation |
|--------|------------|
| Server-side data breach | N/A — no server stores data |
| Man-in-the-middle | No data transmitted; HTTPS for app delivery |
| Brute-force password attack | PBKDF2 with 100K iterations raises computational cost |
| Ciphertext tampering | AES-GCM provides authenticated encryption |
| Memory inspection | Passwords cleared after use; browser manages memory |

## Recommendations for Users

- Use strong, unique passwords (12+ characters recommended).
- Do not share `.enc` files and passwords through the same channel.
- Keep your browser up to date for the latest Web Crypto API security patches.
