"use client";
import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Main from "@/components/sections/main";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/services";
import React, { useEffect, useState } from "react";
import Head from "next/head";

type Props = {};

export default function Home({}: Props) {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [geoAllowed, setGeoAllowed] = useState<boolean | null>(null);
    const [isTargetCity, setIsTargetCity] = useState<string | null>(null);

    const getCityName = async (lat: number, lon: number) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=ru`
            );
            const data = await response.json();

            return (
                data?.address?.city ||
                data?.address?.town ||
                data?.address?.village ||
                null
            );
        } catch (err) {
            console.error("Error fetching city name:", err);
            return null;
        }
    };

    // 1) Получаем координаты
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: any) => {
                    setGeoAllowed(true);
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    // const lat = 51.533557;
                    // const lon = 46.034257;
                    setLatitude(lat);
                    setLongitude(lon);
                },
                () => {
                    setGeoAllowed(false);
                }
            );
        } else {
            setGeoAllowed(false);
        }
    }, []);
    useEffect(() => {
        if (navigator.permissions) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then((result) => {
                    const handleChange = () => {
                        setGeoAllowed(result.state === "granted");
                    };

                    handleChange();

                    result.addEventListener("change", handleChange);

                    return () =>
                        result.removeEventListener("change", handleChange);
                });
        }
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            (async () => {
                const c = await getCityName(latitude, longitude);
                setCity(c);

                if (c) {
                    const normalized = c.toLowerCase();

                    if (normalized.includes("нижний новгород")) {
                        setIsTargetCity("новгород");
                    } else if (normalized.includes("саратов")) {
                        setIsTargetCity("саратов");
                    }
                }
            })();
        }
    }, [latitude, longitude]);

    return (
        <>
            <Head>
                {/* Базовые теги */}
                <title>
                    {isTargetCity === "новгород"
                        ? "Предрейсовые осмотры в Нижнем Новгороде — Пути-НН"
                        : isTargetCity === "саратов"
                        ? "Предрейсовые осмотры в Саратове — Пути-НН"
                        : "Пути-НН — предрейсовые осмотры транспортных средств"}
                </title>

                <meta
                    name="description"
                    content={
                        isTargetCity === "новгород"
                            ? "Предрейсовый медицинский и технический осмотр транспорта в Нижнем Новгороде. Работаем легально, быстро, с выездом."
                            : isTargetCity === "саратов"
                            ? "Предрейсовый медосмотр и техосмотр транспорта в Саратове. Лицензии, контроль, выезд."
                            : "Профессиональный предрейсовый медицинский и технический осмотр транспорта. Работаем официально."
                    }
                />

                {/* Canonical */}
                <link rel="canonical" href="https://puti-nn.ru" />

                {/* OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://puti-nn.ru" />
                <meta
                    property="og:title"
                    content={
                        isTargetCity === "новгород"
                            ? "Предрейсовые осмотры в Нижнем Новгороде"
                            : isTargetCity === "саратов"
                            ? "Предрейсовые осмотры в Саратове"
                            : "Пути-НН — предрейсовые осмотры"
                    }
                />
                <meta
                    property="og:description"
                    content="Предрейсовые медосмотры и техосмотры транспорта. Лицензии, контроль, соблюдение закона."
                />
                <meta property="og:image" content="/og-image.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Пути-НН",
                            url: "https://puti-nn.ru",
                            image: "https://puti-nn.ru/og-image.jpg",
                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "RU",
                            },
                            description:
                                "Предрейсовые медицинские и технические осмотры транспортных средств.",
                            areaServed: [
                                "Россия",
                                "Нижний Новгород",
                                "Саратов",
                            ],
                        }),
                    }}
                />
            </Head>

            <Main geoAllowed={geoAllowed} isTargetCity={isTargetCity} />
            <About />
            <Services geoAllowed={geoAllowed} isTargetCity={isTargetCity} />
            <Reviews />
            <Contacts />
        </>
    );
}
