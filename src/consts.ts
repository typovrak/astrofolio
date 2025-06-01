import type { Site, Page, Links, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Morgan Scholz",
  DESCRIPTION:
    "Bienvenue sur le portfolio de Morgan Scholz, développeur web fullstack JS basé en France.",
  KEYWORDS: [
    "développeur",
    "freelance",
    "Morgan Scholz",
    "France",
    "Lille",
    "portfolio",
    "responsive design",
    "mobile first",
    "performance web",
  ],
  AUTHOR: "Morgan Scholz",
};

export const WORK: Page = {
  TITLE: "Mon parcours",
  DESCRIPTION:
    "Découvrez mon histoire, mes expériences et les étapes importantes de mon chemin de vie.",
  KEYWORDS: [
    "parcours",
    "experience",
    "KT Sport Design",
    "Ikomobi",
    "intégration web",
    "éducation",
    "formation",
    "certification",
  ],
};

export const PROJECTS: Page = {
  TITLE: "Mes projets",
  DESCRIPTION:
    "Découvrez les différentes initiatives auxquelles je participe et les projets que j'ai réalisés.",
  KEYWORDS: [
    "projets",
    "sites web",
    "applications web",
    "site d'échec en ligne",
    "site d'agence web",
    "projets personnels",
    "démos de projets",
    "succès de projets",
  ],
};

export const BLOG: Page = {
  TITLE: "Mes écrits",
  DESCRIPTION:
    "Explorez mes écrits et mes réflexions sur les sujets qui me passionnent.",
  KEYWORDS: [
    "écrits",
    "guides",
    "tutoriels",
    "actualités",
    "astuces",
    "ressources",
    "développement web",
    "analyses",
    "tendances",
  ],
};

export const SEARCH: Page = {
  TITLE: "Rechercher",
  DESCRIPTION: "Trouvez ce que vous cherchez en quelques mots clés.",
  KEYWORDS: [
    "recherche",
    "blogs",
    "projets",
    "filtrer",
    "tri",
    "résultats",
    "mots-clés",
    "tags",
    "catégories",
    "technologies",
  ],
};

export const NOTFOUND: Page = {
  TITLE: "404",
  DESCRIPTION: "La page que vous chercher n'existe pas ou plus.",
  KEYWORDS: [
    "lien brisé",
    "retour à l'accueil",
    "problème",
    "contenu manquant",
    "informations manquantes",
    "suggestions",
  ],
};

export const CHANGELOG: Page = {
  TITLE: "Changelog",
  DESCRIPTION:
    "Découvrez les dernières mises à jour et améliorations du site.",
  KEYWORDS: [
    "développeur web freelance",
    "mises à jour",
    "améliorations",
    "changelog",
    "nouveautés"
  ],
};

export const LINKS: Links = [
  {
    TEXT: "Bienvenue",
    HREF: "/",
  },
  {
    TEXT: "Parcours",
    HREF: "/parcours",
  },
  {
    TEXT: "Projets",
    HREF: "/projets",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
];

export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "mscholz.dev@gmail.com",
    HREF: "mailto:mscholz.dev@gmail.com",
  },
  {
    NAME: "Linkedin",
    ICON: "linkedin",
    TEXT: "morgan-scholz",
    HREF: "https://www.linkedin.com/in/morgan-scholz",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "mscholz-dev",
    HREF: "https://github.com/mscholz-dev",
  },
  {
    NAME: "Gitlab",
    ICON: "gitlab",
    TEXT: "mscholz-dev",
    HREF: "https://gitlab.com/mscholz-dev",
  },
  {
    NAME: "Youtube",
    ICON: "youtube",
    TEXT: "mscholzdev",
    HREF: "https://www.youtube.com/@mscholzdev",
  },
  {
    NAME: "Monkeytype",
    ICON: "monkeytype",
    TEXT: "mscholz.dev",
    HREF: "https://monkeytype.com/profile/mscholz.dev",
  },
];

export const COLORS = {
  LOGO: [
    ["242, 158, 62", "255, 61, 128", "148, 78, 246"],
    ["2, 255, 255", "176, 37, 255", "248, 0, 247"],
    ["64, 172, 51", "0, 207, 158", "93, 234, 237"],
    ["110, 159, 203", "52, 120, 232", "123, 40, 223"],
    ["83, 15, 119", "179, 34, 121", "248, 93, 113"],
    ["218, 247, 109", "248, 156, 81", "204, 84, 112"],
  ],
};
