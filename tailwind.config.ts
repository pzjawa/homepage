import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mark_blue: "#002fa7",
        dark_mark_blue: "#cedae9",
        dot_yellow: "#e3ab57",
        typed_text: "#93b5cf",
        button_bg: "#fffef8",
        hover_button_bg: "#93d5dc",
      },
    },
  },
  plugins: [],
};
export default config;
