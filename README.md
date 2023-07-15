This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run the development server:

```bash
pnpm dev
```

As you run this project it automatically generates types from i18n which watches for changes inside `i18n/en` folder.
It is used [https://github.com/ivanhofer/typesafe-i18n](typesafe-i18n)

You can manually run type generation by running:

```bash
pnpm run codegen:i18n
```

Open [http://dev.app.io:3000](http://dev.app.io:3000) with your browser to see the result.

You can start editing the page by modifying `pages/*`. The page auto-updates as you edit the file.

## Format with prettier

```bash
pnpm run format
```

## Check for errors

Runs tsc cli for project and check if there are some errors based on tsconfig.json file which is already configured.

```bash
pnpm run lint:tsc
```

## Unit test

Jest Testing Framework

```bash
pnpm run test
```

```bash
pnpm run test:cov
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
