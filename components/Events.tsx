"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getEventImagesSync } from "@/utils/eventUtils";
import EventCard from "@/components/ui/EventCard";

// Define event folders with their details
const eventFolders = [
  {
    title: "Awareness Creation Campaign",
    subtitle: "International Women's Day - March 25, 2022",
    folder:
      "Awareness creation campaign on international womens day march 25,2022",
  },
  {
    title: "Awareness Creation",
    subtitle: "Community Outreach Program",
    folder: "Awarness creation",
  },
  {
    title: "International Women Human Rights Defenders Day",
    subtitle: "Celebrating Women Defenders",
    folder: "International women human rights defenders day",
  },
  {
    title: "International Women's Day",
    subtitle: "Annual Celebration",
    folder: "International womens day",
  },
  {
    title: "Personal Development Training",
    subtitle: "Experience Sharing Program",
    folder: "Personal development training and experience sharing program",
  },
  {
    title: "Relaunch Event",
    subtitle: "Organization Relaunch",
    folder: "Relaunch event",
  },
  {
    title: "Training Programs",
    subtitle: "Capacity Building Sessions",
    folder: "Training",
  },
  {
    title: "Launching Event",
    subtitle: "Organization Launch",
    folder: "launching event",
  },
  {
    title: "Welcome Program",
    subtitle: "New Member Orientation",
    folder: "wellcome program",
  },
  {
    title: "16 days of activism",
    subtitle: "Campaign ",
    folder: "16 days of activism",
  },{
    title: "Warka Wellness Session Cascade",
    subtitle: "Wellness Session",
    folder: "warka wellness session cascade",
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Function to get images from a folder
  const getImagesFromFolder = (folderName: string): string[] => {
    return getEventImagesSync(folderName);
  };

  const handleEventClick = (folderName: string) => {
    const images = getImagesFromFolder(folderName);
    if (images.length > 0) {
      setGalleryImages(images);
      setSelectedEvent(folderName);
      setSelectedImageIndex(0);
    }
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setGalleryImages([]);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedEvent) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeGallery();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent, galleryImages.length]);

  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Events
          </motion.h2>
          <motion.p 
            className="text-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our impactful events and programs
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventFolders.map((event, index) => {
            // Determine animation direction based on position
            const getAnimationProps = (idx: number) => {
              if (idx === 0) return { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } }; // Left
              if (idx === 1) return { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } }; // Center (bottom)
              return { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } }; // Right
            };
            
            const animationProps = getAnimationProps(index);
            
            return (
              <motion.div
                key={index}
                initial={animationProps.initial}
                whileInView={animationProps.animate}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="relative"
              >
                <EventCard
                  title={event.title}
                  subtitle={event.subtitle}
                  folder={event.folder}
                  index={index}
                  zoneIndex={index}
                  onQuickView={() => handleEventClick(event.folder)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white hover:text-primary  transition-transform duration-300 hover:scale-125"
              aria-label="Close gallery"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Media Display */}
            <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
              {galleryImages.length > 0 && (
                <>
                  {galleryImages[selectedImageIndex].toLowerCase().endsWith('.mp4') || 
                   galleryImages[selectedImageIndex].toLowerCase().endsWith('.mov') || 
                   galleryImages[selectedImageIndex].toLowerCase().endsWith('.avi') || 
                   galleryImages[selectedImageIndex].toLowerCase().endsWith('.webm') ? (
                    <video
                      src={galleryImages[selectedImageIndex]}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      src={galleryImages[selectedImageIndex]}
                      alt={`Event image ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  )}
                </>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevImage}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <span className="text-white">
                {selectedImageIndex + 1} / {galleryImages.length}
              </span>

              <button
                onClick={nextImage}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((media, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative min-w-[80px] h-20 rounded cursor-pointer border-2 transition-all ${
                    idx === selectedImageIndex
                      ? "border-primary"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  {media.toLowerCase().endsWith('.mp4') || 
                   media.toLowerCase().endsWith('.mov') || 
                   media.toLowerCase().endsWith('.avi') || 
                   media.toLowerCase().endsWith('.webm') ? (
                    <div className="relative w-full h-full bg-black/30 rounded flex items-center justify-center">
                      <div className="absolute inset-0">
                        <video
                          src={media}
                          className="w-full h-full object-cover rounded"
                          muted
                          playsInline
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={media}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover rounded"
                      unoptimized
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
