import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { Person } from '../models/author'

interface PeopleState {
    people: Person[] | []
    filteredPeople: Person[] | []
    selectedPerson: Person | null
    loading: boolean
    error: string | null
}

const initialState: PeopleState = {
    people: [],
    filteredPeople: [],
    selectedPerson: null,
    loading: false,
    error: null
}

export const PeopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeople: (state, action: PayloadAction<Person[]>) => {
            state.people = action.payload
            state.filteredPeople = action.payload
            console.log({ '-------payload': state.people })
            state.loading = false
            state.error = null
        },
        filterPeople: (state, action: PayloadAction<Person[]>) => {
            state.filteredPeople = action.payload
            state.loading = false
        },
        selectPerson: (state, action: PayloadAction<Person | null>) => {
            state.selectedPerson = action.payload
        },
        loading: (state) => {
            state.loading = true
            state.error = null
        },
        setError: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const { setPeople, filterPeople, loading, setError } = PeopleSlice.actions

export const selectPeople = (state: RootState) => state.people

export default PeopleSlice.reducer