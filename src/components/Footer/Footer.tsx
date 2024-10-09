import { Divider } from "@nextui-org/divider";
import { Link, User } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../../locales/LangSwitcher/LangSwitcher";
import { useState, useEffect } from "react";

const Footer = () => {
    const { t } = useTranslation();

    const [isDesktop, setIsDesktop] = useState<string>(window.innerWidth < 768 && window.innerWidth > 639 ? "laptop" : window.innerWidth <= 639 ? "mobile" : ""); // Проверяем начальную ширину экрана

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsDesktop(width < 768 && width > 639 ? "laptop" : width <= 639 ? "mobile" : ""); // Обновляем состояние при изменении размера окна
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // Убираем обработчик при размонтировании компонента
    }, []);

    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__flex">
                        {isDesktop === "" && (
                            <div className="logo">
                                <img src="/images/logo.png" alt="" />
                            </div>
                        )}
                        <div className="menu">
                            <a className="menu__item" href="#">
                                {t("menu.aboutBot")}
                            </a>
                            <a className="menu__item" href="#">
                                {t("menu.features")}
                            </a>
                            <a className="menu__item" href="#">
                                {t("menu.advantages")}
                            </a>
                            <a className="menu__item" href="#">
                                {t("menu.contacts")}
                            </a>
                        </div>
                        {isDesktop === "" && (
                            <a className="telegram-button" href="https://t.me/MatchMeDatingbot">
                                <img src="/images/telegram-icon.svg" alt="" />
                                {t("footer.openBot")}
                            </a>
                        )}
                    </div>
                    <Divider className="my-7 bg-slate-700" />
                    <div className="footer__descr">
                        {isDesktop !== "" && (
                            <div className="footer__mobile-logo">
                                <div className="logo">
                                    <img src="/images/logo.png" alt="" />
                                </div>
                                <a className="telegram-button" href="https://t.me/MatchMeDatingbot">
                                    <img src="/images/telegram-icon.svg" alt="" />
                                    {t("footer.openBot")}
                                </a>
                            </div>
                        )}
                        <div className="flex w-full flex-col">
                            <LangSwitcher />
                            <div>
                                <div className="col justify-between flex-col">
                                    <div>
                                        <div className="col">{t("footer.copyright")}</div>
                                        <div className="col">
                                            <div className="col link">{t("footer.privacyPolicy")}</div>
                                            <div className="col link">{t("footer.userAgreement")}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 font-semibold">
                                        {t("footer.developer")}:
                                        <User
                                            name={t("footer.developerName")}
                                            description={
                                                <Link href="https://t.me/nikita_frl" size="sm" isExternal>
                                                    @nikita_frl
                                                </Link>
                                            }
                                            avatarProps={{
                                                src: "/images/myphoto.jpeg",
                                            }}
                                            className="mr-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
