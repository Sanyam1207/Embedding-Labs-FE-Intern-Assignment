"use client";

import FloatingSVG from "@/components/FloatingSVG";
import { Inter } from "next/font/google";
import AnimatedTextarea from "./AnimatedTextArea";
import YouTubeEmbed from "@/components/YoutubeEmbedder";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "500", "400", "700"],
});

export default function Hero() {
    return (
        <section
            className={`${inter.className} relative flex flex-col items-center pt-24 md:pt-36 text-center min-h-screen`}
        >
            <FloatingSVG />

            <div className="absolute inset-0 -z-10 animate-gradient bg-[linear-gradient(to_right,#DCEEFF,#F6DBDC,#FDC3F6,#E9DBFF)] backdrop-blur-xl border bg-transparent" />

            {/* Content */}
            <div className="md:px-6 max-w-5xl flex flex-col items-center relative z-10 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 drop-shadow-lg">
                    What do you want to design today?
                </h1>
                <p className="mt-5 text-base md:text-xl text-gray-700">
                    Start with chat. Finish with AI Design Editor.
                </p>

                <div className="mt-5 flex w-full justify-center items-center">
                    <AnimatedTextarea />
                </div>

                <div>
                    <div className="flex flex-col mt-3 items-center justify-center space-y-7">
                        <p className="text-[#6A7282] text-xs font-medium">
                            FREE to start. No Credit Card Required.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-col md:flex-row mt-5 gap-4 w-full items-center justify-center">
                            {/* Featured on Product Hunt */}
                            <div className="flex cursor-pointer border border-[#D9E1EC] items-center gap-2 bg-white shadow-sm rounded-xl px-4 py-1 w-full md:w-auto">
                                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4B587C] text-white font-bold">
                                    P
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[10px] text-start uppercase text-[#4B587C] font-medium">
                                        Featured On
                                    </span>
                                    <span className="text-base font-bold text-[#4B587C]">
                                        Product Hunt
                                    </span>
                                </div>
                                <div className="flex-1" />
                                <div className="flex flex-col items-center ml-2">
                                    <span className="text-gray-600">▲</span>
                                    <span className="text-sm font-semibold text-[#4b587c] -mt-1">
                                        519
                                    </span>
                                </div>
                            </div>

                            {/* Product of the Week */}
                            <div className="flex cursor-pointer border border-[#D9E1EC] items-center gap-2 bg-white shadow-sm rounded-xl px-4 py-1 pr-12 w-full md:w-auto">
                                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4B587C] text-white font-bold">
                                    P
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-start uppercase tracking-wide text-[#4B587C] font-medium">
                                        #1 Product of the Week
                                    </span>
                                    <span className="text-base text-start font-bold text-[#4B587C]">
                                        Marketing
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Video */}
                        <div className="w-full md:w-[48rem] my-10">
                            <YouTubeEmbed videoId="l5l9M9cIO8c" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
