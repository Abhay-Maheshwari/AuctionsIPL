import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                industrial: {
                    primary: "#FFB000", // Gold/Orange
                    secondary: "#1A1A1A", // Dark Grey
                    accent: "#FF5722", // Deep Orange
                    background: "#050505", // Almost Black
                    surface: "#121212", // Dark Surface
                },
            },
            boxShadow: {
                "neon-orange": "0 0 10px rgba(255, 176, 0, 0.5), 0 0 20px rgba(255, 176, 0, 0.3)",
                "neon-blue": "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)",
                "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "industrial-gradient": "linear-gradient(135deg, #1A1A1A 0%, #050505 100%)",
            },
            keyframes: {
                shimmer: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "50%": { opacity: "1" },
                    "100%": { transform: "translateX(100%)", opacity: "0" },
                },
            },
            animation: {
                shimmer: "shimmer 2.5s infinite linear",
            },
        },
    },
    plugins: [],
};
export default config;
