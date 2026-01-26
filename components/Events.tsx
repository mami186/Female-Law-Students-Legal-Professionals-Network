"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { eventImageMap } from "@/data/eventImages";

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
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Function to get images from a folder
  const getImagesFromFolder = (folderName: string): string[] => {
    return eventImageMap[folderName] || [];
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
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Events
          </h2>
          <p className="text-foreground max-w-xl mx-auto">
            Explore our impactful events and programs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventFolders.map((event, index) => (
            <div
              key={index}
              onClick={() => handleEventClick(event.folder)}
              className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">{event.subtitle}</p>
            </div>
          ))}
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
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
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

            {/* Image Display */}
            <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
              {galleryImages.length > 0 && (
                <Image
                  src={galleryImages[selectedImageIndex]}
                  alt={`Event image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
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
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative min-w-[80px] h-20 rounded cursor-pointer border-2 transition-all ${
                    idx === selectedImageIndex
                      ? "border-primary"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover rounded"
                    unoptimized
                  />
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
