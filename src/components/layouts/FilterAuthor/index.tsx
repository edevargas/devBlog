import TextFieldSearch from '../../ui/TextFieldSearch'
import React, { useState, useEffect } from 'react'
import { NavHeader } from './styles'
import peopleActions from '../../../actions/peopleActions'


const FilterAuthor = () => {
    const [filterValue, setFilterValue] = useState('')
    const { filterPeopleByNameLastname } = peopleActions()
    useEffect(() => {
        filterPeopleByNameLastname(filterValue)
    }, [filterValue])

    const onFilterChange = e => {
        setFilterValue(e.target.value)
    }
    return (
        <NavHeader>
            <TextFieldSearch
                value={filterValue}
                onChange={onFilterChange}
                placeholder="Looking for author?"
                ariaLabel="Search author" />
        </NavHeader>
    )
}

export default FilterAuthor