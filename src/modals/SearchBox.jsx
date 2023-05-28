import React from "react";

export const SearchBox = ({ query, handleChange, prev, next }) => {
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
                    <span className="inline-block h-[100%] w-[80px]">1/65</span>
                </div>

                <div className="right flex justify-end items-center w-[40%] px-[6px] gap-[15px]">
                    <button onClick={next}>{">"}</button>
                    <button onClick={prev}>{"<"}</button>
                    <button>{"x"}</button>
                </div>
            </div>
        </div>
    );
};
