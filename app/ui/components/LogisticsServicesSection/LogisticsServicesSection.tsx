import React from "react";
import { getTranslations } from "next-intl/server";
import { AppIcon } from "../AppIcon";

const categories = [
  {
    id: "deliveryTypes",
    items: [{ id: "auto" }, { id: "rail" }, { id: "marine" }],
  },
  {
    id: "warehousing",
    items: [{ id: "storage" }, { id: "handling" }, { id: "quality" }],
  },
  {
    id: "customs",
    items: [{ id: "docs" }, { id: "duties" }, { id: "compliance" }],
  },
];

export default async function LogisticsServicesSection() {
  const t = await getTranslations("LogisticsServices");

  return (
    <section className="container py-16">
      <h2 className="text-2xl font-semibold mb-2 text-center">{t("title")}</h2>
      <p className="text-center text-base text-gray-600 dark:text-gray-300 mb-10">
        {t("subtitle")}
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-none bg-white dark:bg-gray-900 shadow-md p-6"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
              {t(`categories.${category.id}.title`)}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.id} className="flex flex-col gap-1">
                  <div className="flex items-start gap-3">
                    <AppIcon
                      type="check"
                      className="w-5 h-5 text-brand dark:text-gray-400 mt-0.5"
                    />
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {t(`categories.${category.id}.items.${item.id}.title`)}
                    </span>
                  </div>
                  {t(
                    `categories.${category.id}.items.${item.id}.description`,
                  ) ? (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t(
                        `categories.${category.id}.items.${item.id}.description`,
                      )}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
