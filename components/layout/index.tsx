// import custom components
import React, { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

interface Props {
  children?: ReactNode;
  className?: string;
}
export default function Layout({ children, className }: Props) {
  return (
    <div className={`mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 ${className}`}>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
