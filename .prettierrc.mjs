/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  useTabs: false,
  printWidth: 150,
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
