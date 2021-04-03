import { Publication } from "./publication"

export class Person {
    id: number
    name: string
    lastname: string
    image: string
    email: string
    posts?: Array<Publication> | null
    birthDate: number
    constructor({ id, name, lastname, image, email, posts, birthDate }) {
        this.id = id
        this.name = name
        this.lastname = lastname
        this.image = image
        this.email = email
        this.posts = posts
        this.birthDate = birthDate
    }
}