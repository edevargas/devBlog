import { Person } from "./author"

export class Publication {
    id: string
    title: string
    date: number
    authorId?: string
    description: string
    author?: any | null
    authorInfo?: any | null
    image: string
    dateFormatted?: string
    constructor({ id, title, date, description, image }) {
        this.id = id
        this.title = title
        this.date = date
        this.description = description
        this.image = image
    }
}