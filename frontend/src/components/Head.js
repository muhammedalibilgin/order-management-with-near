import React, { useEffect } from "react";
import "../css/Head.css";

const Head = () => {
    useEffect(() => {
        let signs = document.querySelectorAll("x-sign");
        const randomIn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const mixupInterval = (el) => {
            const ms = randomIn(1500, 4500);
            el.style.setProperty("--interval", `${ms}ms`);
        };
        signs.forEach((el) => {
            mixupInterval(el);
            el.addEventListener("webkitAnimationIteration", () => {
                mixupInterval(el);
            });
        });
    });

    return (
        <h1>
            <x-sign>NEAR Order App</x-sign>
        </h1>
    );
};

export default Head;
