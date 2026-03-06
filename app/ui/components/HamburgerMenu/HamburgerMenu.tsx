import React from "react";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/navigation";
import { HeaderMenuItem } from "../Hamburger/static";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslations } from "next-intl";

type Props = {
  menu: HeaderMenuItem[];
  onClose: () => void;
  handleOpen: () => void;
  className?: string;
};

export const HamburgerMenu: React.FC<Props> = ({
  menu,
  onClose,
  handleOpen,
  className = "",
}) => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const paths = pathname.split("/");
  const listItemClassName = "mb-1 last:mb-0 py-2 px-4 rounded-2";

  return (
    <div
      className={clsx(
        "fixed right-0 left-0 bottom-0 z-40 top-[83px] bg-black opacity-1",
        className,
      )}
    >
      <div className="container max-h-full pt-1 pb-3 overflow-y-auto flex flex-col gap-4">
        <div className="mt-2 flex justify-end">
          <ThemeToggle />
        </div>
        <nav>
          <ul className="pt-4 font-thin">
            <li
              className={clsx(listItemClassName, {
                "bg-bgOpacity": paths[1] === "",
              })}
            >
              <Link
                href="/"
                className="block w-full text-[24px] font-semibold  text-white"
                onClick={onClose}
              >
                {t("nav.home")}
              </Link>
            </li>
            {menu.map((item) => (
              <li
                key={item.key}
                className={clsx(listItemClassName, {
                  "bg-bgOpacity": pathname.includes(`${item.href}`),
                })}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "block w-full text-[24px] font-semibold text-white ",
                  )}
                  onClick={onClose}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="shadow-button mt-12 w-full rounded-[5px] border border-transparent bg-[#3e3d3d] p-4 px-[86px] text-white transition hover:border-white max-md:text-[14px] xl:p-6 xl:px-[100px]"
          onClick={handleOpen}
        >
          Записаться онлайн
        </button>

        <Link
          href={"https://t.me/"}
          className="shadow-button w-full rounded-[5px] border border-white bg-black p-4 text-center text-white transition max-md:text-[14px] xl:p-6 xl:px-[100px]"
          onClick={() => {}}
        >
          Telegram-канал
        </Link>
        <Link
          href={"https://wa.me/"}
          className="shadow-button w-full rounded-[5px] border border-white bg-black p-4 text-center text-white transition max-md:text-[14px] xl:p-6 xl:px-[100px]"
          onClick={() => {}}
        >
          Написать администратору
        </Link>

        <div className="self-center mt-2 font-thin text-[22px] flex flex-col gap-4">
          <Link
            href={`tel:+`}
            className="block text-center text-white hover:text-hover"
          >
            +7 (922) 004-69-35
          </Link>
          <ul className="flex self-center gap-4">
            <li className="">
              <Link className="header-link relative " href="https://t.me/">
                <Image
                  src={"/images/telegram.svg"}
                  alt=""
                  className="hover:opacity-50"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="">
              <Link className="header-link relative" href={"https://wa.me/"}>
                <Image
                  src={"/images/whatsapp.svg"}
                  alt=""
                  className="hover:opacity-50"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li className="">
              <Link className="header-link relative" href={`tel:+`}>
                <Image
                  src={"/images/call.svg"}
                  alt=""
                  width={30}
                  height={30}
                  className="hover:opacity-50"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
