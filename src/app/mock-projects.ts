import { Project } from './project';
import { Type } from './project';
  
export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "RAID 5",
        type: Type.Pro,
        description: "Un magnifique projet réalisé en L2 Informatique.",
        profilPicture: "../assets/projects/raid5/raid5.png",
        pictures: [],
        created: new Date()
    },
    {
        id: 2,
        name: "NeOCampus",
        type: Type.Pro,
        description: "Un magnifique projet réalisé en stage de fin de licence.",
        profilPicture: "../assets/projects/neocampus/neocampus.jpg",
        pictures: [],
        created: new Date()
    },
    {
        id: 3,
        name: "Passion Fleur",
        type: Type.Perso,
        description: "Un projet personnel d'un site e-commerce.",
        profilPicture: "../assets/projects/neocampus/neocampus.jpg",
        pictures: [],
        created: new Date()
    }
];