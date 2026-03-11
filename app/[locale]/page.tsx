import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Services from "../ui/components/Services/Services";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  return (
    <main className="font-sans">
      <section
        className={[
          "relative isolate overflow-hidden",
          "min-h-[85vh]",
          "flex items-stretch",
          "bg-cover bg-center bg-no-repeat",
          "bg-[url('/lightbg.jpeg')] dark:bg-[url('/darkbg.jpeg')]",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-black/35 dark:bg-black/55" />
        <div className="container relative flex w-full items-center py-24 pt-32 sm:py-28 sm:pt-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <Services />

      <section className="container py-10">
        <nav className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link href="/" locale="en">
            English
          </Link>
          <Link href="/" locale="ru">
            Русский
          </Link>
          <Link href="/" locale="zh">
            中文
          </Link>
        </nav>
      </section>
    </main>
  );
}
