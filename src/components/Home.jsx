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
        const allTextElements = bodyRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");

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
        highlightMatchingText();
    }, [query, currentIndex]);

    const closeSearchBar = () => {
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
                <p>
                    World War II: A Global Conflict Shaping History World War II, spanning from 1939
                    to 1945, was a monumental event that reshaped the course of history. It was a
                    global conflict that involved numerous nations and had far-reaching
                    consequences. This essay aims to provide an overview of World War II, its
                    causes, major events, and significant outcomes. Causes and Background: The seeds
                    of World War II were sown in the aftermath of World War I. The harsh terms
                    imposed on Germany through the Treaty of Versailles, economic hardships,
                    political instability, and unresolved conflicts created an environment ripe for
                    future tensions. Additionally, aggressive expansionist policies pursued by
                    totalitarian regimes, such as Nazi Germany under Adolf Hitler, fascist Italy
                    under Benito Mussolini, and militarist Japan, further heightened international
                    tensions. Major Events and Turning Points: 1. German Aggression and the Invasion
                    of Poland (1939): The war began with Germany's invasion of Poland, prompting the
                    United Kingdom and France to declare war on Germany. 2. Blitzkrieg and the Fall
                    of France (1940): Germany unleashed its Blitzkrieg tactics, swiftly conquering
                    several European countries. France fell under German occupation, leading to the
                    evacuation of British forces from Dunkirk. 3. Battle of Britain (1940): The
                    Royal Air Force successfully defended Britain against German air attacks,
                    preventing a German invasion and marking a significant turning point in the war.
                    4. Operation Barbarossa (1941): Germany launched a massive invasion of the
                    Soviet Union, aiming to secure resources and eliminate the Soviet threat.
                    However, the harsh Russian winter and Soviet resistance led to German setbacks.
                    5. Pearl Harbor and the Pacific Theater (1941): The Japanese attack on the
                    American naval base at Pearl Harbor drew the United States into the war. This
                    event marked the beginning of the Pacific theater, where Japan aimed to expand
                    its empire. 6. Battle of Stalingrad (1942-1943): The Soviet Union's defense of
                    Stalingrad proved to be a major turning point, as the German forces suffered a
                    devastating defeat. This battle marked a significant shift in momentum against
                    the Axis powers. 7. D-Day and the Allied Invasion of Normandy (1944): The
                    largest amphibious assault in history, the Allied forces landed on the beaches
                    of Normandy, marking the beginning of the end for Nazi Germany's control over
                    Western Europe. 8. Atomic Bombings of Hiroshima and Nagasaki (1945): The United
                    States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki,
                    leading to Japan's surrender and the end of the war in the Pacific. Significant
                    Outcomes: 1. Millions of Lives Lost: World War II resulted in the loss of
                    millions of lives, both military personnel and civilians, making it one of the
                    deadliest conflicts in human history. 2. Shifting Global Power: The war led to a
                    reconfiguration of global power dynamics. The United States and the Soviet Union
                    emerged as superpowers, initiating the Cold War era. 3. Creation of
                    International Organizations: The war laid the groundwork for the establishment
                    of international organizations such as the United Nations, aimed at promoting
                    peace and resolving conflicts. 4. Decolonization and National Movements: World
                    War II fueled the decolonization movements in various parts of the world,
                    leading to the end of European colonial rule and the emergence of new
                    independent nations. 5. Holocaust and War Crimes: The Holocaust, the systematic
                    genocide of millions of Jews and other minority groups by the Nazis, exposed the
                    depths of human atrocities and resulted in the pursuit of justice for war
                    crimes. Conclusion: World War II was an immense and complex conflict that
                    reshaped the world in countless ways. Its impact on geopolitics, technology,
                    human rights, and global cooperation cannot be overstated. By reflecting on the
                    causes, major
                </p>
            </section>
        </section>
    );
};
