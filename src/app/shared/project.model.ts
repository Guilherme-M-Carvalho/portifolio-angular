import { Tech } from "./tech.model";

export class Project{
    constructor(
        public tag: string,
        public name: string,
        public desc: string,
        public img: string,
        public techs: Tech[],
        public git: string,
        public url?: string
    ){}
}