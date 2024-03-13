import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        "01": "var(--gray-01)",
        "02": "var(--gray-02)",
        "03": "var(--gray-03)",
        "04": "var(--gray-04)",
        "05": "var(--gray-05)",
        "06": "var(--gray-06)",
        "07": "var(--gray-07)",
        "08": "var(--gray-08)",
        "09": "var(--gray-09)",
        "10": "var(--gray-10)",
        "11": "var(--gray-11)",
        "12": "var(--gray-12)",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
export default config;
