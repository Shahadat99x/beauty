import { blogPosts } from "@/data/blog-posts";
import { defaultLocale } from "@/data/site";
import type { BlogPost, Locale } from "@/lib/types";

type LocalizedBlogContent = Pick<
  BlogPost,
  "title" | "category" | "excerpt" | "publishedAt" | "readTime" | "contentBlocks"
>;

interface JournalPageContent {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  featuredSubtitle: string;
  featuredLabel: string;
  featuredAction: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

interface JournalDetailContent {
  heroSubtitle: string;
  heroLabel: string;
  infoLabels: {
    focus: string;
    focusText: string;
    bestFor: string;
    bestForText: string;
    readLength: string;
    readLengthText: (readTime: string) => string;
  };
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

const localizedBlogContent: Record<Locale, Record<string, LocalizedBlogContent>> = {
  lt: {
    "how-to-prep-skin-for-an-event": {
      title: "Kaip paruošti odą svarbiai progai jos neperkraunant",
      category: "Veido priežiūra",
      excerpt:
        "Ką verta daryti prieš vestuves, fotosesiją ar kitą progą, kad oda atrodytų gaivi, o ne sudirginta.",
      publishedAt: "2026 kovas",
      readTime: "4 min.",
      contentBlocks: [
        {
          type: "paragraph",
          value:
            "Dažniausia klaida prieš svarbią progą yra bandymas per kelias dienas pakeisti visą odos rutiną. Norisi greito rezultato, todėl į vieną savaitę sutalpinama per daug aktyvių priemonių, stipresnių rūgščių ar naujų produktų. Dažniausiai tai baigiasi ne skaistumu, o jautresne oda.",
        },
        {
          type: "quote",
          value:
            "Prieš svarbią dieną verta ne stipriai veikti odą, o ją nuraminti ir padėti jai išlaikyti drėgmę.",
        },
        {
          type: "h2",
          value: "Likus maždaug mėnesiui",
        },
        {
          type: "paragraph",
          value:
            "Jei iki progos yra keturios savaitės, tai geras laikas spręsti tekstūros, užsikimšimų ar tono netolygumo klausimus. Oda dar turi laiko prisitaikyti, todėl galima planuoti aktyvesnę, bet vis tiek kontroliuotą procedūrą.",
        },
        {
          type: "h2",
          value: "Paskutinė savaitė prieš progą",
        },
        {
          type: "paragraph",
          value:
            "Šiuo metu prioritetas turėtų būti drėkinimas, raminimas ir švelnus odos paruošimas. Verta atsisakyti stipresnių eksfoliantų, kad makiažas tolygiai dengtųsi, o oda atrodytų komfortiškai ir gaiviai.",
        },
        {
          type: "ul",
          value: "",
          items: [
            "Rinkitės švelnų prausiklį be agresyvaus sausinančio efekto.",
            "Naudokite kremą, kuris padeda išlaikyti odos komfortą ir drėgmę.",
            "Jei oda linkusi dehidratuoti, įtraukite lengvą drėkinamąjį serumą.",
            "Veido procedūrą planuokite likus 2-3 dienoms iki progos, ne paskutinį vakarą.",
          ],
        },
      ],
    },
    "brow-shaping-that-stays-soft": {
      title: "Antakiai, kurie atrodo tvarkingai, bet išlieka natūralūs",
      category: "Antakiai",
      excerpt:
        "Kodėl geras antakių rezultatas remiasi proporcija, santūrumu ir lengvai prižiūrima forma.",
      publishedAt: "2026 vasaris",
      readTime: "3 min.",
      contentBlocks: [
        {
          type: "paragraph",
          value:
            "Antakių tendencijos keičiasi, bet klientėms ilgainiui svarbiausia tampa ne mada, o tai, kad forma tiktų jų veidui. Per tamsūs ar per griežti antakiai greitai pradeda atrodyti svetimi, todėl dažniau siekiame tvarkingos, švelnios krypties.",
        },
        {
          type: "h3",
          value: "Svarbiausia yra proporcija",
        },
        {
          type: "paragraph",
          value:
            "Korekcija prasideda ne nuo šablono, o nuo jūsų veido bruožų, natūralios plaukelių krypties ir to, kiek ryškumo jums iš tikrųjų reikia kasdienai. Būtent tai padeda išgauti rezultatą, kuris atveria žvilgsnį, bet neatrodo per sunkus.",
        },
        {
          type: "quote",
          value:
            "Geras antakių rezultatas turėtų papildyti jūsų bruožus, o ne tapti pirmu dalyku, kurį žmogus pastebi.",
        },
        {
          type: "paragraph",
          value:
            "Spalvą taip pat verta rinktis atsargiai. Dažniausiai natūralesnis rezultatas gaunamas tada, kai atspalvis parenkamas ne kuo tamsesnis, o kiek santūresnis ir artimesnis jūsų bendram įvaizdžiui.",
        },
      ],
    },
    "quiet-luxury-beauty-routine": {
      title: "Kasdienė grožio rutina, kuri neapsunkina užimtos savaitės",
      category: "Grožio patarimai",
      excerpt:
        "Kokios procedūros ir įpročiai padeda atrodyti tvarkingai tada, kai norisi mažiau papildomų žingsnių.",
      publishedAt: "2026 sausis",
      readTime: "5 min.",
      contentBlocks: [
        {
          type: "paragraph",
          value:
            "Kai savaitės labai intensyvios, grožio rutina turi ne varginti, o padėti jaustis tvarkingai be daug papildomo laiko. Dėl to verta rinktis ne kuo daugiau produktų, o aiškesnę, lengviau palaikomą sistemą.",
        },
        {
          type: "paragraph",
          value:
            "Studijoje dažniausiai rekomenduojame pirmiausia pasirūpinti tomis sritimis, kurios kasdien sutaupo daugiausia laiko: žvilgsniu, odos komfortu ir tvarkingesniu bendru vaizdu.",
        },
        {
          type: "h2",
          value: "Nuo ko pradėti",
        },
        {
          type: "ul",
          value: "",
          items: [
            "Blakstienų laminavimas padeda ilgiau išlaikyti atviresnį žvilgsnį be kasdienio formavimo.",
            "Antakių korekcija ir dažymas sumažina poreikį kiekvieną rytą piešti formą iš naujo.",
            "Reguliari veido procedūra padeda išlaikyti gaivesnę odos išvaizdą ir mažina poreikį ją maskuoti.",
          ],
        },
        {
          type: "paragraph",
          value:
            "Svarbiausia, kad rutina būtų realistiška. Kai ji pritaikyta jūsų dienotvarkei, tvarkingas rezultatas pasiekiamas lengviau ir išlieka nuosekliau.",
        },
      ],
    },
  },
  en: {
    "how-to-prep-skin-for-an-event": {
      title: "How to Prepare Your Skin for an Event Without Overdoing It",
      category: "Facial care",
      excerpt:
        "What actually helps before a wedding, photoshoot, or special occasion if you want fresh-looking skin instead of irritation.",
      publishedAt: "March 2026",
      readTime: "4 min read",
      contentBlocks: [
        {
          type: "paragraph",
          value:
            "One of the most common mistakes before an important event is trying to change everything at once. Strong exfoliants, unfamiliar products, or too many active ingredients in one week usually lead to sensitivity rather than the result clients were hoping for.",
        },
        {
          type: "quote",
          value:
            "Before an important day, the goal is not to push the skin harder but to keep it calm, hydrated, and comfortable.",
        },
        {
          type: "h2",
          value: "About a month before",
        },
        {
          type: "paragraph",
          value:
            "If you still have four weeks, that is a good time to address texture, congestion, or uneven tone in a more active but still controlled way. The skin has time to settle, which makes planning easier and safer.",
        },
        {
          type: "h2",
          value: "The final week",
        },
        {
          type: "paragraph",
          value:
            "During the last few days, the priority should shift toward hydration, calming care, and gentle preparation. This is usually not the right moment for strong exfoliation if you want makeup to sit evenly and your skin to feel comfortable.",
        },
        {
          type: "ul",
          value: "",
          items: [
            "Use a gentle cleanser that does not leave the skin feeling tight.",
            "Choose a moisturiser that supports comfort and hydration.",
            "Add a light hydrating serum if your skin tends to feel dehydrated.",
            "Plan your facial treatment 2 to 3 days before the event, not the night before.",
          ],
        },
      ],
    },
    "brow-shaping-that-stays-soft": {
      title: "Brow Shaping That Looks Polished but Still Natural",
      category: "Brows",
      excerpt:
        "Why a strong brow result usually comes down to proportion, restraint, and a shape that feels easy to maintain.",
      publishedAt: "February 2026",
      readTime: "3 min read",
      contentBlocks: [
        {
          type: "paragraph",
          value:
            "Brow trends change quickly, but what clients value most over time is a result that actually suits their face. Brows that are too dark or too strict can start to feel heavy, which is why we usually aim for a cleaner and softer direction instead.",
        },
        {
          type: "h3",
          value: "Proportion matters most",
        },
        {
          type: "paragraph",
          value:
            "A good brow treatment does not begin with a stencil. It begins with your features, your natural hair direction, and how much definition you really want for everyday wear. That is what helps create a result that opens the eye area without looking harsh.",
        },
        {
          type: "quote",
          value:
            "The best brow result supports your features instead of becoming the first thing people notice.",
        },
        {
          type: "paragraph",
          value:
            "Colour should be chosen just as carefully. In many cases, the more natural result comes from using a tone that feels slightly softer and more balanced with the rest of your look rather than simply going darker.",
        },
      ],
    },
    "quiet-luxury-beauty-routine": {
      title: "A Beauty Routine That Still Works During Busy Weeks",
      category: "Beauty advice",
      excerpt:
        "The treatments and habits that help you look more put together without adding unnecessary steps to the week.",
      publishedAt: "January 2026",
      readTime: "5 min read",
      contentBlocks: [
        {
          type: "paragraph",
          value:
            "When your schedule is full, your beauty routine should make life easier rather than more complicated. That usually means fewer steps, clearer priorities, and treatments that reduce what you need to do every morning.",
        },
        {
          type: "paragraph",
          value:
            "In the studio, we often suggest starting with the areas that save the most time day to day: the eye area, the overall comfort of the skin, and a more polished general look.",
        },
        {
          type: "h2",
          value: "Where to start",
        },
        {
          type: "ul",
          value: "",
          items: [
            "A lash lift helps the eyes look more open without daily styling.",
            "Brow shaping and tinting reduces the need to redefine the shape each morning.",
            "Regular facial treatments can help maintain fresher-looking skin and reduce the urge to cover it heavily.",
          ],
        },
        {
          type: "paragraph",
          value:
            "What matters most is choosing a routine you can realistically keep up with. When it fits your daily rhythm, polished results become much easier to maintain.",
        },
      ],
    },
  },
};

const journalPageContent: Record<Locale, JournalPageContent> = {
  lt: {
    introEyebrow: "Patarimai",
    introTitle: "Praktiški grožio patarimai tarp vizitų.",
    introDescription:
      "Trumpi tekstai apie pasiruošimą procedūroms, kasdienę priežiūrą ir sprendimus, kurie padeda išlaikyti tvarkingą rezultatą be bereikalingo sudėtingumo.",
    featuredSubtitle: "Rekomenduojamas straipsnis",
    featuredLabel: "Naudingas skaitinys",
    featuredAction: "Skaityti straipsnį",
    ctaEyebrow: "Konsultacija",
    ctaTitle: "Norite patarimą pritaikyti savo situacijai?",
    ctaDescription:
      "Jei norite aiškesnės rekomendacijos pagal savo odą, bruožus ar artėjančią progą, parašykite mums ir padėsime suplanuoti kitą žingsnį.",
    ctaPrimaryLabel: "Susisiekti",
    ctaSecondaryLabel: "Peržiūrėti paslaugas",
  },
  en: {
    introEyebrow: "Advice",
    introTitle: "Practical beauty guidance between appointments.",
    introDescription:
      "Short reads on treatment preparation, everyday maintenance, and the choices that help you keep results looking polished without unnecessary complexity.",
    featuredSubtitle: "Featured article",
    featuredLabel: "Useful reading",
    featuredAction: "Read article",
    ctaEyebrow: "Consultation",
    ctaTitle: "Would you like advice tailored to your situation?",
    ctaDescription:
      "If you want clearer guidance based on your skin, features, or an upcoming event, send us a message and we will help you plan the next step.",
    ctaPrimaryLabel: "Contact us",
    ctaSecondaryLabel: "View services",
  },
};

const journalDetailContent: Record<Locale, JournalDetailContent> = {
  lt: {
    heroSubtitle: "Grožio studijos Lauryta patarimai",
    heroLabel: "Straipsnis",
    infoLabels: {
      focus: "Straipsnio tema",
      focusText: "Praktiški patarimai, kuriuos lengva pritaikyti kasdien.",
      bestFor: "Kam naudinga",
      bestForText: "Klientėms, kurios nori aiškesnių sprendimų tarp vizitų.",
      readLength: "Skaitymo trukmė",
      readLengthText: (readTime) => `${readTime} ramaus, aiškaus skaitymo.`,
    },
    ctaEyebrow: "Registracija",
    ctaTitle: "Norite tai pritaikyti savo vizitui?",
    ctaDescription:
      "Jei norite ne bendro patarimo, o rekomendacijos pagal savo situaciją, parašykite mums ir kartu parinksime tinkamą kryptį.",
    ctaPrimaryLabel: "Susisiekti",
    ctaSecondaryLabel: "Atgal į patarimus",
  },
  en: {
    heroSubtitle: "Advice from Grožio studija Lauryta",
    heroLabel: "Article",
    infoLabels: {
      focus: "Article focus",
      focusText: "Practical guidance that is easy to apply in everyday life.",
      bestFor: "Useful for",
      bestForText: "Clients who want clearer decisions between appointments.",
      readLength: "Read length",
      readLengthText: (readTime) => `${readTime} of calm, practical reading.`,
    },
    ctaEyebrow: "Booking",
    ctaTitle: "Would you like to apply this to your own visit?",
    ctaDescription:
      "If you want advice that fits your own situation rather than general guidance, send us a message and we will help you choose the right direction.",
    ctaPrimaryLabel: "Contact us",
    ctaSecondaryLabel: "Back to advice",
  },
};

export function getLocalizedBlogPosts(locale: Locale): BlogPost[] {
  return blogPosts.map((post) => ({
    ...post,
    ...localizedBlogContent[locale][post.slug],
  }));
}

export function getLocalizedBlogPost(locale: Locale, slug: string) {
  return getLocalizedBlogPosts(locale).find((post) => post.slug === slug);
}

export function getJournalPageContent(locale: Locale) {
  return journalPageContent[locale];
}

export function getJournalDetailContent(locale: Locale) {
  return journalDetailContent[locale];
}

export function getDefaultLocaleBlogPost(slug: string) {
  return getLocalizedBlogPost(defaultLocale, slug);
}
