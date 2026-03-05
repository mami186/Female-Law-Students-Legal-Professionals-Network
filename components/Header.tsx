"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 text-background_3 dark:text-background_3 bg-bgsh1/80 backdrop-blur-sm dark:bg-bgsh1/10 border-b border-border"
      >
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div>
              <Image
                src="/logo.png"
                alt="Our team"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </div>
            <h1 className="font-serif text-xl font-semibold ">FLSLPN</h1>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#about", label: "About" },
              { href: "#events", label: "Events" },
              { href: "#team", label: "Team" },
              { href: "#join", label: "Join" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-sm text-background_3 dark:text-background_3 hover:text-foreground transition-colors"
                  scroll={false}
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut",
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <Moon className="w-6 h-6 text-background_3 dark:text-background_3" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut",
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <Sun className="w-6 h-6 text-background_3 dark:text-background_3" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
