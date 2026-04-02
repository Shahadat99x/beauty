import type { PricingSnippet, PricingCategory } from "@/lib/types";

export const pricingSnippets: PricingSnippet[] = [
  { title: "Signature Brow Sculpt", price: "€48", note: "Includes custom tint" },
  { title: "Radiance Facial Ritual", price: "€92", note: "75 min bespoke hydration" },
  { title: "Lash Lift Veil", price: "€64", note: "Lasts 6-8 weeks" },
];

export const pricingCategories: PricingCategory[] = [
  {
    title: "Skin Rituals",
    description: "Our core facial treatments focused on barrier repair, deep hydration, and cellular renewal. All skin rituals begin with a thorough analysis to customize the products used.",
    packages: [
      {
        title: "Radiance Facial Ritual",
        description: "The studio signature for dull, dehydrated skin.",
        price: "€92",
        items: ["75-minute treatment", "Enzyme exfoliation", "Lifting massage", "Hydrating alginate mask"],
        isPopular: true
      },
      {
        title: "Cellular Renewal Peel",
        description: "Targeted resurfacing for texture and pigmentation.",
        price: "€110",
        items: ["60-minute treatment", "Custom acid blend", "Calming ceramide mask", "Zero flaking downtime"]
      },
      {
        title: "Restorative Facial Massage",
        description: "Focus purely on facial muscle release and lifting.",
        price: "€75",
        items: ["45-minute treatment", "Lymphatic drainage", "Jaw tension release", "Cooling globe finish"]
      }
    ]
  },
  {
    title: "Brow & Lash Enhancements",
    description: "Subtle mapping and lifting techniques to frame your face softly and naturally without heavy, blocky trends.",
    packages: [
      {
        title: "Signature Brow Sculpt",
        description: "Meticulous shaping and custom blended coloring.",
        price: "€48",
        items: ["50-minute appointment", "Bone structure mapping", "Custom tint mix", "Wax & tweeze polish"]
      },
      {
        title: "Lash Lift Veil",
        description: "Open your eyes with a glossy, swooping lift.",
        price: "€64",
        items: ["60-minute appointment", "Keratin strengthening", "Blue-black deep tint", "Lasts 6-8 weeks"],
        isPopular: true
      },
      {
        title: "The Lift & Sculpt Pair",
        description: "Our most requested pre-event combination.",
        price: "€105",
        items: ["90-minute appointment", "Lash Lift Veil", "Signature Brow Sculpt", "Save €7 when booked together"]
      }
    ]
  },
  {
    title: "Bridal & Occasion",
    description: "Curated beauty planning and execution so you feel perfectly polished and entirely yourself.",
    packages: [
      {
        title: "Bridal Preview Glow",
        description: "Create your roadmap to wedding-day skin.",
        price: "€130",
        items: ["90-minute appointment", "Timeline planning", "Brow mapping", "Calming hydration facial"]
      },
      {
        title: "The Calm Morning",
        description: "In-studio or on-location bridal beauty execution.",
        price: "From €350",
        items: ["Bespoke skin prep", "Long-wear soft glam", "Bridal party options", "Touch-up kit included"]
      }
    ]
  },
  {
    title: "Studio Memberships",
    description: "Consistent care for those who prioritize their skin's long-term health and a recurring moment of calm.",
    packages: [
      {
        title: "The Lueur Essential",
        description: "Monthly maintenance for a constant glow.",
        price: "€85 /mo",
        items: ["1 Signature Ritual per month", "10% off all retail products", "Priority booking window", "Complimentary seasonal gift"]
      },
      {
        title: "The Lueur Collective",
        description: "Advanced care for dedicated skin transformation.",
        price: "€160 /mo",
        items: ["2 Signature Rituals per month", "15% off all retail products", "Infinite guest passes (1/mo)", "Private event invitations"],
        isPopular: true
      }
    ]
  }
];
