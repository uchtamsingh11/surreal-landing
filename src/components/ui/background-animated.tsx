
"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

// Particle effect system
function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle system
    const particleCount = 150;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;
    }[] = [];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        opacitySpeed: Math.random() * 0.005 + 0.002,
      });
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Opacity pulse
        p.opacity += Math.sin(Date.now() * p.opacitySpeed) * 0.01;
        p.opacity = Math.max(0.1, Math.min(0.8, p.opacity));
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        
        // Edge wrapping
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100) * p.opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ pointerEvents: 'none' }}
    />
  );
}

// Animated Grid Background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute w-full h-full grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 144 }).map((_, index) => (
          <motion.div
            key={index}
            className="border border-white/5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0], 
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Floating Circle Blurs
function FloatingBlurs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl bg-white/5"
          style={{
            width: `${Math.random() * 30 + 10}rem`,
            height: `${Math.random() * 30 + 10}rem`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0.05 }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function BackgroundAnimated({
  title = "Background Animated",
  subtitle,
  buttonText,
  buttonLink,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const words = title.split(" ");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
      {/* Background Layers */}
      <FloatingBlurs />
      <GridBackground />
      <ParticleSystem />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
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
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
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
