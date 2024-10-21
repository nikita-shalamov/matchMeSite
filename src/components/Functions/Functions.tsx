import React from "react";
import FunctionsTabs from "../FunctionsTabs/FunctionsTabs";
import { useTranslation } from "react-i18next";

const Functions = React.memo(() => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="functions" id="functions">
                <div className="container">
                    <div className="functions__wrapper">
                        <h2 className="block-title">{t("functions-title")}</h2>
                        <div className="functions__tabs">
                            <FunctionsTabs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Functions;
