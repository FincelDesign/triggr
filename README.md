# 🧠 Triggr

**Automated limit order platform for Solana tokens**, including SPL 2022 tax tokens.

Built with:
- React + Vite + Tailwind (frontend)
- Express + Supabase (backend)
- Phantom wallet connect
- Codespaces + DevContainer ready

---

## 🚀 Features

✅ Connect Phantom wallet  
✅ Create custom price/amount tiers  
✅ Save tier config to Supabase per wallet  
✅ Start backend bot logic per wallet  
✅ Full-stack Codespace: frontend + backend

---

## 📦 Project Structure

## frontend # Vite + React + Wallet Adapter /backend # Express API + Supabase integration
## .devcontainer # Codespaces auto-setup (Node 18)
---

## 🧪 Running Locally

1. Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/triggr.git

2. Use Codespaces OR run manually:

cd frontend && npm install
cd ../backend && npm install

3. Create a .env file in /backend (see .env.example)

4. Start both:

# Frontend
cd frontend
npm run dev

# Backend
cd backend
npm run dev


🧠 Roadmap
✅ Wallet-authenticated tier save/load
✅ Background bot execution on API trigger
⏳ Telegram alert integration
⏳ Token-gated tier access
⏳ CSV export
⏳ UI for tier history
👨‍💻 Dev Setup Notes

Codespaces will auto:
    Install frontend + backend deps
    Initialize Tailwind config
    Expose ports 3000 (frontend) and 5000 (API)

To rebuild:
git clone ... && open in Codespaces