import hero1 from "@/assets/real-blazer.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

import modelFormal from "@/assets/model-formal.jpg";
import modelCasual from "@/assets/model-casual.jpg";
import formal2 from "@/assets/formal-2.jpg";
import formal3 from "@/assets/formal-3.jpg";
import casual2 from "@/assets/casual-2.jpg";
import casual3 from "@/assets/casual-3.jpg";

import realTurtleneck from "@/assets/real-turtleneck.jpg";
import realSkirt from "@/assets/real-skirt.jpg";
import realLoafer from "@/assets/real-loafer.jpg";
import realHandbag from "@/assets/real-handbag.jpg";

import itemTshirt from "@/assets/item-tshirt.jpg";
import itemPants from "@/assets/item-pants.jpg";
import itemSneakers from "@/assets/item-sneakers.jpg";
import itemTote from "@/assets/item-tote.jpg";

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
  category: string;
  sku: string;
  matchingScore: number;
  price: number;
}

export interface OutfitCategory {
  outfitImage: string;
  caption: string;
  completeTheLook: CompleteTheLookItem[];
}

export interface LookData {
  id: string;
  heroImage: string;
  heroName: string;
  heroPrice: number;
  heroSku: string;
  title: string;
  formal: OutfitCategory;
  casual: OutfitCategory;
}

