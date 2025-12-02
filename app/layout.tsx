import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";

export const metadata: Metadata = {
    title: "Пути-НН — предрейсовые осмотры транспортных средств",
    description:
        "ООО «Пути-НН» — профессиональный поставщик предрейсового медицинского и технического осмотра транспортных средств. Мы обеспечиваем безопасность на дорогах, соблюдение требований законодательства РФ и минимизацию рисков для бизнеса.",
    icons: "/logo.ico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Components>{children}</Components>
            </body>
        </html>
    );
}
