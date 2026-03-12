"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="relative py-16 bg-[url('/bg-white.jpeg')] dark:bg-[url('/bg-black.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 " />
      <div className="container relative">
        <h2 className="text-2xl font-semibold mb-2 text-brand">{t("title")}</h2>
        <div className="border-b-2 border-gray-400 mb-12 w-[70%] opacity-15" />

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-1">
          <div className="rounded-none bg-white/30 dark:bg-gray-900/80 shadow-md md:p-12 p-4 flex flex-col md:flex-row md:gap-4">
            <div className="md:w-[40%]">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
                {t("form.title")}
              </h3>
              <div className="border-b-2 border-white md:mb-12 mb-2 w-[70%] opacity-15" />
            </div>
            <form
              className="space-y-4 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder={t("form.phonePlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {t("form.message")}
                </label>
                <textarea
                  className="w-full resize-none rounded-md border border-gray-300 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/40"
                >
                  {t("form.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
