export class ItemsService {
    constructor() {
        this.url = "http://localhost:3000/productPresentations"
    }

    async list() {
        return await fetch(this.url).then(d => d.json())
    }
}
