import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ["var(--font-zen)"],
      },
      colors: {
        "primary-gray": "#262626",
        "primary-gray-light": "#A3A3A3",
        "primary-blue": "#9EE8D5",
        "primary-blue-light": "#E8F6F3",
        "primary-dark": "#171717",
        "secondary-dark": "#525252",
        "border-light": "#F5F5F5",
      },
      screens: {
        mobile: "640px",
        tablet: "728px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
