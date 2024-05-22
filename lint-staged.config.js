module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'git add'
  ],
  'src/**/*.{json,css,scss,md,webmanifest}': [
    'prettier --write',
    'git add'
  ]
};
