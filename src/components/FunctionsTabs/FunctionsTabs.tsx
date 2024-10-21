import { Tabs, Tab } from "@nextui-org/react";
import { Key, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

interface tabsTypes {
    key: string;
    points: string[];
    title: string;
    video: string;
    preview: string;
}
const FunctionsTabs = () => {
    // const tabs = [
    //     {
    //         title: "Фото из телеграм в касание",
    //         key: "telegramPhotos",
    //         points: ["Все фотографии из профиля можно в касание загрузить в MatchMe.", "Загрузка до 9 фотографий.", "Поддержка всех популярных типов."],
    //         video: "/videos/addTelegramPhoto.mp4",
    //     },
    //     {
    //         title: "Чаты в приложении",
    //         key: "chatsInApp",
    //         points: ["Общайтесь с пользователями, с которыми у вас произошел матч, прямо в приложении.", "Получайте новые сообщения в боте"],
    //         video: "/videos/sendMessage.mp4",
    //     },
    //     {
    //         title: "Свайпы анкет",
    //         key: "swipesProfile",
    //         points: ["Легко листайте анкеты — свайп вправо для лайка, свайп влево для пропуска.", "Свайпая анкеты, сразу видите фотографии, возраст и краткую информацию о человеке."],
    //         video: "/videos/profileSwipes.mp4",
    //     },
    //     {
    //         title: "Просмотр лайков",
    //         key: "lookingLikes",
    //         points: [
    //             "Видите всех пользователей, которые лайкнули ваш профиль, и решаете, лайкнуть ли их в ответ.",
    //             "Смотрите взаимные лайки в чатах. Там же можно сразу написать.",
    //             "В меню снизу новые лайки будут отображаться в виде уведомлений",
    //         ],
    //         video: "/videos/myLikes.mp4",
    //     },
    // ];

    const { t } = useTranslation();

    const tabs = useMemo(() => t("tabs", { returnObjects: true }) as tabsTypes[], [t]);

    const [sel, setSel] = useState<Key | string>("telegramPhotos");
    const [curValue, setCurValue] = useState<{ points: string[]; video: string; preview: string }>();

    console.log(curValue);

    useEffect(() => {
        setCurValue(tabs.find((item) => item.key === String(sel)));
    }, [sel, tabs]);

    const [displaySize, setDisplaySize] = useState<string>(window.innerWidth < 640 ? "mobile" : "");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setDisplaySize(width < 640 ? "mobile" : "");
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="functions__tab">
            <div className="functions__points">
                <Tabs color={"secondary"} aria-label="Options" defaultSelectedKey={"telegramPhotos"} isVertical={true} onSelectionChange={(item) => setSel(item)} className="flex justify-center">
                    {tabs.map((item) => (
                        <Tab key={item.key} title={item.title} className="functions__tab-switcher"></Tab>
                    ))}
                </Tabs>
                <div className="mt-5">
                    {curValue?.points.map((item, index) => (
                        <div className="functions__descr mt-3 flex items-start gap-2" key={index}>
                            <img src="/images/green-checkbox.svg" alt="" className="mt-0.5" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            {displaySize !== "mobile" && (
                <div className="functions__items-block">
                    <div className="functions__video-wrapper">
                        {curValue && curValue.video && (
                            <video key={curValue.video} autoPlay loop muted className="functions__video" poster={curValue.preview} preload="auto">
                                <source src={curValue.video} type="video/mp4" />
                                {t("errorVideo")}
                            </video>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FunctionsTabs;
