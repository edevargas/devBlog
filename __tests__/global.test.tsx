
import React from 'react'
import HomePage from '../src/pages/HomePage'
import { render } from "@testing-library/react"

describe('Checking Jest', () => {
    test('should be true', () => {
        expect(true).toBeTruthy()
    })

})
describe('Checking Testing Library', () => {
    test('Header component render', () => {
        const { getByText } = render(<HomePage />)
        expect(getByText(/Home Page activated/i)).toBeInTheDocument()
    })
})

