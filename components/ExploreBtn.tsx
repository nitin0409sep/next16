"use client";

import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto text-white flex" onClick={() => console.log("Clicked")}>
            <a href="#events" className="flex gap-2 items-center justify-center">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" height={24} width={24} />
            </a>
        </button>
    );
};

export default ExploreBtn;
