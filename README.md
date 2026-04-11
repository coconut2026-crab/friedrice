# 🍜 CIPHER — Image Encryption Tool

A minimalistic, client-side image encryption tool with a ramen-bar-inspired aesthetic. Encrypt your images with a password and export them securely — or import encrypted files and decrypt them on the fly.

**No servers. No uploads. Everything stays in your browser.**

---

## Features

- 🔒 **AES-256-GCM** encryption via the Web Crypto API
- 🔑 **PBKDF2** key derivation (100,000 iterations, SHA-256)
- 🖼️ Drag-and-drop image upload with live preview
- 📦 Export encrypted `.enc` files
- 🔓 Import and decrypt `.enc` files with password
- 🎨 Dark, neon-red "ramen bar" UI aesthetic
- 💻 Fully client-side — zero data leaves your browser

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## How It Works

1. **Encrypt** — Drop an image, set a password, download the `.enc` file.
2. **Decrypt** — Drop an `.enc` file, enter the password, view or save the original image.

Encrypted files use the format: `[salt 16B] [iv 12B] [AES-GCM ciphertext]`

## License

This project is licensed under the [MIT License](LICENSE).
