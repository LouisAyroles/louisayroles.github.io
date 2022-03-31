import {Education} from "./education";
import {Experience} from "./experience";
import { Project } from './project';
import { Type } from './project';
import {Hobie} from "./hobie";

export const EDUCATION : Education[] =
  [
    {
      id: 1,
      diploma: "Master Développement Logiciel",
      diploma_en: "Master degree in Software engineering",
      year: "2020-2022",
      year_en: "2020-2022",
      city: "Toulouse",
      state: "Diplôme en cours",
      state_en: "Degree in progress",
      place: "Université Paul Sabatier",
      place_en: "Paul Sabatier University",
      logo: "../assets/cv/master-dl.png",
      description: [
        "Conception centrée utilisateur",
        "Conception informatique de systèmes interactifs.",
        "Développement collaboratif, qualité, gestion de configurations.",
        "Management de projets informatiques.",
        "Web services/XML.",
        "Ingénierie des modèles, des systemes, architecture logicielle"
      ],
      description_en: [
        "User-centered design",
        "Computer design of interactive systems.",
        "Collaborative development, quality, configuration management.",
        "Management of IT projects.",
        "Web services/XML.",
        "Model and systems engineering, software architecture."
      ]
    },
    {
      id: 2,
      diploma: "Licence informatique",
      diploma_en: "Bsc in Computer Science",
      year: "2020",
      year_en: "2020",
      city: "Toulouse",
      state: "Diplôme obtenu mention Assez Bien",
      state_en: "Graduated with honours",
      place: "Université Paul Sabatier",
      place_en: "Paul Sabatier University",
      logo: "../assets/cv/paulsab.png",
      description: [
        "Fonctionnement de l'ordinateur et de son environnement",
        "Méthodologie de développement logiciel/Génie logiciel",
        "Langages de programmation (C, JAVA, Python...)",
        "Structures discrètes et algorithmes",
        "Bases de données, Interaction Homme-machine, Intelligence artificielle, Informatique graphique, Programmation parallèle",
        "Techniques de gestion de projet et outils de travail collaboratif"
      ],
      description_en: [
        "Operation of the computer and its environment",
        "Software Development Methodology/Software Engineering",
        "Programming languages (C, JAVA, Python...)",
        "Discrete structures and algorithms",
        "Databases, Human-Computer Interaction, Artificial Intelligence, Graphics, Parallel Programming",
        "Project management techniques and collaborative working tools"
      ]
    },
    {
      id: 3,
      diploma: "Baccalaureat Série Scientifique",
      diploma_en: "Scientific Baccalaureate",
      year: "2015",
      year_en: "2015",
      city: "Gourdon (46)",
      state: "Diplôme obtenu mention Assez Bien",
      state_en: "Graduated whith honours",
      place: "Lycée Léo Ferré",
      place_en: "High Scool Léo Ferré",
      logo: "../assets/cv/leoferre.jpg",
      description: [
        "Spécialité Mathématiques",
        "Participation au concours national de la résistance et de la déportation (2012-2013)",
        "Délégué au conseil pour la vie lycéenne (2013-2015)",
        "Délégué au conseil d'administration (2013-2014)",
        "Membre du club de volley du lycée (2014-2015)"
      ],
      description_en: [
        "Mathematics Specialty",
        "Participation in the national resistance and deportation competition (2012-2013)",
        "Delegate to the council for student life (2013-2015)",
        "Board Delegate (2013-2014)",
        "Member of the high school volleyball club (2014-2015)",
      ]
    }
  ]


