
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            AlgoZ
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700">
              Log In
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 dark:text-neutral-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <a
                href="#features"
                className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#"
                className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700">
                  Log In
                </Button>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
