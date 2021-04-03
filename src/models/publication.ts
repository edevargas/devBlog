import { Person } from "./author"

export class Publication  {
    id: number
    title: string
    date: Date
    authorId?: number
    description: string
    author?: any
    image: string
    constructor({id, title, date, authorId, description, image, author}){
        this.id = id
        this.title = title
        this.date = date
        this.authorId = authorId
        this.description = description
        this.image = image
        this.author = author
    }
}