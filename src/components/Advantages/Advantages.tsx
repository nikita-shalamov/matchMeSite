import { useTranslation } from "react-i18next";

interface advantagesTypes {
    icon: string;
    title: string;
    descr: string;
}

const Advantages = () => {
    const { t } = useTranslation();

    const advantages = t("advantages", { returnObjects: true }) as advantagesTypes[];

    return (
        <div>
            <div className="advantages">
                <div className="container">
                    <div className="advantages__wrapper">
                        <h2 className="block-title">{t("advantagesTitle")}</h2>
                        <div className="advantages__cards">
                            {advantages.map((item, key) => {
                                return (
                                    <div key={key} className="advantages__card">
                                        <img src={item.icon} alt="" />
                                        <div className="advantages__title">{item.title}</div>
                                        <div className="advantages__descr">{item.descr}</div>
                                    </div>
                                );
                            })}
                        </div>
                        <a className="telegram-button advantages__telegram-button" href="https://t.me/MatchMeDatingbot">
                            <img src="/images/telegram-icon.svg" alt="" />
                            {t("tryBot")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
