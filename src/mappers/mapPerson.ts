import { Person } from "../models/author";
import { getGravatar } from "../utils/gravatarUtil";


const mapPerson = (person: Person) => {
    return { ...person, image: getGravatar(person.email) }
}
export default mapPerson