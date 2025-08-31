"use client";

import { motion } from "framer-motion";

const svgs = [
    {
        id: 1,
        svg: (
            <img src={'/Home/angles-up-svgrepo.svg'} className="h-10 w-auto" />
        ),
        x: "10%",
        y: "20%",
    },
    {
        id: 2,
        svg: (
            <img src={'/Home/christmas-candle-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "80%",
        y: "30%",
    },
    {
        id: 3,
        svg: (
            <img src={'/Home/face-smile-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "70%",
        y: "80%",
    },
    {
        id: 4,
        svg: (
            <img src={'/Home/music-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "10%",
        y: "80%",
    },
    {
        id: 5,
        svg: (
            <img src={'/Home/ghost-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "90%",
        y: "80%",
    },
    {
        id: 6,
        svg: (
            <img src={'/Home/eye-slash-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "90%",
        y: "50%",
    },
     {
        id: 7,
        svg: (
            <img src={'/Home/cloud-rain-alt-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "10%",
        y: "50%",
    },
    {
        id: 8,
        svg: (
            <img src={'/Home/radio-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "50%",
        y: "50%",
    },
    {
        id: 9,
        svg: (
            <img src={'/Home/lightbulb-alt-svgrepo.svg'} className="h-14 w-auto" />
        ),
        x: "50%",
        y: "7%",
    }

    // lightbulb-alt-svgrepo
    // radio-svgrepo
    // cloud-rain-alt-svgrepo
];

export default function FloatingSVG() {
    return (
        <>
            {svgs.map(({ id, svg, x, y }) => (
                <motion.div
                    key={id}
                    className="absolute blur-xs"
                    style={{ left: x, top: y }}
                    animate={{
                        y: ["0px", "-40px", "0px"],
                        rotate: [0, 30, -10, 0],
                    }}
                    transition={{
                        duration: 6 + id * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {svg}
                </motion.div>
            ))}
        </>
    );
}
