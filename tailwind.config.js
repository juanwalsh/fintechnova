/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Se você já moveu para src:
    "./src/**/*.{js,ts,jsx,tsx}",
    
    // Se seus arquivos ainda estão na raiz (conforme sua imagem anterior):
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./App.{js,ts,jsx,tsx}",
    "./main.{js,ts,jsx,tsx}",
    "./index.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}