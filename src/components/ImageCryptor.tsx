import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Upload, Download, Eye, EyeOff, X } from "lucide-react";
import { encryptImage, decryptImage } from "@/lib/crypto";

type Mode = "encrypt" | "decrypt";

const ImageCryptor = () => {
  const [mode, setMode] = useState<Mode>("encrypt");
  const [imageData, setImageData] = useState<ArrayBuffer | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [encryptedBlob, setEncryptedBlob] = useState<Blob | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const reset = () => {
    setImageData(null);
    setImagePreview(null);
    setPassword("");
    setEncryptedBlob(null);
    setError(null);
    setDone(false);
  };

  const handleFile = useCallback((file: File) => {
    setError(null);
    setDone(false);
    setEncryptedBlob(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const buf = e.target?.result as ArrayBuffer;
      setImageData(buf);

      if (mode === "encrypt") {
        const url = URL.createObjectURL(new Blob([buf]));
        setImagePreview(url);
      } else {
        setImagePreview(null);
      }
    };
    reader.readAsArrayBuffer(file);
  }, [mode]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleEncrypt = async () => {
    if (!imageData || !password) return;
    setProcessing(true);
    setError(null);
    try {
      const encrypted = await encryptImage(imageData, password);
      setEncryptedBlob(new Blob([encrypted], { type: "application/octet-stream" }));
      setDone(true);
    } catch {
      setError("Encryption failed");
    }
    setProcessing(false);
  };

  const handleDecrypt = async () => {
    if (!imageData || !password) return;
    setProcessing(true);
    setError(null);
    try {
      const decrypted = await decryptImage(imageData, password);
      const url = URL.createObjectURL(new Blob([decrypted]));
      setImagePreview(url);
      setDone(true);
    } catch {
      setError("Wrong password or corrupted file");
    }
    setProcessing(false);
  };

  const handleExport = () => {
    if (!encryptedBlob) return;
    const url = URL.createObjectURL(encryptedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "encrypted-image.enc";
    a.click();
    URL.revokeObjectURL(url);
  };

  const switchMode = (m: Mode) => {
    reset();
    setMode(m);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Decorative top line */}
      <div className="w-full max-w-md mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-primary/30" />
          <span className="text-xs text-muted-foreground tracking-[0.3em] font-body">暗号化</span>
          <div className="h-px flex-1 bg-primary/30" />
        </div>
      </div>

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-heading text-primary text-glow mb-1 tracking-widest"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CIPHER
      </motion.h1>
      <p className="text-muted-foreground text-sm tracking-[0.2em] mb-10 font-body">
        IMAGE ENCRYPTION TOOL
      </p>

      {/* Mode Toggle */}
      <div className="flex mb-8 border border-border rounded-sm overflow-hidden">
        <button
          onClick={() => switchMode("encrypt")}
          className={`px-6 py-2.5 text-sm font-heading tracking-wider transition-all ${
            mode === "encrypt"
              ? "bg-primary text-primary-foreground neon-glow"
              : "bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Lock className="w-3.5 h-3.5 inline mr-2" />
          ENCRYPT
        </button>
        <button
          onClick={() => switchMode("decrypt")}
          className={`px-6 py-2.5 text-sm font-heading tracking-wider transition-all ${
            mode === "decrypt"
              ? "bg-primary text-primary-foreground neon-glow"
              : "bg-card text-muted-foreground hover:text-foreground"
          }`}
        >
          <Unlock className="w-3.5 h-3.5 inline mr-2" />
          DECRYPT
        </button>
      </div>

      {/* Main Card */}
      <motion.div
        className="w-full max-w-md bg-card border border-border rounded-sm p-6 relative"
        layout
      >
        {/* Clear button */}
        {imageData && (
          <button onClick={reset} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Drop zone */}
        {!imageData && (
          <label
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center border border-dashed border-border rounded-sm h-48 cursor-pointer hover:border-primary/50 transition-colors group"
          >
            <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-body">
              {mode === "encrypt" ? "Drop image here" : "Drop .enc file here"}
            </span>
            <span className="text-xs text-muted-foreground mt-1">or click to browse</span>
            <input
              type="file"
              className="hidden"
              accept={mode === "encrypt" ? "image/*" : ".enc,application/octet-stream"}
              onChange={onFileSelect}
            />
          </label>
        )}

        {/* Image Preview */}
        <AnimatePresence>
          {imagePreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-4"
            >
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded-sm border border-border"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Encrypted file loaded indicator */}
        {imageData && mode === "decrypt" && !imagePreview && (
          <div className="mb-4 p-4 border border-border rounded-sm flex items-center gap-3">
            <Lock className="w-5 h-5 text-accent" />
            <div>
              <p className="text-sm font-body text-foreground">Encrypted file loaded</p>
              <p className="text-xs text-muted-foreground">Enter password to decrypt</p>
            </div>
          </div>
        )}

        {/* Password Input */}
        {imageData && !done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4"
          >
            <label className="text-xs text-muted-foreground tracking-widest font-heading block mb-2">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter encryption key..."
                className="w-full bg-secondary border border-border rounded-sm px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={mode === "encrypt" ? handleEncrypt : handleDecrypt}
              disabled={!password || processing}
              className="w-full mt-4 bg-primary text-primary-foreground font-heading tracking-wider py-2.5 rounded-sm hover:neon-glow transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm"
            >
              {processing ? "PROCESSING..." : mode === "encrypt" ? "ENCRYPT" : "DECRYPT"}
            </button>
          </motion.div>
        )}

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-destructive text-sm mt-3 font-body"
          >
            {error}
          </motion.p>
        )}

        {/* Export button (encrypt mode) */}
        {done && mode === "encrypt" && encryptedBlob && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
            <div className="p-3 border border-accent/30 rounded-sm bg-accent/5 mb-3">
              <p className="text-xs text-accent font-heading tracking-wider">✓ ENCRYPTION COMPLETE</p>
            </div>
            <button
              onClick={handleExport}
              className="w-full bg-accent text-accent-foreground font-heading tracking-wider py-2.5 rounded-sm hover:accent-glow transition-all text-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD .ENC FILE
            </button>
          </motion.div>
        )}

        {/* Decrypt success */}
        {done && mode === "decrypt" && imagePreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
            <div className="p-3 border border-accent/30 rounded-sm bg-accent/5">
              <p className="text-xs text-accent font-heading tracking-wider">✓ DECRYPTION SUCCESSFUL</p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <div className="mt-10 flex items-center gap-3">
        <div className="h-px w-8 bg-border" />
        <span className="text-[10px] text-muted-foreground tracking-[0.4em] font-body">AES-256-GCM • PBKDF2</span>
        <div className="h-px w-8 bg-border" />
      </div>
    </div>
  );
};

export default ImageCryptor;
