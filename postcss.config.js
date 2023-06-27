const purgecss = require('@fullhuman/postcss-purgecss')({
  // spécifiez les chemins vers tous les fichiers de modèle de votre projet
  content: [
      '../src/**/*.html',
      '../src/**/*.vue',
      '../src/**/*.jsx',
      // etc.
  ],

  // cela est spécifique à Tailwind CSS
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});


module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ],
}
