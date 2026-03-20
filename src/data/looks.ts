import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import formal1 from "@/assets/formal-1.jpg";
import formal2 from "@/assets/formal-2.jpg";
import formal3 from "@/assets/formal-3.jpg";
import casual1 from "@/assets/casual-1.jpg";
import casual2 from "@/assets/casual-2.jpg";
import casual3 from "@/assets/casual-3.jpg";
import accFormal1 from "@/assets/acc-formal-1.jpg";
import accFormal2 from "@/assets/acc-formal-2.jpg";
import accFormal3 from "@/assets/acc-formal-3.jpg";
import accFormal4 from "@/assets/acc-formal-4.jpg";
import accCasual1 from "@/assets/acc-casual-1.jpg";
import accCasual2 from "@/assets/acc-casual-2.jpg";
import accCasual3 from "@/assets/acc-casual-3.jpg";
import accCasual4 from "@/assets/acc-casual-4.jpg";

export interface CompleteTheLookItem {
  image: string;
  label: string;
  sku: string;
  matchingScore: number; // 0-100
}

export interface OutfitCategory {
  outfitImage: string;
  caption: string;
  completeTheLook: CompleteTheLookItem[];
}

export interface LookData {
  id: string;
  heroImage: string;
  title: string;
  formal: OutfitCategory;
  casual: OutfitCategory;
}

export const looks: LookData[] = [
  {
    id: "noir-tailoring",
    heroImage: hero1,
    title: "Noir Tailoring",
    formal: {
      outfitImage: formal1,
      caption: "Sharp silhouette in midnight black — boardroom to evening event",
      completeTheLook: [
        { image: accFormal1, label: "Structured Bag", sku: "FB-1001", matchingScore: 92 },
        { image: accFormal2, label: "Gold Timepiece", sku: "FW-1002", matchingScore: 88 },
        { image: accFormal3, label: "Oxford Shoes", sku: "FS-1003", matchingScore: 95 },
        { image: accFormal4, label: "Silk Pocket Square", sku: "FP-1004", matchingScore: 84 },
      ],
    },
    casual: {
      outfitImage: casual1,
      caption: "Relaxed weekend layers with understated edge",
      completeTheLook: [
        { image: accCasual1, label: "Canvas Tote", sku: "CB-2001", matchingScore: 87 },
        { image: accCasual2, label: "Tortoise Shades", sku: "CS-2002", matchingScore: 91 },
        { image: accCasual3, label: "White Sneakers", sku: "CW-2003", matchingScore: 89 },
        { image: accCasual4, label: "Woven Belt", sku: "CL-2004", matchingScore: 82 },
      ],
    },
  },
  {
    id: "ivory-silk",
    heroImage: hero2,
    title: "Ivory Silk",
    formal: {
      outfitImage: formal2,
      caption: "Soft ivory draping for refined elegance",
      completeTheLook: [
        { image: accFormal2, label: "Gold Timepiece", sku: "FW-1002", matchingScore: 90 },
        { image: accFormal1, label: "Structured Bag", sku: "FB-1001", matchingScore: 86 },
        { image: accFormal4, label: "Silk Pocket Square", sku: "FP-1004", matchingScore: 93 },
        { image: accFormal3, label: "Oxford Shoes", sku: "FS-1003", matchingScore: 88 },
      ],
    },
    casual: {
      outfitImage: casual2,
      caption: "Light and breezy — effortless daytime style",
      completeTheLook: [
        { image: accCasual2, label: "Tortoise Shades", sku: "CS-2002", matchingScore: 94 },
        { image: accCasual1, label: "Canvas Tote", sku: "CB-2001", matchingScore: 85 },
        { image: accCasual4, label: "Woven Belt", sku: "CL-2004", matchingScore: 79 },
        { image: accCasual3, label: "White Sneakers", sku: "CW-2003", matchingScore: 91 },
      ],
    },
  },
  {
    id: "rust-knit",
    heroImage: hero3,
    title: "Rust Knit",
    formal: {
      outfitImage: formal3,
      caption: "Earthy tones with textured warmth — smart casual bridge",
      completeTheLook: [
        { image: accFormal1, label: "Structured Bag", sku: "FB-1001", matchingScore: 81 },
        { image: accFormal3, label: "Oxford Shoes", sku: "FS-1003", matchingScore: 90 },
        { image: accFormal2, label: "Gold Timepiece", sku: "FW-1002", matchingScore: 87 },
        { image: accFormal4, label: "Silk Pocket Square", sku: "FP-1004", matchingScore: 76 },
      ],
    },
    casual: {
      outfitImage: casual3,
      caption: "Cozy layering for crisp autumn days",
      completeTheLook: [
        { image: accCasual1, label: "Canvas Tote", sku: "CB-2001", matchingScore: 83 },
        { image: accCasual3, label: "White Sneakers", sku: "CW-2003", matchingScore: 92 },
        { image: accCasual2, label: "Tortoise Shades", sku: "CS-2002", matchingScore: 78 },
        { image: accCasual4, label: "Woven Belt", sku: "CL-2004", matchingScore: 88 },
      ],
    },
  },
  {
    id: "navy-coat",
    heroImage: hero4,
    title: "Navy Coat",
    formal: {
      outfitImage: formal1,
      caption: "Classic navy layering — timeless power dressing",
      completeTheLook: [
        { image: accFormal2, label: "Gold Timepiece", sku: "FW-1002", matchingScore: 94 },
        { image: accFormal3, label: "Oxford Shoes", sku: "FS-1003", matchingScore: 91 },
        { image: accFormal1, label: "Structured Bag", sku: "FB-1001", matchingScore: 85 },
        { image: accFormal4, label: "Silk Pocket Square", sku: "FP-1004", matchingScore: 89 },
      ],
    },
    casual: {
      outfitImage: casual1,
      caption: "Laid-back navy layers for everyday polish",
      completeTheLook: [
        { image: accCasual2, label: "Tortoise Shades", sku: "CS-2002", matchingScore: 86 },
        { image: accCasual4, label: "Woven Belt", sku: "CL-2004", matchingScore: 90 },
        { image: accCasual1, label: "Canvas Tote", sku: "CB-2001", matchingScore: 80 },
        { image: accCasual3, label: "White Sneakers", sku: "CW-2003", matchingScore: 93 },
      ],
    },
  },
];
