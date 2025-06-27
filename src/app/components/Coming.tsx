"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "./ui/moving-border";
import { ColourfulText } from "./ui/colourful-text";

export function Coming() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >

                <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                    <ColourfulText text="SM Infinite Tech" /> <br />
                </h1>

                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    Coming Soon
                </div>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-center">
                    We&apos;re currently working behind the scenes on something amazing. {" "} Stay tuned for our official launch!
                    In the meantime, download our company brochure to learn more about our services.

                </p>

                <Button
                    as="a" href="/SM-Infinite-Tech-Brochure.pdf"
                    download
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Download Brochure
                </Button>
            </motion.div>
        </AuroraBackground>
    );
}
