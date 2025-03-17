
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(255,255,255,${0.05 + i * 0.01})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-white opacity-20"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.01}
                        initial={{ pathLength: 0.3, opacity: 0.3 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.1, 0.2, 0.1],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

// Add floating particles
function FloatingParticles() {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-white/20"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        y: [0, -30, -60],
                        x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    buttonText,
    buttonLink,
}: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
}) {
    const words = title.split(" ");

    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3,
                duration: 1 
            }
        }
    };

    // Subtitle animation
    const subtitleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Button container animation
    const buttonContainerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut" 
            }
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <FloatingParticles />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <motion.span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: wordIndex * 0.2,
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0, rotateY: 90 }}
                                        animate={{ y: 0, opacity: 1, rotateY: 0 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 20,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-white to-white/70"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p 
                            variants={subtitleVariants}
                            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {buttonText && (
                        <motion.div
                            variants={buttonContainerVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href={buttonLink}>
                                <div
                                    className="inline-block group relative bg-gradient-to-b from-white/20 to-white/5 
                                    p-px rounded-2xl backdrop-blur-lg 
                                    overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <Button
                                        variant="ghost"
                                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                        bg-black hover:bg-black/90
                                        text-white transition-all duration-300 
                                        group-hover:-translate-y-0.5 border border-white/10
                                        hover:shadow-md hover:shadow-white/5"
                                    >
                                        <motion.span 
                                            className="opacity-90 group-hover:opacity-100 transition-opacity"
                                            initial={{ x: -5, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            {buttonText}
                                        </motion.span>
                                        <motion.span
                                            className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                            transition-all duration-300"
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1 }}
                                        >
                                            →
                                        </motion.span>
                                    </Button>
                                </div>
                            </a>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