export const EXPERIENCE : Experience[] = [
  {
    id: 1,
    company: "INFOTEL",
    year: "Septembre 2021 - Aujourd'hui",
    year_en: "September 2021 - Today",
    city: "Toulouse",
    occupation: "Ingénieur Logiciel",
    occupation_en: "Software Engineer",
    description: [
      "Développement application web en .NET et Angular",
      "Utilisation des outils de déploiement continu (Jenkins)",
      "Mise en oeuvre de la méthode Agile"
    ],
    description_en: [
      "Web application development in .NET and Angular",
      "Use of continuous deployment tools (Jenkins)",
      "Use of the Agile method"
    ],
    company_logo :"../assets/cv/infotel.png"
  },
  {
    id: 2,
    company: "IRIT / Equipe ACADIE",
    year: "Mai, Juin, Juillet 2021",
    year_en: "May, June, July 2021",
    city: "Toulouse",
    occupation: "Stagiaire Développeur",
    occupation_en: "Developer Trainee",
    description: [
      "Contributions front-end pour une plateforme d'apprentissage",
      "Contribution Lisp pour un mode Emacs dédié",
      "Mise en oeuvre de la méthode Agile"
    ]
    ,
    description_en: [
      "Front-end contributions for a learning platform.",
      "Lisp contribution for a dedicated Emacs mode",
      "Use of the Agile method"
    ],
    company_logo :"../assets/cv/irit.png"
  },
  {
    id: 3,
    company: "IRIT / Equipe SMAC",
    year: "Avril,Mai 2020",
    year_en: "April, May 2020",
    city: "Toulouse",
    occupation: "Stagiaire Développeur",
    occupation_en: "Developer Trainee",
    description: [
      "Développement application mobile en Kotlin",
      "Utilisation des outils de travail en équipe (GIT)",
      "Mise en oeuvre de la méthode Agile"
    ],
    description_en: [
      "Mobile application development in Kotlin",
      "Use of teamwork tools (GIT)",
      "Use of the Agile method"
    ],
    company_logo :"../assets/cv/irit.png"
  },
  {
    id: 4,
    company: "SYSCO FRANCE",
    year: "Étés 2018,2019 & 2020",
    year_en: "Summer 2018,2019 & 2020",
    city: "Souillac",
    occupation: "Préparateur de commande",
    occupation_en: "Order picker",
    description: [
      "Gestion de la chaine du froid",
      "Utilisation d'un logiciel de stock",
      "Préparation des commandes clients"
    ],
    description_en: [
      "Cold chain management",
      "Use of stock software",
      "Preparation of customer orders"
    ],
    company_logo :"../assets/cv/sysco.png"
  },
  {
    id: 5,
    company: "COPEYRE CANOE",
    year: "Étés 2015 & 2016",
    year_en: "Summer 2015 & 2016",
    city: "Souillac",
    occupation: "Régisseur de base",
    occupation_en: "Base manager",
    description: [
      "Accueil, départ, arrivée des clients",
      "Encadrement de groupes (initation)",
      "Encaissement, consigne (Français ou Anglais)"
    ],
    description_en: [
      "Reception, departure, arrival of clients",
      "Group supervision (initation)",
      "Collection, deposit (French or English)"
    ],
    company_logo :"../assets/cv/copeyre.png"
  },
  {
    id: 6,
    company: "University Moto",
    year: "Vacances 2014",
    year_en: "Holidays 2014",
    city: "Villefranche de Rouergue",
    occupation: "Aide aux éducateurs motos",
    occupation_en: "Support for motorbike educators",
    description: [
      "Entretien sur les machines du centre",
      "Encadrement de groupes (initiaition ou competition)"
    ],
    description_en: [
      "Maintenance on the centre's machines",
      "Supervision of groups (initiation or competition)"
    ],
    company_logo :"../assets/cv/university.png"
  },
  {
    id: 7,
    company: "Garage Pompougnac",
    year: "Étés 2013 & 2014",
    year_en: "Summer 2015 & 2016",
    city: "Le Vigan",
    occupation: "Aide mécanique",
    occupation_en: "Mechanical assistant",
    description: [
      "Mecanique rapide (pneus, plaquettes, vidanges)",
      "Remise en etat de vehicules anciens"
    ],
    description_en: [
      "Fast mechanics (tyres, brake pads, oil changes)",
      "Restoration of old vehicles"
    ],
    company_logo :"../assets/cv/garage.png"
  },
  {
    id: 8,
    company: "Feronnerie Malbeth",
    year: "Étés 2015/2016",
    year_en: "Summer 2015/2016",
    city: "Payrac",
    occupation: "Aide feronnier",
    occupation_en: "Ironworker's helper",
    description: [
      "Ponçage et peinture de portail, grilles etc.",
      "Coupes de tubes pour la réalisaion de portail"
    ],
    description_en: [
      "Sanding and painting of gates, fences etc.",
      "Tube cuts for the construction of gates"
    ],
    company_logo :"../assets/cv/feronnerie.png"
  }
]

