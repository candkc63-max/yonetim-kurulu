# BIST Pulse MVP

Next.js 15 + TypeScript + Tailwind + Supabase tabanlı BIST odaklı finans dashboard MVP.

## Çalıştırma

```bash
cd /workspace/yonetim-kurulu
cp .env.example .env.local
npm install
npm run dev
```

Uygulama: `http://localhost:3000`

- Dashboard: `/dashboard`
- Screener: `/screener`
- Hisse detay: `/hisse/THYAO`
- Login: `/login`

## Gerekli Ortam Değişkenleri

`.env.local` dosyasına ekleyin:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

## Üretim

```bash
npm run build
npm run start
```

## Sorun Giderme

`npm install` sırasında `403 Forbidden` alırsanız kurum/proxy registry ayarlarınızı kontrol edin.

```bash
npm config get registry
npm config set registry https://registry.npmjs.org/
npm cache clean --force
```
