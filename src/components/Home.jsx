import React, { useEffect, useRef, useState } from "react";
import { SearchBox } from "../modals/SearchBox";

export const Home = () => {
    const [query, setQuery] = useState("good");
    const [index, setIndex] = useState(0);
    const [length, setLength] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const prev = () => {
        setIndex((prev) => prev - 1);
    };

    const next = () => {
        setIndex((prev) => prev + 1);
    };

    const bodyRef = useRef(document.body);

    const highlightMatchingText = () => {
        const allTextElements = bodyRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");
        allTextElements.forEach((element, i) => {
            const innerText = element.innerText;

            console.log(index);

            const highightedLetters = innerText.replace(
                query,
                i === index
                    ? `<span class="red">${query}</span>`
                    : `<span class="yellow">${query}</span>`
            );
            element.innerHTML = highightedLetters;
        });
    };

    useEffect(() => {
        highlightMatchingText(index);
    }, [query, index]);

    return (
        <section className="py-[80px] relative">
            <SearchBox
                query={query}
                setQuery={setQuery}
                handleChange={handleChange}
                prev={prev}
                next={next}
            />
            <section className="wrapper">
                <p>good sample good morning text hi hello how good sample</p>
                <h1> sample</h1>
                <h1> sample</h1>
                <h1> sample</h1>
                <h2> sample</h2>
                <div className="text-justify leading-8 text-red-700 bg-slate-700 h-[100px]"></div>
            </section>
        </section>
    );
};
