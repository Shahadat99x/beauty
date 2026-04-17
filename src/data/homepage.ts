import type { Locale, Testimonial } from "@/lib/types";

interface HomepageServiceCard {
  slug: string;
  category: string;
  duration: string;
  excerpt: string;
  highlight: string;
  priceFrom: string;
  title: string;
}

interface HomepageSpecialistCard {
  slug: string;
  experience: string;
  role: string;
  specialties: string[];
}

interface HomepageJournalPost {
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  title: string;
}

interface HomepageContent {
  approach: {
    badge: string;
    ctaLabel: string;
    description: string;
    mediaSubtitle: string;
    mediaTitle: string;
    note: string;
    pillars: string[];
    title: string;
  };
  finalCta: {
    description: string;
    eyebrow: string;
    primaryLabel: string;
    secondaryLabel: string;
    title: string;
  };
  hero: {
    badge: string;
    description: string;
    eyebrow: string;
    mediaLabel: string;
    mediaStatLabel: string;
    mediaStatValue: string;
    mediaSubtitle: string;
    mediaTitle: string;
    primaryLabel: string;
    promiseLabel: string;
    promiseText: string;
    secondaryLabel: string;
    title: string;
  };
  journal: {
    badge: string;
    buttonLabel: string;
    description: string;
    featuredCtaLabel: string;
    featuredPost: HomepageJournalPost;
    secondaryPosts: HomepageJournalPost[];
    title: string;
  };
  results: {
    comparisonAfterTitle: string;
    comparisonBeforeTitle: string;
    description: string;
    focusLabel: string;
    focusRows: Array<{ label: string; value: string }>;
    highlights: Array<{ label: string; value: string }>;
    preview: {
      label: string;
      slug: string;
      subtitle: string;
      title: string;
    };
    title: string;
  };
  services: {
    badge: string;
    cards: HomepageServiceCard[];
    ctaLabel: string;
    description: string;
    title: string;
  };
  specialists: {
    badge: string;
    cards: HomepageSpecialistCard[];
    ctaLabel: string;
    description: string;
    title: string;
  };
  testimonials: {
    badge: string;
    description: string;
    items: Testimonial[];
    meta: string;
    title: string;
  };
  trustMetrics: Array<{ label: string; value: string }>;
}

