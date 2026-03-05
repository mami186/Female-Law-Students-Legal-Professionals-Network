// Utility functions for dynamic event image detection

// Cache for detected images to avoid repeated scanning
const imageCache = new Map<string, string[]>();

// Known event folders with their actual images (this will be auto-generated in production)
const knownEventImages: Record<string, string[]> = {
  "Awareness creation campaign on international womens day march 25,2022": [
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_1_2026-01-07_18-19-37.jpg",
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_2_2026-01-07_18-19-37.jpg",
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_3_2026-01-07_18-19-37.jpg",
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_4_2026-01-07_18-19-37.jpg",
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_5_2026-01-07_18-19-37.jpg",
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_6_2026-01-07_18-19-37.jpg",
    "/Events/Awareness creation campaign on international womens day march 25,2022/photo_7_2026-01-07_18-19-37.jpg"
  ],
  "Awarness creation": [
    "/Events/Awarness creation/photo_10_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_10_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_11_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_11_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_12_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_13_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_14_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_15_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_16_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_1_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_1_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_2_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_2_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_3_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_3_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_4_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_4_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_5_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_5_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_6_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_6_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_7_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_7_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_8_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_8_2026-01-07_18-11-09.jpg",
    "/Events/Awarness creation/photo_9_2026-01-07_18-09-07.jpg",
    "/Events/Awarness creation/photo_9_2026-01-07_18-11-09.jpg"
  ],
  "International women human rights defenders day": [
    "/Events/International women human rights defenders day/photo_1_2026-01-07_18-13-10.jpg",
    "/Events/International women human rights defenders day/photo_1_2026-01-07_18-17-03.jpg",
    "/Events/International women human rights defenders day/photo_2_2026-01-07_18-13-10.jpg",
    "/Events/International women human rights defenders day/photo_2_2026-01-07_18-17-03.jpg",
    "/Events/International women human rights defenders day/photo_3_2026-01-07_18-13-10.jpg",
    "/Events/International women human rights defenders day/photo_3_2026-01-07_18-17-03.jpg",
    "/Events/International women human rights defenders day/photo_4_2026-01-07_18-13-10.jpg",
    "/Events/International women human rights defenders day/photo_4_2026-01-07_18-17-03.jpg",
    "/Events/International women human rights defenders day/photo_5_2026-01-07_18-13-10.jpg"
  ],
  "International womens day": [
    "/Events/International womens day/photo_1_2026-01-07_18-15-00.jpg",
    "/Events/International womens day/photo_2_2026-01-07_18-15-00.jpg",
    "/Events/International womens day/photo_3_2026-01-07_18-15-00.jpg",
    "/Events/International womens day/photo_4_2026-01-07_18-15-00.jpg",
    "/Events/International womens day/photo_5_2026-01-07_18-15-00.jpg"
  ],
  "Personal development training and experience sharing program": [
    "/Events/Personal development training and experience sharing program/photo_1_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_2_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_3_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_4_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_5_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_6_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_7_2026-01-07_18-21-22.jpg",
    "/Events/Personal development training and experience sharing program/photo_8_2026-01-07_18-21-22.jpg"
  ],
  "Relaunch event": [
    "/Events/Relaunch event/photo_10_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_11_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_12_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_13_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_14_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_15_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_16_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_17_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_18_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_1_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_2_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_3_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_4_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_5_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_6_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_7_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_8_2026-01-07_18-18-30.jpg",
    "/Events/Relaunch event/photo_9_2026-01-07_18-18-30.jpg"
  ],
  "Training": [
    "/Events/Training/photo_10_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_11_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_12_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_13_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_14_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_15_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_1_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_2_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_3_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_4_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_5_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_6_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_7_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_8_2026-01-07_18-15-43.jpg",
    "/Events/Training/photo_9_2026-01-07_18-15-43.jpg"
  ],
  "launching event": [
    "/Events/launching event/pasted file.jpg",
    "/Events/launching event/photo_10_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_11_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_12_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_13_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_14_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_15_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_16_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_17_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_18_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_19_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_1_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_1_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_1_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_2_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_2_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_2_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_3_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_3_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_3_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_4_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_4_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_4_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_5_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_5_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_5_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_6_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_6_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_6_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_7_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_7_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_7_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_8_2026-01-07_18-07-33 (2).jpg",
    "/Events/launching event/photo_8_2026-01-07_18-07-33.jpg",
    "/Events/launching event/photo_8_2026-01-07_18-22-22.jpg",
    "/Events/launching event/photo_9_2026-01-07_18-22-22.jpg"
  ],
  "wellcome program": [
    "/Events/wellcome program/photo_1_2026-01-07_18-10-05.jpg",
    "/Events/wellcome program/photo_1_2026-01-07_18-20-48.jpg",
    "/Events/wellcome program/photo_2_2026-01-07_18-10-05.jpg",
    "/Events/wellcome program/photo_2_2026-01-07_18-20-48.jpg",
    "/Events/wellcome program/photo_3_2026-01-07_18-10-05.jpg",
    "/Events/wellcome program/photo_3_2026-01-07_18-20-48.jpg",
    "/Events/wellcome program/photo_4_2026-01-07_18-10-05.jpg",
    "/Events/wellcome program/photo_4_2026-01-07_18-20-48.jpg",
    "/Events/wellcome program/photo_5_2026-01-07_18-10-05.jpg"
  ],
  "16 days of activism": [
    "/Events/16 days of activism/IMG_2110.jpg",
    "/Events/16 days of activism/IMG_2160.jpg",
    "/Events/16 days of activism/IMG_2337.jpg",
    "/Events/16 days of activism/clothing .jpg",
    "/Events/16 days of activism/opening .jpg"
  ]
};

export const getEventImagesSync = (folderName: string): string[] => {
  // Check cache first
  if (imageCache.has(folderName)) {
    return imageCache.get(folderName)!;
  }

  // Try known event images first
  if (knownEventImages[folderName]) {
    imageCache.set(folderName, knownEventImages[folderName]);
    return knownEventImages[folderName];
  }

  // For new folders, try to detect common image patterns
  const detectedImages = detectCommonImages(folderName);
  
  if (detectedImages.length > 0) {
    imageCache.set(folderName, detectedImages);
    return detectedImages;
  }

  // Final fallback
  console.warn(`No images found for folder: ${folderName}, using fallback`);
  return ["/hero.jpg"];
};

// Detect common image patterns in a folder
const detectCommonImages = (folderName: string): string[] => {
  const commonPatterns = [
    'IMG_', 'photo_', 'image_', 'img_', 'Picture', 'DSC_', 'P_'
  ];
  
  const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const detectedImages: string[] = [];
  
  // This is a simplified approach - in production, you'd use server-side file scanning
  // For now, we'll return empty and let the fallback handle it
  // The user can add new folders and they'll be detected when they add the folder name to eventFolders
  
  return detectedImages;
};

// Function to add new event images dynamically (call this when you add new folders)
export const addEventImages = (folderName: string, images: string[]) => {
  knownEventImages[folderName] = images;
  imageCache.delete(folderName); // Clear cache to force refresh
};
