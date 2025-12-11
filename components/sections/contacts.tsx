"use client";
import React, { useState } from "react";
import Title from "../common/title";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import SendForm from "./send-form";

type Props = {};

const points = [
    {
        coords: [56.3484, 43.8845],
        content: "г. Нижний Новгород, ул. Строкина, д. 5А, корп. 6, оф. 215",
    },
    {
        coords: [51.5517, 46.0268],
        content: "г. Саратов, ул. Елшанская, д. 22А, офис 8",
    },
];

export default function Contacts({}: Props) {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.message) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/send-to-email", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setForm({ name: "", phone: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                console.error("API Error:", result.message);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
            console.log(JSON.stringify(result));
        } catch (error) {
            console.error("Fetch Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
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
                        href={"mailto:zakaz.puti-nn@yandex.ru"}
                        className="hover:text-[#ffbb1d] text-[18px] max-md:text-[16px] flex items-center gap-[7px] transition-colors duration-200"
                    >
                        <Mail className="gold" width={20} />
                        zakaz.puti-nn@yandex.ru
                    </a>
                </li>
                <li>
                    <a
                        href={
                            "https://yandex.ru/maps/?ll=43.8845%2C56.3484&z=16&pt=43.8845,56.3484,pm2rdm"
                        }
                        target="_blank"
                        className="hover:text-[#ffbb1d] text-[18px] max-md:text-[16px] flex items-center gap-[4px] transition-colors duration-200 ml-[-2px]"
                    >
                        <MapPin className="gold min-w-[25px]" width={25} />
                        г. Нижний Новгород, ул. Строкина, д. 5А, корп. 6, оф.
                        215
                    </a>
                </li>
                <li>
                    <a
                        href="tel:+79107982890"
                        className="hover:text-[#ffbb1d] text-[18px] max-md:text-[16px] flex items-center gap-[7px] transition-colors duration-200"
                    >
                        <Phone className="gold" width={20} />
                        +7 (910) 798-28-90
                    </a>
                </li>
                <li>
                    <a
                        href={
                            "https://yandex.ru/maps/?ll=46.0268%2C51.5517&z=16&pt=46.0268,51.5517,pm2rdm"
                        }
                        className="hover:text-[#ffbb1d] text-[18px] max-md:text-[16px] flex items-center gap-[4px] transition-colors duration-200 ml-[-2px]"
                        target="_blank"
                    >
                        <MapPin className="gold" width={25} />
                        г. Саратов, ул. Елшанская 22А, офис 8
                    </a>
                </li>
                <li>
                    <a
                        href="tel:+79049046259"
                        className="hover:text-[#ffbb1d] text-[18px] max-md:text-[16px] flex items-center gap-[7px] transition-colors duration-200"
                    >
                        <Phone className="gold" width={20} />
                        +7 (904) 904-62-59
                    </a>
                </li>
                <li>
                    <div className="flex gap-[10px]">
                        <a target="blank" href="http://vk.com/putevoy_list">
                            <Image
                                src="/f-vk.png"
                                alt="VK"
                                width={35}
                                height={35}
                            />
                        </a>
                        <a target="blank" href="https://wa.me/79101247443">
                            <Image
                                src="/f-wa.png"
                                alt="VK"
                                width={35}
                                height={35}
                            />
                        </a>
                        <a target="blank" href="http://t.me/putevoy_list">
                            <Image
                                src="/f-tg.png"
                                alt="VK"
                                width={35}
                                height={35}
                            />
                        </a>
                    </div>
                </li>
            </ul>
            <SendForm />
            <div className="w-full border-[#ffe9c0] border-[3px] max-md:h-[200px] h-[400px] rounded-xl overflow-hidden">
                <YMaps>
                    <Map
                        defaultState={{ zoom: 5, center: [54, 45] }} // начальные значения
                        width="100%"
                        height="500px"
                        instanceRef={(mapInstance) => {
                            if (mapInstance) {
                                const bounds = points.map((p) => p.coords);
                                mapInstance.setBounds(bounds, {
                                    checkZoomRange: true,
                                    zoomMargin: [70, 70],
                                });
                            }
                        }}
                    >
                        {points.map((p, i) => (
                            <Placemark
                                key={i}
                                geometry={p.coords}
                                properties={{ balloonContent: p.content }}
                                options={{ iconColor: "#30AFA7" }}
                            />
                        ))}
                    </Map>
                </YMaps>
            </div>
        </section>
    );
}
