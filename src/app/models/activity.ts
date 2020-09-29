export class Activity {
    id: number;
    title: string;
    img: string;

    constructor(id, title = '', img = '') {
        this.id = id;
        this.title = title;
        this.img = img;
    }
}
