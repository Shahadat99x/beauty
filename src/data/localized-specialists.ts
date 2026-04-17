import { specialists } from "@/data/specialists";
import { defaultLocale } from "@/data/site";
import type { Locale, Specialist } from "@/lib/types";

type SpecialistContent = Pick<
  Specialist,
  | "role"
  | "experience"
  | "quote"
  | "specialties"
  | "bio"
  | "recentWorkImages"
>;

interface SpecialistsPageContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  consultationEyebrow: string;
  consultationTitle: string;
  consultationDescription: string;
  consultationPrimaryLabel: string;
  consultationSecondaryLabel: string;
}

interface SpecialistDetailContent {
  portraitSubtitle: string;
  portraitLabel: string;
  requestButton: (firstName: string) => string;
  competenciesTitle: string;
  expertiseEyebrow: string;
  expertiseTitle: string;
  expertiseDescription: string;
  resultsEyebrow: string;
  resultsTitle: string;
  resultsDescription: string;
  resultsSubtitle: string;
  resultsLabel: string;
  ctaEyebrow: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  ctaTitle: (firstName: string) => string;
  ctaDescription: string;
}

interface AboutPageContent {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  imageTitle: string;
  imageSubtitle: string;
  imageLabel: string;
  approachEyebrow: string;
  approachTitle: string;
  approachDescription: string;
  pillars: string[];
  environmentEyebrow: string;
  environmentTitle: string;
  environmentDescription: string;
  roomTitle: string;
  roomSubtitle: string;
  consultationTitle: string;
  consultationSubtitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

const specialistContent: Record<Locale, Record<string, SpecialistContent>> = {
  lt: {
    "amelia-ruskaite": {
      role: "Studijos įkūrėja, veido odos specialistė",
      experience: "10 metų patirtis veido priežiūros srityje",
      quote:
        "Geriausias rezultatas yra tas, kuris atrodo tvarkingai, natūraliai ir leidžia jums jaustis užtikrintai.",
      specialties: ["Veido procedūros", "Odos konsultacija", "Pasiruošimas šventei"],
      bio:
        "Amelia Ruskaitė įkūrė Grožio studiją Lauryta tam, kad klientės galėtų gauti profesionalią, ramią ir aiškiai suplanuotą priežiūrą. Jos darbe svarbiausia ne trumpalaikis efektas, o procedūra, kuri tinka jūsų odai, gyvenimo ritmui ir padeda palaipsniui pasiekti tvarkingą, natūraliai atrodantį rezultatą.",
      recentWorkImages: [
        {
          title: "Odos paruošimas prieš svarbią progą",
          aspect: "portrait",
          tone: "champagne",
        },
        {
          title: "Skaistesnės odos planas",
          aspect: "square",
          tone: "pearl",
        },
      ],
    },
    "eva-mont": {
      role: "Antakių ir blakstienų specialistė",
      experience: "8 metų patirtis antakių ir blakstienų srityje",
      quote:
        "Man svarbu, kad antakiai ir blakstienos atrodytų ryškiau, bet vis tiek liktų natūralūs.",
      specialties: ["Antakių korekcija", "Dažymas", "Blakstienų laminavimas"],
      bio:
        "Eva dirba su klientėmis, kurios nori tvarkingesnių antakių, atviresnio žvilgsnio ir rezultato, kurį būtų lengva nešioti kasdien. Ji daug dėmesio skiria proporcijoms, natūraliai plaukelių krypčiai ir tam, kad procedūros efektas neatrodytų per sunkus.",
      recentWorkImages: [
        {
          title: "Švelniai suformuoti antakiai",
          aspect: "landscape",
          tone: "taupe",
        },
        {
          title: "Atviresnis žvilgsnis po laminavimo",
          aspect: "square",
          tone: "blush",
        },
      ],
    },
    "sofia-larsen": {
      role: "Proginės priežiūros specialistė",
      experience: "Ramus pasiruošimas šventėms ir individuali priežiūra",
      quote:
        "Svarbiausia, kad pasiruošimas progai būtų aiškus ir ramus, o rezultatas atrodytų kaip jūs, tik labiau pailsėjusi.",
      specialties: ["Pasiruošimas šventei", "Individuali konsultacija", "Natūralus galutinis vaizdas"],
      bio:
        "Sofia dirba su klientėmis, kurios ruošiasi svarbiai progai ir nori ne skuboto efekto, o nuoseklaus pasiruošimo. Ji padeda susidėlioti planą, įvertinti prioritetus ir pasirinkti tai, kas svarbiausiai dienai iš tikrųjų reikalinga.",
      recentWorkImages: [
        {
          title: "Pasiruošimas šventiniam įvaizdžiui",
          aspect: "portrait",
          tone: "blush",
        },
        {
          title: "Ramus grožio planas prieš progą",
          aspect: "square",
          tone: "pearl",
        },
      ],
    },
    "monika-vy": {
      role: "Odos tekstūros ir tono specialistė",
      experience: "6 metų patirtis odos priežiūros srityje",
      quote:
        "Oda gražiausiai atrodo tada, kai geriname jos būklę nuosekliai, neperkraudami jos per stipriais sprendimais.",
      specialties: ["Odos atnaujinimas", "Tekstūros gerinimas", "Skaistinimas"],
      bio:
        "Monika dirba su oda, kuriai reikia daugiau skaistumo, tolygesnės tekstūros ir aiškesnio priežiūros plano. Ji daug dėmesio skiria tam, kad procedūros būtų veiksmingos, bet kartu komfortiškos ir lengvai derinamos su kasdieniu gyvenimu.",
      recentWorkImages: [
        {
          title: "Lygesnės tekstūros odos planas",
          aspect: "square",
          tone: "mocha",
        },
        {
          title: "Skaistesnė ir tolygesnė oda",
          aspect: "landscape",
          tone: "champagne",
        },
      ],
    },
  },
  en: {
    "amelia-ruskaite": {
      role: "Founder and facial care specialist",
      experience: "10 years in facial care",
      quote:
        "The best result is one that looks polished, natural, and helps you feel confident in your own skin.",
      specialties: ["Facial treatments", "Skin consultation", "Event preparation"],
      bio:
        "Amelia Ruskaitė founded Grožio studija Lauryta to offer clients care that feels professional, calm, and clearly structured. Her focus is not on short-lived trends but on treatments that suit your skin, your routine, and the kind of result you can maintain comfortably over time.",
      recentWorkImages: [
        {
          title: "Skin preparation before an important event",
          aspect: "portrait",
          tone: "champagne",
        },
        {
          title: "A brighter-skin treatment plan",
          aspect: "square",
          tone: "pearl",
        },
      ],
    },
    "eva-mont": {
      role: "Brow and lash specialist",
      experience: "8 years in brow and lash care",
      quote:
        "My goal is to make brows and lashes look clearer and fresher while still feeling natural.",
      specialties: ["Brow shaping", "Tinting", "Lash lift"],
      bio:
        "Eva works with clients who want tidier brows, a more open gaze, and results that feel easy to wear every day. She pays close attention to proportion, natural hair direction, and making sure the final effect never feels too heavy.",
      recentWorkImages: [
        {
          title: "Softly refined brow shape",
          aspect: "landscape",
          tone: "taupe",
        },
        {
          title: "A fresher look after lash lift",
          aspect: "square",
          tone: "blush",
        },
      ],
    },
    "sofia-larsen": {
      role: "Event beauty specialist",
      experience: "Calm event preparation and tailored client care",
      quote:
        "What matters most is a clear, low-stress lead-up to the event and a result that still looks like you.",
      specialties: ["Event preparation", "Personal consultation", "Natural final result"],
      bio:
        "Sofia works with clients preparing for an important occasion who need more than a rushed beauty fix. She helps build a clearer plan, set priorities, and choose the steps that will actually matter for the day itself.",
      recentWorkImages: [
        {
          title: "Preparation for an event look",
          aspect: "portrait",
          tone: "blush",
        },
        {
          title: "A calmer beauty plan before the event",
          aspect: "square",
          tone: "pearl",
        },
      ],
    },
    "monika-vy": {
      role: "Skin texture and tone specialist",
      experience: "6 years in skin care",
      quote:
        "Skin looks best when we improve its condition steadily instead of overwhelming it with solutions that are too harsh.",
      specialties: ["Skin renewal", "Texture refinement", "Brightening care"],
      bio:
        "Monika works with skin that needs more brightness, smoother texture, and a clearer care plan. She focuses on treatments that are effective but still comfortable and realistic to combine with daily life.",
      recentWorkImages: [
        {
          title: "A plan for smoother skin texture",
          aspect: "square",
          tone: "mocha",
        },
        {
          title: "Brighter, more even-looking skin",
          aspect: "landscape",
          tone: "champagne",
        },
      ],
    },
  },
};

const specialistsPageContent: Record<Locale, SpecialistsPageContent> = {
  lt: {
    eyebrow: "Specialistės",
    title: "Specialistės, kuriomis galima pasitikėti.",
    description:
      "Kiekviena specialistė dirba savo srityje, todėl lengviau suprasti, pas ką registruotis ir kokio rezultato tikėtis.",
    ctaLabel: "Paslaugos",
    consultationEyebrow: "Konsultacija",
    consultationTitle: "Nežinote, kuri specialistė jums tinkamiausia?",
    consultationDescription:
      "Parašykite mums ir padėsime pasirinkti pagal jūsų poreikį, norimą rezultatą ir patogiausią procedūros kryptį.",
    consultationPrimaryLabel: "Registruotis",
    consultationSecondaryLabel: "Peržiūrėti paslaugas",
  },
  en: {
    eyebrow: "Specialists",
    title: "Specialists you can trust.",
    description:
      "Each specialist has a clear focus area, so it is easier to understand who to book with and what kind of result to expect.",
    ctaLabel: "Services",
    consultationEyebrow: "Consultation",
    consultationTitle: "Not sure which specialist is right for you?",
    consultationDescription:
      "Message us and we will help you choose based on your needs, preferred result, and the kind of treatment that fits you best.",
    consultationPrimaryLabel: "Book",
    consultationSecondaryLabel: "View services",
  },
};

const specialistDetailContent: Record<Locale, SpecialistDetailContent> = {
  lt: {
    portraitSubtitle: "Apie specialistę",
    portraitLabel: "Specialistė",
    requestButton: (firstName) => `Registruotis pas ${firstName}`,
    competenciesTitle: "Pagrindinės sritys",
    expertiseEyebrow: "Paslaugos",
    expertiseTitle: "Paslaugos, kurias ši specialistė atlieka dažniausiai",
    expertiseDescription:
      "Jei ieškote būtent šios srities priežiūros, pradėti patogu nuo šių procedūrų.",
    resultsEyebrow: "Darbų pavyzdžiai",
    resultsTitle: "Kokio tipo rezultatus ši specialistė kuria dažniausiai",
    resultsDescription:
      "Keli pavyzdžiai, kurie padeda geriau suprasti specialistės darbo kryptį ir estetiką.",
    resultsSubtitle: "Darbų kryptis",
    resultsLabel: "Specialistės darbas",
    ctaEyebrow: "Registracija",
    ctaPrimaryLabel: "Registruotis",
    ctaSecondaryLabel: "Visos specialistės",
    ctaTitle: (firstName) => `Norite registruotis pas ${firstName}?`,
    ctaDescription:
      "Jei jau žinote, ko ieškote, arba norite pradėti nuo konsultacijos, parašykite mums ir padėsime suplanuoti tinkamą vizitą.",
  },
  en: {
    portraitSubtitle: "About the specialist",
    portraitLabel: "Specialist",
    requestButton: (firstName) => `Book with ${firstName}`,
    competenciesTitle: "Core focus areas",
    expertiseEyebrow: "Services",
    expertiseTitle: "Treatments this specialist performs most often",
    expertiseDescription:
      "If you are looking for this type of care, these are the treatments most closely connected to her work.",
    resultsEyebrow: "Recent work",
    resultsTitle: "The kind of results this specialist is known for",
    resultsDescription:
      "A few examples to help you understand the specialist's approach and visual direction.",
    resultsSubtitle: "Work preview",
    resultsLabel: "Specialist work",
    ctaEyebrow: "Booking",
    ctaPrimaryLabel: "Book",
    ctaSecondaryLabel: "All specialists",
    ctaTitle: (firstName) => `Would you like to book with ${firstName}?`,
    ctaDescription:
      "Whether you already know what you need or want to begin with a consultation, send us a message and we will help plan the right visit.",
  },
};

const aboutPageContent: Record<Locale, AboutPageContent> = {
  lt: {
    introEyebrow: "Apie studiją",
    introTitle: "Grožio studija, kurioje svarbu aiškumas, ramybė ir profesionali priežiūra.",
    introDescription:
      "Grožio studija Lauryta Vilniuje skirta moterims, kurios nori ne skubaus efekto, o aiškiai suplanuotos, jų poreikiui pritaikytos priežiūros veido odai, antakiams ir blakstienoms.",
    imageTitle: "Rami, šviesi ir jauki aplinka",
    imageSubtitle: "Pakankamai laiko konsultacijai, procedūrai ir rekomendacijoms po jos.",
    imageLabel: "Studijos atmosfera",
    approachEyebrow: "Kaip dirbame",
    approachTitle: "Pirmiausia išklausome, tada rekomenduojame.",
    approachDescription:
      "Mums svarbu ne tik pati procedūra, bet ir tai, kad ji būtų tinkama jūsų odai, bruožams, tikslui ir kasdieniam ritmui. Dėl to kiekvienas vizitas prasideda aiškiu pokalbiu ir individualiu įvertinimu.",
    pillars: [
      "Aiškiai paaiškiname, kokia procedūra jums tinka ir ko iš jos tikėtis.",
      "Siekiame tvarkingo, natūraliai atrodančio rezultato, kurį būtų lengva išlaikyti.",
      "Neskubiname vizito, kad liktų vietos ir komfortui, ir profesionaliam darbui.",
    ],
    environmentEyebrow: "Studijos aplinka",
    environmentTitle: "Patirtis, kurioje lengva atsipalaiduoti.",
    environmentDescription:
      "Studijoje kuriame ramią aplinką, kurioje galima sutelkti dėmesį į jūsų poreikį, nesiblaškant ir neskubant. Tai svarbu tiek pirmam vizitui, tiek nuosekliai priežiūrai.",
    roomTitle: "Procedūrų erdvė",
    roomSubtitle: "Rami, privati ir skirta komfortiškam vizitui.",
    consultationTitle: "Konsultacijos zona",
    consultationSubtitle: "Vieta, kurioje lengva aptarti poreikį ir kitus žingsnius.",
    ctaEyebrow: "Apsilankymas",
    ctaTitle: "Laukiame jūsų studijoje.",
    ctaDescription:
      "Jei norite pradėti nuo konsultacijos arba jau žinote, kokios procedūros ieškote, parašykite mums ir suplanuosime patogų vizitą.",
    ctaPrimaryLabel: "Registruotis",
    ctaSecondaryLabel: "Peržiūrėti paslaugas",
  },
  en: {
    introEyebrow: "About the studio",
    introTitle: "A beauty studio built around clarity, calm, and professional care.",
    introDescription:
      "Grožio studija Lauryta in Vilnius is for women who want more than a rushed result. We focus on facial, brow, and lash care that feels clearly planned, tailored, and easy to trust.",
    imageTitle: "A calm, bright, welcoming space",
    imageSubtitle: "Enough time for consultation, treatment, and aftercare guidance.",
    imageLabel: "Studio atmosphere",
    approachEyebrow: "How we work",
    approachTitle: "We listen first, then recommend.",
    approachDescription:
      "What matters to us is not only the treatment itself, but whether it truly suits your skin, features, goals, and daily routine. That is why every visit begins with a clear conversation and an individual assessment.",
    pillars: [
      "We explain clearly which treatment suits you and what kind of result to expect.",
      "We aim for a polished, natural-looking result that is easy to maintain.",
      "We do not rush the visit, so there is space for both comfort and professional care.",
    ],
    environmentEyebrow: "The environment",
    environmentTitle: "An experience that makes it easier to slow down.",
    environmentDescription:
      "The studio is designed to feel calm and focused, so the appointment can stay centred on your needs without unnecessary rush or noise.",
    roomTitle: "Treatment room",
    roomSubtitle: "Quiet, private, and designed for a comfortable visit.",
    consultationTitle: "Consultation area",
    consultationSubtitle: "A space where it feels easy to discuss your needs and next steps.",
    ctaEyebrow: "Visit us",
    ctaTitle: "We look forward to welcoming you.",
    ctaDescription:
      "If you want to start with a consultation or already know which treatment you need, send us a message and we will help plan a convenient visit.",
    ctaPrimaryLabel: "Book",
    ctaSecondaryLabel: "View services",
  },
};

export function getLocalizedSpecialists(locale: Locale): Specialist[] {
  return specialists.map((specialist) => {
    const content = specialistContent[locale][specialist.slug];

    return {
      ...specialist,
      ...content,
      recentWorkImages: specialist.recentWorkImages?.map((image, index) => ({
        ...image,
        title: content.recentWorkImages?.[index]?.title ?? image.title,
      })),
    };
  });
}

export function getLocalizedSpecialist(locale: Locale, slug: string) {
  return getLocalizedSpecialists(locale).find((specialist) => specialist.slug === slug);
}

export function getSpecialistsPageContent(locale: Locale) {
  return specialistsPageContent[locale];
}

export function getSpecialistDetailContent(locale: Locale) {
  return specialistDetailContent[locale];
}

export function getAboutPageContent(locale: Locale) {
  return aboutPageContent[locale];
}

export function getDefaultLocaleSpecialist(slug: string) {
  return getLocalizedSpecialist(defaultLocale, slug);
}
