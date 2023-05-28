import React, { useEffect, useRef } from "react";

//images
import next from "../assets/images/next.png";
import prev from "../assets/images/prev.png";
import close from "../assets/images/close.png";

export const SearchBox = ({
    query,
    handleChange,
    previousText,
    nextText,
    currentIndex,
    totalMatch,
    closeSearchBar,
}) => {
    const inputRef = useRef(null);

    //auto focus
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <div className="max-w-[360px] w-[100%] fixed top-[20px] right-[15%] z-10 rounded-[5px]  px-[6px] py-[15px] bg-[#fff] shadow-md">
            <div className="flex items-center gap-[10px] text-[#fff]">
                <div className="left flex justify-between items-center w-[60%] px-[6px] gap-[6px]">
                    <input
                        className="flex bg-[#fff] text-[#111]  w-[100%] h-[100%] cur"
                        type="text"
                        placeholder="find word"
                        onChange={handleChange}
                        value={query}
                        ref={inputRef}
                    />

                    <span className=" h-[100%] w-[80px] flex justify-between">
                        {query && (
                            <>
                                <span className="text-[#111]"> {currentIndex + 1}</span>
                                <span className="text-[#111]">/</span>
                                <span className="text-[#111]">{totalMatch}</span>
                            </>
                        )}
                    </span>
                </div>

                <div className="right flex justify-end items-center w-[40%] px-[6px] gap-[15px]">
                    <button
                        className=" w-[20px] h-[20px]"
                        onClick={previousText}
                    >
                        <img
                            src={prev}
                            alt="prev"
                        />
                    </button>
                    <button
                        className=" w-[20px] h-[20px]"
                        onClick={nextText}
                    >
                        <img
                            src={next}
                            alt="next"
                        />
                    </button>
                    <button
                        className=" w-[20px] h-[20px]"
                        onClick={closeSearchBar}
                    >
                        <img
                            src={close}
                            alt="close"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
