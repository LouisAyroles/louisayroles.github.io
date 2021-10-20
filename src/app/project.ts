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
    description: string;
    profilPicture: string;
    pictures: Array<Photo>;
    techno: Array<string>;
    created: Date;
  }
