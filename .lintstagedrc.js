module.exports = {
    '*.{js,jsx,ts,tsx,json}': 'eslint --max-warnings=0 --fix`',
    '*.md': 'prettier --write',
    '*.rb': 'bundle exec rubocop --autocorrect --force-exclusion',
  };
  