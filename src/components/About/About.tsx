import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type NameObject = {
    name: string;
    photo: string;
};

const About = () => {
    const { t } = useTranslation();
    const names = t("names", { returnObjects: true }) as NameObject[];

    const firstArray = Array(3).fill([names[0], names[3], names[6]]).flat();
    const secondArray = Array(3).fill([names[1], names[4], names[7]]).flat();
    const thirdArray = Array(3).fill([names[2], names[5], names[8]]).flat();

    const [displaySize, setDisplaySize] = useState<string>(window.innerWidth < 1024 && window.innerWidth >= 768 ? "laptop" : window.innerWidth < 768 ? "mobile" : "");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setDisplaySize(width < 1024 && width >= 768 ? "laptop" : width < 768 ? "mobile" : "");
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="about">
            <div className="container">
                <div className="about__wrapper">
                    <img className="about__heart" src="/images/heart.png" alt="" />
                    <h2 className="block-title">{t("menu.aboutBot")}</h2>
                    <div className="about__flex">
                        <div className="about__col">
                            <div className="about__text">
                                <span>MatchMe4</span> {t("aboutBot")}
                            </div>
                        </div>
                        {displaySize !== "mobile" && (
                            <div className="about__col">
                                <div className="about__cards-wrapper">
                                    <div className="about__top-dark"></div>
                                    <div className="about__bottom-dark"></div>
                                    <div className="about__cards-flex">
                                        <motion.div
                                            className="about__motion-wrapper"
                                            initial={{ transform: "translateY(calc((100% - 400px)*-1))" }}
                                            animate={{ transform: "translateY(0px)" }}
                                            transition={{ duration: 50, repeat: Infinity, repeatType: "reverse" }}
                                        >
                                            <div className="about__cards-list">
                                                {firstArray.map((item, index) => {
                                                    return (
                                                        <div className="about__card" key={index}>
                                                            <div className="about__card-name">{item.name}</div>
                                                            <img src={`/images/people/${item.photo}`} alt="" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="about__motion-wrapper"
                                            initial={{ transform: "translateY(0px)" }}
                                            animate={{ transform: "translateY(calc((100% - 400px)*-1))" }}
                                            transition={{ duration: 55, repeat: Infinity, repeatType: "reverse" }}
                                        >
                                            <div className="about__cards-list">
                                                {secondArray.map((item, index) => {
                                                    return (
                                                        <div className="about__card" key={index}>
                                                            <div className="about__card-name">{item.name}</div>
                                                            <img src={`/images/people/${item.photo}`} alt="" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                        {displaySize !== "laptop" && (
                                            <motion.div
                                                className="about__motion-wrapper"
                                                initial={{ transform: "translateY(calc((100% - 400px)*-1))" }}
                                                animate={{ transform: "translateY(0px)" }}
                                                transition={{ duration: 50, repeat: Infinity, repeatType: "reverse" }}
                                            >
                                                <div className="about__cards-list">
                                                    {thirdArray.map((item, index) => {
                                                        return (
                                                            <div className="about__card" key={index}>
                                                                <div className="about__card-name">{item.name}</div>
                                                                <img src={`/images/people/${item.photo}`} alt="" />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
