import tsconfig from './tsconfig.json';

tsconfig.register({
  baseUrl: tsconfig.compilerOptions.outDir,
  paths: tsconfig.compilerOptions.paths,
});
