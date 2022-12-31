import { NextSeo } from "next-seo";
import React from "react";

const Contact = () => {
  return (
    <div className="space-y-2 pt-2 md:pt-6 pb-8 md:space-y-5">
      <NextSeo
        title="About us"
        description="Know about PixiBoom and how they operate this free AI-Powered Tool for creators"
      />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 dark:border-gray-700">
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  About Us
                </h1>
              </div>
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime="2022-12-31T08:48:08+0000">
                      Dec 31, 2022
                    </time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark prose-lg">
                <p>
                  PixiBoom's is free website and it provides AI-powered tools
                  for creators, without collecting any sort of personal user
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
