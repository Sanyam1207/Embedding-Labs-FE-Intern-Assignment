"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ImagePlus } from "lucide-react";

export default function AnimatedTextarea() {
    const placeholders = [
        "Create youtube thumbnail for my video",
        "Design birthday poster for my friend",
        "Make a wedding invitation card",
        "Design Instagram story template",
        "Create a business presentation slide",
        "Design a festival greeting card",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [userTyped, setUserTyped] = useState(false);

    useEffect(() => {
        if (userTyped) return;

        const currentText = placeholders[currentIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setIsDeleting(true);
                    typingSpeed = 1500;
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentText.slice(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % placeholders.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentIndex, placeholders, userTyped]);

    return (
        <div className="relative w-full md:w-[50rem] p-3">
            <div
                className="
          flex flex-col bg-white rounded-xl border border-dotted border-[#FF0000] 
          focus-within:border-[#A187C2] focus-within:border-solid focus-within:shadow-xl
        "
            >
                {/* Textarea */}
                <textarea
                    className="flex-1 text-sm resize-none px-4 py-4 rounded-t-xl outline-none text-gray-800 w-full"
                    rows={2}
                    placeholder={userTyped ? "" : displayedText}
                    onChange={(e) => {
                        if (e.target.value.length > 0) {
                            setUserTyped(true);
                        } else {
                            setUserTyped(false);
                        }
                    }}
                />

                {/* Action Buttons */}
                <div className="flex md:gap-2 gap-4 items-center p-3 w-full">
                    {/* Add Image Button */}
                    <button className="flex items-center whitespace-nowrap transition-all cursor-pointer gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-800">
                        <ImagePlus className="w-4 h-4" />
                        Add Image
                    </button>

                    {/* Add Design Reference Button */}
                    <div className="relative group">
                        <button
                            disabled
                            className="flex items-center whitespace-nowrap gap-2 px-3 md:py-2 py-0.5 bg-gray-100 rounded-md md:text-sm text-xs font-medium text-gray-400"
                        >
                            <ImagePlus className="w-4 h-4" />
                            Add Design <br className="md:hidden"/> Reference
                        </button>
                        <span
                            className="absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap
                     bg-black text-white text-xs font-medium px-2 py-1 rounded-md 
                     opacity-0 group-hover:opacity-100 pointer-events-none transition-all"
                        >
                            Coming Soon
                        </span>
                    </div>

                    {/* Spacer pushes send button to right */}
                    <div className="flex-1" />

                    {/* Send Button */}
                    <button className="flex items-center justify-center cursor-pointer w-9 h-9 bg-gradient-to-r from-[#711AE2] to-[#491191] rounded-full shadow-md hover:scale-105 transition">
                        <ArrowUp className="w-5 h-5 text-white" />
                    </button>
                </div>

            </div>
        </div>
    );
}
