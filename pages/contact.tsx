import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="space-y-2 pt-2 md:pt-6 pb-8 md:space-y-5">
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 dark:border-gray-700">
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  Contact
                </h1>
              </div>
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime="2022-12-31T08:46:08+0000">
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
                  Having trouble using our tools? We're here to help! Contact us
                  for assistance and get the support you need.
                </p>
                <p>Believe me, It's not too hard to reach us!</p>
                <blockquote>
                  <p>
                    E-mail:{" "}
                    <Link href="mailto:draj123258@gmail.com">
                      draj123258[at]gmail[dot]com
                    </Link>
                  </p>
                  <p>
                    Facebook:{" "}
                    <Link href="https://facebook.com/rjatds">
                      facebook.com/rjatds
                    </Link>
                  </p>
                </blockquote>
                <p>
                  For those who are concerned about there privacy on our site:
                </p>
                <p>
                  Read here: <Link href="/privacy">Privacy Policy</Link>
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
