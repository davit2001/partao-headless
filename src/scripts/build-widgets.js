import { build } from 'esbuild';

build({
  entryPoints: ['src/widgets/entry.tsx'],
  outfile: 'public/widgets/ui.js',
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['esnext'],
  sourcemap: true,
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
    'process': '{}',
  },
}).catch((e) => {
  console.error('❌ Widget build failed:', e);
  process.exit(1);
});
