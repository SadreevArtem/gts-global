import React from "react";
import { getTranslations } from "next-intl/server";
import { AppIcon } from "../AppIcon";

const advantages = [
  { id: "certificates" },
  { id: "quality" },
  { id: "deadlines" },
  { id: "service" },
  { id: "payment" },
  { id: "warranty" },
];

export default async function AdvantagesSection() {
  const t = await getTranslations("Advantages");

  return (
    <section className="relative py-16 bg-[url('/lightbg.jpeg')] dark:bg-[url('/darkbg.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 backdrop-blur-sm" />
      <div className="container relative">
        <h2 className="text-2xl font-semibold mb-2 text-center text-white">
          {t("title")}
        </h2>
        <p className="text-center text-base text-white/80 mb-10 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => (
            <div
              key={adv.id}
              className="relative rounded-none bg-white/90 dark:bg-gray-900/80 shadow-md p-6"
            >
              <div className="flex items-start gap-3">
                <AppIcon
                  type="check"
                  className="w-5 h-5 text-brand dark:text-gray-300 mt-1"
                />
                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    {t(`items.${adv.id}.title`)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {t(`items.${adv.id}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
