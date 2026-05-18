# Usaha Babulu Km. 53 - Next.js Website

Website untuk usaha di Babulu Darat Km. 53, Penajam Paser Utara, Kalimantan Timur.

## 🚀 Teknologi

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Google Maps** - Lokasi & Navigasi
- **WhatsApp Integration** - Kontak Langsung

## 📦 Instalasi

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🏗️ Build Production

```bash
npm run build
npm start
```

## 📸 Mengganti Foto

Foto-foto disimpan di folder `public/images/`:

- `hero-background.jpg` - Background header utama
- `produk-1.jpg` - Foto produk/layanan 1
- `produk-2.jpg` - Foto produk/layanan 2
- `fasilitas.jpg` - Foto area parkir/fasilitas

Ganti file-file tersebut dengan foto Anda sendiri.

## ⚙️ Konfigurasi

### Nomor WhatsApp

Edit di `app/page.tsx` baris 48:

```typescript
const nomorWA = "6281234567890"; // Ganti dengan nomor Anda
```

### Informasi Usaha

Edit teks di `app/page.tsx` untuk mengubah:
- Nama usaha
- Deskripsi produk/layanan
- Jam operasional
- Alamat

## 🌐 Deploy ke Vercel

1. Push ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

## 📝 Push ke GitHub

```bash
# Pastikan sudah login ke GitHub
git remote add origin https://github.com/roaalifgantengbanget-pixel/orang-hitam.git
git branch -M main
git push -u origin main
```

## 📄 Lisensi

© 2026 Usaha Babulu Km. 53. All rights reserved.