const homepageContent: Record<Locale, HomepageContent> = {
  lt: {
    approach: {
      badge: "Kaip dirbame",
      ctaLabel: "Žiūrėti kainas",
      description:
        "Kiekvienas vizitas prasideda trumpa konsultacija. Įvertiname jūsų poreikį, odos ar veido bruožų ypatumus ir parenkame procedūrą, kuri tinka ne tik šiandienai, bet ir jūsų kasdieniam ritmui.",
      mediaSubtitle:
        "Daugiau aiškumo, mažiau skubėjimo ir rezultatas, kurį lengva prižiūrėti kasdien.",
      mediaTitle: "Rami eiga nuo konsultacijos iki rezultato",
      note: "Aiški konsultacija, profesionali priežiūra ir rekomendacijos namams.",
      pillars: [
        "Procedūrą parenkame pagal jūsų odą, lūkesčius ir laiką, kurį realiai galite skirti priežiūrai.",
        "Siekiame rezultato, kuris atrodo tvarkingai ir natūraliai ne tik nuotraukoje, bet ir kasdien.",
      ],
      title: "Pirmiausia išklausome, tada parenkame tai, kas jums tikrai tinka.",
    },
    finalCta: {
      description:
        "Jei nesate tikra, nuo ko pradėti, parašykite mums ir padėsime pasirinkti. Jei jau žinote, ko ieškote, peržiūrėkite paslaugas ir rezervuokite vizitą.",
      eyebrow: "Registracija",
      primaryLabel: "Rezervuoti laiką",
      secondaryLabel: "Peržiūrėti paslaugas",
      title: "Padėsime pasirinkti tinkamiausią procedūrą.",
    },
    hero: {
      badge: "Vilnius • Išankstinė registracija",
      description:
        "Grožio studija Lauryta Vilniuje skirta moterims, kurios vertina profesionalią konsultaciją, jaukią atmosferą ir aiškiai matomą, bet natūraliai atrodantį rezultatą.",
      eyebrow: "Veido, antakių ir blakstienų priežiūra",
      mediaLabel: "Grožio studija Lauryta",
      mediaStatLabel: "Konsultacija prieš procedūrą",
      mediaStatValue: "Aiškus planas nuo pirmo vizito",
      mediaSubtitle:
        "Jauki aplinka, profesionali priežiūra ir pakankamai laiko ramiai pasiruošti kiekvienam vizitui.",
      mediaTitle: "Rami studija miesto centre",
      primaryLabel: "Registruotis",
      promiseLabel: "Kaip dirbame",
      promiseText:
        "Vizitai vyksta tik iš anksto rezervavus, todėl kiekvienai klientei galime skirti laiką konsultacijai, procedūrai ir aiškioms rekomendacijoms po jos.",
      secondaryLabel: "Paslaugos",
      title:
        "Veido, antakių ir blakstienų priežiūra, kai norisi kokybės ir ramybės.",
    },
    journal: {
      badge: "Grožio patarimai",
      buttonLabel: "Daugiau patarimų",
      description:
        "Trumpi, aiškūs patarimai apie odos paruošimą, antakių formą ir priežiūrą tarp vizitų.",
      featuredCtaLabel: "Skaityti straipsnį",
      featuredPost: {
        slug: "how-to-prep-skin-for-an-event",
        category: "Odos priežiūra",
        excerpt:
          "Ką verta daryti prieš šventę, kad oda atrodytų skaisti ir rami, o ne sudirgusi nuo per daug priemonių.",
        publishedAt: "2026 kovas",
        readTime: "4 min. skaitymo",
        title: "Kaip paruošti odą šventei jos neperkraunant",
      },
      secondaryPosts: [
        {
          slug: "brow-shaping-that-stays-soft",
          category: "Antakiai",
          excerpt: "",
          publishedAt: "2026 vasaris",
          readTime: "3 min. skaitymo",
          title: "Antakių forma, kuri atrodo tvarkingai ir išlieka švelni",
        },
        {
          slug: "quiet-luxury-beauty-routine",
          category: "Kasdienė priežiūra",
          excerpt: "",
          publishedAt: "2026 sausis",
          readTime: "5 min. skaitymo",
          title: "Paprastesnė grožio rutina užimtoms savaitėms",
        },
      ],
      title: "Praktiški patarimai prieš vizitą ir tarp procedūrų.",
    },
    results: {
      comparisonAfterTitle: "Po 6 savaičių",
      comparisonBeforeTitle: "Prieš procedūrų kursą",
      description:
        "Geriausiai matomas rezultatas yra tas, kuris suteikia odai skaistumo, o veidui tvarkingumo, bet vis tiek atrodo natūraliai.",
      focusLabel: "Procedūros pavyzdys",
      focusRows: [
        { label: "Tikslas", value: "Skaistumas ir drėgmės balansas" },
        { label: "Procedūra", value: "Atnaujinanti veido priežiūra" },
        { label: "Planas", value: "3 vizitai per 6 savaites" },
      ],
      highlights: [
        { label: "Odos tekstūra", value: "Lygesnė ir skaistesnė" },
        { label: "Forma", value: "Tvarkingesni antakiai ir žvilgsnis" },
        { label: "Kasdienybė", value: "Lengviau prižiūrėti rezultatą" },
      ],
      preview: {
        label: "Rezultato pavyzdys",
        slug: "bridal-prep-glow",
        subtitle:
          "Skaistesnė oda, tvarkingi antakiai ir natūralus pasiruošimas svarbiai progai.",
        title: "Šventinis pasiruošimas be streso",
      },
      title: "Matomas rezultatas, kuris vis tiek atrodo natūraliai.",
    },
    services: {
      badge: "Paslaugos",
      cards: [
        {
          slug: "radiance-facial",
          category: "Veido oda",
          duration: "75 min.",
          excerpt:
            "Drėkinanti ir skaistinanti procedūra, kai oda atrodo pavargusi, papilkėjusi ar reikia greito atgaivinimo prieš progą.",
          highlight: "Skaistesnė, pailsėjusi oda be ilgo atsistatymo",
          priceFrom: "nuo 92 €",
          title: "Drėkinamoji veido procedūra",
        },
        {
          slug: "signature-brow-sculpt",
          category: "Antakiai",
          duration: "50 min.",
          excerpt:
            "Tvarkinga antakių forma ir dažymas, parenkami pagal jūsų veido bruožus, kad rezultatas būtų švelnus ir lengvai nešiojamas kasdien.",
          highlight: "Tiksli forma ir natūralus ryškumas",
          priceFrom: "nuo 48 €",
          title: "Antakių korekcija ir dažymas",
        },
        {
          slug: "lash-lift-veil",
          category: "Blakstienos",
          duration: "60 min.",
          excerpt:
            "Blakstienų pakėlimas ir dažymas, kai norisi atviresnio žvilgsnio be priauginimo ir papildomo makiažo kiekvieną rytą.",
          highlight: "Atvertas žvilgsnis be kasdienio vargo",
          priceFrom: "nuo 64 €",
          title: "Blakstienų laminavimas ir dažymas",
        },
        {
          slug: "bridal-preview-glow",
          category: "Proginė priežiūra",
          duration: "90 min.",
          excerpt:
            "Konsultacija ir pasiruošimo planas prieš vestuves ar kitą svarbią progą, kai reikia aiškumo ir ramaus grožio priežiūros grafiko.",
          highlight: "Aiškus planas svarbiai dienai",
          priceFrom: "nuo 130 €",
          title: "Pasiruošimas šventei",
        },
      ],
      ctaLabel: "Visos paslaugos",
      description:
        "Populiariausios procedūros veido odai, antakiams, blakstienoms ir pasiruošimui svarbioms progoms.",
      title: "Paslaugos, kurias lengva suprasti ir patogu išsirinkti.",
    },
    specialists: {
      badge: "Specialistės",
      cards: [
        {
          slug: "amelia-ruskaite",
          experience: "10 metų patirtis veido priežiūroje",
          role: "Studijos įkūrėja, veido odos specialistė",
          specialties: ["Veido procedūros", "Odos konsultacija"],
        },
        {
          slug: "eva-mont",
          experience: "8 metų patirtis antakių ir blakstienų srityje",
          role: "Antakių ir blakstienų specialistė",
          specialties: ["Antakių korekcija", "Blakstienų laminavimas"],
        },
        {
          slug: "sofia-larsen",
          experience: "Ramus pasiruošimas progoms ir individuali priežiūra",
          role: "Proginės priežiūros specialistė",
          specialties: ["Pasiruošimas šventei", "Individuali konsultacija"],
        },
      ],
      ctaLabel: "Visos specialistės",
      description:
        "Studijai vadovauja įkūrėja Amelia Ruskaitė, o kiekviena specialistė dirba savo srityje, kad registracija būtų aiški ir rezultatas prognozuojamas.",
      title: "Specialistės, kuriomis galima pasitikėti.",
    },
    testimonials: {
      badge: "Klienčių atsiliepimai",
      description:
        "Dažniausiai girdime tą patį: buvo ramu, aišku ir rezultatas atrodė natūraliai.",
      items: [
        {
          id: "nora",
          name: "Nora K.",
          service: "Drėkinamoji veido procedūra",
          result: "Oda atrodė pailsėjusi prieš vestuves.",
          quote:
            "Labai ramus vizitas ir aiškios rekomendacijos. Oda po procedūros buvo skaisti, bet neperkrauta.",
          rating: 5,
        },
        {
          id: "elin",
          name: "Elin S.",
          service: "Antakių korekcija ir dažymas",
          result: "Pagaliau tvarkinga, bet švelni forma.",
          quote:
            "Pirmą kartą antakiai atrodo ryškiau, bet vis tiek natūraliai. Formą parinko labai tiksliai.",
          rating: 5,
        },
        {
          id: "marta",
          name: "Marta V.",
          service: "Blakstienų laminavimas ir dažymas",
          result: "Atvertas žvilgsnis be kasdienio tušo.",
          quote:
            "Rezultatas išliko gražus kelias savaites, o pati procedūra buvo labai komfortiška.",
          rating: 5,
        },
      ],
      meta: "4.9/5 įvertinimas • 180+ klienčių atsiliepimų",
      title: "Klientės sugrįžta dėl ramybės, aiškumo ir rezultato.",
    },
    trustMetrics: [
      { label: "klienčių įvertinimas", value: "4.9/5" },
      { label: "atsiliepimų", value: "180+" },
      { label: "patogi vieta Vilniaus centre", value: "Gedimino pr." },
    ],
  },
  en: {
    approach: {
      badge: "Our approach",
      ctaLabel: "View pricing",
      description:
        "Every visit starts with a short consultation. We look at your goals, skin condition, and features first, then recommend care that makes sense for your routine as well as the result you want.",
      mediaSubtitle:
        "Clear recommendations, a calm pace, and results that still feel easy to maintain.",
      mediaTitle: "A calm process from consultation to finish",
      note: "Clear consultation, professional care, and practical aftercare guidance.",
      pillars: [
        "We choose treatments around your skin, goals, and the time you can realistically give to upkeep.",
        "We aim for results that look polished and natural in real life, not only in photos.",
      ],
      title: "We start by listening, then recommend what truly suits you.",
    },
    finalCta: {
      description:
        "If you are not sure where to start, message us and we will guide you. If you already know what you want, browse the services and book the visit that suits you best.",
      eyebrow: "Booking",
      primaryLabel: "Book a visit",
      secondaryLabel: "View services",
      title: "We can help you choose the right treatment.",
    },
    hero: {
      badge: "Vilnius • By appointment",
      description:
        "Grožio studija Lauryta in Vilnius is for women who value clear consultations, a warm atmosphere, and results that look refined, natural, and easy to maintain.",
      eyebrow: "Facial, brow, and lash care",
      mediaLabel: "Grožio studija Lauryta",
      mediaStatLabel: "Consultation before treatment",
      mediaStatValue: "A clear plan from the first visit",
      mediaSubtitle:
        "A welcoming space, professional care, and enough time to prepare every appointment properly.",
      mediaTitle: "A calm studio in the city centre",
      primaryLabel: "Book",
      promiseLabel: "How we work",
      promiseText:
        "Visits are by appointment only, so every client has time for consultation, treatment, and clear aftercare guidance.",
      secondaryLabel: "Services",
      title: "Facial, brow, and lash care when quality and calm both matter.",
    },
    journal: {
      badge: "Beauty advice",
      buttonLabel: "More advice",
      description:
        "Short, useful guidance on skin prep, brow shaping, and care between appointments.",
      featuredCtaLabel: "Read article",
      featuredPost: {
        slug: "how-to-prep-skin-for-an-event",
        category: "Skin advice",
        excerpt:
          "What to do before an event so your skin looks bright and settled instead of overloaded with too many products.",
        publishedAt: "March 2026",
        readTime: "4 min read",
        title: "How to prep skin for an event without overdoing it",
      },
      secondaryPosts: [
        {
          slug: "brow-shaping-that-stays-soft",
          category: "Brows",
          excerpt: "",
          publishedAt: "February 2026",
          readTime: "3 min read",
          title: "Brow shaping that stays neat and still feels soft",
        },
        {
          slug: "quiet-luxury-beauty-routine",
          category: "Routine",
          excerpt: "",
          publishedAt: "January 2026",
          readTime: "5 min read",
          title: "A simpler beauty routine for busy weeks",
        },
      ],
      title: "Practical advice before visits and between treatments.",
    },
    results: {
      comparisonAfterTitle: "After 6 weeks",
      comparisonBeforeTitle: "Before treatment plan",
      description:
        "The strongest result is the one that gives skin more brightness and the face more definition while still looking natural.",
      focusLabel: "Treatment example",
      focusRows: [
        { label: "Goal", value: "Brightness and hydration balance" },
        { label: "Treatment", value: "Skin renewal facial care" },
        { label: "Plan", value: "3 visits over 6 weeks" },
      ],
      highlights: [
        { label: "Skin texture", value: "Smoother and brighter" },
        { label: "Definition", value: "Cleaner brows and a fresher gaze" },
        { label: "Routine", value: "Easier to maintain day to day" },
      ],
      preview: {
        label: "Result example",
        slug: "bridal-prep-glow",
        subtitle:
          "Brighter skin, neat brows, and natural-looking beauty prep for an important occasion.",
        title: "Event prep without the stress",
      },
      title: "Visible results that still look natural.",
    },
    services: {
      badge: "Services",
      cards: [
        {
          slug: "radiance-facial",
          category: "Facial care",
          duration: "75 min",
          excerpt:
            "A hydrating and brightening facial when skin feels tired, dull, or needs a fresh reset before an event.",
          highlight: "Brighter, fresher skin without long recovery",
          priceFrom: "from €92",
          title: "Hydrating facial treatment",
        },
        {
          slug: "signature-brow-sculpt",
          category: "Brows",
          duration: "50 min",
          excerpt:
            "Brow shaping and tinting chosen around your features so the result feels neat, soft, and easy to wear every day.",
          highlight: "Precise shape with soft definition",
          priceFrom: "from €48",
          title: "Brow shaping and tint",
        },
        {
          slug: "lash-lift-veil",
          category: "Lashes",
          duration: "60 min",
          excerpt:
            "A lash lift and tint for a more open look without extensions or extra effort every morning.",
          highlight: "An open-eye effect with low upkeep",
          priceFrom: "from €64",
          title: "Lash lift and tint",
        },
        {
          slug: "bridal-preview-glow",
          category: "Event prep",
          duration: "90 min",
          excerpt:
            "A consultation and beauty-prep plan for weddings or other important occasions when you want clear guidance and a calm timeline.",
          highlight: "A clear plan for an important day",
          priceFrom: "from €130",
          title: "Beauty prep for events",
        },
      ],
      ctaLabel: "All services",
      description:
        "Popular treatments for skin, brows, lashes, and calm preparation before important occasions.",
      title: "Services that are easy to understand and easy to choose from.",
    },
    specialists: {
      badge: "Specialists",
      cards: [
        {
          slug: "amelia-ruskaite",
          experience: "10 years in facial care",
          role: "Founder and facial care specialist",
          specialties: ["Facial treatments", "Skin consultation"],
        },
        {
          slug: "eva-mont",
          experience: "8 years in brow and lash care",
          role: "Brow and lash specialist",
          specialties: ["Brow shaping", "Lash lift"],
        },
        {
          slug: "sofia-larsen",
          experience: "Calm event prep and tailored client care",
          role: "Event beauty specialist",
          specialties: ["Event prep", "Personal consultation"],
        },
      ],
      ctaLabel: "All specialists",
      description:
        "The studio is led by founder Amelia Ruskaitė, and each specialist has a clear focus area so booking feels straightforward and the result feels consistent.",
      title: "Specialists you can trust.",
    },
    testimonials: {
      badge: "Client reviews",
      description:
        "The same words come up again and again: calm, clear, and naturally polished results.",
      items: [
        {
          id: "nora",
          name: "Nora K.",
          service: "Hydrating facial treatment",
          result: "My skin looked rested before the wedding.",
          quote:
            "A very calm visit and clear recommendations. My skin looked bright after the treatment without feeling overloaded.",
          rating: 5,
        },
        {
          id: "elin",
          name: "Elin S.",
          service: "Brow shaping and tint",
          result: "A neat shape that still feels soft.",
          quote:
            "For the first time my brows look more defined but still natural. The shape was chosen very carefully.",
          rating: 5,
        },
        {
          id: "marta",
          name: "Marta V.",
          service: "Lash lift and tint",
          result: "A fresher look without daily mascara.",
          quote:
            "The result stayed beautiful for weeks, and the whole appointment felt very comfortable.",
          rating: 5,
        },
      ],
      meta: "4.9/5 rating • 180+ client reviews",
      title: "Clients come back for the calm, clarity, and the result.",
    },
    trustMetrics: [
      { label: "client rating", value: "4.9/5" },
      { label: "reviews", value: "180+" },
      { label: "easy location in central Vilnius", value: "Gedimino Ave" },
    ],
  },
};

export function getHomepageContent(locale: Locale) {
  return homepageContent[locale];
}
