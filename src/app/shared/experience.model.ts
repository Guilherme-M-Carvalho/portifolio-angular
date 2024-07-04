import { Tech } from "./tech.model";

export class Experience {
    constructor(
        public office: string,
        public company: string,
        public desc: string,
        public startDate: string,
        public techs: Tech[],
        public endDate: string | undefined,
        public method: string,
        public hide?: boolean
    ){}
}