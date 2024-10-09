import React, { useState, useEffect } from "react";

const words = ["любить", "дружить"];

const Typing: React.FC = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 200; // Скорость печати и удаления

        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            if (!isDeleting) {
                // Печатаем текст
                setCurrentText(currentWord.slice(0, currentText.length + 1));

                // Если слово напечатано полностью, начинаем удалять
                if (currentText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000); // Пауза перед удалением
                }
            } else {
                // Удаляем текст
                setCurrentText(currentWord.slice(0, currentText.length - 1));

                // Если слово удалено полностью, переключаем на следующее
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Переход на следующее слово
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, currentWordIndex]);

    // Для мигания курсора
    useEffect(() => {
        const blinkTimeout = setInterval(() => setBlink((prev) => !prev), 500);
        return () => clearInterval(blinkTimeout);
    }, []);

    return (
        <div className="typewriter">
            <span>{currentText}</span>
            <span className={`cursor ${blink ? "visible" : "hidden"}`}>|</span>
        </div>
    );
};

export default Typing;
