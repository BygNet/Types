import { definePackage } from '@a35hie/ts-pkg'

export default definePackage({
  name: '@bygnet/types',
  version: '1.2.1',
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
  scriptPresets: ['typescript', 'prettier'],
  type: 'module',
  main: 'src/index.ts',
  files: ['dist'],
  types: 'dist/index.d.ts',
  exports: {
    '.': {
      types: './dist/index.d.ts',
    },
  },

  dependencies: {
    '@a35hie/ts-pkg': '^0.3.1',
    prettier: '^3.8.1',
  },
})
