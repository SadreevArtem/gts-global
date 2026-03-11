import React from "react";
import clsx from "clsx";
import { Link, usePathname } from "@/i18n/navigation";
import { HeaderMenuItem } from "../Hamburger/static";
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
  className = "",
}) => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const paths = pathname.split("/");
  const listItemClassName = "mb-1 last:mb-0 py-2 px-4 rounded-2";

  return (
    <div
      className={clsx(
        "fixed right-0 left-0 bottom-0 z-40 top-[64px] dark:bg-black/40 bg-white/70 backdrop-blur-md",
        className,
      )}
    >
      <div className="container max-h-full pt-1 pb-3 overflow-y-auto flex flex-col gap-4">
        <div className="mt-2 flex justify-between items-center">
          <div>
            <nav className="flex gap-4 text-white font-medium sm:flex-row pl-4">
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
          </div>
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
      </div>
    </div>
  );
};
