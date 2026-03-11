import React from "react";
import { AppIcon } from "../AppIcon";

const services = [
  {
    title: "Виды доставок",
    items: [
      {
        title: "Автомобильные перевозки",
        description: "быстрая и безопасная доставка грузов",
      },
      {
        title: "Железнодорожные перевозки",
        description:
          "экономичный и экологически чистый способ перевозки грузов",
      },
      {
        title: "Морские перевозки",
        description: "",
      },
    ],
  },
  {
    title: "Складское хранение",
    items: [
      {
        title: "Хранение грузов в современных складских помещениях",
        description: "",
      },
      {
        title: "Обработка грузов, включая упаковку, маркировку и сортировку",
        description: "",
      },
      {
        title:
          "Контроль качества и обеспечение сохранности грузов, страхование",
        description: "",
      },
    ],
  },
  {
    title: "Таможенное оформление",
    items: [
      {
        title: "Подготовка необходимых документов для таможенного оформления",
        description: "",
      },
      {
        title: "Оплата таможенных пошлин и сборов",
        description: "",
      },
      {
        title: "Соблюдение всех таможенных требований и правил",
        description: "",
      },
    ],
  },
];

export default function LogisticsServicesSection() {
  return (
    <section className="container py-16">
      <h2 className="text-2xl font-semibold mb-2 text-center">
        Логистические услуги
      </h2>
      <p className="text-center text-base text-gray-600 dark:text-gray-300 mb-10">
        Осуществляем доставку по территории России
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((category) => (
          <div
            key={category.title}
            className="rounded-none bg-white dark:bg-gray-900 shadow-md p-6"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <div className="flex items-start gap-3">
                    <AppIcon
                      type="check"
                      className="w-5 h-5 text-brand dark:text-gray-400 mt-0.5"
                    />
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {item.title}
                    </span>
                  </div>
                  {item.description ? (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
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
