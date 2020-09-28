export class Project {
    id: number;
    name: string;
    title: string
    technos: string[];
    image: string;
    description: string;
    available: boolean;
    url: string;

    constructor (id, name = '', title = '', technos = [], image = '', description = '', available = false, url = '') {
        this.id = id;
        this.name = name;
        this.title = title;
        this.technos = technos;
        this.image = image;
        this.description = description;
        this.available = available;
        this.url = url;
    }
}
