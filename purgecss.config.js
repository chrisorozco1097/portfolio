module.exports = {
  content: ['./_site/**/*.html'],
  css: ['./_site/assets/css/main.css'],
  safelist: [
    /^btn/, /^nav/, /^fa/, /^icon/, /^project/, /^card/, /^highlight/, 'dark-mode', 'light-mode'
  ],
  output: './_site/assets/css/'
}
