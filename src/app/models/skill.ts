export class Skill {
    id: number;
    name: string;
    rate: number;
    img: string;

    constructor(id, name = '', rate = 0, img = '') {
        this.id = id;
        this.name = name;
        this.rate = rate;
        this.img = img;
    }
}
