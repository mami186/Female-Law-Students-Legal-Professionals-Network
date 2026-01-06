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

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
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
            <h1 className="font-serif text-xl font-semibold text-primary">
              FLSLPN
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </Link>
            <Link
              href="#activities"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Activities
            </Link>
            <Link
              href="#team"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Team
            </Link>
            <Link
              href="#join"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
