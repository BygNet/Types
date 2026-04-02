import { BunPm, definePackage } from '@opk/ts-pkg'

export default definePackage({
  pm: BunPm,
  name: '@bygnet/types',
  version: '1.6.1',
  description:
    "Byg Platform's types for posts, images, and more, for Byg devs and the community.",
  keywords: ['social-network', 'typescript', 'types', 'byg'],
  license: 'Apache-2.0',
  author: {
    name: 'ash',
    email: 'ash@a35.dev',
    url: 'https://a35.dev',
  },

  repository: {
    type: 'git',
    url: 'git+https://github.com/BygNet/Types.git',
  },
  scriptPresets: ['prettier'],
  scripts: {
    build: 'tsdown',
    dev: 'tsdown --watch',
    typecheck: 'tsc --noEmit',
  },
  type: 'module',
  main: 'src/index.ts',
  files: ['dist'],
  types: 'dist/index.d.mts',
  exports: {
    '.': {
      types: './dist/index.d.mts',
    },
  },

  devDependencies: {
    '@opk/ts-pkg': '^0.6.1',
    prettier: '^3.8.1',
    tsdown: '^0.21.7',
  },
})
