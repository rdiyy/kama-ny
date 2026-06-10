import { ServiceCategory } from './types';

export const servicesData: ServiceCategory[] = [
  {
    id: "massasje",
    title: "Massasje",
    items: [
      { id: "m1", name: "Rygg nakke og hodebunn massasje", duration: "30 min", price: "450,-" },
      { id: "m2", name: "Full kropp+ansikt massasje", duration: "60 min", price: "900,-" },
      { id: "m3", name: "10 minutter tillegg", price: "150,-" }
    ],
    infoBlocks: [
      {
        title: "Fordeler med aroma massasje",
        list: [
          "Mykner ømme og stive muskler",
          "Drenerer og skiller ut avfallsstoffer",
          "Forebyggende mot yrkesskade",
          "Fremmer psykisk helse og reduserer stress",
          "Forbedrer tørr hud"
        ]
      }
    ]
  },
  {
    id: "microneedling",
    title: "Microneedling",
    items: [
      { id: "mn1", name: "Hudpleie med microneedling", duration: "60 min", price: "1150,-" }
    ],
    infoBlocks: [
      {
        title: "Behandlingen inkluderer:",
        list: [
          "Rens",
          "Peeling",
          "Microneedling",
          "Serum",
          "Beroligende ansiktsmaske",
          "Fuktighetskrem"
        ]
      },
      {
        title: "Fakta og resultater:",
        list: [
          "fornyer grov og gusten hud",
          "stimulerer produksjon av tapt kollagen og elastin i huden",
          "falmer hyperpigmentasjon fra akne og solskade",
          "reduserer rynker og fine linjer",
          "lysner og jevner ut hudtonen",
          "hjelper huden å absorbere produkter dypere i dermis"
        ]
      },
      {
        title: "Behandling:",
        list: [
          "avhengig av hvilke utfordringer du ønsker å forbedre kan man trenge mellom 3 til 7 behandlinger",
          "effekten fra behandlingen tar ca. 4 uker, men sluttresultatet kan ta opptil 6 måneder",
          "ved jevnlig behandling ser de fleste gode resultater allerede etter 4 måneder",
          "etter behandling kan man forvente rødhet de neste 3-4 dagene"
        ]
      },
      {
        title: "Du bør unngå denne behandlingen dersom du:",
        warning: true,
        list: [
          "har aktiv akne eller går på akne-medisin",
          "har hudtilstander som eksem eller psoriasis",
          "har solbrent hud",
          "har nedsatt allmenntilstand",
          "har diabetes",
          "har aktivt herpes sår",
          "er under kreft behandling"
        ]
      }
    ]
  },
  {
    id: "hudpleie",
    title: "Hudpleie meny",
    items: [
      { id: "h1", name: "Hudpleie", duration: "60 min", price: "950,-" },
      { id: "h2", name: "Hudpleie", duration: "30 min", price: "475,-" },
      { id: "h3", name: "Microneedling", duration: "60 min", price: "1150,-" },
      { id: "h4", name: "Pro peel-hudpleie", duration: "60 min", price: "1150,-" }
    ]
  },
  {
    id: "vipper-bryn",
    title: "Vipper og bryn",
    items: [
      { id: "vb1", name: "Farging av bryn", price: "250,-" },
      { id: "vb2", name: "Farging av vipper", price: "250,-" },
      { id: "vb3", name: "Farging av vipper og bryn", price: "400,-" },
      { id: "vb4", name: "Farge og forming av bryn", price: "400,-" },
      { id: "vb5", name: "Farge vipper/bryn+form", price: "600,-" },
      { id: "vb6", name: "Brynslaminering", price: "700,-" },
      { id: "vb7", name: "Vippeløft", price: "700,-" }
    ],
    infoBlocks: [
      {
        title: "Ting du bør vite for vippeløft behandling:",
        text: "Ditt første vippeløft er ikke garantert perfeksjon. Grunnet at alle har ulike typer vipper er det ikke alltid at man får et perfekt resultat første time. Første gang du får vippeløft er hvor vi kartlegger dine typer vipper og hvordan de reagerer med vippeløftproduktene. Det er alltid bedre med for lite løft enn at vippene dine blir skadet over lengre tid."
      },
      {
        title: "Gravide og ammende:",
        text: "Gravide og ammende er ikke anbefalt å utføre vippeløft ettersom de kan ha dårligere effekt av behandlingen. Det er ikke farlig, men resultatet er vanskeligere å forutse. Dette skyldes hormonendringer i kroppen under og etter graviditet."
      },
      {
        title: "Ettervern vippeløft:",
        text: "Du må være forberedt på at etter vippeløft behandlingen skal vippene ikke utsettes for vann eller fuktighet i de neste 24 timene. Unngå derfor å bruke maskara, vippeserum, olje og andre produkter."
      },
      {
        title: "Er brynslaminering noe for deg?",
        text: "Brynslaminering passer for deg dersom du har:",
        list: [
          "Hår som vokser i ulike retninger",
          "Grove hår som vokser utover",
          "Ønsker fyldigere bryn"
        ]
      }
    ]
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80"
];

export const testimonials = [
  {
    name: "Kari N.",
    text: "En utrolig avslappende opplevelse. Mathilde er dyktig og salongen føles virkelig eksklusiv.",
    treatment: "Full kropp + ansikt massasje"
  },
  {
    name: "Silje M.",
    text: "Vippeløftet mitt har aldri sett bedre ut! Anbefaler Kama Velvære på det sterkeste.",
    treatment: "Vippeløft"
  },
  {
    name: "Anette H.",
    text: "Fantastisk hudpleie. Huden min gløder, og atmosfæren i salongen er utrolig beroligende.",
    treatment: "Hudpleie med microneedling"
  }
];
