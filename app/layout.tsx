import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";

export const metadata: Metadata = {
    metadataBase: new URL("https://puti-nn.ru"),
    title: "Пути-НН — предрейсовые осмотры транспортных средств",
    description:
        "ООО «Пути-НН» — профессиональный поставщик предрейсового медицинского и технического осмотра транспортных средств. Мы обеспечиваем безопасность на дорогах, соблюдение требований законодательства РФ и минимизацию рисков для бизнеса.",

    icons: {
        icon: "/logo.ico",
    },

    openGraph: {
        title: "Пути-НН — предрейсовые осмотры транспортных средств",
        description:
            "Предрейсовые медицинские и технические осмотры транспортных средств для бизнеса. Работа в соответствии с требованиями законодательства РФ.",
        url: "https://puti-nn.ru",
        siteName: "Пути-НН",
        locale: "ru_RU",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Пути-НН — предрейсовые осмотры транспортных средств",
        description:
            "Профессиональные медицинские и технические осмотры транспорта перед рейсом.",
        images: ["/logo-icon.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                <Components>{children}</Components>
            </body>
        </html>
    );
}
