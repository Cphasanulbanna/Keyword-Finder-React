import React, { useEffect, useRef, useState } from "react";
import { SearchBox } from "../modals/SearchBox";

export const Home = () => {
    const [query, setQuery] = useState("sample");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalMatch, setTotalMatch] = useState(0);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
    };

    const next = () => {
        setCurrentIndex((prev) => (prev + 1 < totalMatch ? prev + 1 : 0));
    };

    const bodyRef = useRef(document.body);

    const highlightMatchingText = () => {
        let count = 0;
        const allTextElements = bodyRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");

        allTextElements.forEach((element, i) => {
            const innerText = element.innerText;

            const highlightedLetters = innerText.replaceAll(query, () => {
                const classname = "yellow";

                const el = document.createElement("span");

                el.classList.add(classname);
                if (query) {
                    el.textContent = query;
                }

                count++;
                return el.outerHTML;
            });

            element.innerHTML = highlightedLetters;
        });
        setTotalMatch(count);

        const firstspan = document.querySelectorAll(".yellow")[currentIndex];
        if (firstspan) {
            firstspan.id = "red";
        }
    };

    useEffect(() => {
        highlightMatchingText();
    }, [query, currentIndex]);

    return (
        <section className="py-[80px] relative">
            <SearchBox
                query={query}
                setQuery={setQuery}
                handleChange={handleChange}
                prev={prev}
                next={next}
                totalMatch={totalMatch}
                currentIndex={currentIndex}
            />
            <section className="wrapper">
                <p>good sample good morning text hi hello how good sample</p>
                <p> morning sample text hi hello how sample qa</p>
                <h1> sample</h1>
                <h1> sample</h1>
                <h1> sample</h1>
                <h2> sample</h2>
                <div className="text-justify leading-8 text-red-700 bg-slate-700 h-[100px]"></div>
            </section>
        </section>
    );
};
