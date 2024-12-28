import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "8px",
      },
      colors: {
        Very_dark_desaturated_orange: "34251F",
        Very_light_gray: "D9D9D9",
        Very_dark_grayish_orange: "EEDDCC",
      },
      backgroundImage: {
        bgImg: "url('../bg_images/hero_bg_img.jpg')",
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
        "loop-scroll2": "loop-scroll 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "loop-scroll2": { // New keyframes for slower scrolling
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
