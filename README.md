# TypeScript Project Setup

## Project Initialization

```bash
npm init -y
npm install -D typescript @types/node
npm install @aspectj/core @aspectj/common winston ramda
npm install -D @types/ramda
```

## TypeScript Configuration

```bash
npx tsc --init
```

Suggested `tsconfig.json` settings:

- `outDir`: `dist`
- `exclude`: `["node_modules", "dist", "coverage"]`

## Git Setup

```bash
git init
```

Add the following to `.gitignore`:

- `node_modules`
- `dist`
- `coverage`

## package.json Scripts

Use `&&` instead of `;` when chaining commands:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "ragul": "npx tsc && node dist/sample.js"
}
```

Run the script with:

```bash
npm run ragul
```

## Running TypeScript

- `npx tsx filename.ts` — run a TypeScript file directly
- `npx tsc && node dist/sample.js` — transpile then run
- `ts-node` — run TypeScript without transpiling first

## Libraries and Tools

- AOP: `@aspectj/core`, `@aspectj/common`
- Logger: `winston`
- Functional helpers: `ramda`

## Notes

- Use `utils/` and `utils.ts` for shared helper functions and backend/frontend integration.
- Use higher-order functions for reusable logic in `utils.ts`.
- When using decorators like `@sample`, omit empty parentheses if not required.
- Export only the symbols you need to avoid compiler issues.

## Warnings

- TypeScript files should import other TS/JS files using proper module syntax.
- Incorrect exports or unused functions can cause compile time errors.
