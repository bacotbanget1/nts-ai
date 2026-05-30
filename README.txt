Aether AI — Standalone Frontend
================================

Folder ini berisi website chatbot AI lengkap dalam HTML/JS/CSS murni.
Semua API key disimpan AMAN di backend Lovable kamu — file ini cuma
manggil endpoint backend, tidak pernah lihat HF_API_KEY.

FILE:
- index.html      Hub utama (pilih mode)
- chat.html       Chat 3 model + auto-switch ke image gen & vision
- voice.html      Voice mode dengan avatar anime (Web Speech API)
- image.html      Generate gambar (FLUX.1-dev)
- vision.html     Analisis gambar (Qwen2-VL)
- video.html      Text-to-video
- style.css       Styling bersama
- app.js          Helper bersama
- config.js       <— EDIT INI untuk set backend URL
- assets/         Gambar avatar

CARA PAKAI:
1. Buka config.js, set API_BASE ke URL backend Lovable kamu.
   Contoh: "https://namaapp.lovable.app"
   (Kosongkan kalau file di-host di domain yang sama dengan backend.)
2. Upload semua file ke hosting apapun: GitHub Pages, Netlify, Vercel,
   shared hosting, atau buka langsung di browser (sebagian fitur seperti
   mic mungkin perlu HTTPS).
3. Buka index.html.

CATATAN:
- Voice mode pakai Web Speech API browser (Chrome/Edge paling stabil).
- Generate video di HF Inference API kadang lambat / butuh warm-up.
- Kalau ganti chat model di backend, edit juga CHAT_MODELS di config.js.
- Akses backend dibiarkan terbuka (CORS *). Siapa pun yang tahu URL bisa
  pakai = bakal habisin kuota HF kamu. Kasih tahu kalau mau dibatasi.
