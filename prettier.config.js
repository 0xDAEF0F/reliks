module.exports = {
  bracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 90,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
}
