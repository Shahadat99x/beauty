import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "radiance-facial",
    title: "Radiance Facial Ritual",
    category: "Skin Ritual",
    excerpt:
      "A layered hydration and glow treatment designed for events, travel, and dull complexions.",
    duration: "75 min",
    priceFrom: "From €92",
    highlight: "Plump, luminous skin with zero downtime.",
    imageTone: "champagne",
    overview: "Our signature facial is designed to reset the skin's moisture barrier while instantly improving texture and tone. Using a combination of gentle enzyme exfoliation, active hydration serums, and lifting massage techniques, this treatment restores natural radiance. It is the perfect choice before a special event or whenever your skin feels fatigued and lackluster.",
    benefits: [
      "Deeply hydrates and plumps fine lines",
      "Restores natural glow and brightness",
      "Smooths skin texture without aggressive peeling",
      "Improves microcirculation through massage"
    ],
    process: [
      { title: "Consultation & Cleanse", description: "We begin with a thorough skin analysis followed by a double cleanse using nourishing oil and milk cleansers." },
      { title: "Gentle Exfoliation", description: "An enzyme mask is applied under light steam to dissolve dead skin cells gently without causing redness." },
      { title: "Lifting Massage", description: "Signature firming massage techniques are used to drain puffiness and stimulate collagen production in the face, neck, and shoulders." },
      { title: "Layered Hydration", description: "A cooling alginate mask locks in custom serums. We finish with barrier-repairing moisturizers and SPF." }
    ],
    recommendedSpecialists: ["amelia-ruskaite", "monika-vy"]
  },
  {
    slug: "signature-brow-sculpt",
    title: "Signature Brow Sculpt",
    category: "Brows",
    excerpt:
      "Precision shaping, tinting, and styling for softly defined brows that frame the face naturally.",
    duration: "50 min",
    priceFrom: "From €48",
    highlight: "Balanced definition without harsh edges.",
    imageTone: "taupe",
    overview: "This is not a standard wax and tint. The Signature Brow Sculpt focuses on structural balance, restoring sparse areas, and creating a soft, feathered look. We map your brows according to your bone structure rather than trends, ensuring a sophisticated arch that enhances your natural beauty.",
    benefits: [
      "Custom color mixing for the perfect tint",
      "Gentle shaping method that respects hair growth",
      "Symmetry mapping based on facial anatomy",
      "Long-lasting stain that stays skin-soft"
    ],
    process: [
      { title: "Mapping & Design", description: "We map the ideal brow shape using precise measuring tools to suit your facial structure." },
      { title: "Custom Tinting", description: "A bespoken tint is mixed to compliment your hair and skin undertones perfectly." },
      { title: "Shaping", description: "We use a combination of gentle waxing and tweezing to create clean, sharp lines." },
      { title: "Styling & Advice", description: "Brows are finished with a nourishing gel and we guide you on how to maintain them at home." }
    ],
    recommendedSpecialists: ["eva-mont"]
  },
  {
    slug: "lash-lift-veil",
    title: "Lash Lift Veil",
    category: "Lashes",
    excerpt:
      "A polished lift and tint pairing for an open-eye effect that still feels effortless and modern.",
    duration: "60 min",
    priceFrom: "From €64",
    highlight: "Glossy lift with low-maintenance wear.",
    imageTone: "blush",
    overview: "The Lash Lift Veil is a restorative treatment that curls and darkens your natural lashes. Instead of a dramatic, harsh bend, we create a soft, swooping 'veil' effect that opens up the eyes and makes lashes look significantly longer and thicker without the need for extensions.",
    benefits: [
      "Effortlessly awake appearance",
      "Lasts 6-8 weeks with minimal maintenance",
      "Strengthening keratin infusion",
      "No mascara needed"
    ],
    process: [
      { title: "Shield Selection", description: "We select the perfect silicone shield based on your natural lash length and desired curl intensity." },
      { title: "Lifting Solution", description: "Lashes are set securely onto the shield, and a gentle lifting lotion is applied." },
      { title: "Deep Tinting", description: "A conditioning blue-black tint is applied to give depth and intensity to the lashes." },
      { title: "Keratin Seal", description: "The treatment concludes with a keratin-rich serum to nourish, strengthen, and gloss the lashes." }
    ],
    recommendedSpecialists: ["eva-mont"]
  },
  {
    slug: "bridal-preview-glow",
    title: "Bridal Preview Glow",
    category: "Event Beauty",
    excerpt:
      "Skin prep, brow refinement, and bespoke beauty planning tailored for your bridal timeline.",
    duration: "90 min",
    priceFrom: "From €130",
    highlight: "A calm, camera-ready beauty plan.",
    imageTone: "pearl",
    overview: "Preparing for a wedding should feel calming, not chaotic. The Bridal Preview Glow is a comprehensive consultation and initial treatment session where we assess your skin, refine your brows, and create a tailored roadmap counting down to your big day.",
    benefits: [
      "Personalized skincare timeline for the months leading up",
      "Immediate calming glow for engagement photos",
      "Stress-free brow mapping plan",
      "Comprehensive product recommendations"
    ],
    process: [
      { title: "Bridal Timeline Review", description: "We discuss your wedding date, stress levels, current routine, and ultimate goals." },
      { title: "Skin & Brow Mapping", description: "A detailed analysis to pinpoint what needs to be corrected and enhanced." },
      { title: "The Glow Facial", description: "A customized facial focusing solely on hydration, calming redness, and achieving a glass-skin finish." },
      { title: "The Plan", description: "You leave with a printed timeline of when to book the rest of your prep appointments." }
    ],
    recommendedSpecialists: ["amelia-ruskaite", "sofia-larsen"]
  },
  {
    slug: "cellular-renewal",
    title: "Cellular Renewal Peel",
    category: "Skin Ritual",
    excerpt:
      "A gentle resurfacing peel that clarifies texture, reduces pigmentation, and reveals fresh, glowing skin.",
    duration: "60 min",
    priceFrom: "From €110",
    highlight: "Instantly smoother, brighter texture.",
    imageTone: "mocha",
    overview: "This advanced peel accelerates cell turnover without the aggressive downtime of traditional chemical peels. It is carefully layered to target uneven texture, congestion, and hyperpigmentation, encouraging your skin to shed its dull outer layers and reveal a remarkably refined, luminous complexion underneath.",
    benefits: [
      "Fades hyperpigmentation and sun damage",
      "Clears congested pores and prevents breakouts",
      "Softens the appearance of fine lines",
      "Zero to minimal flaking downtime"
    ],
    process: [
      { title: "Barrier Assessment", description: "We first check your skin's barrier health to ensure it can perfectly tolerate the active peel." },
      { title: "Peel Application", description: "A custom blend of gentle acids (lactic, mandelic, or faint salicylic) is painted on and closely monitored." },
      { title: "Neutralization & Calming", description: "The peel is neutralized and a deeply soothing, cooling mask is applied to calm the skin instantly." },
      { title: "Barrier Cream", description: "We lock everything in with an intense restorative ceramide cream to protect the new skin cells." }
    ],
    recommendedSpecialists: ["monika-vy", "amelia-ruskaite"]
  },
  {
    slug: "restorative-massage",
    title: "Restorative Facial Massage",
    category: "Skin Ritual",
    excerpt:
      "Tension release and lymphatic drainage techniques designed to sculpt, lift, and deeply relax the facial muscles.",
    duration: "45 min",
    priceFrom: "From €75",
    highlight: "Visibly sculpted, rested appearance.",
    imageTone: "blush",
    overview: "More than just relaxation, this treatment is a workout for the facial muscles. Using a blend of deep tissue release, lymphatic drainage, and intra-oral techniques (optional), we melt away jaw tension, sculpt the cheekbones, and drain fluid retention, resulting in an instantly lifted, contoured appearance.",
    benefits: [
      "Relieves jaw tension and TMJ discomfort",
      "Dramatically reduces facial puffiness",
      "Naturally lifts and contours the face",
      "Stimulates blood flow for a healthy flush"
    ],
    process: [
      { title: "Warm Oil Application", description: "A nourishing botanical oil is warmed and massaged into the face, neck, and décolletage." },
      { title: "Lymphatic Drainage", description: "Light, rhythmic pumping movements encourage the lymphatic system to flush out toxins." },
      { title: "Deep Sculpting", description: "Firmer, targeted massage techniques lift the cheeks, define the jawline, and release forehead tension." },
      { title: "Cooling Globes", description: "The treatment finishes with ice globes to tighten the skin and lock down the lifted effect." }
    ],
    recommendedSpecialists: ["amelia-ruskaite", "monika-vy"]
  },
  {
    slug: "lueur-brightening-glow",
    title: "Lueur Brightening Glow",
    category: "Specialized Rituals",
    excerpt: "A high-performance brightening ritual targeting hyperpigmentation and environmental stress.",
    duration: "80 min",
    priceFrom: "From €125",
    highlight: "Uniform, luminous, and deeply oxygenated skin.",
    imageTone: "champagne",
    overview: "Designed for those seeking an immediate correction in tone and texture. This ritual combines vitamin-rich oxygen infusions with advanced massage to brighten dullness and even out sun damage. Perfect for post-holiday recovery or season changes.",
    benefits: [
      "Fades the appearance of age spots and redness",
      "Infuses deep-level oxygenation for tired skin",
      "Provides intense antioxidant protection",
      "Creates a vibrant, 'lit-from-within' appearance"
    ],
    process: [
      { title: "Oxygen Cleanse", description: "A double-action cleanse using oxygenated milk to purify the pores." },
      { title: "Vitamin C Infusion", description: "A stabilized Vitamin C serum is layered through light-pressure application." },
      { title: "Brightening Mask", description: "A cooling charcoal and algae mask to draw out impurities while infusing light." },
      { title: "The Finish", description: "Sealed with a nutrient-rich barrier balm and signature solar protection." }
    ],
    recommendedSpecialists: ["monika-vy", "amelia-ruskaite"]
  },
  {
    slug: "sculpted-eye-lift",
    title: "The Sculpted Eye Lift",
    category: "Lashes & Brows",
    excerpt: "A focused ritual targeting the delicate eye area with lifting massage and precision styling.",
    duration: "45 min",
    priceFrom: "From €55",
    highlight: "A lifted, wide-awake effect for the entire upper face.",
    imageTone: "taupe",
    overview: "This specialized ritual focuses entirely on the architecture of the eyes. We combine a micro-lifting massage using cold stones with precision brow shaping and a lash tint to harmonize and lift your gaze naturally.",
    benefits: [
      "Visibly reduces under-eye puffiness",
      "Shapes the brows to lift the orbital bone",
      "Intensifies the gaze with custom tinting",
      "Immediate awake and refreshed look"
    ],
    process: [
      { title: "Cold Stone Drainage", description: "Light-pressure massage using jade rollers to flush fluid from around the eyes." },
      { title: "Precision Mapping", description: "We re-calibrate your brow arch to open the eye area." },
      { title: "Tinting & Definition", description: "A subtle stain is applied to lashes and brows for depth." },
      { title: "Repairing Balm", description: "A peptide-rich eye cream is massaged in to lock in the lift." }
    ],
    recommendedSpecialists: ["eva-mont"]
  }
];
