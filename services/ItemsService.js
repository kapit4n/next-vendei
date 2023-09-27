import axios from "axios"

export class ItemsService {
    constructor() {
        this.url = "http://localhost:3000/productPresentations"
    }

    async list() {
        return await axios.get(this.url).then(d => d.data)
    }
}