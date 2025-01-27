import fs from 'node:fs/promises';
import path from 'node:path';
import svgr from 'esbuild-plugin-svgr';
import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'components',
  format: 'esm',
  dts: true,
  bundle: false,
  outExtension: () => ({ js: '.js' }),
  entry: [
    'src/**/*.{ts,tsx}',
    'src/static/illustrations/*.png',
    'src/**/*.svg',
    '!**/*.stories.{ts,tsx}',
    '!src/helpers/dummy.ts',
    '!src/*.d.ts',
  ],
  loader: {
    '.png': 'copy',
  },
  async onSuccess() {
    const serverPackageJSON = path.join(process.cwd(), 'dist', 'server', 'package.json');
    await fs.writeFile(serverPackageJSON, '{"type":"module","sideEffects":false}');
  },
  esbuildPlugins: [
    svgr({
      exportType: 'named',
      typescript: true,
      svgoConfig: {
        plugins: ['removeXMLNS'],
      },
      plugins: ['@svgr/plugin-svgo'],
    }),
  ],
  plugins: [
    {
      // Strip `node:` prefix from imports
      // Next.js only polyfills `path` and not `node:path` for browser
      name: 'strip-node-colon',
      renderChunk(code) {
        // (?<= from ")
        // Positive lookbehind asserts that the pattern we're trying to match is preceded by
        // ` from "`, but does not include ` from "` in the actual match.
        //
        // (?=";)
        // Positive lookahead asserts that the pattern is followed by `";`, but does not include
        // `";` in the match.
        const replaced = code.replaceAll(/(?<= from ")node:(.+)(?=";)/g, '$1');
        return { code: replaced };
      },
    },
    {
      // Strip `.svg` suffix from imports
      name: 'strip-dot-svg',
      renderChunk(code) {
        const replaced = code.replaceAll(/(?<= from ")(.+)\.svg(?=";)/g, '$1');
        return { code: replaced };
      },
    },
  ],
});
