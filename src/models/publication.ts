import { Person } from "./author"

export class Publication {
    id: number
    title: string
    date: Date
    authorId?: number
    description: string
    author?: any | null
    image: string
    constructor({ id, title, date, description, image }) {
        this.id = id
        this.title = title
        this.date = date
        this.description = description
        this.image = image
    }
}