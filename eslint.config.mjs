import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 🔽 Add ignores here
  {
    ignores: [
      "**/*.js",
      "node_modules",
      ".next",
      "dist",
      "public/widgets/",
      "src/ui-widgets/dist/",
      "src/ui-widgets/public/"
    ]
  }
];

export default eslintConfig;