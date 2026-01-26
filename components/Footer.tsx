import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 md:py-5 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 items-center">
          {/* Left block - Organization Info */}
          <div className="flex flex-col items-center lg:items-start gap-3 flex-1">
            <p className="font-serif text-base sm:text-lg md:text-xl font-semibold text-center lg:text-left">
              Female Law Students & Legal Professionals Network
            </p>

            <div className="flex text-2xl sm:text-3xl items-center gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/flslpn?utm_source=qr&igsh=bGZpYnY5cTQ1bDk1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram className="transition-transform duration-200 ease-in-out hover:scale-125" />
              </a>
              <a
                href="https://www.facebook.com/share/16hBDPmqEm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="transition-transform duration-200 ease-in-out hover:scale-125" />
              </a>
              <a
                href="http://tiktok.com/@flsn_hu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <AiFillTikTok className="transition-transform duration-200 ease-in-out hover:scale-125" />
              </a>
              <a
                href="mailto:hu.flslpn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <IoMdMail className="transition-transform duration-200 ease-in-out hover:scale-125" />
              </a>
            </div>
          </div>

          {/* Middle block - Contact Info (hidden on mobile/tablet) */}
          <div className="hidden lg:flex flex-col items-start gap-2 sm:gap-3">
            <p className="font-serif text-base sm:text-lg md:text-xl font-semibold">
              Contact Us
            </p>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-lg sm:text-xl flex-shrink-0" />
              <p className="text-sm sm:text-base break-all">
                hu.flslpn@gmail.com
              </p>
            </div>
          </div>

          {/* Right block - Developer Info */}
          <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 w-full lg:w-auto">
            <p className="font-serif text-base sm:text-lg md:text-xl font-semibold text-center lg:text-left">
              Website Developer
            </p>
            <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 border px-4 sm:px-5 py-3 sm:py-4 border-gray-950/30 rounded-2xl  transition-transform duration-200 ease-in-out hover:scale-105 w-full lg:w-auto">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="border border-border p-3 sm:p-4 md:p-5 rounded-lg flex-shrink-0"></div>
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base font-medium">
                    Mohammed Elias
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    FullStack Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl">
                <a
                  href="https://t.me/mindyourownbizness186"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <BsTelegram className="transition-transform duration-200 ease-in-out hover:scale-125" />
                </a>
                <a
                  href="https://github.com/mami186"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaSquareGithub className="transition-transform duration-200 ease-in-out hover:scale-125" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-elias-877169365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <ImLinkedin className="transition-transform duration-200 ease-in-out hover:scale-125" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 sm:my-6 border-border" />

        {/* Bottom text */}
        <p className="text-xs sm:text-sm text-center md:text-left">
          © 2025 FLSN, Haramaya University. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
