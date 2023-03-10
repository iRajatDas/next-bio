import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import Layout from "@components/layout";
import SEO from '../next-seo.config';
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import Breadcrumb from "@components/Breadcrumb";
import BreadcrumbItem from "@components/BreadcrumbItem";
import { TBreadcrumb } from "types";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const isHomeRoute = router.asPath === "/" ? true : false;
  const [breadcrumbs, setBreadcrumbs] = useState<TBreadcrumb>();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: (path.charAt(0).toUpperCase() + path.slice(1)).replaceAll('-', ' '),
      };
    });
    setBreadcrumbs(breadcrumbs);

  }, [router.asPath]);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout className={`${inter.variable} font-sans`}>
        <>
          {!isHomeRoute && <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb) => (
                <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
                  {breadcrumb.label}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>}
        </>
        <Component {...pageProps} />
        <DefaultSeo {...SEO} />
        <Analytics mode={'production'} />
      </Layout>
    </ThemeProvider>
  );
}
