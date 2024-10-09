import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.scss";
import { NextUIProvider } from "@nextui-org/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts"; // путь к вашему файлу i18n.ts

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NextUIProvider>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </NextUIProvider>
    </StrictMode>
);
