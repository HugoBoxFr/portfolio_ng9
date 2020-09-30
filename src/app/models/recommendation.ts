export class Recommendation {
    id: number;
    name: string;
    job: string;
    sentence: string;
    picture: string;

    constructor(id, name = '', job = '', sentence = '', picture = '') {
        this.id = id;
        this.name = name;
        this.job = job;
        this.sentence = sentence;
        this.picture = picture;
    }
}
