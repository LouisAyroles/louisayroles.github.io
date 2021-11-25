import {Photo} from "./photo";

export enum Type {
    Perso = 1,
    Pro = 2
}
export class Project {
    id: number;
    name: string;
    type: Type;
    short_description: string;
    short_description_en: string;
    description: string;
    description_en: string;
    profilPicture: string;
    pictures: Array<Photo>;
    techno: Array<Techno>;
    created: Date;
    code?: string;
    site?: string;
  }

  export class Techno {
    photo: string;
    url: string;
  }
