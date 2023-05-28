import React from "react";

export const SearchBox = ({
    query,
    handleChange,
    previousText,
    nextText,
    currentIndex,
    totalMatch,
}) => {
    return (
        <div className="max-w-[360px] w-[100%] absolute top-[20px] right-[15%] z-10 rounded-[5px] overflow-hidden p-[6px] bg-[gray]">
            <div className="flex items-center gap-[10px] text-[#fff]">
                <div className="left flex justify-between items-center w-[60%] px-[6px] gap-[6px]">
                    <input
                        className="flex bg-[gray]"
                        type="text"
                        placeholder="find word"
                        onChange={handleChange}
                        value={query}
                    />
                    <span className=" h-[100%] w-[80px] flex justify-between">
                        {query && (
                            <>
                                <span>{currentIndex + 1}</span>
                                <span>/</span>
                                <span>{totalMatch}</span>
                            </>
                        )}
                    </span>
                </div>

                <div className="right flex justify-end items-center w-[40%] px-[6px] gap-[15px]">
                    <button onClick={nextText}>{">"}</button>
                    <button onClick={previousText}>{"<"}</button>
                    <button>{"x"}</button>
                </div>
            </div>
        </div>
    );
};
