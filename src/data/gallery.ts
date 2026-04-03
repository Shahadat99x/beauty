import type { GalleryItem } from "@/lib/types";
import { beautyMedia } from "@/data/media";

export const galleryItems: GalleryItem[] = [
  {
    slug: "soft-radiance-finish",
    title: "Soft radiance finish",
    service: "Facial ritual result",
    imageTone: "champagne",
    aspect: "landscape",
    image: beautyMedia.ritualTreatment,
  },
  {
    slug: "defined-brow-balance",
    title: "Defined brow balance",
    service: "Brow sculpt result",
    imageTone: "taupe",
    aspect: "portrait",
    image: beautyMedia.detailLash,
  },
  {
    slug: "bridal-prep-glow",
    title: "Bridal prep glow",
    service: "Bridal preview",
    imageTone: "blush",
    aspect: "square",
    image: beautyMedia.portraitEditorialSoft,
  },
  {
    slug: "lash-lift-detail",
    title: "Lash lift detail",
    service: "Lash veil",
    imageTone: "pearl",
    aspect: "portrait",
    image: beautyMedia.detailSkinTexture,
  },
  {
    slug: "studio-space-calm",
    title: "Studio calm",
    service: "Our environment",
    imageTone: "mocha",
    aspect: "landscape",
    image: beautyMedia.productFlatlay,
  },
  {
    slug: "texture-refinement",
    title: "Texture refinement",
    service: "Cellular renewal peel",
    imageTone: "champagne",
    aspect: "portrait",
    image: beautyMedia.detailMaskProcess,
  },
  {
    slug: "signature-massage-sculpt",
    title: "Signature massage sculpt",
    service: "Restorative facial massage",
    imageTone: "blush",
    aspect: "square",
    image: beautyMedia.heroSpa,
  },
  {
    slug: "the-lueur-brightening",
    title: "Lueur brightening",
    service: "Brightening glow",
    imageTone: "pearl",
    aspect: "portrait",
    image: beautyMedia.productSerumDropper,
  },
];
