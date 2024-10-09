import i18n from "../../i18n";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const LangSwitcher: React.FC = () => {
    const languages = [
        { key: "ru", icon: "/images/russian-flag.svg", label: "RU" },
        { key: "en", icon: "/images/eng-flag.svg", label: "ENG" },
    ];

    const [lang, setLang] = useState<string[]>(["ru"]);

    return (
        <Select
            defaultSelectedKeys={lang} // Установим язык по умолчанию
            selectedKeys={lang ? lang : undefined}
            startContent={<img src={languages.filter((item) => item.key === lang[0])[0].icon} alt="" className="block" />}
            className="max-w-[105px] mb-5"
            color="primary"
            onChange={(e) => {
                if (e.target.value !== "") {
                    setLang([e.target.value]);
                    i18n.changeLanguage(e.target.value);
                } else {
                    return;
                }
            }}
        >
            {languages.map((flags) => (
                <SelectItem key={flags.key} startContent={<img src={flags.icon} alt="" />}>
                    {flags.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default LangSwitcher;
