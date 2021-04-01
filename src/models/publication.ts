export class Publication  {
    id: number
    title: string
    date: Date
    authorId: number
    constructor(id, title, date, authorId){
        this.id = id
        this.title = title
        this.date = date
        this.authorId = authorId
    }
}