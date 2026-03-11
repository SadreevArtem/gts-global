import React from "react";
import { getTranslations } from "next-intl/server";
import { AppIcon } from "../AppIcon";

const manufacturers = [
  { id: "nov" },
  { id: "siemens" },
  { id: "gutor" },
  { id: "cummins" },
  { id: "waukesha" },
  { id: "mtu" },
  { id: "caterpillar" },
  { id: "cameron" },
  { id: "tpco" },
];

export default async function ManufacturersSection() {
  const t = await getTranslations("Manufacturers");

  return (
    <section className="py-16 bg-[url('/bg-white.jpeg')] dark:bg-[url('/bg-black.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6 text-brand dark:text-black">
          {t("title")}
        </h2>
        <div className="border-b-2 border-gray-400 mb-12 w-[70%] opacity-15" />

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
          {manufacturers.map((m) => (
            <article
              key={m.id}
              className="rounded-none bg-white dark:bg-gray-900 shadow-md p-4 py-6 flex flex-col justify-around"
            >
              <div className="flex items-center gap-3">
                <AppIcon
                  type="arrow-right"
                  className="w-5 h-5 text-brand dark:text-gray-400"
                />
                <h3 className="text-sm md:text-lg font-medium text-brand dark:text-gray-100">
                  {t(`items.${m.id}.name`)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {t(`items.${m.id}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