export const HOBBIES : Hobie[] = [
  {
    name: "Football",
    name_en: "Football",
    year: "2003-2008",
    desc: "Pratique en club",
    desc_en: "Practice in a club",
    earning: "Beaucoup de medailles mais c'est tres lointain !",
    earning_en: "Many medals but it's a long way off!",
    photo: "../assets/cv/hobbies/football.jpg"
  },
  {
    name: "Tennis de table",
    name_en: "Table tennis",
    year: "2008-2012",
    desc: "Pratique en club",
    desc_en: "Practice in a club",
    earning: "Champion departemental en 2010",
    earning_en: "Departmental champion in 2010",
    photo: "../assets/cv/hobbies/ping.jpg"
  },
  {
    name: "Motocross",
    name_en: "Motocross",
    year: "2012-2015",
    desc: "Loisirs et courses",
    desc_en: "Hobie and race",
    earning: "Des bons souvenirs",
    earning_en: "Good memories",
    photo: "../assets/cv/hobbies/mx.jpg"
  },
  {
    name: "Jeux vidéos",
    name_en: "Videogames",
    year: "2017-2018",
    desc: "Compétition R6: Siege",
    desc_en: "R6: Siege in competition",
    earning: "Top 3 Lan SFCO Paris",
    earning_en: "Top 3 Lan SFCO Paris",
    photo: "../assets/cv/hobbies/videogame.jpg"
  }
]

