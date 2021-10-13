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
        pictures: [],
        created: new Date()
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
        pictures: [],
        created: new Date()
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
        pictures: [],
        created: new Date()
    },
  {
    id: 4,
    name: "Pokédex",
    type: Type.Perso,
    short_description: "Un projet personnel pour apprendre la technologie Angular.",
    description : "   Pokedex est un projet minimal Angular qui m'a permis d'apprendre ce framework et de pouvoir vous proposer ce magnifique portfolio. C'est simplement une application qui propose plusieurs petites cartes de pokémons et sur lesquels j'ai ajouté un peu de style."
    + " Angular est un framework client-side, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est le descendant d'AngularJS, framework construit par la même équipe.",
    profilPicture: "../assets/projects/pokedex/angular.png",
    pictures: [],
    created: new Date()
  }
];
