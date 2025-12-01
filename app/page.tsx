"use client";
import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Main from "@/components/sections/main";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/services";
import React, { useEffect, useState } from "react";

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
            <Main geoAllowed={geoAllowed} isTargetCity={isTargetCity} />
            <About />
            <Services geoAllowed={geoAllowed} isTargetCity={isTargetCity} />
            <Reviews />
            <Contacts />
        </>
    );
}
