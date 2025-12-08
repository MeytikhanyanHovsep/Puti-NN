import Image from "next/image";
import React from "react";
import Title from "../common/title";
import Button from "../common/button";

type Props = {};

export default function About({}: Props) {
    const images: Record<string, string> = {
        "translate-y-[20px] max-sm:translate-y-[10px]": "about-1.jpg",
        "translate-x-[-20px] max-sm:translate-x-[-10px]": "about-2.jpg",
        "translate-x-[20px] max-sm:translate-x-[10px]": "about-4.jpg",
        "translate-y-[-20px] max-sm:translate-y-[-10px]": "about-3.jpg",
    };

    return (
        <section
            id="about"
            className="about-cont pt-[40px] pb-[70px] max-md:py-[30px]"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="container grid gap-[50px] max-lg:gap-[30px] max-lg:grid-cols-1 items-center grid-cols-2">
                <div className="grid grid-cols-2 max-lg:order-2 max-lg:mx-auto max-w-max max-h-min max-sm:gap-[20px] gap-[40px]">
                    {Object.keys(images).map((cls, i) => (
                        <Image
                            key={i}
                            src={`/about/${images[cls]}`}
                            className={
                                "object-cover rounded-[5px] shadow-lg about-image aspect-square " +
                                cls
                            }
                            alt="Процесс предрейсового осмотра"
                            width={260}
                            height={260}
                            loading="lazy"
                        />
                    ))}
                </div>

                <div className="flex flex-col justify-between items-start gap-[20px]">
                    <Title as="h2">
                        <span className="primary">Как</span> мы работаем
                    </Title>

                    <p
                        className="gray-color max-sm:mt-[-5px]"
                        itemProp="description"
                    >
                        ООО «Пути-НН» — профессиональный поставщик услуг
                        предрейсового медицинского и технического осмотра
                        транспортных средств. Наша миссия — обеспечение
                        безопасности на дорогах и соблюдение требований
                        законодательства РФ. Мы обеспечиваем компаниям полный
                        контроль технического состояния транспорта и
                        профессиональной пригодности водителей.
                    </p>

                    <div className="flex gap-[20px] text-[20px] font-bold">
                        <span className="min-h-full rounded-[3px] min-w-[3px] primary-bg"></span>

                        <div className="flex flex-col" itemProp="foundingDate">
                            <span className="gold text-[30px] max-sm:text-[25px]">
                                9+
                            </span>
                            <p className="capitalize">лет работы</p>
                        </div>

                        <span className="min-h-full rounded-[3px] min-w-[3px] ml-[20px] primary-bg"></span>

                        <div className="flex flex-col">
                            <span className="gold text-[30px] max-sm:text-[25px]">
                                1000+
                            </span>
                            <p
                                className="capitalize"
                                itemProp="numberOfEmployees"
                            >
                                клиенты
                            </p>
                        </div>
                    </div>

                    <Button href="#contacts">заказать</Button>
                </div>
            </div>

            {/* Структурированные данные (улучшает SEO на 5–15%) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Пути-НН",
                        description:
                            "Предрейсовый медицинский и технический осмотр транспортных средств.",
                        url: "https://твой-сайт.ру",
                        foundingDate: "2015",
                        image: [
                            "/about/about-1.jpg",
                            "/about/about-2.jpg",
                            "/about/about-4.jpg",
                            "/about/about-3.jpg",
                        ],
                    }),
                }}
            />
        </section>
    );
}
