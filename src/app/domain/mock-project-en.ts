import { Project } from './project';
import { Type } from './project';

export const PROJECTS_EN: Project[] = [
    {
        id: 1,
        name: "RAID 5",
        type: Type.Pro,
        short_description: "A wonderful project realized in L2 Computer Science.",
        description: "    RAID is a set of storage virtualization techniques for distributing data across multiple hard drives to improve either the performance, security or fault tolerance of the overall system." +
        "RAID 5 uses three or more hard drives and spreads data across multiple hard drives to gain performance through concurrent access, but unlike RAID 0, RAID 5 includes correction codes (parity bits) between data.",
        profilPicture: "../assets/projects/raid5/raid5.png",
      pictures: [
        {
          src: "../assets/projects/raid5/raid5Disk.png",
          desc: "The principle of RAID 5 is to distribute the data in layers on several disks and to make the parity of the 3 on the last disk. In this way, it is possible to find the data in case of failure"
        },
        {
          src: "../assets/projects/raid5/raid5couche1.png",
          desc: "The whole project has been coded in C language. We used primitives such as fread or fwrite. A particular attention was given to the comments since they allowed to generate automatically a documentation. "
        },
        {
          src: "../assets/projects/raid5/raidPrompt.png",
          desc: "Here is the command line interface of RAID5. So we have developed several commands that you can find with a help." +
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
    short_description: "A 6-month project carried out during the Master 1.",
    description : "Git Supervisor is a tool for analyzing GitLab or GitHub repositories. It allows you to centralize information about repos and see who contributed to projects, what commits were made, how issues were handled etc." +
    "This web application is made of an API developed in Python coupled with a TypeScript Angular frontend." +
    "This web application is made of an API developed in Python coupled with a TypeScript Angular frontend. We evolved 6 months on this project proposed by Jean-Michel Bruel, professor at IRIT in an agile context. I would like to thank the M2 students who supervised us for this project.",
    profilPicture: "../assets/projects/gitsupervisor/gitsupervisor.png",
    pictures: [
      {
        src: "../assets/projects/gitsupervisor/contributors1.png",
        desc: "The contributors module allows to see all the contributors to the project and to see details about their collaboration. It consists of 2 parts, the first is the list of users. You can find out the number of commits, issues etc."
      },
      {
        src: "../assets/projects/gitsupervisor/contributors2.png",
        desc: "The second part of the contributors module is composed of a graph representing the commits of all the collaborators or if we select a collaborator in the list, we can see the details."
      },
      {
        src: "../assets/projects/gitsupervisor/evaluator-module.png",
        desc: "The rules of the evaluator module are defined in the settings and allow to automatically grade students according to particular criteria."
      },
      {
        src: "../assets/projects/gitsupervisor/example.gif",
        desc: "Here is a gif representing a user interaction that creates a workspace, adds one of its repositories and adds the analysis modules."
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
    short_description: "A 3-month project carried out during the end of Master 1 internship.",
    description : "Learn-OCaml is an open source software and learning platform for the OCaml language, initially developed by OCamlPro to deploy the OCaml MOOC, and now developed by the OCaml Foundation. Since the year 2016-2017, the PFITA Teaching Unit of the Licence 3 Informatique of the Paul Sabatier University relies on this platform to provide students with test reports: in the framework of the PFITAXEL project, new functionalities have been developed to extend the Learn-OCaml platform and to meet needs identified in the PFITA UE. I joined the project during my M1 internship (supervised by Erik Martin-Dorel and supported by the OCaml foundation).",
    profilPicture: "../assets/projects/learnocaml/learnocaml.png",
    pictures: [
      {
        src: "../assets/projects/learnocaml/client.png",
        desc: "The learn-ocaml mode interacts with the server through a command line client. Both the client and the server have a version that is incremented at each release. "
      },
      {
        src: "../assets/projects/learnocaml/emacs2.png",
        desc: "The main part of my internship was focused on the implementation of authentication by login and password instead of a token. I set up a pop-up which proposes the adequate choices according to the version of the client and the server."
      },
      {
        src: "../assets/projects/learnocaml/emacs.png",
        desc: "The Emacs interface offers a learn-ocaml plugin that allows you to integrate the features directly into the browser."
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
        short_description: "A wonderful project carried out as an internship at the end of the degree.",
        description: "NeOCampus is a demonstrator of a connected, innovative, intelligent and sustainable campus on the site of the University Toulouse 3 Paul Sabatier." +
        "The platform associated with neOCampus consists of numerous software and hardware devices" +
        "The platform associated with neOCampus consists of numerous software and hardware devices interconnected for the digital campus of tomorrow, sustainable and intelligent, combining innovative teaching materials, sensors, communication systems, storage, localization, simulation and innovative materials, within the university buildings of the campus, to improve the quality of life of users and reduce fluid consumption.",
        profilPicture: "../assets/projects/neocampus/neocampus.png",
      pictures: [
        {
          src: "../assets/projects/neocampus/cartocampus.png",
          desc: "A 3D interactive map based on OpenStreetMap that allows students to find their way around the college." +
            "It is possible to search by name of buildings, amphitheaters, restaurants etc. "
        },
        {
          src: "../assets/projects/neocampus/restocampus.png",
          desc: "A list of restaurants, filterable by distance, available payment methods etc." +
          "It allows you to check opening hours, menus and other useful info."
        },
        {
          src: "../assets/projects/neocampus/meteocampus.png",
          desc: "A weather feature that takes the guesswork out of getting dressed in the morning." +
          "It's personalized with photos of the university that change with the weather."
        },
        {
          src: "../assets/projects/neocampus/bibliocampus.png",
          desc: "BibliOCampus, another feature of this app that allows you to see available university libraries nearby." +
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
    short_description: "An Angular pet and veterinary management project.",
    description : "Veterinary is a project developed in class that I've been refining and deploying. The goal of the course was simply to implement an efficient frontend with services, components, pipes and other features that Angular offers. We simulated a backend with a json server that I deployed as well." +
    "Since the deployment was done on Heroku with a non-premium account, these are 'lazy' servers that wake up when called. Don't be surprised if it's a bit slow to load at launch!",
    profilPicture: "../assets/projects/veterinary/veterinary.jpg",
    pictures: [
      {
        src: "../assets/projects/veterinary/carte.png",
        desc: "Here is a card that represents an animal with the important information and the presence of a button that redirects to the detailed page of an animal and allows to update the information of this animal.  "
      },
      {
        src: "../assets/projects/veterinary/json.png",
        desc: "The backend is a fake REST API that has been simulated using a json server. The data is not persistent between sessions. This choice was made to handle asynchronous requests but to stay focused on the frontend logic so as not to waste too much time developing a backend.",
      },
      {
        src: "../assets/projects/veterinary/modification.png",
        desc: "The form allows you to modify the existing values of the animal. It is pre-filled with the existing information about the animal. On this detailed page of the animal, it is also possible to delete the form linked to the animal."
      },
      {
        src: "../assets/projects/veterinary/creation.png",
        desc: "This is the same form that is used for modification and creation, here it is empty since it is a creation. A series of checks are made on this form, as you can see, some fields are required and it is impossible to validate before having filled them."
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
        short_description: "A personal project of an e-commerce site.",
        description : "   Passion Fleur is a personal project of an e-commerce website. It will allow you to order all types of dried flowers or artificial flowers at affordable prices." +
      "Several tools were used to complete this project, especially thanks to the shopify platform, we can use a theme that will build a fully responsive site very quickly. I made some adjustments in the code of the theme and then I used plugins to manage all the business side with payment, orders and so on.",
        profilPicture: "../assets/projects/passionfleur/passionfleur.png",
       pictures: [
        {
          src: "../assets/projects/passionfleur/passionfleur2.png",
          desc: "A site developed with Shopify that allows you to easily build a secure and responsive e-commerce site. The goal of this project was to understand google search engine optimization and how e-commerce works."
        },
        {
          src: "../assets/projects/passionfleur/responsivecontent.png",
          desc: "We can see the content here which is displayed perfectly on mobile. Indeed the responsive side is very important for an e-commerce site since now more than half of the users use their phone to browse the internet.",
        },
         {
           src: "../assets/projects/passionfleur/responsivemenu.png",
           desc: "The menu, which is normally a mega-menu, is reduced on mobile and offers a side panel very convenient to use. The logos are also different to better adapt to the device that is used.",
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
    short_description: "A personal project to learn Angular technology.",
    description : "Pokedex is a minimal Angular project that allowed me to learn this framework and to be able to offer you this beautiful portfolio. It's simply an application that features several small pokemon cards and on which I've added some styling."
    + "Angular is an open source, client-side framework based on TypeScript, and co-led by the «Angular» project team at Google and a community of individuals and companies. Angular is the descendant of AngularJS, a framework built by the same team.",
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
  }
];
