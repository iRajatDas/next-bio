import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const menuItems = [
  {
    title: "Tools",
    destPath: "/tools",
  },
  {
    title: "Blog",
    destPath: "/blog",
  },
  {
    title: "Contact",
    destPath: "/contact",
  },
  {
    title: "About",
    destPath: "/about",
  }
]

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    isMenuOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 ring-1 ring-opacity-0 ring-gray-200 hover:bg-gray-50 
        hover:ring-opacity-100 transition-all duration-200 ease-in-out dark:ring-gray-700 dark:hover:bg-gray-700"
          aria-label="Toggle Light Mode"
          title="Toggle Light Mode"
          type="button"
        >
          <SunIcon
            className="w-6 h-6 text-yellow-500 "
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button
          className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 ring-1 ring-opacity-0 ring-gray-200 hover:bg-gray-50 
          hover:ring-opacity-100 transition-all duration-200 ease-in-out dark:ring-red-200 dark:hover:bg-red-900"
          aria-label="Toggle Dark Mode"
          title="Toggle Dark Mode"
          type="button"
        >
          <MoonIcon
            className="w-6 h-6 text-gray-900"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  const handleMenuToggle = () => isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);

  return (
    <header className="flex items-center justify-between py-5 md:py-10">
      <div>
        <Link aria-label="PixiBoom" href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">{/* LOGO HERE */}</div>
            <div className="h-6 text-2xl font-semibold sm:block">PixiBoom</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {menuItems.map((menuItem, index) =>
            <Link
              key={index}
              href={menuItem.destPath}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
              {menuItem.title}
            </Link>
          )}
        </div>
        {renderThemeChanger()}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={handleMenuToggle}
            className="ml-1 mr-1 h-8 w-8 rounded py-1"
            aria-label="Toggle Menu"
          >
            <Bars3Icon className="text-gray-900 dark:text-gray-100" />
          </button>
          <div className={`fixed top-0 left-0 z-10 h-full w-full backdrop-blur-sm transform bg-white/90 duration-300 ease-in-out dark:bg-gray-800 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-5 mt-6 h-8 w-8 rounded"
                aria-label="Close Menu"
                onClick={handleMenuToggle}
              >
                <XMarkIcon className="text-gray-900 dark:text-gray-100" />
              </button>
            </div>
            <nav className="fixed mt-8 h-full">
              {menuItems.map((menuItem, index) =>
                <div className="px-12 py-4" key={index}>
                  <Link
                    href={menuItem.destPath}
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
                    {menuItem.title}
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
