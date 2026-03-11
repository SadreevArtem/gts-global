import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const services = [
  {
    title: "Нефтегазовое оборудование",
    img: "/services/neft.jpeg",
    id: "neft",
  },
  { title: "Судовое оборудование", img: "/services/ship.jpeg", id: "ship" },
  {
    title: "Электрическое оборудование",
    img: "/services/electric.jpeg",
    id: "electric",
  },
  { title: "Трубная продукция", img: "/services/pipes.svg", id: "pipes" },
  {
    title: "Насосно - компрессорное оборудование",
    img: "/services/pumps.svg",
    id: "pumps",
  },
  {
    title: "Трубопроводная арматура и соединительные детали",
    img: "/services/fittings.svg",
    id: "fittings",
  },
];

export default async function Services() {
  const t = await getTranslations("Services");

  return (
    <section className="container py-16">
      <h2 className="text-2xl font-semibold mb-8">{t("title")}</h2>
      <div className="border-b-2 border-gray-400 mb-8 w-[70%] opacity-15"></div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.id}
            className="h-72 flex flex-col rounded-none overflow-hidden bg-white dark:bg-gray-900 shadow-md transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex-[0_0_60%] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={s.img}
                alt={t(`items.${s.id}`)}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 transform hover:scale-[1.03]"
              />
            </div>

            <div className="flex-1 p-4 flex items-center justify-center">
              <h3 className="text-center text-lg font-medium text-gray-800 dark:text-gray-100">
                {t(`items.${s.id}`)}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
