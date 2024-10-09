import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll"; // Импортируем Link из react-scroll

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            height: 60,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        closed: {
            opacity: 0,
            y: -10,
            height: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const menuVariants2 = {
        open: {
            opacity: 1,
            y: 0,
            height: 110,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        closed: {
            opacity: 0,
            y: -10,
            height: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const [isDesktop, setIsDesktop] = useState<string>("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const language = i18n.language;

            if (language === "en") {
                if (width <= 436) {
                    setIsDesktop("mobile");
                } else if (width >= 437 && width <= 768) {
                    setIsDesktop("laptop");
                } else {
                    setIsDesktop("");
                }
            } else {
                setIsDesktop(width < 768 && width > 490 ? "laptop" : width <= 490 ? "mobile" : "");
            }
        };

        handleResize(); // Вызовем функцию при загрузке компонента
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [i18n.language]); // Добавляем зависимость от языка

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    {isDesktop !== "mobile" && isDesktop !== "laptop" ? (
                        <div className="header__flex">
                            <div className="logo">
                                <img src="/images/logo.png" alt="" />
                            </div>
                            <div className="menu">
                                <Link
                                    className="menu__item"
                                    to="about-bot" // это id целевого блока
                                    smooth={true} // добавляем плавный скролл
                                    duration={1000} // время скролла в миллисекундах
                                >
                                    {t("menu.aboutBot")}
                                </Link>
                                <Link className="menu__item" to="functions" smooth={true} duration={1000}>
                                    {t("menu.features")}
                                </Link>
                                <Link className="menu__item" to="advantages" smooth={true} duration={1000}>
                                    {t("menu.advantages")}
                                </Link>
                                <Link className="menu__item" to="contacts" smooth={true} duration={1000}>
                                    {t("menu.contacts")}
                                </Link>
                            </div>
                            <a className="telegram-button" href="https://t.me/MatchMeDatingbot">
                                <img src="/images/telegram-icon.svg" alt="" />
                                {t("tryBot")}
                            </a>
                        </div>
                    ) : (
                        <>
                            <div className="header__flex">
                                <div className="header__col">
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: 32, height: 24 }}>
                                        <button
                                            className="menu__burger"
                                            onClick={() => {
                                                setIsOpen((prevValue) => !prevValue);
                                            }}
                                        >
                                            <img src="/images/menu.svg" alt="" />
                                        </button>
                                    </motion.button>
                                    <div className="logo">
                                        <img src="/images/logo.png" alt="" />
                                    </div>
                                </div>
                                <div className="header__col">
                                    <a className="telegram-button" href="https://t.me/MatchMeDatingbot">
                                        <img src="/images/telegram-icon.svg" alt="" />
                                        {t("openBot")}
                                    </a>
                                </div>
                            </div>
                            <motion.div initial="closed" animate={isOpen ? "open" : "closed"} variants={isDesktop === "mobile" ? menuVariants2 : menuVariants} className="menu__mobile">
                                <div className="menu__mobile-wrapper">
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
                            </motion.div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
