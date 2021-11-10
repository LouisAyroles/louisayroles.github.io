import { Project } from './project';
import { Type } from './project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "RAID 5",
        type: Type.Pro,
        short_description: "Un magnifique projet réalisé en L2 Informatique.",
        description: "    Le RAID est un ensemble de techniques de virtualisation du stockage permettant de répartir des données sur plusieurs disques durs afin d'améliorer soit les performances, soit la sécurité ou la tolérance aux pannes de l'ensemble du ou des systèmes." +
      "Le RAID 5 utilise au moins trois disques durs et répartit les données sur plusieurs disques durs pour gagner en performance grâce à l’accès simultané, mais à la différence du RAID 0, le RAID 5 inclut des codes de correction (les bits de parité) entre les données.",
        profilPicture: "../assets/projects/raid5/raid5.png",
      pictures: [
        {
          src: "../assets/projects/raid5/raid5Disk.png",
          desc: "Le principe du RAID 5 est de repartir les données en couche sur plusieurs disques et de faire la parité des 3 sur le dernier disque. De cette maniere là, il est possible de retrouver les données en cas de panne. "
        },
        {
          src: "../assets/projects/raid5/raid5couche1.png",
          desc: "L'ensemble du projet a été codé en langage C. Nous avons utilisés des primitives tel que fread ou fwrite. Une attention particuliere a ete donnée sur les commentaires puisque ceux ci permettaient de generer automatiquement un documenation. "
        },
        {
          src: "../assets/projects/raid5/raidPrompt.png",
          desc: "Voici l'interface en ligne de commande du RAID5. Nous avons donc developpé plusieurs commandes que vous pouvez retrouver avec un help." +
            " Il est possible de load un fichier à parit d'un pc hôte vers le systeme ou d'exporter un fichier du systeme vers le pc hôte."
        },
      ],
      techno: [{ photo: "../assets/techno/c.png", url: "https://fr.wikipedia.org/wiki/C_(langage)"},
        { photo: "../assets/techno/atom.png", url: "https://atom.io/"},
        { photo: "../assets/techno/github.png", url: "https://github.com"},
        { photo: "../assets/techno/scrum.png", url: "https://fr.wikipedia.org/wiki/Scrum_(d%C3%A9veloppement)"}
      ],
        created: new Date(),
        code: "https://github.com/LouisAyroles/PROJET_S4",
        site: undefined
    },
    {
        id: 2,
        name: "NeOCampus",
        type: Type.Pro,
        short_description: "Un magnifique projet réalisé en stage de fin de licence.",
        description: "    NeOCampus est un démonstrateur de campus connecté, innovant, intelligent et durable sur le site de l’Université Toulouse 3 Paul Sabatier.\n" +
        "La plateforme associée à neOCampus consiste en de nombreux dispositifs logiciels et matériels\n" +
        "interconnectés pour le campus numérique de demain, durable et intelligent, alliant matériels pédagogiques innovants, capteurs, systèmes de communication, de stockage, de localisation, de simulation et des matériaux innovants, au sein de bâtiments universitaires du campus, pour améliorer la qualité de vie des usagers et réduire les consommations de fluides.",
        profilPicture: "../assets/projects/neocampus/neocampus.png",
      pictures: [
        {
          src: "../assets/projects/neocampus/cartocampus.png",
          desc: "Une carte interactive 3D basée sur OpenStreetMap qui permet aux étudiants de se repérer dans la fac." +
            " Il est possible de faire des recherches par nom de bâtiments, d'amphithéâtre, de restaurants etc. "
        },
        {
          src: "../assets/projects/neocampus/restocampus.png",
          desc: "Une liste des restaurants, filtrable selon la distance, les moyens de paiements disponibles etc." +
            " Elle permet de consulter les horaires d'ouvertures, les menus et d'autres infos utiles."
        },
        {
          src: "../assets/projects/neocampus/meteocampus.png",
          desc: "Une fonctionnalité météo qui permet de ne pas se faire surprendre par le temps lorsque vous vous habillez le matin." +
            " Elle est personnalisé avec des photos de l'université qui change en fonction du temps."
        },
        {
          src: "../assets/projects/neocampus/bibliocampus.png",
          desc: "BibliOCampus, une autre fonction de cette application qui vous permet de voir les BUs disponibles à proximité." +
            " Elle vous permet d'acceder à quelques infos pratiques comme les horaires d'ouvertures ou l'accès."
        }
      ],
      techno: [ { photo: "../assets/techno/android.png", url: "https://www.android.com/intl/fr_fr/"},
                { photo: "../assets/techno/bitbucket.png", url: "https://bitbucket.org/"},
                { photo: "../assets/techno/kotlin.png", url: "https://kotlinlang.org/"},
                { photo: "../assets/techno/scrum.png", url: "https://fr.wikipedia.org/wiki/Scrum_(d%C3%A9veloppement)"},
                { photo: "../assets/techno/xml.png", url: "https://fr.wikipedia.org/wiki/Extensible_Markup_Language"}
      ],

        created: new Date(),
        code: undefined,
        site: "https://www.irit.fr/neocampus/fr/"
    },
    {
        id: 3,
        name: "Passion Fleur",
        type: Type.Perso,
        short_description: "Un projet personnel d'un site e-commerce.",
        description : "   Passion Fleur est un projet personnel d'un site web e-commerce. Il vous permettra de commander tout types de fleurs sechées ou fleurs artificielles à des prix abordable." +
      "Avec une large gamme de fleurs séchées ainsi que ses gammes de fleurs et des plantes artificielles, cette boutique spécialisée dans l'arrangement et les bouquets s'engage à vous offrir constamment des nouveautés.\n" +
          "Passionné des fleurs séchées et artificielles depuis des années, Passion Fleur s'éloigne des sentiers battus : au lieu de vendre des fleurs banales que les grandes surfaces vous proposent, nous vous proposons des produits originaux.",
        profilPicture: "../assets/projects/passionfleur/passionfleur.png",
       pictures: [
        {
          src: "../assets/projects/passionfleur/passionfleur2.png",
          desc: "Un site developpé à l'aide de Shopify qui permet de construire facilement un site e-commerce sécurisé et responsive. Ce projet avait pour but de bien comprendre le referencement google et comment fonctionner l'e-commerce."
        },
        {
          src: "../assets/projects/passionfleur/responsivecontent.png",
          desc: "On peut voir le contenu ici qui s'affiche parfaitement sur mobile. En effet le côté responsive est tres important pour un site e-commerce puisque maintenant plus de la moitié des utilisateurs utilisent leur telephone pour naviguer sur internet.",
        },
         {
           src: "../assets/projects/passionfleur/responsivemenu.png",
           desc: "Le menu qui est normalement un mega-menu, se reduit sur mobile et propose un volet lateral tres pratique à utiliser. Les logos sont aussi differents pour mieux s'adapter au device qui est utilisé.",
         },
      ],
      techno: [{photo: "../assets/techno/seo.png", url : "https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=fr"},
        { photo: "../assets/techno/ecommerce.png", url: "https://www.doofinder.com/fr/blog/qu-est-ce-que-le-ecommerce"},
        { photo: "../assets/techno/shopify.png", url: "https://www.shopify.fr/"}
      ],
        created: new Date(),
        code: undefined,
        site: "https://passion-fleur.fr/"
    },
  {
    id: 4,
    name: "Pokédex",
    type: Type.Perso,
    short_description: "Un projet personnel pour apprendre la technologie Angular.",
    description : "   Pokedex est un projet minimal Angular qui m'a permis d'apprendre ce framework et de pouvoir vous proposer ce magnifique portfolio. C'est simplement une application qui propose plusieurs petites cartes de pokémons et sur lesquels j'ai ajouté un peu de style."
    + " Angular est un framework client-side, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est le descendant d'AngularJS, framework construit par la même équipe.",
    profilPicture: "../assets/projects/pokedex/angular.png",
    pictures: [
    ],
    techno: [ {photo: "../assets/techno/Intellij.svg", url: "https://www.jetbrains.com/fr-fr/idea/"},
    {photo: "../assets/techno/angular.png", url: "https://angular.io/"},
    {photo: "../assets/techno/github.png", url: "https://github.com"},
    {photo: "../assets/techno/materialize.svg", url: "https://materializecss.com/"},
    {photo: "../assets/techno/html.png", url: "https://fr.wikipedia.org/wiki/HTML5"},
    {photo: "../assets/techno/css3.png", url: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"},
    {photo: "../assets/techno/typescript.png", url: "https://fr.wikipedia.org/wiki/TypeScript"}
  ],
    created: new Date(),
    code: "https://github.com/LouisAyroles/Pokemon",
    site: undefined
  },
  {
    id: 5,
    name: "GitSupervisor",
    type: Type.Pro,
    short_description: "Un projet de 6 mois réalisé pendant le Master 1.",
    description : "Git Supervisor est un outil d'analyse de depots GitLab ou GitHub. Il permet de centraliser des informations concernant les repos et de voir les contributeurs aux projets, les commits qui ont été effectués, comment les issues ont été gérées etc." +
      " Cette application web est faite d'une API developpée en Python couplée à un frontend TypeScript Angular. Nous avons évolué 6 mois sur ce projet proposé par Jean-Michel Bruel, professeur à l'IRIT dans un contexte agile. Je tiens à remercier les M2 qui nous ont encadrés pour ce projet. ",
    profilPicture: "../assets/projects/gitsupervisor/gitsupervisor.png",
    pictures: [
      {
        src: "../assets/projects/gitsupervisor/contributors1.png",
        desc: "Le contributors module permet de voir tout les contributeurs au projet et de voir des détails sur leur collaboration. Il se compose de 2 parties, la premiere est la liste des utilisaturs. On peut se renseigner sur  le nombre de commits, d'issues etc."
      },
      {
        src: "../assets/projects/gitsupervisor/contributors2.png",
        desc: "La 2eme partie du contributors module est composé d'un graphe representant les commits de tout les collaborateurs ou si on selectionne un collaborateur dans la liste, on peut voir le détail."
      },
      {
        src: "../assets/projects/gitsupervisor/evaluator-module.png",
        desc: "Les regles de l'evaluator module sont définis dans les réglages et permet de noter automatiquement des éleves selon des criteres particuliés."
      },
      {
        src: "../assets/projects/gitsupervisor/example.gif",
        desc: "Voici un gif representant une intéraction utilisateur qui crée un workspace, ajoute un de ses dépôts et ajoute les modules d'analyse."
      },
    ],
    techno: [{photo: "../assets/techno/Intellij.svg", url: "https://www.jetbrains.com/fr-fr/idea/"},
      {photo: "../assets/techno/angular.png", url: "https://angular.io/"},
      {photo: "../assets/techno/github.png", url: "https://docs.github.com/en/rest"},
      {photo: "../assets/techno/gitlab.png", url: "https://docs.gitlab.com/ee/api/"},
      {photo: "../assets/techno/scrum.png", url: "https://fr.wikipedia.org/wiki/Scrum_(d%C3%A9veloppement)"},
      {photo: "../assets/techno/html.png", url: "https://fr.wikipedia.org/wiki/HTML5"},
      {photo: "../assets/techno/css3.png", url: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"},
      {photo: "../assets/techno/typescript.png", url: "https://fr.wikipedia.org/wiki/TypeScript"},
      {photo: "../assets/techno/python.png", url: "https://www.python.org/"}
    ],
    created: new Date(),
    code: "https://gitlab.com/jeroli.co/git-supervisor",
    site: "https://git-supervisor.herokuapp.com/home"
  },
  {
    id: 6,
    name: "LearnOcaml",
    type: Type.Pro,
    short_description: "Un projet de 6 mois réalisé pendant le stage de fin de Master 1.",
    description : "Depuis l’année 2016-2017, l’Unité d’Enseignement PFITA de la Licence 3 Informatique de l’Université Paul Sabatier utilise un outil d’évaluation automatique à base de tests unitaires et d’analyse statique," +
    "et du moteur de MOOC ( Massive Open Online Course) learn-ocaml développé par OCamlPro puis par la fondation OCaml. La plateforme d’apprentissage PFITAXEL comprend plusieurs projets qui sont tous hébergés sur GitHub. Cet outil génère un rapport HTML indiquant les erreurs ou les motifs de code à éviter.",
    profilPicture: "../assets/projects/learnocaml/learnocaml.png",
    pictures: [
      {
        src: "../assets/projects/gitsupervisor/contributors1.png",
        desc: "Le contributors module permet de voir tout les contributeurs au projet et de voir des détails sur leur collaboration. Il se compose de 2 parties, la premiere est la liste des utilisaturs. On peut se renseigner sur  le nombre de commits, d'issues etc."
      },
      {
        src: "../assets/projects/gitsupervisor/contributors2.png",
        desc: "La 2eme partie du contributors module est composé d'un graphe representant les commits de tout les collaborateurs ou si on selectionne un collaborateur dans la liste, on peut voir le détail."
      },
      {
        src: "../assets/projects/gitsupervisor/evaluator-module.png",
        desc: "Les regles de l'evaluator module sont définis dans les réglages et permet de noter automatiquement des éleves selon des criteres particuliés."
      },
      {
        src: "../assets/projects/gitsupervisor/example.gif",
        desc: "Voici un gif representant une intéraction utilisateur qui crée un workspace, ajoute un de ses dépôts et ajoute les modules d'analyse."
      },
    ],
    techno: [{photo: "../assets/techno/ocaml.png", url: "https://ocaml.org/index.fr.html"},
      {photo: "../assets/techno/elisp.png", url: "https://www.gnu.org/software/emacs/manual/html_node/elisp/"}
    ],
    created: new Date(),
    code: "https://github.com/pfitaxel",
    site: "https://pfitaxel.univ-tlse3.fr/"
  }
];
