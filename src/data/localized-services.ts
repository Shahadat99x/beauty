import { services } from "@/data/services";
import { defaultLocale } from "@/data/site";
import type { Locale, Service } from "@/lib/types";

type ServiceContent = Pick<
  Service,
  | "title"
  | "category"
  | "excerpt"
  | "duration"
  | "priceFrom"
  | "highlight"
  | "overview"
  | "benefits"
  | "process"
>;

interface ServicesPageContent {
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

interface ServiceDetailContent {
  bookButton: string;
  durationLabel: string;
  investmentLabel: string;
  mediaSubtitle: string;
  mediaLabel: string;
  overviewTitle: string;
  benefitsTitle: string;
  promiseLabel: string;
  frequencyLabel: string;
  frequencyText: string;
  protocolEyebrow: string;
  protocolTitle: string;
  protocolDescription: string;
  expertsEyebrow: string;
  expertsTitle: string;
  expertsDescription: string;
  moreEyebrow: string;
  moreTitle: string;
  moreDescription: string;
  ctaEyebrow: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  ctaTitle: (serviceName: string) => string;
  ctaDescription: (serviceName: string) => string;
}

const serviceContent: Record<Locale, Record<string, ServiceContent>> = {
  lt: {
    "radiance-facial": {
      title: "Drėkinamoji veido procedūra",
      category: "Veido oda",
      excerpt:
        "Drėkinanti ir skaistinanti procedūra pavargusiai, papilkėjusiai ar jautresnei odai, kai norisi greito, bet švelnaus atgaivinimo.",
      duration: "75 min.",
      priceFrom: "nuo 92 €",
      highlight: "Skaistesnė, lygesnė oda be ilgo atsistatymo",
      overview:
        "Ši procedūra skirta odai, kuriai trūksta drėgmės, skaistumo ir komforto. Vizito metu oda nuvaloma, švelniai atnaujinama, intensyviai sudrėkinama ir nuraminama, kad rezultatas būtų matomas iškart, bet išliktų natūralus.",
      benefits: [
        "Atkuria drėgmės balansą ir suteikia odai daugiau komforto",
        "Pagerina odos tekstūrą ir suteikia skaistumo",
        "Tinka prieš šventę ar po intensyvesnio periodo",
        "Padeda odai atrodyti pailsėjusiai ir tvarkingai",
      ],
      process: [
        {
          title: "Konsultacija ir odos įvertinimas",
          description:
            "Pradžioje aptariame jūsų odos būklę, jautrumą, kasdienę priežiūrą ir rezultatą, kurio tikitės po procedūros.",
        },
        {
          title: "Švelnus nuvalymas ir atnaujinimas",
          description:
            "Oda nuvaloma ir paruošiama švelniam atnaujinimui, kad aktyvios priemonės veiktų efektyviai, bet neerzintų odos.",
        },
        {
          title: "Drėkinimas ir masažas",
          description:
            "Naudojame drėkinančius serumus ir veido masažą, kuris padeda odai atrodyti gaiviau ir ramiau.",
        },
        {
          title: "Kaukė ir priežiūros rekomendacijos",
          description:
            "Vizitą užbaigiame raminančia kauke ir trumpomis rekomendacijomis, kaip išlaikyti rezultatą namuose.",
        },
      ],
    },
    "signature-brow-sculpt": {
      title: "Antakių korekcija ir dažymas",
      category: "Antakiai",
      excerpt:
        "Tiksli antakių forma ir atspalvis, parinkti pagal jūsų veido bruožus, natūralią plaukelių kryptį ir norimą ryškumą.",
      duration: "50 min.",
      priceFrom: "nuo 48 €",
      highlight: "Tvarkinga forma ir švelniai išryškinti antakiai",
      overview:
        "Procedūra skirta toms, kurios nori tvarkingų, aiškesnių, bet vis dar natūraliai atrodančių antakių. Formą ir dažymą parenkame individualiai, kad rezultatas derėtų prie jūsų veido ir būtų lengvai prižiūrimas kasdien.",
      benefits: [
        "Išgaunama tikslesnė, veidui tinkama forma",
        "Antakiai atrodo tankesni ir tvarkingesni",
        "Atspalvis parenkamas pagal jūsų bruožus ir pageidaujamą efektą",
        "Rezultatas išlieka natūralus ir lengvai nešiojamas kasdien",
      ],
      process: [
        {
          title: "Forma ir proporcijos",
          description:
            "Įvertiname natūralią antakių formą ir suplanuojame korekciją pagal jūsų veido proporcijas.",
        },
        {
          title: "Dažymo parinkimas",
          description:
            "Parenkame atspalvį, kuris dera prie jūsų veido bruožų ir suteikia švelnų, ne per sunkų efektą.",
        },
        {
          title: "Korekcija",
          description:
            "Atliekame tikslų formos sutvarkymą, kad antakiai atrodytų švariau, bet neprarastų natūralumo.",
        },
        {
          title: "Užbaigimas",
          description:
            "Parodome, kaip antakius lengvai prižiūrėti tarp vizitų, kad forma išliktų tvarkinga ilgiau.",
        },
      ],
    },
    "lash-lift-veil": {
      title: "Blakstienų laminavimas ir dažymas",
      category: "Blakstienos",
      excerpt:
        "Blakstienų pakėlimas ir dažymas, kai norisi atviresnio žvilgsnio ir mažiau kasdienio makiažo.",
      duration: "60 min.",
      priceFrom: "nuo 64 €",
      highlight: "Atvertas žvilgsnis be priauginimo",
      overview:
        "Ši procedūra skirta natūralioms blakstienoms pakelti, išryškinti ir suteikti tvarkingesnę kryptį. Ji tinka toms, kurios nori gaivesnio žvilgsnio be priauginimo ir mažiau laiko rytais prie veidrodžio.",
      benefits: [
        "Blakstienos atrodo ilgesnės ir labiau pakeltos",
        "Žvilgsnis tampa atviresnis be priauginimo",
        "Dažymas padeda sumažinti kasdienio tušo poreikį",
        "Rezultatas išlieka kelias savaites ir atrodo natūraliai",
      ],
      process: [
        {
          title: "Blakstienų įvertinimas",
          description:
            "Parenkame tinkamą pakėlimo intensyvumą pagal jūsų natūralias blakstienas ir norimą rezultatą.",
        },
        {
          title: "Pakėlimas",
          description:
            "Blakstienos formuojamos taip, kad žvilgsnis atrodytų atviresnis, bet efektas nebūtų per aštrus.",
        },
        {
          title: "Dažymas",
          description:
            "Dažymas suteikia daugiau ryškumo ir padeda išgauti išbaigtą rezultatą be papildomo makiažo.",
        },
        {
          title: "Priežiūra po procedūros",
          description:
            "Paaiškiname, kaip pirmomis dienomis prižiūrėti blakstienas, kad rezultatas išliktų kuo gražesnis.",
        },
      ],
    },
    "bridal-preview-glow": {
      title: "Pasiruošimas šventei",
      category: "Proginė priežiūra",
      excerpt:
        "Konsultacija ir priežiūros planas prieš vestuves ar kitą svarbią progą, kai norisi aiškumo, ramybės ir tvarkingo rezultato.",
      duration: "90 min.",
      priceFrom: "nuo 130 €",
      highlight: "Aiškus planas ir ramesnis pasiruošimas svarbiai dienai",
      overview:
        "Ši procedūra tinka toms, kurios ruošiasi vestuvėms ar kitai svarbiai progai ir nori ne vienos procedūros, o aiškaus grožio priežiūros plano. Vizito metu aptariame laiką iki šventės, jūsų prioritetus ir sudėliojame realistišką pasiruošimą.",
      benefits: [
        "Aiškiau suprantate, kokių procedūrų jums iš tikrųjų reikia",
        "Mažiau chaoso ruošiantis svarbiai progai",
        "Parenkama priežiūra pagal jūsų odą ir šventės datą",
        "Rezultatas atrodo natūraliai ir tinkamai fotografuojasi",
      ],
      process: [
        {
          title: "Poreikių aptarimas",
          description:
            "Aptariame progą, terminus, kas jums svarbiausia ir kaip šiuo metu prižiūrite odą ar antakius.",
        },
        {
          title: "Būklės įvertinimas",
          description:
            "Įvertiname odos būklę, antakių formą ar kitus svarbius aspektus, kurie turės įtakos pasiruošimui.",
        },
        {
          title: "Procedūra ar priežiūros pradžia",
          description:
            "Atliekame pirmąją procedūrą arba pasirenkame švelnų startą, kad pasiruošimas būtų saugus ir nuoseklus.",
        },
        {
          title: "Tolimesnis planas",
          description:
            "Sudėliojame rekomenduojamą vizitų seką ir laiką iki šventės, kad nereikėtų visko spręsti paskutinę savaitę.",
        },
      ],
    },
    "cellular-renewal": {
      title: "Odos atnaujinimo procedūra",
      category: "Veido oda",
      excerpt:
        "Švelni odos atnaujinimo procedūra, kai vargina nelygi tekstūra, papilkėjimas ar po spuogelių likę netolygumai.",
      duration: "60 min.",
      priceFrom: "nuo 110 €",
      highlight: "Lygesnė ir skaistesnė oda be agresyvaus poveikio",
      overview:
        "Procedūra padeda atnaujinti odos paviršių, suteikti daugiau skaistumo ir sumažinti nelygios tekstūros įspūdį. Ji tinka toms, kurios nori matomo pagerėjimo, bet nenori ilgo ar agresyvaus atsistatymo.",
      benefits: [
        "Padeda lyginti odos tekstūrą",
        "Suteikia daugiau skaistumo ir švarumo įspūdį",
        "Tinka odai, kuri atrodo pavargusi ar netolygi",
        "Gali būti įtraukta į nuoseklų odos gerinimo planą",
      ],
      process: [
        {
          title: "Odos įvertinimas",
          description:
            "Įvertiname, ar procedūra šiuo metu tinka jūsų odai, ir parenkame jos intensyvumą.",
        },
        {
          title: "Paruošimas ir aktyvi procedūros dalis",
          description:
            "Atliekamas odos paruošimas ir kruopščiai kontroliuojamas atnaujinantis poveikis pagal jūsų odos poreikį.",
        },
        {
          title: "Raminimas",
          description:
            "Po aktyvios dalies oda nuraminama ir sudrėkinama, kad jaustumėtės komfortiškai jau po vizito.",
        },
        {
          title: "Namų priežiūros gairės",
          description:
            "Paaiškiname, kaip prižiūrėti odą po procedūros ir kada verta planuoti kitą vizitą.",
        },
      ],
    },
    "restorative-massage": {
      title: "Atkuriamasis veido masažas",
      category: "Veido oda",
      excerpt:
        "Veido masažas, kai norisi mažiau įtampos, labiau pailsėjusio veido ir švelniai ryškesnių kontūrų.",
      duration: "45 min.",
      priceFrom: "nuo 75 €",
      highlight: "Pailsėjęs veidas ir švelniai ryškesni bruožai",
      overview:
        "Procedūra orientuota į veido raumenų atpalaidavimą, limfos tekėjimo skatinimą ir bendrą gaivesnį veido vaizdą. Ji tinka toms, kurios jaučia įtampą žandikaulio srityje, nori mažiau paburkimo ir pailsėjusio veido įspūdžio.",
      benefits: [
        "Padeda mažinti veido įtampą ir paburkimą",
        "Veidas atrodo gaivesnis ir pailsėjęs",
        "Pagerina bendrą odos tonusą ir išvaizdą",
        "Suteikia atpalaiduojantį, bet neapsunkinantį efektą",
      ],
      process: [
        {
          title: "Poreikio aptarimas",
          description:
            "Aptariame, kuriose vietose jaučiate daugiausia įtampos ir kokio rezultato tikitės po masažo.",
        },
        {
          title: "Paruošimas",
          description:
            "Veidas paruošiamas masažui, kad judesiai būtų komfortiški ir veiksmingi jūsų odai.",
        },
        {
          title: "Masažas",
          description:
            "Naudojami švelnūs ir gilesni judesiai, padedantys atpalaiduoti veidą ir suteikti jam daugiau lengvumo.",
        },
        {
          title: "Užbaigimas",
          description:
            "Po procedūros uždedamos tinkamos priemonės ir aptariame, kaip išlaikyti komforto pojūtį kasdien.",
        },
      ],
    },
    "lueur-brightening-glow": {
      title: "Skaistinamoji veido procedūra",
      category: "Veido oda",
      excerpt:
        "Procedūra papilkėjusiai, pavargusiai odai, kai norisi tolygesnio tono, daugiau gyvumo ir skaistesnio bendro vaizdo.",
      duration: "80 min.",
      priceFrom: "nuo 125 €",
      highlight: "Skaistesnė ir tolygesnė oda",
      overview:
        "Tai intensyvesnė skaistinamoji procedūra, skirta odai, kuri atrodo pavargusi, netolygaus tono ar praradusi gyvumą. Ji tinka sezonų kaitos metu, po įtemptesnio periodo ar tada, kai norisi ryškesnio gaivumo efekto.",
      benefits: [
        "Padeda odai atrodyti skaistesnei",
        "Sumažina papilkėjusios odos įspūdį",
        "Gerina bendrą tono ir tekstūros vaizdą",
        "Tinka kaip dalis nuoseklesnio odos gerinimo plano",
      ],
      process: [
        {
          title: "Odos būklės įvertinimas",
          description:
            "Prieš procedūrą įvertiname, ko jūsų odai šiuo metu labiausiai reikia: skaistinimo, drėkinimo ar švelnaus atnaujinimo.",
        },
        {
          title: "Aktyvi skaistinamoji dalis",
          description:
            "Parenkamos priemonės ir technikos, kurios padeda odai atrodyti gyvesnei ir tolygesnei.",
        },
        {
          title: "Raminimas ir balanso atkūrimas",
          description:
            "Po aktyvios procedūros dalies oda nuraminama ir sudrėkinama, kad išliktų komfortiška.",
        },
        {
          title: "Tolesnės rekomendacijos",
          description:
            "Aptariame, ar ši procedūra turėtų būti vienkartinė, ar geriau ją įtraukti į tęstinį planą.",
        },
      ],
    },
    "sculpted-eye-lift": {
      title: "Akių zonos ir antakių formavimo priežiūra",
      category: "Akių sritis",
      excerpt:
        "Tikslinga priežiūra akių zonai, kai norisi gaivesnio žvilgsnio, tvarkingesnės formos ir švelnaus pakėlimo efekto.",
      duration: "45 min.",
      priceFrom: "nuo 55 €",
      highlight: "Gaivesnis žvilgsnis ir tvarkingesnė akių zonos išvaizda",
      overview:
        "Procedūra sujungia akių zonos gaivinimą, švelnų pakėlimo efektą ir tikslesnį antakių ar blakstienų išryškinimą. Ji tinka toms, kurios nori greito, subtilaus rezultato be sunkesnių sprendimų.",
      benefits: [
        "Žvilgsnis atrodo gaivesnis ir atviresnis",
        "Akių zona atrodo mažiau pavargusi",
        "Padeda išryškinti natūralų akių formos grožį",
        "Tinka kaip greitesnė, lengvai prižiūrima procedūra",
      ],
      process: [
        {
          title: "Įvertinimas",
          description:
            "Aptariame, ko tikitės: ryškesnių antakių, gaivesnio žvilgsnio ar švelnaus pakėlimo efekto.",
        },
        {
          title: "Akių zonos gaivinimas",
          description:
            "Naudojamos technikos, kurios padeda sumažinti pavargusios akių zonos įspūdį.",
        },
        {
          title: "Formos ir ryškumo korekcija",
          description:
            "Atliekame švelnų formavimo ar dažymo etapą, kad rezultatas atrodytų tvarkingas ir natūralus.",
        },
        {
          title: "Užbaigimas",
          description:
            "Vizitą užbaigiame trumpomis rekomendacijomis, kaip išlaikyti rezultatą tarp procedūrų.",
        },
      ],
    },
  },
  en: {
    "radiance-facial": {
      title: "Hydrating facial treatment",
      category: "Facial care",
      excerpt:
        "A hydrating and brightening facial for skin that feels tired, dull, dehydrated, or in need of a gentle reset.",
      duration: "75 min",
      priceFrom: "from €92",
      highlight: "Brighter, smoother skin without a long recovery",
      overview:
        "This treatment is designed for skin that lacks hydration, comfort, and brightness. During the visit we cleanse, gently refresh, deeply hydrate, and calm the skin so the result feels visible right away while still looking natural.",
      benefits: [
        "Restores hydration and improves overall comfort",
        "Helps skin look smoother and brighter",
        "Works well before events or after a stressful period",
        "Leaves the face looking fresher and more rested",
      ],
      process: [
        {
          title: "Consultation and skin review",
          description:
            "We begin by discussing your skin condition, sensitivity, current routine, and the result you want from the treatment.",
        },
        {
          title: "Gentle refresh",
          description:
            "The skin is cleansed and prepared for a mild renewing step so the active products can work effectively without unnecessary irritation.",
        },
        {
          title: "Hydration and massage",
          description:
            "Hydrating formulas and facial massage help the skin look fresher, calmer, and more comfortable.",
        },
        {
          title: "Mask and aftercare guidance",
          description:
            "We finish with a calming mask and simple recommendations to help you maintain the result at home.",
        },
      ],
    },
    "signature-brow-sculpt": {
      title: "Brow shaping and tint",
      category: "Brows",
      excerpt:
        "Precise brow shaping and tinting chosen around your features, natural growth, and preferred level of definition.",
      duration: "50 min",
      priceFrom: "from €48",
      highlight: "A neat shape with soft, natural definition",
      overview:
        "This treatment is for clients who want brows that look tidier, clearer, and more balanced without feeling too strong. The shape and tint are chosen individually so the result works with your face and stays easy to maintain.",
      benefits: [
        "Creates a cleaner shape that suits your features",
        "Makes brows look fuller and more polished",
        "Color is chosen around your natural contrast and preferences",
        "The final look stays soft and wearable in daily life",
      ],
      process: [
        {
          title: "Shape planning",
          description:
            "We assess your natural brow line and map a shape that works with your features rather than against them.",
        },
        {
          title: "Tint selection",
          description:
            "The tint is chosen to give definition without making the brows look too heavy.",
        },
        {
          title: "Brow clean-up",
          description:
            "We refine the shape carefully so the brows look polished while still staying natural.",
        },
        {
          title: "Finishing guidance",
          description:
            "You leave with a tidy result and simple advice on how to keep the shape looking good between visits.",
        },
      ],
    },
    "lash-lift-veil": {
      title: "Lash lift and tint",
      category: "Lashes",
      excerpt:
        "A lash lift and tint for a fresher, more open look with less daily makeup effort.",
      duration: "60 min",
      priceFrom: "from €64",
      highlight: "A more open gaze without extensions",
      overview:
        "This treatment lifts and defines your natural lashes so the eyes look fresher and more awake. It is a good choice if you want a polished result without extensions and with less time spent on mascara every morning.",
      benefits: [
        "Makes lashes look longer and more lifted",
        "Helps the eye area look more open",
        "Tinting reduces the need for mascara",
        "The result lasts for weeks and still looks natural",
      ],
      process: [
        {
          title: "Lash assessment",
          description:
            "We choose the lift intensity according to your natural lashes and the result you want to see.",
        },
        {
          title: "Lift",
          description:
            "The lashes are shaped to create a more open look without making the effect feel too sharp.",
        },
        {
          title: "Tint",
          description:
            "Tinting adds definition and helps the result feel complete without extra makeup.",
        },
        {
          title: "Aftercare guidance",
          description:
            "We explain how to care for your lashes after the appointment so the result stays looking its best.",
        },
      ],
    },
    "bridal-preview-glow": {
      title: "Event beauty preparation",
      category: "Event prep",
      excerpt:
        "A consultation-led treatment plan before a wedding or important occasion, built for clarity, calm, and polished results.",
      duration: "90 min",
      priceFrom: "from €130",
      highlight: "A clearer plan and a calmer lead-up to your event",
      overview:
        "This treatment is designed for clients preparing for a wedding or another important occasion who need more than a single appointment. We review your timeline, priorities, and current routine, then create a realistic beauty-prep plan that feels manageable.",
      benefits: [
        "Gives you a clearer idea of which treatments actually matter",
        "Reduces last-minute stress before an important event",
        "Builds care around your skin and timing",
        "Supports a polished but natural-looking final result",
      ],
      process: [
        {
          title: "Goal review",
          description:
            "We talk through your event, timeline, priorities, and the parts of your look that matter most to you.",
        },
        {
          title: "Assessment",
          description:
            "We assess the skin, brows, or other focus areas that need attention before the event.",
        },
        {
          title: "First treatment or gentle starting point",
          description:
            "We begin with the most suitable first step so your preparation stays steady and low stress.",
        },
        {
          title: "Ongoing plan",
          description:
            "You leave with recommended next steps and a timeline that helps you avoid making rushed decisions in the final week.",
        },
      ],
    },
    "cellular-renewal": {
      title: "Skin renewal treatment",
      category: "Facial care",
      excerpt:
        "A gentle renewing treatment for uneven texture, dullness, and skin that needs a smoother overall look.",
      duration: "60 min",
      priceFrom: "from €110",
      highlight: "Smoother, brighter skin without aggressive downtime",
      overview:
        "This treatment helps improve skin texture, boost brightness, and refine the surface of the skin. It suits clients who want visible progress without choosing something overly strong or disruptive.",
      benefits: [
        "Helps refine uneven texture",
        "Makes the skin look brighter and clearer",
        "Works well for dull or slightly uneven skin",
        "Can be used as part of a longer skin-improvement plan",
      ],
      process: [
        {
          title: "Skin assessment",
          description:
            "We first check whether this treatment suits your skin at the moment and adjust the intensity if needed.",
        },
        {
          title: "Preparation and active stage",
          description:
            "The skin is prepared and the renewing stage is carried out carefully according to your current needs.",
        },
        {
          title: "Calming stage",
          description:
            "After the active step, the skin is soothed and hydrated so it feels comfortable already after the visit.",
        },
        {
          title: "Home-care guidance",
          description:
            "We explain how to care for the skin after the appointment and when it makes sense to return.",
        },
      ],
    },
    "restorative-massage": {
      title: "Restorative facial massage",
      category: "Facial care",
      excerpt:
        "A facial massage for clients who want less tension, less puffiness, and a fresher overall look.",
      duration: "45 min",
      priceFrom: "from €75",
      highlight: "A more rested face with softly clearer contours",
      overview:
        "This treatment focuses on releasing facial tension, encouraging drainage, and helping the face look fresher overall. It is a good option if you feel tension through the jaw area, notice puffiness, or simply want a more rested appearance.",
      benefits: [
        "Helps reduce tension and puffiness",
        "Leaves the face looking fresher",
        "Improves overall tone and comfort",
        "Feels relaxing without becoming heavy",
      ],
      process: [
        {
          title: "Consultation",
          description:
            "We talk through where you hold the most tension and what kind of result you want to feel after the massage.",
        },
        {
          title: "Preparation",
          description:
            "The face is prepared so the massage stays comfortable and well suited to your skin.",
        },
        {
          title: "Massage",
          description:
            "A combination of lighter and deeper movements helps the face feel less tense and look more rested.",
        },
        {
          title: "Finish",
          description:
            "We finish with suitable products and simple guidance to help you maintain the comfort between visits.",
        },
      ],
    },
    "lueur-brightening-glow": {
      title: "Brightening facial treatment",
      category: "Facial care",
      excerpt:
        "A treatment for dull, tired-looking skin when you want a more even tone and a brighter overall appearance.",
      duration: "80 min",
      priceFrom: "from €125",
      highlight: "Brighter skin with a more even tone",
      overview:
        "This is a more focused brightening treatment for skin that looks tired, uneven, or less lively than usual. It works well during seasonal changes, after stressful periods, or whenever you want a more visible freshness boost.",
      benefits: [
        "Helps the complexion look brighter",
        "Reduces the look of dull, tired skin",
        "Supports a more even overall appearance",
        "Can be part of a longer skin-improvement plan",
      ],
      process: [
        {
          title: "Skin review",
          description:
            "We begin by deciding whether the skin needs more brightening, more hydration, or a gentler refresh overall.",
        },
        {
          title: "Active brightening stage",
          description:
            "Products and techniques are chosen to help the skin look fresher and more even.",
        },
        {
          title: "Calming and balance",
          description:
            "The skin is soothed and hydrated so the result feels comfortable as well as visibly improved.",
        },
        {
          title: "Next-step guidance",
          description:
            "We discuss whether this treatment is best as a one-off glow appointment or as part of a longer plan.",
        },
      ],
    },
    "sculpted-eye-lift": {
      title: "Eye area and brow definition treatment",
      category: "Eye area",
      excerpt:
        "A focused treatment for the eye area when you want a fresher gaze, cleaner definition, and a soft lifting effect.",
      duration: "45 min",
      priceFrom: "from €55",
      highlight: "A fresher eye area with more polished definition",
      overview:
        "This treatment combines eye-area refresh, gentle lifting, and brow or lash definition into one focused appointment. It suits clients who want a quick but noticeable improvement without a heavy result.",
      benefits: [
        "Makes the eye area look fresher",
        "Helps reduce a tired overall look",
        "Improves natural definition around the eyes",
        "Works well as a lower-maintenance treatment option",
      ],
      process: [
        {
          title: "Assessment",
          description:
            "We talk about whether you want more brow definition, a fresher eye area, or a soft lifting effect overall.",
        },
        {
          title: "Eye-area refresh",
          description:
            "Techniques are used to reduce the appearance of tiredness through the eye area.",
        },
        {
          title: "Definition and shape",
          description:
            "A shaping or tinting stage helps the area look more polished while still staying natural.",
        },
        {
          title: "Finish",
          description:
            "We close with practical guidance on how to keep the result looking good between appointments.",
        },
      ],
    },
  },
};

const servicesPageContent: Record<Locale, ServicesPageContent> = {
  lt: {
    eyebrow: "Paslaugos",
    title: "Paslaugos, kurias lengva suprasti ir patogu išsirinkti.",
    description:
      "Veido, antakių ir blakstienų priežiūra, sudėliota taip, kad būtų aišku, kam procedūra skirta, kokio rezultato tikėtis ir nuo ko patogiausia pradėti.",
    ctaLabel: "Kainos ir paketai",
    consultationEyebrow: "Konsultacija",
    consultationTitle: "Reikia pagalbos renkantis procedūrą?",
    consultationDescription:
      "Jei nesate tikra, kuri paslauga jums tinkamiausia, parašykite mums ir padėsime pasirinkti pagal jūsų poreikį bei laiką.",
    consultationPrimaryLabel: "Žiūrėti kainas",
    consultationSecondaryLabel: "Registruotis konsultacijai",
  },
  en: {
    eyebrow: "Services",
    title: "Services that are clear to understand and easy to choose from.",
    description:
      "Facial, brow, and lash care presented in a way that makes it easy to see who the treatment suits, what result to expect, and where to start.",
    ctaLabel: "Pricing and packages",
    consultationEyebrow: "Consultation",
    consultationTitle: "Need help choosing the right treatment?",
    consultationDescription:
      "If you are unsure which service suits you best, message us and we will help you choose around your needs, timing, and desired result.",
    consultationPrimaryLabel: "View pricing",
    consultationSecondaryLabel: "Book a consultation",
  },
};

const serviceDetailContent: Record<Locale, ServiceDetailContent> = {
  lt: {
    bookButton: "Registruotis",
    durationLabel: "Trukmė",
    investmentLabel: "Kaina",
    mediaSubtitle: "Apie procedūrą",
    mediaLabel: "Paslauga",
    overviewTitle: "Apie procedūrą",
    benefitsTitle: "Kuo ši procedūra verta",
    promiseLabel: "Ko tikėtis",
    frequencyLabel: "Rekomenduojamas dažnumas",
    frequencyText:
      "Dažniausiai procedūrą verta kartoti kas 4-6 savaites, tačiau tikslų planą parenkame pagal jūsų odos būklę, tikslą ir kasdienę priežiūrą.",
    protocolEyebrow: "Eiga",
    protocolTitle: "Kaip vyksta vizitas",
    protocolDescription:
      "Kiekvienas etapas turi aiškią paskirtį, kad procedūra būtų ir veiksminga, ir komfortiška.",
    expertsEyebrow: "Specialistės",
    expertsTitle: "Kas dažniausiai atlieka šią procedūrą",
    expertsDescription:
      "Šią paslaugą atlieka specialistės, kurios daugiausia dirba būtent su tokio tipo procedūromis.",
    moreEyebrow: "Kitos paslaugos",
    moreTitle: "Galbūt jums tiks ir šios procedūros",
    moreDescription:
      "Jei planuojate platesnę priežiūrą ar norite palyginti kelias paslaugas, pradėti galite nuo šių variantų.",
    ctaEyebrow: "Registracija",
    ctaPrimaryLabel: "Registruotis",
    ctaSecondaryLabel: "Kainos",
    ctaTitle: (serviceName) => `Domina ${serviceName.toLowerCase()}?`,
    ctaDescription: (serviceName) =>
      `Jei norite sužinoti, ar ${serviceName.toLowerCase()} jums tinka, užpildykite užklausą ir padėsime suplanuoti vizitą.`,
  },
  en: {
    bookButton: "Book",
    durationLabel: "Duration",
    investmentLabel: "Price",
    mediaSubtitle: "Treatment overview",
    mediaLabel: "Service",
    overviewTitle: "About this treatment",
    benefitsTitle: "Why clients book it",
    promiseLabel: "What to expect",
    frequencyLabel: "Recommended frequency",
    frequencyText:
      "Most clients repeat this treatment every 4 to 6 weeks, but the exact timing depends on your skin, goals, and how much upkeep fits your routine.",
    protocolEyebrow: "Process",
    protocolTitle: "How the visit works",
    protocolDescription:
      "Each step has a clear purpose so the treatment feels effective, calm, and easy to understand.",
    expertsEyebrow: "Specialists",
    expertsTitle: "Who usually performs this treatment",
    expertsDescription:
      "This service is carried out by specialists who work most often with this type of treatment and client need.",
    moreEyebrow: "More services",
    moreTitle: "You may also want to compare these treatments",
    moreDescription:
      "If you are building a wider care plan or choosing between options, these are a good next place to look.",
    ctaEyebrow: "Booking",
    ctaPrimaryLabel: "Book",
    ctaSecondaryLabel: "Pricing",
    ctaTitle: (serviceName) => `Interested in ${serviceName.toLowerCase()}?`,
    ctaDescription: (serviceName) =>
      `If you want to check whether ${serviceName.toLowerCase()} is the right fit, send us a request and we will help you plan the visit.`,
  },
};

export function getLocalizedServices(locale: Locale): Service[] {
  return services.map((service) => ({
    ...service,
    ...serviceContent[locale][service.slug],
  }));
}

export function getLocalizedService(locale: Locale, slug: string) {
  return getLocalizedServices(locale).find((service) => service.slug === slug);
}

export function getServicesPageContent(locale: Locale) {
  return servicesPageContent[locale];
}

export function getServiceDetailContent(locale: Locale) {
  return serviceDetailContent[locale];
}

export function getDefaultLocaleService(slug: string) {
  return getLocalizedService(defaultLocale, slug);
}