export const looks: LookData[] = [
  {
    id: "dark-gray-blazer",
    heroImage: hero1,
    heroName: "LOFT Dark Gray Blazer",
    heroPrice: 189.99,
    heroSku: "HRO-0001",
    title: "Dark Gray Blazer",
    formal: {
      outfitImage: modelFormal,
      caption: "Women formal attire with dark blazer, turtleneck, skirt, shoes & accessories",
      completeTheLook: [
        { image: realTurtleneck, label: "Turtleneck", category: "Top wear", sku: "TW-1001", matchingScore: 90, price: 59.99 },
        { image: realSkirt, label: "Tailored Skirt", category: "Bottom wear", sku: "BW-1002", matchingScore: 98, price: 79.99 },
        { image: realLoafer, label: "Loafer", category: "Footwear", sku: "FW-1003", matchingScore: 92, price: 129.99 },
        { image: realHandbag, label: "Structured Handbag", category: "Accessory", sku: "AC-1004", matchingScore: 96, price: 149.99 },
      ],
    },
    casual: {
      outfitImage: modelCasual,
      caption: "Relaxed casual look with denim jacket, white tee, chinos & sneakers",
      completeTheLook: [
        { image: itemTshirt, label: "White T-Shirt", category: "Top wear", sku: "CT-2001", matchingScore: 87, price: 29.99 },
        { image: itemPants, label: "Chino Pants", category: "Bottom wear", sku: "CB-2002", matchingScore: 91, price: 69.99 },
        { image: itemSneakers, label: "White Sneakers", category: "Footwear", sku: "CF-2003", matchingScore: 89, price: 99.99 },
        { image: itemTote, label: "Canvas Tote", category: "Accessory", sku: "CA-2004", matchingScore: 82, price: 45.99 },
      ],
    },
  },
  {
    id: "ivory-silk",
    heroImage: hero2,
    heroName: "Ivory Silk Blouse",
    heroPrice: 159.99,
    heroSku: "HRO-0002",
    title: "Ivory Silk",
    formal: {
      outfitImage: formal2,
      caption: "Soft ivory draping for refined elegance with coordinated accessories",
      completeTheLook: [
        { image: accFormal2, label: "Gold Timepiece", category: "Accessory", sku: "FW-1002", matchingScore: 90, price: 249.99 },
        { image: accFormal1, label: "Structured Bag", category: "Accessory", sku: "FB-1001", matchingScore: 86, price: 189.99 },
        { image: accFormal4, label: "Silk Pocket Square", category: "Accessory", sku: "FP-1004", matchingScore: 93, price: 39.99 },
        { image: accFormal3, label: "Oxford Shoes", category: "Footwear", sku: "FS-1003", matchingScore: 88, price: 159.99 },
      ],
    },
    casual: {
      outfitImage: casual2,
      caption: "Light and breezy — effortless daytime style with summer essentials",
      completeTheLook: [
        { image: accCasual2, label: "Tortoise Shades", category: "Accessory", sku: "CS-2002", matchingScore: 94, price: 89.99 },
        { image: accCasual1, label: "Canvas Tote", category: "Accessory", sku: "CB-2001", matchingScore: 85, price: 45.99 },
        { image: accCasual4, label: "Woven Belt", category: "Accessory", sku: "CL-2004", matchingScore: 79, price: 34.99 },
        { image: accCasual3, label: "White Sneakers", category: "Footwear", sku: "CW-2003", matchingScore: 91, price: 99.99 },
      ],
    },
  },
  {
    id: "rust-knit",
    heroImage: hero3,
    heroName: "Rust Knit Cardigan",
    heroPrice: 119.99,
    heroSku: "HRO-0003",
    title: "Rust Knit",
    formal: {
      outfitImage: formal3,
      caption: "Earthy tones with textured warmth — smart casual bridge with polish",
      completeTheLook: [
        { image: accFormal1, label: "Structured Bag", category: "Accessory", sku: "FB-1001", matchingScore: 81, price: 189.99 },
        { image: accFormal3, label: "Oxford Shoes", category: "Footwear", sku: "FS-1003", matchingScore: 90, price: 159.99 },
        { image: accFormal2, label: "Gold Timepiece", category: "Accessory", sku: "FW-1002", matchingScore: 87, price: 249.99 },
        { image: accFormal4, label: "Silk Pocket Square", category: "Accessory", sku: "FP-1004", matchingScore: 76, price: 39.99 },
      ],
    },
    casual: {
      outfitImage: casual3,
      caption: "Cozy layering for crisp autumn days with earthy accessories",
      completeTheLook: [
        { image: accCasual1, label: "Canvas Tote", category: "Accessory", sku: "CB-2001", matchingScore: 83, price: 45.99 },
        { image: accCasual3, label: "White Sneakers", category: "Footwear", sku: "CW-2003", matchingScore: 92, price: 99.99 },
        { image: accCasual2, label: "Tortoise Shades", category: "Accessory", sku: "CS-2002", matchingScore: 78, price: 89.99 },
        { image: accCasual4, label: "Woven Belt", category: "Accessory", sku: "CL-2004", matchingScore: 88, price: 34.99 },
      ],
    },
  },
  {
    id: "navy-coat",
    heroImage: hero4,
    heroName: "Navy Wool Coat",
    heroPrice: 249.99,
    heroSku: "HRO-0004",
    title: "Navy Coat",
    formal: {
      outfitImage: modelFormal,
      caption: "Classic navy layering — timeless power dressing with structured accessories",
      completeTheLook: [
        { image: accFormal2, label: "Gold Timepiece", category: "Accessory", sku: "FW-1002", matchingScore: 94, price: 249.99 },
        { image: accFormal3, label: "Oxford Shoes", category: "Footwear", sku: "FS-1003", matchingScore: 91, price: 159.99 },
        { image: accFormal1, label: "Structured Bag", category: "Accessory", sku: "FB-1001", matchingScore: 85, price: 189.99 },
        { image: accFormal4, label: "Silk Pocket Square", category: "Accessory", sku: "FP-1004", matchingScore: 89, price: 39.99 },
      ],
    },
    casual: {
      outfitImage: modelCasual,
      caption: "Laid-back navy layers for everyday polish with casual accessories",
      completeTheLook: [
        { image: accCasual2, label: "Tortoise Shades", category: "Accessory", sku: "CS-2002", matchingScore: 86, price: 89.99 },
        { image: accCasual4, label: "Woven Belt", category: "Accessory", sku: "CL-2004", matchingScore: 90, price: 34.99 },
        { image: accCasual1, label: "Canvas Tote", category: "Accessory", sku: "CB-2001", matchingScore: 80, price: 45.99 },
        { image: accCasual3, label: "White Sneakers", category: "Footwear", sku: "CW-2003", matchingScore: 93, price: 99.99 },
      ],
    },
  },
];
