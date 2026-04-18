import { getSiteContent } from "@/data/site";
import type { FaqItem, Locale, PricingCategory, PricingSnippet } from "@/lib/types";

interface ContactPageContent {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  formTitle: string;
  formDescription: string;
  labels: {
    firstName: string;
    lastName: string;
    email: string;
    service: string;
    message: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  serviceOptions: string[];
  responseNote: string;
  submitLabel: string;
  infoTitle: string;
  locationLabel: string;
  contactLabel: string;
  hoursTitle: string;
  mediaTitle: string;
  mediaSubtitle: string;
}

interface PricingPageContent {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  popularBadge: string;
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  treatmentFaqTitle: string;
  studioFaqTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

interface FaqPageContent {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  categoryTitles: Record<string, string>;
  stillTitle: string;
  stillDescription: string;
  stillButtonLabel: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

const localizedContactPageContent: Record<Locale, ContactPageContent> = {
  lt: {
    introEyebrow: "Kontaktai",
    introTitle: "Susisiekime dėl jums tinkamiausio vizito.",
    introDescription:
      "Dirbame iš anksto suderintu laiku, todėl galime ramiai įvertinti jūsų poreikį, pasiūlyti tinkamą procedūrą ir padėti pasirinkti specialistę.",
    formTitle: "Registracijos užklausa",
    formDescription:
      "Parašykite, kokios procedūros ieškote, kada jums patogiausia atvykti ir ar jau turite pasirinktą specialistę. Atsakysime su aiškiu tolimesniu žingsniu.",
    labels: {
      firstName: "Vardas",
      lastName: "Pavardė",
      email: "El. paštas",
      service: "Dominanti paslauga",
      message: "Komentaras",
    },
    placeholders: {
      firstName: "Laura",
      lastName: "Kazlauskaitė",
      email: "vardas@pavyzdys.lt",
      message: "Trumpai parašykite, kokio rezultato tikitės arba dėl ko abejojate.",
    },
    serviceOptions: [
      "Veido procedūros",
      "Antakių priežiūra",
      "Blakstienų priežiūra",
      "Pasiruošimas progai",
      "Dar nesu tikra",
    ],
    responseNote:
      "Dažniausiai atsakome per vieną darbo dieną. Jei reikia, pasiūlome tinkamiausią paslaugą ir specialistę pagal jūsų situaciją.",
    submitLabel: "Siųsti užklausą",
    infoTitle: "Studijos informacija",
    locationLabel: "Adresas",
    contactLabel: "Kontaktai",
    hoursTitle: "Darbo laikas",
    mediaTitle: "Patogus atvykimas į studiją",
    mediaSubtitle: "Rami vieta Vilniaus centre, lengvai pasiekiama prieš darbą ar po jo.",
  },
  en: {
    introEyebrow: "Contact",
    introTitle: "Let us help you plan the right visit.",
    introDescription:
      "We work by appointment, which gives us time to understand your needs, recommend the right treatment, and guide you to the specialist who fits best.",
    formTitle: "Booking enquiry",
    formDescription:
      "Tell us which treatment you are interested in, when it would be convenient to visit, and whether you already have a preferred specialist. We will reply with a clear next step.",
    labels: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      service: "Interested in",
      message: "Message",
    },
    placeholders: {
      firstName: "Laura",
      lastName: "Kazlauskaite",
      email: "name@example.com",
      message: "Tell us briefly what kind of result you are hoping for or what you are unsure about.",
    },
    serviceOptions: [
      "Facial treatments",
      "Brow care",
      "Lash care",
      "Event preparation",
      "Not sure yet",
    ],
    responseNote:
      "We usually reply within one business day. If needed, we will also suggest the most suitable service and specialist for your situation.",
    submitLabel: "Send enquiry",
    infoTitle: "Studio information",
    locationLabel: "Location",
    contactLabel: "Contact",
    hoursTitle: "Business hours",
    mediaTitle: "An easy arrival to the studio",
    mediaSubtitle: "A calm location in central Vilnius that works well before work or after your day ends.",
  },
};

const localizedPricingSnippets: Record<Locale, PricingSnippet[]> = {
  lt: [
    { title: "Veido procedūra", price: "nuo 75 €", note: "Populiariausia kryptis" },
    { title: "Antakių korekcija", price: "nuo 22 €", note: "Su dažymu arba be jo" },
    { title: "Blakstienų laminavimas", price: "64 €", note: "Rezultatas 6-8 savaitėms" },
  ],
  en: [
    { title: "Facial treatment", price: "from €75", note: "Most requested category" },
    { title: "Brow shaping", price: "from €22", note: "With or without tint" },
    { title: "Lash lift", price: "€64", note: "Results for 6-8 weeks" },
  ],
};

const localizedPricingCategories: Record<Locale, PricingCategory[]> = {
  lt: [
    {
      title: "Veido procedūros",
      description:
        "Procedūros odos skaistumui, drėgmei, tekstūrai ir komfortui. Prieš procedūrą įvertiname odos būklę ir parenkame tinkamiausią eigą.",
      packages: [
        {
          title: "Drėkinamoji veido procedūra",
          description: "Kai oda atrodo pavargusi, sausesnė ar praradusi skaistumą.",
          price: "92 €",
          items: [
            "75 min. procedūra",
            "Švelnus odos paruošimas",
            "Veido masažas",
            "Drėkinanti kaukė",
          ],
          isPopular: true,
        },
        {
          title: "Odos atnaujinimo procedūra",
          description: "Kai norisi lygesnės tekstūros ir tolygesnio tono.",
          price: "110 €",
          items: [
            "60 min. procedūra",
            "Tikslinis atnaujinimas pagal odos būklę",
            "Raminamoji užbaigimo dalis",
            "Minimalus kasdienės rutinos trikdis",
          ],
        },
        {
          title: "Veido masažas ir atpalaidavimas",
          description: "Kai prioritetas yra komfortas, tonusas ir gaivesnė išvaizda.",
          price: "75 €",
          items: [
            "45 min. procedūra",
            "Limfodrenažiniai judesiai",
            "Žandikaulio ir veido įtampos atpalaidavimas",
            "Gaivinantis užbaigimas",
          ],
        },
      ],
    },
    {
      title: "Antakiai ir blakstienos",
      description:
        "Procedūros tvarkingesniam rėmui, atviresniam žvilgsniui ir rezultatui, kurį būtų lengva nešioti kasdien.",
      packages: [
        {
          title: "Antakių korekcija ir dažymas",
          description: "Tikslesnė forma ir spalva, pritaikyta jūsų bruožams.",
          price: "48 €",
          items: [
            "50 min. vizitas",
            "Formos parinkimas pagal veido bruožus",
            "Individualiai pritaikyta spalva",
            "Korekcija vašku ir pincetu",
          ],
        },
        {
          title: "Blakstienų laminavimas ir dažymas",
          description: "Atviresnis žvilgsnis be kasdienio formavimo.",
          price: "64 €",
          items: [
            "60 min. vizitas",
            "Blakstienų pakėlimas",
            "Dažymas sodresniam efektui",
            "Rezultatas 6-8 savaitėms",
          ],
          isPopular: true,
        },
        {
          title: "Antakių ir blakstienų derinys",
          description: "Patogus pasirinkimas prieš šventę ar norint vieno vizito metu daugiau.",
          price: "105 €",
          items: [
            "90 min. vizitas",
            "Antakių korekcija ir dažymas",
            "Blakstienų laminavimas ir dažymas",
            "Patogesnis bendras vizitas",
          ],
        },
      ],
    },
    {
      title: "Pasiruošimas progai",
      description:
        "Rami, iš anksto suplanuota priežiūra svarbioms progoms, kai norisi atrodyti gaiviai, tvarkingai ir jaustis užtikrintai.",
      packages: [
        {
          title: "Pasiruošimo konsultacija",
          description: "Aiškus planas prieš vestuves, fotosesiją ar kitą svarbią dieną.",
          price: "130 €",
          items: [
            "90 min. vizitas",
            "Procedūrų plano sudarymas",
            "Antakių krypties aptarimas",
            "Drėkinamoji veido procedūra",
          ],
        },
        {
          title: "Šventinės dienos planas",
          description: "Kai reikia nuoseklaus pasiruošimo ir aiškių rekomendacijų.",
          price: "nuo 350 €",
          items: [
            "Individualiai suderintas planas",
            "Priežiūros žingsniai prieš progą",
            "Galimybė derinti kelias paslaugas",
            "Pagalba susiplanuojant laiką",
          ],
        },
      ],
    },
    {
      title: "Nuolatinė priežiūra",
      description:
        "Klientėms, kurios nori lengviau planuoti reguliarų vizitą ir išlaikyti tvarkingą rezultatą be papildomo streso.",
      packages: [
        {
          title: "Mėnesio priežiūros planas",
          description: "Reguliarus vizitas odos ar žvilgsnio priežiūrai.",
          price: "85 € / mėn.",
          items: [
            "1 vizitas per mėnesį",
            "Pirmenybinis laiko rezervavimas",
            "Aiškesnis priežiūros ritmas",
            "Patogiau planuojami pakartotiniai apsilankymai",
          ],
        },
        {
          title: "Intensyvesnės priežiūros planas",
          description: "Kai norisi nuoseklesnių rezultatų per trumpesnį laiką.",
          price: "160 € / mėn.",
          items: [
            "2 vizitai per mėnesį",
            "Daugiau lankstumo planuojant procedūras",
            "Patogesnis tęstinis odos priežiūros kursas",
            "Tinka aktyvesniam rezultatų siekimui",
          ],
          isPopular: true,
        },
      ],
    },
  ],
  en: [
    {
      title: "Facial treatments",
      description:
        "Treatments focused on hydration, brightness, texture, and overall skin comfort. Before each visit, we assess the skin and choose the most suitable approach.",
      packages: [
        {
          title: "Hydrating facial treatment",
          description: "For skin that feels tired, dehydrated, or less radiant than usual.",
          price: "€92",
          items: [
            "75-minute treatment",
            "Gentle skin preparation",
            "Facial massage",
            "Hydrating mask",
          ],
          isPopular: true,
        },
        {
          title: "Skin renewal treatment",
          description: "For smoother texture and a more even overall tone.",
          price: "€110",
          items: [
            "60-minute treatment",
            "Targeted renewal based on skin condition",
            "Calming finishing stage",
            "Minimal disruption to daily routine",
          ],
        },
        {
          title: "Facial massage and relaxation",
          description: "For clients prioritising comfort, tone, and a fresher overall look.",
          price: "€75",
          items: [
            "45-minute treatment",
            "Lymphatic-style movements",
            "Jaw and facial tension release",
            "Refreshing finish",
          ],
        },
      ],
    },
    {
      title: "Brows and lashes",
      description:
        "Treatments for a tidier frame, a more open look, and results that feel easy to wear every day.",
      packages: [
        {
          title: "Brow shaping and tint",
          description: "A cleaner shape and colour tailored to your features.",
          price: "€48",
          items: [
            "50-minute appointment",
            "Shape chosen to suit your features",
            "Custom colour match",
            "Wax and tweeze finish",
          ],
        },
        {
          title: "Lash lift and tint",
          description: "A more open look without daily styling.",
          price: "€64",
          items: [
            "60-minute appointment",
            "Lash lift",
            "Tint for a fuller effect",
            "Results for 6-8 weeks",
          ],
          isPopular: true,
        },
        {
          title: "Brow and lash combination",
          description: "A practical option before an event or when you want more from one visit.",
          price: "€105",
          items: [
            "90-minute appointment",
            "Brow shaping and tint",
            "Lash lift and tint",
            "A more convenient combined visit",
          ],
        },
      ],
    },
    {
      title: "Event preparation",
      description:
        "Calm, clearly planned care for important occasions when you want to look fresh, polished, and still feel like yourself.",
      packages: [
        {
          title: "Preparation consultation",
          description: "A clear plan before a wedding, photoshoot, or other important day.",
          price: "€130",
          items: [
            "90-minute appointment",
            "Treatment planning",
            "Brow direction discussion",
            "Hydrating facial treatment",
          ],
        },
        {
          title: "Special occasion plan",
          description: "For clients who need a steady preparation path and clear recommendations.",
          price: "from €350",
          items: [
            "Tailored preparation plan",
            "Care steps before the event",
            "Option to combine multiple services",
            "Help planning timing",
          ],
        },
      ],
    },
    {
      title: "Ongoing care",
      description:
        "For clients who want an easier way to plan regular visits and maintain polished results without extra stress.",
      packages: [
        {
          title: "Monthly care plan",
          description: "A regular visit for skin, brow, or lash maintenance.",
          price: "€85 / mo",
          items: [
            "1 visit per month",
            "Priority time-slot access",
            "A clearer maintenance rhythm",
            "Easier planning for return visits",
          ],
        },
        {
          title: "Intensive care plan",
          description: "For clients looking for more consistent progress in a shorter period.",
          price: "€160 / mo",
          items: [
            "2 visits per month",
            "More flexibility when planning treatments",
            "A steadier skin-care course",
            "Suitable for more active result-focused care",
          ],
          isPopular: true,
        },
      ],
    },
  ],
};

const localizedPricingFaqs: Record<Locale, FaqItem[]> = {
  lt: [
    {
      category: "treatments",
      question: "Ar prieš pirmą procedūrą konsultuojate?",
      answer:
        "Taip. Prieš pirmą vizitą aptariame jūsų poreikį, odos būklę ar pageidaujamą rezultatą ir tik tada patvirtiname tinkamiausią procedūrą.",
    },
    {
      category: "treatments",
      question: "Ką daryti, jei nesu tikra, kuri paslauga man tinkamiausia?",
      answer:
        "Tokiu atveju verta parašyti mums prieš registraciją. Padėsime pasirinkti pagal jūsų situaciją ir, jei reikia, pasiūlysime pradėti nuo konsultacijos.",
    },
    {
      category: "treatments",
      question: "Kiek laiko išlieka blakstienų laminavimo rezultatas?",
      answer:
        "Dažniausiai apie 6-8 savaites, priklausomai nuo natūralaus blakstienų augimo ciklo ir kasdienės priežiūros.",
    },
    {
      category: "studio",
      question: "Per kiek laiko atsakote į registracijos užklausas?",
      answer:
        "Dažniausiai atsakome per vieną darbo dieną. Jei laišką gauname vakarais ar savaitgalį, susisiekiame artimiausiu darbo metu.",
    },
    {
      category: "studio",
      question: "Ar galima perkelti arba atšaukti vizitą?",
      answer:
        "Taip, tik prašome apie pasikeitimus pranešti kuo anksčiau. Taip galime pasiūlyti laiką kitai klientei ir lengviau rasti naują laiką jums.",
    },
    {
      category: "studio",
      question: "Ar galima atsiskaityti kortele?",
      answer:
        "Taip, studijoje galima atsiskaityti tiek kortele, tiek grynaisiais.",
    },
  ],
  en: [
    {
      category: "treatments",
      question: "Do you consult before a first treatment?",
      answer:
        "Yes. Before a first visit, we discuss your needs, skin condition, or the result you are hoping for and only then confirm the most suitable treatment.",
    },
    {
      category: "treatments",
      question: "What if I am not sure which service is right for me?",
      answer:
        "In that case, it is best to message us before booking. We will help you choose based on your situation and may suggest starting with a consultation.",
    },
    {
      category: "treatments",
      question: "How long does a lash lift result usually last?",
      answer:
        "Usually around 6 to 8 weeks, depending on your natural lash growth cycle and daily care routine.",
    },
    {
      category: "studio",
      question: "How quickly do you reply to booking enquiries?",
      answer:
        "We usually reply within one business day. If your message arrives in the evening or over the weekend, we will get back to you during the next working period.",
    },
    {
      category: "studio",
      question: "Can I reschedule or cancel an appointment?",
      answer:
        "Yes, we simply ask you to let us know as early as possible. That helps us offer the time to another client and find a new slot for you more easily.",
    },
    {
      category: "studio",
      question: "Can I pay by card?",
      answer:
        "Yes, both card and cash payments are accepted at the studio.",
    },
  ],
};

const localizedPricingPageContent: Record<Locale, PricingPageContent> = {
  lt: {
    introEyebrow: "Kainos",
    introTitle: "Aiškios kainos ir lengviau palyginamos paslaugos.",
    introDescription:
      "Čia rasite pagrindines paslaugų kryptis, dažniausiai pasirenkamas procedūras ir orientacines kainas. Jei abejojate, parašykite mums ir padėsime pasirinkti.",
    popularBadge: "Dažniausiai pasirenkama",
    faqEyebrow: "Dažni klausimai",
    faqTitle: "Svarbiausia prieš registraciją",
    faqDescription:
      "Trumpi atsakymai į klausimus, kuriuos klientės užduoda dažniausiai prieš pirmą ar pakartotinį vizitą.",
    treatmentFaqTitle: "Procedūros",
    studioFaqTitle: "Registracija ir studijos tvarka",
    ctaEyebrow: "Registracija",
    ctaTitle: "Reikia pagalbos renkantis paslaugą?",
    ctaDescription:
      "Jei norite pasitikslinti dėl procedūros, trukmės ar kainos, parašykite mums ir padėsime išsirinkti tinkamiausią variantą.",
    ctaPrimaryLabel: "Susisiekti",
    ctaSecondaryLabel: "Peržiūrėti paslaugas",
  },
  en: {
    introEyebrow: "Pricing",
    introTitle: "Clear pricing and easier-to-compare services.",
    introDescription:
      "Here you can see the main service groups, the treatments clients choose most often, and the typical price range. If you are unsure, message us and we will help you choose.",
    popularBadge: "Most requested",
    faqEyebrow: "Common questions",
    faqTitle: "What matters most before booking",
    faqDescription:
      "Short answers to the questions clients ask most often before a first or returning visit.",
    treatmentFaqTitle: "Treatments",
    studioFaqTitle: "Booking and studio policies",
    ctaEyebrow: "Booking",
    ctaTitle: "Need help choosing the right service?",
    ctaDescription:
      "If you want to double-check the treatment, timing, or price, send us a message and we will help you choose the most suitable option.",
    ctaPrimaryLabel: "Contact us",
    ctaSecondaryLabel: "View services",
  },
};

const localizedFaqPageContent: Record<Locale, FaqPageContent> = {
  lt: {
    introEyebrow: "DUK",
    introTitle: "Dažniausi klausimai prieš vizitą.",
    introDescription:
      "Trumpi ir aiškūs atsakymai apie registraciją, pasiruošimą procedūrai, atsiskaitymą ir kitus praktinius klausimus.",
    categoryTitles: {
      treatments: "Procedūros",
      studio: "Registracija ir studijos tvarka",
    },
    stillTitle: "Neradote atsakymo?",
    stillDescription:
      "Parašykite mums, jei turite konkretesnį klausimą apie procedūrą, odos būklę ar pasiruošimą vizitui.",
    stillButtonLabel: "Susisiekti",
    ctaEyebrow: "Konsultacija",
    ctaTitle: "Jei reikia, padėsime pasirinkti ir prieš registraciją.",
    ctaDescription:
      "Nebūtina visko žinoti iš anksto. Parašykite mums, o mes padėsime suprasti, nuo ko patogiausia pradėti.",
    ctaPrimaryLabel: "Užduoti klausimą",
    ctaSecondaryLabel: "Peržiūrėti paslaugas",
  },
  en: {
    introEyebrow: "FAQ",
    introTitle: "Common questions before your visit.",
    introDescription:
      "Short, practical answers about booking, treatment preparation, payment, and other details clients usually want to know in advance.",
    categoryTitles: {
      treatments: "Treatments",
      studio: "Booking and studio policies",
    },
    stillTitle: "Still have a question?",
    stillDescription:
      "Send us a message if you need a more specific answer about a treatment, your skin concerns, or how to prepare for your visit.",
    stillButtonLabel: "Contact us",
    ctaEyebrow: "Consultation",
    ctaTitle: "If needed, we can help before you book.",
    ctaDescription:
      "You do not need to know everything in advance. Message us and we will help you understand where it makes the most sense to start.",
    ctaPrimaryLabel: "Ask a question",
    ctaSecondaryLabel: "View services",
  },
};

export function getContactPageContent(locale: Locale) {
  return localizedContactPageContent[locale];
}

export function getPricingPageContent(locale: Locale) {
  return localizedPricingPageContent[locale];
}

export function getPricingSnippets(locale: Locale) {
  return localizedPricingSnippets[locale];
}

export function getPricingCategories(locale: Locale) {
  return localizedPricingCategories[locale];
}

export function getPricingFaqs(locale: Locale) {
  return localizedPricingFaqs[locale];
}

export function getFaqPageContent(locale: Locale) {
  return localizedFaqPageContent[locale];
}

export function getFaqItems(locale: Locale) {
  return localizedPricingFaqs[locale];
}

export function getContactStudioInfo(locale: Locale) {
  return getSiteContent(locale).studioInfo;
}
