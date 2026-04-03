import type { BlogPost } from "@/lib/types";
import { beautyMedia } from "@/data/media";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-prep-skin-for-an-event",
    title: "How to Prep Skin for an Event Without Overloading It",
    category: "Skin Rituals",
    excerpt:
      "A polished preparation routine for weddings, shoots, and dinners that keeps skin calm and luminous.",
    publishedAt: "March 2026",
    readTime: "4 min read",
    imageTone: "champagne",
    image: beautyMedia.ritualTreatment,
    contentBlocks: [
      {
        type: "paragraph",
        value: "The biggest mistake we see clients make before a major event is completely changing their routine three days prior. The temptation to throw every active ingredient — strong acids, new retinols, aggressive peels — at your face in the hopes of an overnight miracle is strong, but it usually results in inflammation, not illumination."
      },
      {
        type: "quote",
        value: "Preparation should be about calming the barrier and increasing hydration, rather than stripping the skin."
      },
      {
        type: "h2",
        value: "The 4-Week Timeline"
      },
      {
        type: "paragraph",
        value: "If you have a month until your event, this is the ideal time to do any necessary extractions or deeper peel work. At this stage, your skin has plenty of time to heal. At the four-week mark, we recommend our Cellular Renewal treatment. It addresses granular texture and deep congestion without causing long-term redness."
      },
      {
        type: "h2",
        value: "The Week Of"
      },
      {
        type: "paragraph",
        value: "This is when the strategy shifts entirely to hydration and lymphatic drainage. You should stop using strong exfoliants to ensure your skin barrier is perfectly intact—this is the secret to makeup gliding on smoothly."
      },
      {
        type: "ul",
        value: "",
        items: [
          "Switch to a gentle, milky cleanser.",
          "Use a ceramide-rich moisturizer day and night.",
          "Incorporate a hyaluronic acid serum on damp skin.",
          "Book a Radiance Facial Ritual 2-3 days before the event."
        ]
      }
    ]
  },
  {
    slug: "brow-shaping-that-stays-soft",
    title: "Brow Shaping That Stays Soft, Structured, and Modern",
    category: "Brows",
    excerpt:
      "Why premium brow work is about proportion, restraint, and maintenance you can actually keep up with.",
    publishedAt: "February 2026",
    readTime: "3 min read",
    imageTone: "taupe",
    image: beautyMedia.detailLash,
    contentBlocks: [
      {
        type: "paragraph",
        value: "For years, brow trends dictated harsh lines and extremely dark tints. Now, the aesthetic has thankfully shifted toward a softer, more architectural approach. We call it 'structured softness'—giving the face lift and definition without the brows overpowering your other features."
      },
      {
        type: "h3",
        value: "The Architecture of the Arch"
      },
      {
        type: "paragraph",
        value: "True brow artistry isn't about using a stencil; it's about mapping the brow to your unique bone structure. By working with your natural growth patterns, we can subtly raise the tail of the brow to open up the eye area, creating a more rested, awake appearance without resorting to cosmetic injectables."
      },
      {
        type: "quote",
        value: "A perfect brow shouldn't enter the room before you do."
      },
      {
        type: "paragraph",
        value: "When we custom-mix our tints, we usually lean half a shade lighter and cooler than a client expects. This allows the tint to deepen the density of the existing hairs without stamping the skin underneath too heavily, resulting in a finish that looks like a subtle shadow rather than a heavy powder."
      }
    ]
  },
  {
    slug: "quiet-luxury-beauty-routine",
    title: "A Quiet-Luxury Beauty Routine for Busy Weeks",
    category: "Studio Journal",
    excerpt:
      "The treatments and home habits we recommend when you want to look polished without adding complexity.",
    publishedAt: "January 2026",
    readTime: "5 min read",
    imageTone: "blush",
    image: beautyMedia.productSerumDropper,
    contentBlocks: [
      {
        type: "paragraph",
        value: "The concept of 'quiet luxury' extends far beyond fashion. In the beauty space, it translates to a routine that prioritizes skin health, subtle enhancements, and high-quality basics over dramatic transformations and complex, 12-step daily regimes."
      },
      {
        type: "paragraph",
        value: "When your weeks are overwhelming, the last thing you need is a skincare routine that feels like a chore. The goal is to establish baseline treatments at the studio so that your morning routine takes less than five minutes."
      },
      {
        type: "h2",
        value: "The Studio Foundations"
      },
      {
        type: "ul",
        value: "",
        items: [
          "The Lash Lift Veil: Waking up with naturally curled, darkened lashes eliminates the need for mascara entirely.",
          "Signature Brow Sculpt: A structured tint frame means you don't need to spend time drawing on your brows every morning.",
          "The Lueur Essential Membership: A monthly deep-clean and hydration facial means your skin will naturally glow, reducing the need for heavy foundations."
        ]
      },
      {
        type: "paragraph",
        value: "By investing in these core, low-maintenance enhancements once a month, you buy back your time every single morning. That is the true luxury."
      }
    ]
  }
];
