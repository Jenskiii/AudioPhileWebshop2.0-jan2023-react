import products from "./data.json";
import SPEAKER from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import HEADPHONE from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import EARPHONE from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
export const productData = [
  {
    id: crypto.randomUUID(),
    category: "headphones",
    data: products.headphones,
    showcase: HEADPHONE,
  },
  {
    id: crypto.randomUUID(),
    category: "speakers",
    data: products.speakers,
    showcase: SPEAKER,
  },
  {
    id: crypto.randomUUID(),
    category: "earphones",
    data: products.earphones,
    showcase: EARPHONE,
  },
];
