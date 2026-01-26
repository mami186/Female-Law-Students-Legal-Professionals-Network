"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

      const content =
        element.querySelector(".section-pulse-target") ||
        element.querySelector(".container") ||
        element;

      setTimeout(() => {
        content.classList.add("animate-scale-pulse");
        setTimeout(() => {
          content.classList.remove("animate-scale-pulse");
        }, 500);
      }, 1800);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 text-background_3 dark:text-background_3 bg-background/80 backdrop-blur-sm bg-purple-950/10 dark:bg-purple-950/10 border-b border-border animate-slideDown">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              {" "}
              <Image
                src="/logo.png"
                alt="Our team"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </div>
            <h1 className="font-serif text-xl font-semibold ">FLSLPN</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm text-background_3 dark:text-background_3 hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => scrollToSection(e, "#about")}
            >
              About
            </Link>
            <Link
              href="#events"
              className="text-sm text-background_3 dark:text-background_3 hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => scrollToSection(e, "#events")}
            >
              Events
            </Link>
            <Link
              href="#team"
              className="text-sm text-background_3 dark:text-background_3 hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => scrollToSection(e, "#team")}
            >
              Team
            </Link>
            <Link
              href="#join"
              className="text-sm text-background_3 dark:text-background_3 hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => scrollToSection(e, "#join")}
            >
              Join
            </Link>
            <Link
              href="#contact us"
              className="text-sm text-background_3 dark:text-background_3 hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Contact
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6 text-background_3 dark:text-background_3" />
            ) : (
              <Sun className="w-6 h-6 text-background_3 dark:text-background_3" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
