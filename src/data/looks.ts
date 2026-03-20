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
import accCasual1 from "@/assets/acc-casual-1.jpg";
import accCasual2 from "@/assets/acc-casual-2.jpg";

export interface LookData {
  id: string;
  heroImage: string;
  title: string;
  formal: {
    outfitImage: string;
    completeTheLook: { image: string; label: string }[];
  };
  casual: {
    outfitImage: string;
    completeTheLook: { image: string; label: string }[];
  };
}

export const looks: LookData[] = [
  {
    id: "noir-tailoring",
    heroImage: hero1,
    title: "Noir Tailoring",
    formal: {
      outfitImage: formal1,
      completeTheLook: [
        { image: accFormal1, label: "Structured Bag" },
        { image: accFormal2, label: "Gold Timepiece" },
      ],
    },
    casual: {
      outfitImage: casual1,
      completeTheLook: [
        { image: accCasual1, label: "Canvas Tote" },
        { image: accCasual2, label: "Tortoise Shades" },
      ],
    },
  },
  {
    id: "ivory-silk",
    heroImage: hero2,
    title: "Ivory Silk",
    formal: {
      outfitImage: formal2,
      completeTheLook: [
        { image: accFormal2, label: "Gold Timepiece" },
        { image: accFormal1, label: "Structured Bag" },
      ],
    },
    casual: {
      outfitImage: casual2,
      completeTheLook: [
        { image: accCasual2, label: "Tortoise Shades" },
        { image: accCasual1, label: "Canvas Tote" },
      ],
    },
  },
  {
    id: "rust-knit",
    heroImage: hero3,
    title: "Rust Knit",
    formal: {
      outfitImage: formal3,
      completeTheLook: [
        { image: accFormal1, label: "Structured Bag" },
        { image: accFormal2, label: "Gold Timepiece" },
      ],
    },
    casual: {
      outfitImage: casual3,
      completeTheLook: [
        { image: accCasual1, label: "Canvas Tote" },
        { image: accCasual2, label: "Tortoise Shades" },
      ],
    },
  },
  {
    id: "navy-coat",
    heroImage: hero4,
    title: "Navy Coat",
    formal: {
      outfitImage: formal1,
      completeTheLook: [
        { image: accFormal2, label: "Gold Timepiece" },
        { image: accFormal1, label: "Structured Bag" },
      ],
    },
    casual: {
      outfitImage: casual1,
      completeTheLook: [
        { image: accCasual2, label: "Tortoise Shades" },
        { image: accCasual1, label: "Canvas Tote" },
      ],
    },
  },
];
