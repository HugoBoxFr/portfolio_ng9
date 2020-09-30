export class Resume {
    id: number;
    title: string;
    work: string;
    place: string;
    period: string[];
    about: string[];
    technos: string[];

    constructor(id, title = '', work = '', place = '', period = [], about = [], technos = []) {
        this.id = id,
        this.title = title,
        this.work = work,
        this.place = place,
        this.period = period,
        this.about = about,
        this.technos = technos
    }
}
