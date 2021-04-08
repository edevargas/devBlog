import { Publication } from "./publication"

export class Person {
    id: string
    name: string
    lastname: string
    image?: string
    email: string
    posts?: Array<Publication> | null
    birthDate: number
    constructor({ id, name, lastname, email, posts, birthDate }) {
        this.id = id
        this.name = name
        this.lastname = lastname
        this.email = email
        this.posts = posts
        this.birthDate = birthDate
    }
}