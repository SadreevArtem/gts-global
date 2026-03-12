import React from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  const linkClass =
    "text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition";

  return (
    <footer className="bg-background text-gray-700 dark:text-gray-300">
      <div className="container py-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("company.name")}
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              {t("company.description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide">
              {t("navigation.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className={linkClass}>
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("navigation.services")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("navigation.manufacturers")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("navigation.logistics")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("navigation.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide">
              {t("services.title")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className={linkClass}>
                  {t("services.equipment")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("services.logistics")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("services.storage")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("services.customs")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide">
              {t("contact.title")}
            </h3>
            <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>{t("contact.address")}</div>
              <div>{t("contact.phone")}</div>
              <div>{t("contact.email")}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              © {year} {t("company.name")}. {t("bottom.copyright")}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className={linkClass}>
                {t("bottom.privacy")}
              </Link>
              <Link href="#" className={linkClass}>
                {t("bottom.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
