"use client";
import React from "react";
import Head from "next/head";
import Button from "../common/button";
import Image from "next/image";

type Props = {
    geoAllowed: boolean | null;
    isTargetCity: string | null;
};

export default function Main({ geoAllowed, isTargetCity }: Props) {
    // Динамический SEO текст
    const seoTitle =
        isTargetCity && geoAllowed
            ? `Предрейсовые осмотры в ${
                  isTargetCity === "новгород" ? "Нижнем Новгороде" : "Саратове"
              } — законно и быстро`
            : geoAllowed
            ? "Онлайн оформление услуг — быстро и удобно"
            : "Предрейсовые осмотры и сопровождение клиентов";

    const seoDescription =
        isTargetCity && geoAllowed
            ? `Предрейсовые и медицинские осмотры в ${
                  isTargetCity === "новгород" ? "Нижнем Новгороде" : "Саратове"
              }. Быстрое оформление, без очередей и лишней бюрократии.`
            : geoAllowed
            ? "Онлайн оформление и консультации без визита в офис. Без ожиданий, удобно и понятно."
            : "Помогаем оформить услуги и пройти предрейсовые осмотры независимо от вашего местоположения.";

    const seoKeywords = [
        "предрейсовые осмотры",
        "медосмотр водителей",
        "врач перед рейсом",
        "оформление путевых листов",
        "Нижний Новгород медосмотры",
        "Саратов медосмотры",
        "онлайн оформление услуг",
    ].join(", ");

    const mainImage = "/main.jpg";

    return (
        <>
            <main className=" bg-linear-to-b pt-[150px] pb-[70px] max-md:pt-[100px] max-md:pb-[40px] from-[#30afa626] to-white">
                <div className="container  flex items-center justify-between max-md:flex-col max-md:gap-[30px] max-lg:gap-[50px] gap-[80px]">
                    <div className="flex max-w-[560px] flex-col items-start gap-[20px] ">
                        <h3 className="text-[45px] max-md:text-[33px] lg:min-w-[380px] font-bold leading-tight">
                            {isTargetCity && geoAllowed && (
                                <>
                                    Предрейсовые{" "}
                                    {isTargetCity == "новгород" ? null : <br />}{" "}
                                    осмотры в{" "}
                                    <span className="primary">
                                        {isTargetCity == "новгород"
                                            ? "Нижнем Новгороде"
                                            : "Саратове"}
                                    </span>
                                    . <br />
                                    <span className=" text-[40px]">
                                        Законно! Быстро! Просто!
                                    </span>
                                </>
                            )}
                            {!isTargetCity && geoAllowed && (
                                <>
                                    Все услуги обслуживания теперь возможны{" "}
                                    <span className="primary">Онлайн</span>
                                </>
                            )}
                            {!geoAllowed && (
                                <>
                                    Забота о клиентах, независимо от вашего{" "}
                                    <span className="primary">
                                        Местонахождения
                                    </span>
                                </>
                            )}
                        </h3>
                        <p className="mb-[20px] max-md:mb-[10px] gray-color">
                            {isTargetCity &&
                                geoAllowed &&
                                "Никаких долгих маршрутов, всё находится рядом. Приходите, и мы спокойно оформим всё, что вам требуется, без лишнего давления и суеты."}
                            {!isTargetCity &&
                                geoAllowed &&
                                "Вы можете пройти оформление, получить консультации и решить рабочие вопросы удалённо. Всё сделано так, чтобы вы тратили минимум времени и всё получали там, где удобно."}
                            {!geoAllowed &&
                                "Мы всегда остаёмся на связи, объясняем всё понятным языком и помогаем оформить услуги так, чтобы вам было спокойно и ясно, где бы вы ни находились."}
                        </p>
                        <Button href="#contacts">заказать сейчас</Button>
                    </div>

                    <div className="relative z-1 mt-[30px] mx-[30px] max-md:mx-[15px] ">
                        <span className="absolute rounded-[5px] top-[30px] max-md:left-[15px] max-md:top-[15px] z-[-1] left-[30px] max-md:rounded-br-[85px] rounded-br-[100px] max-md:rounded-tl-[85px] rounded-tl-[100px] w-full h-full light-primary-bg shadow-lg "></span>
                        <span className="absolute rounded-[5px] max-md:right-[15px] max-md:bottom-[15px] bottom-[30px] z-[-1] right-[30px] max-md:rounded-br-[85px] rounded-br-[100px] max-md:rounded-tl-[85px] rounded-tl-[100px] w-full h-full light-gold-bg"></span>

                        <Image
                            src={mainImage}
                            className="object-cover rounded-[5px] z-10 rounded-br-[75px] shadow-lg rounded-tl-[75px] main-image max-md:max-w-full max-lg:max-w-[300px] max-w-[400px] aspect-square"
                            alt="doctor"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
