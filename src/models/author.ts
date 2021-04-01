import { Publication } from "./publication"

export class Person  {
    id: number
    name: string
    image: string
    email: string
    publications?: Array<Publication>
    constructor(id, name, image, email, publications){
        this.id = id
        this.name = name
        this.image = image
        this.email = email
        this.publications = publications
    }
}