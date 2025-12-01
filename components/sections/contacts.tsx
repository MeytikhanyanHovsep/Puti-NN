"use client";
import React, { useState } from "react";
import Title from "../common/title";
import Button from "../common/button";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { Phone, Mail, MapPin } from "lucide-react";

type Props = {};

export default function Contacts({}: Props) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.target);
        const data = {
            name: form.get("name"),
            phone: form.get("phone"),
            message: form.get("message"),
        };

        const res = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        setLoading(false);

        if (res.ok) {
            alert("Заявка отправлена!");
            e.target.reset();
        } else {
            alert("Ошибка при отправке");
        }
    };
    return (
        <section
            id="contacts"
            className="container grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[30px] max-lg:gap-[30px] w-full pb-[100px] max-md:pb-[70px] max-md:pt-0 pt-[70px]"
        >
            <ul className="flex flex-col items-start gap-[20px]">
                <li className="mb-[10px]">
                    <Title>
                        Наши <span className="primary">Контакты</span>
                    </Title>
                </li>
                <li>
                    <a
                        href="tel:+79107982890"
                        className="hover:text-[#ffbb1d] text-[18px] flex max-sm:text-[16px] items-center gap-[7px] transition-colors duration-200"
                    >
                        <Phone className="gold" width={20} />
                        +7 (910) 798-28-90
                    </a>
                </li>
                <li>
                    <a
                        href={"mailto:zakaz.puti-nn@yandex.ru"}
                        className="hover:text-[#ffbb1d] text-[18px] flex max-sm:text-[16px] items-center gap-[7px] transition-colors duration-200"
                    >
                        <Mail className="gold" width={20} />
                        zakaz.puti-nn@yandex.ru
                    </a>
                </li>
                <li>
                    <a
                        href={
                            "https://yandex.com/maps/org/puti_nn/245435456078/?ll=43.856371%2C56.266949&z=17"
                        }
                        target="_blank"
                        className="hover:text-[#ffbb1d] text-[18px] flex max-sm:text-[16px] items-center gap-[4px] transition-colors duration-200 ml-[-2px]"
                    >
                        <MapPin className="gold" width={25} />
                        г. Нижний Новгород, ул. Строкина, <br /> д. 5А, корп. 6,
                        оф. 7.
                    </a>
                </li>
                <li>
                    <a
                        href={
                            "https://2gis.ru/n_novgorod/branches/70000001026712739/firm/70000001029347780/43.885173%252C56.266814?m=43.885164%252C56.266822%252F18"
                        }
                        className="hover:text-[#ffbb1d] text-[18px] flex max-sm:text-[16px] items-center gap-[4px] transition-colors duration-200 ml-[-2px]"
                        target="_blank"
                    >
                        <MapPin className="gold" width={25} />
                        Саратов, ул. Елшанская 22А, офис 8
                    </a>
                </li>
            </ul>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col items-center max-sm:items-stretch max-lg:gap-[10px] gap-[20px]"
            >
                <Title>
                    Оставить <span className="primary">Заявку</span>
                </Title>
                <input
                    name="name"
                    type="text"
                    className="text-[18px] max-sm:text-[16px] w-full border-[3px] rounded-[10px] py-[10px] px-[15px] mt-[10px] border-[#ffe9c0]"
                    required
                    placeholder="Имя"
                />
                <input
                    name="phone"
                    type="tel"
                    className="text-[18px] max-sm:text-[16px] w-full border-[3px] rounded-[10px] py-[10px] px-[15px] border-[#ffe9c0]"
                    required
                    placeholder="Номер телефона"
                />
                <textarea
                    name="comment"
                    placeholder="Сообщение"
                    required
                    className="text-[18px] max-sm:text-[16px] h-full w-full border-[3px] rounded-[10px] py-[10px] px-[15px] border-[#ffe9c0]"
                />
                <button className="px-[50px] cursor-pointer max-md:px-[30px] max-sm:text-[15px] max-sm:border-2 max-md:py-[10px] shadow-lg text-center text-white tracking-[0.8px] capitalize primary-bg py-[15px] rounded-[7px] duration-200 transition-colors common-button border-3 border-[#30AFA7] hover:text-[#30AFA7]! font-bold">
                    {loading ? "Отправка..." : "Оставить заявку"}
                </button>
            </form>
            <div className="w-full border-[#ffe9c0] border-[3px] max-md:h-[200px] h-[400px] rounded-xl overflow-hidden">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [56.3312, 43.9485], // центр карты
                            zoom: 11,
                        }}
                        width="100%"
                        height="100%"
                    >
                        <Placemark
                            geometry={[56.3484, 43.8845]}
                            properties={{
                                balloonContent:
                                    "г. Нижний Новгород, ул. Строкина, д. 5А, корп. 6, оф. 7",
                            }}
                            options={{
                                iconColor: "#30AFA7",
                            }}
                        />

                        <Placemark
                            geometry={[56.314, 44.0126]}
                            properties={{
                                balloonContent:
                                    "г. Нижний Новгород, ул. Бурденко, д. 25, оф. 1",
                            }}
                            options={{
                                iconColor: "#30AFA7",
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
        </section>
    );
}
