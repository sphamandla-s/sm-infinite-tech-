import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function Hero() {
    return (
        <div className="h-[40rem] flex flex-col items-center justify-center">
            <TextHoverEffect text="SM Infinite Tech" />
            <p className=" font-extrabold text-2xl text-center">Coming soon.</p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-center">
                We&apos;re currently working behind the scenes on something amazing. { " "} Stay tuned for our official launch!
            </p>
        </div>
    );
}
