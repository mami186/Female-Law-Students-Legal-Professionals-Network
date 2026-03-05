"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Calendar } from "lucide-react";
import { getEventImagesSync } from "@/utils/eventUtils";

interface EventCardProps {
  title: string;
  subtitle: string;
  folder: string;
  index: number;
  onQuickView?: () => void;
  zoneIndex?: number; // for animation direction
}

export default function EventCard({
  title,
  subtitle,
  folder,
  index,
  onQuickView,
  zoneIndex = 0,
}: EventCardProps) {
  // Get first image from the event folder
  const eventImages = getEventImagesSync(folder);
  const firstImage = eventImages[0] || "/hero.jpg"; // fallback image

  // Determine event status based on title or subtitle
  const getEventStatus = (title: string, subtitle: string) => {
    const safeTitle = title || "";
    const safeSubtitle = subtitle || "";
    
    if (safeTitle.toLowerCase().includes("training") || safeSubtitle.toLowerCase().includes("training")) return "Training";
    if (safeTitle.toLowerCase().includes("launch") || safeSubtitle.toLowerCase().includes("launch")) return "Launch";
    if (safeTitle.toLowerCase().includes("relaunch")) return "Relaunch";
    if (safeTitle.toLowerCase().includes("awareness")) return "Awareness";
    if (safeTitle.toLowerCase().includes("international")) return "International";
    if (safeTitle.toLowerCase().includes("welcome")) return "Welcome";
    if (safeTitle.toLowerCase().includes("activism")) return "Activism";
    return "Event";
  };

  const status = getEventStatus(title, subtitle);

  // Extract date from subtitle if available
  const extractDate = (subtitle: string) => {
    const safeSubtitle = subtitle || "";
    const dateMatch = safeSubtitle.match(/\b(20\d{2}|January|February|March|April|May|June|July|August|September|October|November|December)\b/i);
    return dateMatch ? dateMatch[0] : "2025";
  };

  const eventDate = extractDate(subtitle);

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={handleQuickView}
      className="group relative h-[520px] rounded-[48px] overflow-hidden border-2 border-transparent transition-all duration-500 cursor-pointer shadow-xl hover:border-[var(--bgbd)]/30 dark:hover:border-[var(--bgbd)]/50"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={firstImage}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-bgsh1/80 dark:via-bgsh1/20 to-transparent"></div>
      </div>

      {/* Status Badge */}
      <div className="absolute top-8 left-8">
        <div className="bg-white/10 dark:bg-bgsh1/10 backdrop-blur-md border border-white/20 dark:border-border/20 px-4 py-1.5 rounded-full">
          <span className="text-[9px] font-black text-white dark:text-foreground uppercase tracking-[0.2em]">
            {status}
          </span>
        </div>
      </div>

      {/* Date Tag */}
      <div
        className="absolute top-8 right-8 w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform"
        style={{ backgroundColor: 'var(--bgbd)' }}
      >
        <span className="text-[8px] font-black uppercase opacity-80 text-white dark:text-Ptext">Year</span>
        <span className="text-sm font-black italic text-white dark:text-Ptext">{eventDate}</span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={14} style={{ color: 'var(--bgbd)' }} />
          <span
            className="text-[10px] font-black uppercase tracking-widest"
            style={{ color: 'var(--bgbd)' }}
          >
            Event #{zoneIndex + 1}
          </span>
        </div>

        <h3 className="text-4xl font-black text-white dark:text-foreground tracking-tighter uppercase italic leading-none mb-4 group-hover:!text-[var(--bgbd)] transition-colors">
          {title}
        </h3>

        <p className="text-slate-300/80 dark:text-muted-foreground/80 text-sm line-clamp-2 mb-8 font-medium leading-relaxed group-hover:text-white dark:group-hover:text-foreground transition-colors">
          {subtitle}
        </p>

              </div>
    </motion.div>
  );
}
