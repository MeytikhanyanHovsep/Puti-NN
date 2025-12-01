import Image from "next/image";
import React from "react";
import Title from "../common/title";
import Button from "../common/button";

type Props = {};

export default function About({}: Props) {
    const images: any = {
        "translate-y-[20px] max-sm:translate-y-[10px]": "about-1.jpg",
        "translate-x-[-20px] max-sm:translate-x-[-10px]": "about-2.jpg",
        "translate-x-[20px] max-sm:translate-x-[10px]": "about-4.jpg",
        "translate-y-[-20px] max-sm:translate-y-[-10px] ": "about-3.jpg",
    };
    return (
        <section
            id="about"
            className="about-cont pt-[40px] pb-[70px] max-md:py-[30px]"
        >
            <div className="container grid gap-[50px] max-lg:gap-[30px] max-lg:grid-cols-1  items-center grid-cols-2">
                <div className="grid grid-cols-2 max-lg:order-2 max-lg:mx-auto max-w-max max-h-min max-sm:gap-[20px] gap-[40px]">
                    {Object.keys(images).map((e, i) => (
                        <Image
                            key={i}
                            src={"/about/" + images[e]}
                            className={
                                "object-cover rounded-[5px] shadow-lg max-w-auto  about-image aspect-square " +
                                e
                            }
                            alt="doctor"
                            width={260}
                            height={260}
                        />
                    ))}
                </div>
                <div className="flex flex-col justify-between items-start gap-[20px]">
                    <Title>
                        <span className="primary">Как</span> мы работаем
                    </Title>
                    <p className="gray-color max-sm:mt-[-5px]">
                        ООО «Пути-НН» — профессиональный поставщик услуг
                        предрейсового медицинского и технического осмотра
                        транспортных средств. Наша миссия — обеспечение
                        безопасности на дорогах и защита интересов бизнеса через
                        строгое соблюдение требований законодательства РФ. Мы
                        понимаем, что для компаний, чья деятельность связана с
                        автотранспортом, регулярный контроль — это не просто
                        формальность, а важнейший элемент логистики,
                        корпоративной ответственности и минимизации рисков.
                        Доверяя нам организацию предрейсовых осмотров, вы
                        получаете комплексное решение, которое гарантирует
                        легальность выхода каждого вашего vehicle на линию и
                        подтверждает профессиональную пригодность водителей.
                    </p>
                    <div className="flex gap-[20px] text-[20px] font-bold">
                        <span className="min-h-full rounded-[3px] min-w-[3px] primary-bg"></span>
                        <div className="flex flex-col">
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
                            <p className="capitalize">клиенты</p>
                        </div>
                    </div>
                    <Button href="#contacts">заказать</Button>
                </div>
            </div>
        </section>
    );
}