export const PROJECTS_FR: Project[] = [
  {
    id: 1,
    name: "RAID 5",
    type: Type.Pro,
    short_description: 'Un magnifique projet réalisé en L2 Informatique.',
    short_description_en: "A wonderful project realized in L2 Computer Science.",
    description: "Le RAID est un ensemble de techniques de virtualisation du stockage permettant de répartir des données sur plusieurs disques durs afin d'améliorer soit les performances, soit la sécurité ou la tolérance aux pannes de l'ensemble du ou des systèmes." +
      "Le RAID 5 utilise au moins trois disques durs et répartit les données sur plusieurs disques durs pour gagner en performance grâce à l’accès simultané, mais à la différence du RAID 0, le RAID 5 inclut des codes de correction (les bits de parité) entre les données.",
    profilPicture: "../assets/projects/raid5/raid5.png",
    description_en : "RAID is a set of storage virtualization techniques for distributing data across multiple hard drives to improve either the performance, security or fault tolerance of the overall system." +
      "RAID 5 uses three or more hard drives and spreads data across multiple hard drives to gain performance through concurrent access, but unlike RAID 0, RAID 5 includes correction codes (parity bits) between data.",
    pictures: [
      {
        src: "../assets/projects/raid5/raid5Disk.png",
        desc: "Le principe du RAID 5 est de repartir les données en couche sur plusieurs disques et de faire la parité des 3 sur le dernier disque. De cette manière là, il est possible de retrouver les données en cas de panne. ",
        desc_en : "The principle of RAID 5 is to distribute the data in layers on several disks and to make the parity of the 3 on the last disk. In this way, it is possible to find the data in case of failure"
      },
      {
        src: "../assets/projects/raid5/raid5couche1.png",
        desc: "L'ensemble du projet a été codé en langage C. Nous avons utilisés des primitives tel que fread ou fwrite. Une attention particulière a été donnée sur les commentaires puisque ceux ci permettaient de générer automatiquement un documentation.",
        desc_en: "The whole project has been coded in C language. We used primitives such as fread or fwrite. A particular attention was given to the comments since they allowed to generate automatically a documentation. "
      },
      {
        src: "../assets/projects/raid5/raidPrompt.png",
        desc: "Voici l'interface en ligne de commande du RAID5. Nous avons donc développé plusieurs commandes que vous pouvez retrouver avec un help." +
          " Il est possible de load un fichier à partir d'un pc hôte vers le système ou d'exporter un fichier du système vers le pc hôte.",
        desc_en: "Here is the command line interface of RAID5. So we have developed several commands that you can find with a help." +
          "It is possible to load a file from a host pc to the system or to export a file from the system to the host pc."
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
    name: "GitSupervisor",
    type: Type.Pro,
    short_description: "Un projet de 6 mois réalisé pendant le Master 1.",
    short_description_en: "A 6-month project carried out during the Master 1.",
    description : "Git Supervisor est un outil d'analyse de dépôts GitLab ou GitHub. Il permet de centraliser des informations concernant les repos et de voir les contributeurs aux projets, les commits qui ont été effectués, comment les issues ont été gérées etc." +
      " Cette application web est faite d'une API développée en Python couplée à un frontend TypeScript Angular. Nous avons évolué 6 mois sur ce projet proposé par Jean-Michel Bruel, professeur à l'IRIT dans un contexte agile. Je tiens à remercier les M2 qui nous ont encadrés pour ce projet.",
    description_en : "Git Supervisor is a tool for analyzing GitLab or GitHub repositories. It allows you to centralize information about repos and see who contributed to projects, what commits were made, how issues were handled etc." +
      "This web application is made of an API developed in Python coupled with a TypeScript Angular frontend." +
      "This web application is made of an API developed in Python coupled with a TypeScript Angular frontend. We evolved 6 months on this project proposed by Jean-Michel Bruel, professor at IRIT in an agile context. I would like to thank the M2 students who supervised us for this project.",
    profilPicture: "../assets/projects/gitsupervisor/gitsupervisor.png",
    pictures: [
      {
        src: "../assets/projects/gitsupervisor/contributors1.png",
        desc: "Le contributors module permet de voir tout les contributeurs au projet et de voir des détails sur leur collaboration. Il se compose de 2 parties, la première est la liste des utilisateurs. On peut se renseigner sur  le nombre de commits, d'issues etc.",
        desc_en: "The contributors module allows to see all the contributors to the project and to see details about their collaboration. It consists of 2 parts, the first is the list of users. You can find out the number of commits, issues etc."
      },
      {
        src: "../assets/projects/gitsupervisor/contributors2.png",
        desc: "La 2ème partie du contributors module est composé d'un graphe représentant les commits de tout les collaborateurs ou si on sélectionne un collaborateur dans la liste, on peut voir le détail.",
        desc_en: "The second part of the contributors module is composed of a graph representing the commits of all the collaborators or if we select a collaborator in the list, we can see the details."
      },
      {
        src: "../assets/projects/gitsupervisor/evaluator-module.png",
        desc: "Les règles de l'evaluator module sont définis dans les réglages et permet de noter automatiquement des élèves selon des critères particuliers.",
        desc_en: "The rules of the evaluator module are defined in the settings and allow to automatically grade students according to particular criteria."
      },
      {
        src: "../assets/projects/gitsupervisor/example.gif",
        desc: "Voici un gif représentant une interaction utilisateur qui crée un workspace, ajoute un de ses dépôts et ajoute les modules d'analyse.",
        desc_en: "Here is a gif representing a user interaction that creates a workspace, adds one of its repositories and adds the analysis modules."
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
    id: 3,
    name: "LearnOcaml",
    type: Type.Pro,
    short_description: "Un projet de 3 mois réalisé pendant le stage de fin de Master 1.",
    short_description_en: "A 3-month project carried out during the end of Master 1 internship.",
    description : "Learn-OCaml est un logiciel libre et une plateforme d'apprentissage du langage OCaml, développé initialement par OCamlPro pour déployer le MOOC OCaml, et maintenant développé par la fondation OCaml. Depuis l’année 2016-2017, l’Unité d’Enseignement PFITA de la Licence 3 Informatique de l’Université Paul Sabatier s'appuie sur cette plateforme pour fournir aux élèves des rapports de tests : dans le cadre du projet PFITAXEL, des nouvelles fonctionnalités ont été développées pour étendre la plateforme Learn-OCaml et répondre à des besoins identifiés dans l'UE PFITA. J'ai rejoint le projet durant mon stage de M1 (encadré par Erik Martin-Dorel et soutenu par la fondation OCaml).",
    description_en : "Learn-OCaml is an open source software and learning platform for the OCaml language, initially developed by OCamlPro to deploy the OCaml MOOC, and now developed by the OCaml Foundation. Since the year 2016-2017, the PFITA Teaching Unit of the Licence 3 Informatique of the Paul Sabatier University relies on this platform to provide students with test reports: in the framework of the PFITAXEL project, new functionalities have been developed to extend the Learn-OCaml platform and to meet needs identified in the PFITA UE. I joined the project during my M1 internship (supervised by Erik Martin-Dorel and supported by the OCaml foundation).",
    profilPicture: "../assets/projects/learnocaml/learnocaml.png",
    pictures: [
      {
        src: "../assets/projects/learnocaml/client.png",
        desc: "Le mode learn-ocaml interagit avec le serveur au travers d’un client en ligne de commande. Le client et le serveur ont tout les 2 une version qui est incrémentée à chaque release.",
        desc_en: "The learn-ocaml mode interacts with the server through a command line client. Both the client and the server have a version that is incremented at each release. "
      },
      {
        src: "../assets/projects/learnocaml/emacs2.png",
        desc: "La principale partie de mon stage a été concentré sur la mise en place de l'authentification par login et mot de passe au la place d'un token. J'ai mis en place une pop-up qui propose les choix adéquat suivant la version du client et du serveur.",
        desc_en: "The main part of my internship was focused on the implementation of authentication by login and password instead of a token. I set up a pop-up which proposes the adequate choices according to the version of the client and the server."
      },
      {
        src: "../assets/projects/learnocaml/emacs.png",
        desc: "L'interface Emacs propose donc un plugin learn-ocaml qui permet d'intégrer les fonctionnalités directement au navigateur."
          + " On a accès aux différents exercices et on peut les ouvrir pour proposer une solution. Quand on les soumet au serveur pour notation, il renvoie une page html nous indiquant les tests qui sont validés ou non.",
        desc_en: "The Emacs interface offers a learn-ocaml plugin that allows you to integrate the features directly into the browser."
          + "We have access to the different exercises and we can open them to propose a solution. When we submit them to the server for grading, it sends back an html page telling us which tests are validated or not."

      }
    ],
    techno: [{photo: "../assets/techno/ocaml.png", url: "https://ocaml.org/index.fr.html"},
      {photo: "../assets/techno/elisp.png", url: "https://www.gnu.org/software/emacs/manual/html_node/elisp/"},
      {photo: "../assets/techno/github.png", url: "https://www.github.com"}
    ],
    created: new Date(),
    code: "https://github.com/pfitaxel",
    site: "https://pfitaxel.univ-tlse3.fr/"
  },
  {
    id: 4,
    name: "NeOCampus",
    type: Type.Pro,
    short_description: "Un magnifique projet réalisé en stage de fin de licence.",
    short_description_en: "A project carried out as an internship at the end of the degree.",
    description: "    NeOCampus est un démonstrateur de campus connecté, innovant, intelligent et durable sur le site de l’Université Toulouse 3 Paul Sabatier.\n" +
      "La plateforme associée à neOCampus consiste en de nombreux dispositifs logiciels et matériels\n" +
      "interconnectés pour le campus numérique de demain, durable et intelligent, alliant matériels pédagogiques innovants, capteurs, systèmes de communication, de stockage, de localisation, de simulation et des matériaux innovants, au sein de bâtiments universitaires du campus, pour améliorer la qualité de vie des usagers et réduire les consommations de fluides.",
    description_en: "NeOCampus is a demonstrator of a connected, innovative, intelligent and sustainable campus on the site of the University Toulouse 3 Paul Sabatier." +
      "The platform associated with neOCampus consists of numerous software and hardware devices" +
      "The platform associated with neOCampus consists of numerous software and hardware devices interconnected for the digital campus of tomorrow, sustainable and intelligent, combining innovative teaching materials, sensors, communication systems, storage, localization, simulation and innovative materials, within the university buildings of the campus, to improve the quality of life of users and reduce fluid consumption.",
    profilPicture: "../assets/projects/neocampus/neocampus.png",
    pictures: [
      {
        src: "../assets/projects/neocampus/cartocampus.png",
        desc: "Une carte interactive 3D basée sur OpenStreetMap qui permet aux étudiants de se repérer dans la fac." +
          " Il est possible de faire des recherches par nom de bâtiments, d'amphithéâtre, de restaurants etc. ",
        desc_en: "A 3D interactive map based on OpenStreetMap that allows students to find their way around the college." +
          "It is possible to search by name of buildings, amphitheaters, restaurants etc. "

      },
      {
        src: "../assets/projects/neocampus/restocampus.png",
        desc: "Une liste des restaurants, filtrable selon la distance, les moyens de paiements disponibles etc." +
          " Elle permet de consulter les horaires d'ouvertures, les menus et d'autres infos utiles.",
        desc_en: "A list of restaurants, filterable by distance, available payment methods etc." +
          "It allows you to check opening hours, menus and other useful info."
      },
      {
        src: "../assets/projects/neocampus/meteocampus.png",
        desc: "Une fonctionnalité météo qui permet de ne pas se faire surprendre par le temps lorsque vous vous habillez le matin." +
          " Elle est personnalisé avec des photos de l'université qui change en fonction du temps.",
        desc_en: "A weather feature that takes the guesswork out of getting dressed in the morning." +
          "It's personalized with photos of the university that change with the weather."

      },
      {
        src: "../assets/projects/neocampus/bibliocampus.png",
        desc: "BibliOCampus, une autre fonction de cette application qui vous permet de voir les BUs disponibles à proximité." +
          " Elle vous permet d'acceder à quelques infos pratiques comme les horaires d'ouvertures ou l'accès.",
        desc_en: "BibliOCampus, another feature of this app that allows you to see available university libraries nearby." +
          "It allows you to access some practical info like opening hours or access."

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
    id: 5,
    name: "Veterinaire",
    type: Type.Perso,
    short_description: "Un projet Angular de gestion d'animaux et de veterinaires.",
    short_description_en: "An Angular pet and veterinary management project.",
    description : "Veterinaire est un projet développé en cours que j'ai perfectionné et déployé. Le but de ce cours était simplement de mettre en œuvre un front efficace avec des services, des composants, des pipes et d'autres fonctionnalités qu'offrent Angular. Nous avons simulé un backend avec un json server que j'ai déployé aussi." +
      " Le déploiement étant fait sur Heroku avec un compte non premium, ce sont des serveurs 'lazy' qui se réveillent quand on les appelle. Ne vous étonnez pas si c'est un peu long à charger au lancement!",
    description_en : "Veterinary is a project developed in class that I've been refining and deploying. The goal of the course was simply to implement an efficient frontend with services, components, pipes and other features that Angular offers. We simulated a backend with a json server that I deployed as well." +
      "Since the deployment was done on Heroku with a non-premium account, these are 'lazy' servers that wake up when called. Don't be surprised if it's a bit slow to load at launch!",
    profilPicture: "../assets/projects/veterinary/veterinary.jpg",
    pictures: [
      {
        src: "../assets/projects/veterinary/carte.png",
        desc: "Voici une carte qui représente un animal avec les infos importantes et la présence d'un bouton qui redirige vers la page détaillée d'un animal et qui permet de mettre à jour les informations de cet animal.",
        desc_en: "Here is a card that represents an animal with the important information and the presence of a button that redirects to the detailed page of an animal and allows to update the information of this animal.  "
      },
      {
        src: "../assets/projects/veterinary/json.png",
        desc: "Le backend est une fausse API REST qui a été simulé à l'aide d'un json server. Les données ne sont donc pas persistantes entre les sessions. Ce choix a été fait pour manipuler des requêtes asynchrones mais en restant concentré sur la logique du front de manière à ne pas perdre trop de temps à développer un back.",
        desc_en: "The backend is a fake REST API that has been simulated using a json server. The data is not persistent between sessions. This choice was made to handle asynchronous requests but to stay focused on the frontend logic so as not to waste too much time developing a backend.",

      },
      {
        src: "../assets/projects/veterinary/modification.png",
        desc: "Le formulaire permet de modifier les valeurs existantes de l'animal. Il est pré rempli avec les informations existantes sur l'animal. Sur cette page détaillée de l'animal, on peut aussi supprimer la fiche liée à l'animal.",
        desc_en: "The form allows you to modify the existing values of the animal. It is pre-filled with the existing information about the animal. On this detailed page of the animal, it is also possible to delete the form linked to the animal."

      },
      {
        src: "../assets/projects/veterinary/creation.png",
        desc: "C'est le même  formulaire qui est utilisé pour la modification et la création, ici il est vide puisque c'est une création. Une série de vérification sont faites sur ce formulaire, comme on peut le voir, des champs sont requis et il est impossible de valider avant de les avoir remplis.",
        desc_en: "This is the same form that is used for modification and creation, here it is empty since it is a creation. A series of checks are made on this form, as you can see, some fields are required and it is impossible to validate before having filled them."
      }
    ],
    techno: [
      {photo: "../assets/techno/angular.png", url: "https://angular.io/"},
      {photo: "../assets/techno/github.png", url: "https://github.com"},
      {photo: "../assets/techno/html.png", url: "https://fr.wikipedia.org/wiki/HTML5"},
      {photo: "../assets/techno/css3.png", url: "https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"},
      {photo: "../assets/techno/typescript.png", url: "https://fr.wikipedia.org/wiki/TypeScript"},
      {photo: "../assets/techno/json.png", url: "https://veterinaryapi.herokuapp.com/"},
    ],
    created: new Date(),
    code: "https://github.com/LouisAyroles/animals",
    site: "https://veterinaire.herokuapp.com/"
  },
  {
    id: 6,
    name: "Passion Fleur",
    type: Type.Perso,
    short_description: "Un projet personnel d'un site e-commerce.",
    short_description_en: "A personal project of an e-commerce site.",
    description : "   Passion Fleur est un projet personnel de site de e-commerce. Il vous permettra de commander tous types de fleurs séchées ou de fleurs artificielles à des prix abordables." +
      "Plusieurs outils ont été utilisés pour mettre à bien ce projet, notamment grâce à la plateforme shopify, on peut utiliser un thème qui permettra de construire un site entièrement responsive très rapidement. J'a fait quelques ajustements dans le code du thème et j'ai ensuite utilisé des plugins pour gérer tout le côté commerce avec le paiement, les commandes etc.",
    description_en : "   Passion Fleur is a personal project of an e-commerce website. It will allow you to order all types of dried flowers or artificial flowers at affordable prices." +
      "Several tools were used to complete this project, especially thanks to the shopify platform, we can use a theme that will build a fully responsive site very quickly. I made some adjustments in the code of the theme and then I used plugins to manage all the business side with payment, orders and so on.",
    profilPicture: "../assets/projects/passionfleur/passionfleur.png",
    pictures: [
      {
        src: "../assets/projects/passionfleur/passionfleur2.png",
        desc: "Un site développé à l'aide de Shopify qui permet de construire facilement un site e-commerce sécurisé et responsive. Ce projet avait pour but de bien comprendre le référencement google et comment fonctionner l'e-commerce.",
        desc_en: "A website developed with Shopify that allows you to easily build a secure and responsive e-commerce site. The goal of this project was to understand google search engine optimization and how e-commerce works."
      },
      {
        src: "../assets/projects/passionfleur/responsivecontent.png",
        desc: "On peut voir le contenu ici qui s'affiche parfaitement sur mobile. En effet le côté responsive est très important pour un site e-commerce puisque maintenant plus de la moitié des utilisateurs utilisent leur téléphone pour naviguer sur internet.",
        desc_en: "We can see the content here which is displayed perfectly on mobile. Indeed the responsive side is very important for an e-commerce site since now more than half of the users use their phone to browse the internet.",
      },
      {
        src: "../assets/projects/passionfleur/responsivemenu.png",
        desc: "Le menu qui est normalement un méga-menu, se réduit sur mobile et propose un volet latéral très pratique à utiliser. Les logos sont aussi différents pour mieux s'adapter au device qui est utilisé.",
        desc_en: "The menu, which is normally a mega-menu, is reduced on mobile and offers a side panel very convenient to use. The logos are also different to better adapt to the device that is used.",
      }
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
    id: 7,
    name: "Pokédex",
    type: Type.Perso,
    short_description: "Un projet personnel pour apprendre la technologie Angular.",
    short_description_en: "A personal project to learn Angular technology.",
    description : "   Pokedex est un projet minimal Angular qui m'a permis d'apprendre ce framework et de pouvoir vous proposer ce magnifique portfolio. C'est simplement une application qui propose plusieurs petites cartes de pokémons et sur lesquels j'ai ajouté un peu de style."
      + " Angular est un framework client-side, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est le descendant d'AngularJS, framework construit par la même équipe.",
    description_en : "Pokedex is a minimal Angular project that allowed me to learn this framework and to be able to offer you this beautiful portfolio. It's simply an application that features several small pokemon cards and on which I've added some styling."
      + "Angular is an open source, client-side framework based on TypeScript, and co-led by the «Angular» project team at Google and a community of individuals and companies. Angular is the descendant of AngularJS, a framework built by the same team.",
    profilPicture: "../assets/projects/pokedex/angular.png",
    pictures: [
      {
        src: "../assets/projects/pokedex/cards.png",
        desc: "Un design vraiment épuré grâce au framework CSS Materialize qui permet de construire rapidement des composants très proche d’objets qu'on a dans la vraie vie.",
        desc_en: "An really clean design thanks to the CSS Materialize framework that allows you to quickly build components very close to real life objects.",
      },
      {
        src: "../assets/projects/pokedex/mock.png",
        desc: "Cette application utilise simplement un fichier json pour récupérer les caractéristiques d'un Pokemon.",
        desc_en: "This application simply uses a json file to retrieve the characteristics of a Pokemon.",
      },
      {
        src: "../assets/projects/pokedex/serverjs.png",
        desc: "C'est une application ultra simpliste avec une seule page, je n'ai pas utilisé la fonction routeur d'Angular dans ce projet. Ce bout de code montre le server.js.",
        desc_en: "This is an ultra simplistic application with only one page, I didn't use Angular's router function in this project. This code snippet shows the server.js.",
      }
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
    site: "https://pokemon-ng-cards.herokuapp.com/"
  }
];


