import React, { useEffect, useRef, useState } from "react";
import { SearchBox } from "../modals/SearchBox";

export const Home = () => {
    const [query, setQuery] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalMatch, setTotalMatch] = useState(0);
    const [viewSearchBar, setViewSearchBar] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
    };

    const previousText = () => {
        setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
    };

    const nextText = () => {
        setCurrentIndex((prev) => (prev + 1 < totalMatch ? prev + 1 : 0));
    };

    const bodyRef = useRef(document.body);

    const highlightMatchingText = () => {
        let count = 0;
        const allTextElements = bodyRef.current.querySelectorAll(
            "h1, h2, h3, h4, h5, h6, p, a, li"
        );

        allTextElements.forEach((element) => {
            const innerText = element.innerText;
            const regex = new RegExp(query, "gi");

            const highlightedLetters = innerText.replaceAll(regex, (matchedWord) => {
                const classname = "yellow";

                const span = document.createElement("span");

                span.classList.add(classname);
                if (matchedWord) {
                    span.textContent = matchedWord;
                }

                count++;
                return span.outerHTML;
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
        if (query) {
            highlightMatchingText();
        }
    }, [query, currentIndex]);

    const closeSearchBar = () => {
        setQuery("");
        setViewSearchBar(false);
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.ctrlKey && e.key === "f") {
                e.preventDefault();
                setViewSearchBar(true);
            }

            if (viewSearchBar) {
                if (e.key === "ArrowLeft") {
                    previousText();
                }

                if (e.key === "ArrowRight") {
                    nextText();
                }
            }
        };
        window.addEventListener("keydown", handleKeyPress);

        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    return (
        <section className="py-[80px] relative">
            {viewSearchBar && (
                <SearchBox
                    query={query}
                    setQuery={setQuery}
                    handleChange={handleChange}
                    previousText={previousText}
                    nextText={nextText}
                    totalMatch={totalMatch}
                    currentIndex={currentIndex}
                    closeSearchBar={closeSearchBar}
                />
            )}

            <section className="wrapper">
                <h1 className="text-[#111] text-[40px] font-bold text-center mb-[10px]">
                    Keyword Finder
                </h1>
                <h2 className="text-center text-[25px] font-bold mb-[15px] flex items-center justify-center">
                    Press <span className="green mx-[5px]"> Ctrl + f </span> to open searchbar
                </h2>
                <h3 className="text-center text-[25px] title">
                    Title: World War II: A Historic Turning Point
                </h3>
                <p>Introduction:</p>
                <ol className="list-decimal">
                    <li>
                        World War II (1939-1945) was a pivotal event in human history that shaped
                        the course of nations and left an indelible impact on the world.
                    </li>
                    <li>
                        This essay explores the key aspects and significant points of World War II,
                        highlighting its causes, major events, and lasting consequences.
                    </li>
                </ol>

                <p>I. The Causes of World War II:</p>
                <ol className="list-decimal">
                    <li>
                        The Treaty of Versailles: The harsh terms imposed on Germany after World War
                        I, coupled with economic instability, fueled resentment and nationalism.
                    </li>
                    <li>
                        Rise of Fascism: The emergence of fascist leaders like Adolf Hitler in
                        Germany and Benito Mussolini in Italy promoted expansionist ideologies and
                        militarization.
                    </li>
                    <li>
                        Failure of Appeasement: The policy of appeasement by the Allied powers
                        towards aggressive actions by Hitler's Germany only emboldened his
                        ambitions.
                    </li>
                </ol>

                <p>II. Major Events and Turning Points:</p>

                <ol className="list-decimal">
                    <li>
                        Invasion of Poland: Germany's invasion of Poland in 1939 marked the
                        beginning of the war and triggered the formation of opposing alliances.
                    </li>
                    <li>
                        Blitzkrieg Tactics: Germany's lightning-fast military tactics, demonstrated
                        in the invasion of France, showcased a new form of warfare and threatened
                        global stability.
                    </li>
                    <li>
                        Battle of Britain: The relentless German air campaign against Britain tested
                        the resilience of the British people and their determination to resist
                    </li>
                    <li>
                        Pearl Harbor Attack: Japan's surprise attack on the U.S. naval base at Pearl
                        Harbor drew the United States into the war, altering its course
                        significantly.
                    </li>
                    <li>
                        Stalingrad: The Battle of Stalingrad in 1942-1943 turned the tide against
                        Germany and marked a crucial victory for the Soviet Union.
                    </li>
                    <li>
                        D-Day Invasion: The Allied invasion of Normandy on June 6, 1944, opened a
                        Western front against Germany and paved the way for the liberation of
                        Europe.
                    </li>
                    <li>
                        Atomic Bombings: The atomic bombings of Hiroshima and Nagasaki by the United
                        States brought about Japan's surrender and forever changed the nature of
                        warfare.
                    </li>
                </ol>

                <p>III. Impact and Legacy:</p>
                <ol className="list-decimal">
                    <li>
                        Human Losses: The war resulted in the loss of millions of lives, both
                        military personnel and civilians, leaving a profound humanitarian tragedy.
                    </li>
                    <li>
                        Holocaust: The systematic persecution and genocide of six million Jews by
                        the Nazis highlighted the depths of human cruelty and the need for justice
                        and remembrance.
                    </li>
                    <li>
                        The United Nations: The formation of the United Nations in 1945 aimed to
                        foster international cooperation and prevent future global conflicts.
                    </li>
                    <li>
                        Cold War: The tensions between the Soviet Union and the United States,
                        arising from differing ideologies, emerged as a defining feature of the
                        post-war era.
                    </li>
                    <li>
                        Technological Advancements: World War II spurred significant advancements in
                        technology, including radar, jet engines, and nuclear power, with lasting
                        impacts on various fields.
                    </li>
                    <li>
                        Decolonization: The war contributed to the dismantling of colonial empires
                        and the rise of independence movements across the globe.
                    </li>
                    <li>
                        Lessons Learned: World War II serves as a reminder of the devastating
                        consequences of war and the importance of diplomacy, peacekeeping, and
                        international collaboration.s
                    </li>
                </ol>

                <p>Conclusion:</p>
                <ol className="list-decimal">
                    <li>
                        World War II stands as a transformative period in history, where nations
                        were tested, alliances were formed, and sacrifices were made.
                    </li>
                    <li>
                        The war's impact on societies, politics, and global dynamics continues to
                        resonate today, reminding us of the importance of learning from the past to
                        shape a better future.
                    </li>
                    <li>
                        As we reflect on the struggles and triumphs of World War II, let us strive
                        for peace, unity, and the preservation of human rights, honoring the memory
                        of those who lived through this defining chapter of our history.
                    </li>
                </ol>
            </section>
        </section>
    );
};
