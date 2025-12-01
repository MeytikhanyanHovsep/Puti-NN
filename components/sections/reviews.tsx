"use client";
import React from "react";
import Title from "../common/title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";

import { Pagination } from "swiper/modules";
import Image from "next/image";
type Props = {};

export default function Reviews({}: Props) {
    const doctors: any[] = [
        {
            name: "Дмитрий",
            rating: 5,
            location: "Нижний Новгород",
            comment:
                "Приехал в офис как ИП по вопросу заключения договора на путевые листы. Все быстро и доходчиво объяснили, что и как! Прошел доп Фотоконтроль, заполнил путевой лист, направил фото диспетчеру! Все согласовали- продолжил работать с полным пакетом документов! Однозначно рекомендую парк Пути-НН, оценка 5*+++++.",
        },
        {
            name: "АЛМАЗ БЕТОН",
            rating: 5,
            location: "Саратов",
            comment:
                "Работаем с данной организацией около года. Рекомендации только положительные. Всегда всё быстро, без задержек. Проконсультируют по любому вопросу.",
        },
        {
            name: "Михаил Ветхов",
            rating: 5,
            location: "Челябинск",
            comment:
                "Ребята большие молодцы!!! Обращаюсь не первый раз, оформлял правый руль в такси, получилось чуть-чуть подольше чем обычно, т.к. японец идентифицировался только по номеру кузова, вин в принципе отсутствовал, но дожали ситуацию... На всё ушло около недели. В целом очень ответственное отношение!",
        },

        {
            name: "Анна П.",
            rating: 5,
            location: "Ярославль",
            comment:
                "Поставили в реестр машину очень быстро. Говорили что нужно подождать 3 дня, но готово было уже на следующий день. Спасибо.",
        },
        {
            name: "Алексей К.",
            rating: 5,
            location: "Екатеринбург",
            comment:
                "Заключили договор на оформление путевых листов. Персонал квалифицированный, чётко, грамотно объяснили. Рекомендую 100%",
        },
        {
            name: "Сергей Шабанов",
            rating: 5,
            location: "Уфа",
            comment:
                "Заключили договор. пока печатали договор все объяснили как правильно заполнять путёвки, угостили кофем, все понравилось, рекомендую 5+",
        },
    ];

    return (
        <section
            id="reviews"
            className="container pt-[70px] flex flex-col items-start gap-[40px] max-sm:py-[50px] max-sm:gap-[20px]"
        >
            <Title>
                <span className="primary">Отзывы</span> наших клиентов{" "}
            </Title>
            <Swiper
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                loop={true}
                modules={[Pagination]}
                className="container pb-[40px]! max-sm:pb-[30px]! cursor-grab"
            >
                {doctors.map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex p-[20px] max-sm:p-[15px] flex-col rounded-xl shadow-lg mb-[20px] overflow-hidden gap-[20px] border-[3px] border-[#ffe9c0]">
                            <div className="flex justify-between items-center ">
                                <div className="flex gap-[10px] items-center">
                                    <Image
                                        src={`/reviews/review-${i + 1}.png`}
                                        alt="doctor"
                                        width={60}
                                        className="max-w-[50px] max-sm:max-w-[40px] rounded-full aspect-square! object-cover"
                                        height={60}
                                    />
                                    <div className=" pt-0">
                                        <h5 className="font-bold max-sm:text-[16px] max-sm:mb-[-3px] text-[20px]">
                                            {e.name}
                                        </h5>
                                        <p className="gray-color text-[14px]">
                                            {e.location}
                                        </p>
                                    </div>
                                </div>
                                <p className="flex gap-[5px] text-[18px] ">
                                    {e.rating}{" "}
                                    <Star
                                        className="gold max-w-[20px] max-sm:max-w-[18px]"
                                        fill="#ffbb1d"
                                    />
                                </p>
                            </div>
                            <p className="gray-color max-sm:mt-[-7px] text-[14px]">
                                {e.comment}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
