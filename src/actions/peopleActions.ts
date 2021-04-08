import { useAppDispatch, useAppSelector } from "../hooks/redux"
import mapPerson from "../mappers/mapPerson"
import { Person } from "../models/author"
import { PeopleSlice } from "../reducers/peopleReducers"
import { filterContains, sortData } from "../utils/listUtils"
import httpClient from '../httpClient'

const usePeopleActions = () => {
    const { people } = useAppSelector((state) => state.people)
    const dispatch = useAppDispatch()

    const getPeople = async () => {
        const peopleResponse = await httpClient.get('people')
        const people = mapPeople(peopleResponse)
        dispatch(PeopleSlice.actions.setPeople(people))
    }
    const mapPeople = (people: Array<Person>) => {
        return people.map(mapPerson)
    }

    const filterPeopleByNameLastname = async (value: string) => {
        const filteredPeople = filterContains(people, value, ['name', 'lastname'])
        dispatch(PeopleSlice.actions.filterPeople(filteredPeople))
    }

    const findAndSelectPersonById = async (id: string) => {
        const person = await findPersonById(id)
        console.log({ person })
        if (person) {
            selectPerson(person)
        } else {
            const errMessage = `Person with id ${id} was not found`
            dispatch(PeopleSlice.actions.setError(errMessage))
        }

    }
    const findPersonById = async (id: string) => {
        const idx = [...people].findIndex(p => p.id === id)
        if (idx >= 0) {
            return people[idx]
        }
        return null
    }

    const sortPeople = async (orderPeople: string) => {
        const sortedPeople = sortData(people, 'name', orderPeople)
        dispatch(PeopleSlice.actions.filterPeople(sortedPeople))
    }
    const selectPerson = async (person: Person | null) => {
        dispatch(PeopleSlice.actions.selectPerson(person))
    }

    return {
        getPeople,
        filterPeopleByNameLastname,
        sortPeople,
        selectPerson,
        findAndSelectPersonById
    }
}

export default usePeopleActions