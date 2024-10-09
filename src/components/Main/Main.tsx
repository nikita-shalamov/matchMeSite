import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const Main = () => {
    const { t } = useTranslation();
    const words = t("main.words", { returnObjects: true });

    return (
        <>
            <div className="main mt-5">
                <div className="container py">
                    <div className="main__wrapper">
                        <div>
                            <div className="main__label">{t("main.label")}</div>
                            <span
                                style={{
                                    color: "#6743ff",
                                    fontWeight: 600,
                                    fontSize: 50,
                                    lineHeight: "60px",
                                    textAlign: "center",
                                    display: "block",
                                }}
                            >
                                <Typewriter
                                    words={words as string[]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|" // Курсор по умолчанию "|"
                                    typeSpeed={75}
                                    deleteSpeed={90}
                                    delaySpeed={800}
                                />
                            </span>
                            <img className="main__picture" src="/images/main-picture.svg" alt="" />
                            <div className="main__text">{t("main.text")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
