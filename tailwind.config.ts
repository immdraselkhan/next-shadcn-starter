import type { Config } from "tailwindcss";
import { shadcnPreset } from "./lib/shadcn/shadcn-preset";

const config = {
  presets: [shadcnPreset],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
