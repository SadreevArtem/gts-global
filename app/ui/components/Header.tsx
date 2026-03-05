"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { Hamburger } from "./Hamburger";
import { HEADER_MENU } from "./Hamburger/static";
import { ThemeToggle } from "./ThemeToggle";

export const Header: React.FC = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

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
    <header className="fixed top-0 z-30 w-full bg-transparent p-4 transition-colors duration-300 md:p-5">
      <div className={"container flex items-center justify-between min-h-6"}>
        <div className="flex items-center gap-[10px] max-lg:hidden">
          <div className="flex gap-4">
            <p className="text-foreground">GTS-Global</p>
          </div>
        </div>

        <div className="max-md:hidden xl:text-[20px] lg:px-8 px-2 py-2 text-foreground">
          <ul className="flex gap-[55px] max-lg:text-sm items-center">
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/"}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/programs"}
              >
                Программы
              </Link>
            </li>
            <li>
              <Link href="/" className="relative block shrink-0">
                <Image
                  src={"/images/logo.svg"}
                  className="h-auto w-auto md:h-[74px]"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/masters"}
              >
                Мастера
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-foreground/70"
                href={"/vacancies"}
              >
                Вакансии
              </Link>
            </li>
          </ul>
        </div>
        <nav className="flex items-center gap-4 max-md:w-full">
          <ul className="flex gap-[28px] items-center max-md:justify-between max-md:w-full">
            <li className="max-md:hidden">
              <ThemeToggle />
            </li>
            <li className="max-md:hidden">
              <Link className="header-link relative" href="https://t.me/+79220046935">
                <Image
                  src={"/images/telegram.svg"}
                  alt=""
                  className="hover:opacity-50"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="max-md:hidden">
              <Link
                className="header-link relative"
                href={"https://wa.me/79220046935"}
              >
                <Image
                  src={"/images/whatsapp.svg"}
                  alt=""
                  className="hover:opacity-50"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="max-md:hidden">
              <Link className="header-link relative" href={`tel:+79220046935`}>
                <Image
                  src={"/images/call.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="hover:opacity-50"
                />
              </Link>
            </li>
            {!hamburgerActive ? (
              <li className="md:hidden">
                <Link href="/" className="relative block shrink-0">
                  <Image
                    src={"/images/logo.svg"}
                    className="h-auto w-auto md:h-[44px]"
                    alt="logo"
                    width={43}
                    height={64}
                  />
                </Link>
              </li>
            ) : (
              <li className="">
                <div className="flex items-center gap-[10px] ">
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
