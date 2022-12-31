import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`bg-white text-black antialiased dark:bg-gray-900 dark:text-white scroll-smooth`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}