"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false, // Animation repeats on scroll - appears/disappears
        margin: "-100px" // Trigger animation 100px before element enters viewport
    });

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                    }
                    : {
                        opacity: 0,
                        ...directions[direction],
                    }
            }
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom easing for smooth animation
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
