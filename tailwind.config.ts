import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 daisyui: {
  themes: [
    {
      mytheme: {"primary": "#009fe3",
                "secondary": "#1f9cd6",
"accent": "#a4e2f7",
"neutral": "#f6fdff",
"base-100": "#fffdf1",
"info": "#2daae2",
"success": "#1ad1a5",
"warning": "#ff9900",
"error": "#ff003f",
      },
    },
  ],
  },
  plugins: [require('daisyui')],
};
export default config;
