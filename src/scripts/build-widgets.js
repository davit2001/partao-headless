const { build } = require('esbuild');

build({
  entryPoints: ['src/widgets/entry.tsx'],
  outfile: 'public/widgets/ui.js',
  bundle: true,
  format: 'iife',
  globalName: 'MagentoUI',
  minify: true,
  sourcemap: true,
  target: ['esnext'],
  platform: 'browser',
}).catch(() => process.exit(1));