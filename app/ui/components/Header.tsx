"use client";
import React, { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Hamburger } from "./Hamburger";
import { HEADER_MENU } from "./Hamburger/static";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslations } from "next-intl";

export const Header: React.FC = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const t = useTranslations("Header");

  const onOpen = () => {
    setHamburgerActive(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setHamburgerActive(false);
    document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    const updateScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add("header-scroll");
      } else {
        header?.classList.remove("header-scroll");
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className="fixed top-0 z-30 w-full bg-white/70 backdrop-blur-md p-4 transition-colors duration-300 dark:bg-black/40 md:p-5">
      <div className={"container flex items-center justify-between min-h-6"}>
        <div className="flex items-center gap-2.5 max-lg:hidden">
          <div className="flex gap-4">
            <p className="text-foreground">GTS-Global</p>
          </div>
        </div>

        <div className="max-md:hidden xl:text-[16px] lg:px-8 px-2 py-2 text-foreground">
          <ul className="flex max-lg:text-sm items-center gap-[55px]">
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/"}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/supplies"}
              >
                {t("nav.supplies")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/manufacturers"}
              >
                {t("nav.manufacturers")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/logistics"}
              >
                {t("nav.logistics")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/about"}
              >
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/contacts"}
              >
                {t("nav.contacts")}
              </Link>
            </li>
          </ul>
        </div>
        <nav className="flex items-center gap-4 max-md:w-full">
          <ul className="flex items-center gap-7 max-md:justify-between max-md:w-full">
            {/* Desktop theme toggle */}
            <li className="max-md:hidden">
              <ThemeToggle />
            </li>
            <li className="max-md:hidden">
              <nav className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                <Link href="/" locale="en">
                  En
                </Link>
                <Link href="/" locale="ru">
                  Ru
                </Link>
                <Link href="/" locale="zh">
                  中文
                </Link>
              </nav>
            </li>

            {/* Mobile logo + theme toggle */}
            {!hamburgerActive ? (
              <li className="md:hidden">
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                </div>
              </li>
            ) : (
              <li className="">
                <div className="flex items-center gap-2.5 ">
                  <div className="xl:text-[20px] text-[16px]">
                    <p className="text-foreground">г. Тюмень</p>
                    <p className="text-foreground">ул. Гнаровской, д. 6</p>
                  </div>
                </div>
              </li>
            )}
            <li className={`self-center ml-4 md:hidden`}>
              <Hamburger
                className="md:hidden"
                menu={HEADER_MENU}
                active={hamburgerActive}
                onOpen={onOpen}
                onClose={onClose}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
