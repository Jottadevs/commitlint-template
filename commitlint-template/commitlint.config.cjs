module.exports = {
  // Modelo de commits
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
    'subject-full-stop': [2, 'never', ['.']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        // 👇 seus tipos personalizados:
        'update',
        'config',
        'merge',
        'create'
      ]
    ]
  }
};
