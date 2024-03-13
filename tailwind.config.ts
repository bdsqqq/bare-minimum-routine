import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
  },
};
export default config;
