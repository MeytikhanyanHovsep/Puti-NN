import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

type Props = { menuItems: any };

export default function Footer({ menuItems }: Props) {
    return (
        <footer className="light-primary-bg py-[60px] max-sm:pt-[40px]">
            <div className="container max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[40px] grid grid-cols-3 justify-between">
                <ul className="flex flex-col gap-[10px]">
                    <li className="flex items-center gap-[10px]">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={60}
                            className="max-md:max-w-[50px] object-contain"
                            height={60}
                        />
                        <Link
                            href="/"
                            className="primary max-sm:text-[22px] text-[25px] font-bold"
                        >
                            Пути-НН
                        </Link>
                    </li>
                    <li className="gray-color min-w-[308px]">
                        Уверенность рождается от надежности! <br /> Пути-НН - с
                        нами надёжно!
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
                    <li className="text-[gray] text-[14px] mt-[5px]">
                        Пути-НН 2018-2025
                    </li>
                </ul>
                <ul className="grid gap-[10px] max-w-min mx-auto max-sm:mx-0">
                    <li className="text-[18px] mb-[10px] font-bold primary">
                        Разделы
                    </li>
                    {Object.keys(menuItems).map((e, i) => (
                        <li key={i}>
                            <a
                                href={"#" + e}
                                className="hover:text-[#ffbb1d] transition-colors duration-200"
                            >
                                {menuItems[e]}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col items-start gap-[10px]">
                    <li className="text-[18px] mb-[10px] font-bold primary">
                        Контакты
                    </li>
                    <li>
                        <a
                            href={"mailto:zakaz.puti-nn@yandex.ru"}
                            className="hover:text-[#ffbb1d] flex items-center gap-[7px] transition-colors duration-200"
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
                            className="hover:text-[#ffbb1d] flex items-center gap-[4px] transition-colors duration-200 ml-[-2px]"
                        >
                            <MapPin className="gold" width={25} />
                            г. Нижний Новгород, ул. Строкина, д. 5А, корп. 6,
                            оф. 215
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+79107982890"
                            className="hover:text-[#ffbb1d] flex items-center gap-[7px] transition-colors duration-200"
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
                            className="hover:text-[#ffbb1d] flex items-center gap-[4px] transition-colors duration-200 ml-[-2px]"
                            target="_blank"
                        >
                            <MapPin className="gold" width={25} />
                            г. Саратов, ул. Елшанская 22А, офис 8
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:+79049046259"
                            className="hover:text-[#ffbb1d] flex items-center gap-[7px] transition-colors duration-200"
                        >
                            <Phone className="gold" width={20} />
                            +7 (904) 904-62-59
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
