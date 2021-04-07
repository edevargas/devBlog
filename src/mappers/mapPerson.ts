import { Person } from "../models/author";
import md5 from 'md5'

const mapPerson = (person: Person) => {
    return { ...person, image: getGravatar(person.email) }
}

const getGravatar = (email) => {
    const md5Hash = md5(email);
    return `https://www.gravatar.com/avatar/${md5Hash}?s=32&d=identicon&r=PG`
}
export default mapPerson