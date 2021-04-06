import React from 'react'
import PostCard from '../../src/components/PostCard'
import { postProps } from '../utils/postsUtils'
import { render, cleanup } from '../utils/renderUtil'

afterEach(cleanup)
describe('<PostCard />', () => {
    test('-> Should contain author name and lastname', () => {
        const { getByText } = render(<PostCard {...postProps} />)
        const nameLastname = `${postProps?.name} ${postProps?.lastname}`
        expect(getByText(nameLastname)).toBeInTheDocument()
    })
    test('-> Should contain post title', () => {
        const { getByText } = render(<PostCard {...postProps} />)
        const postTitle = postProps.title
        expect(getByText(postTitle)).toBeInTheDocument()
    })
    test('-> Should contain post date formatted', () => {
        const { getByText } = render(<PostCard {...postProps} />)
        const postDateFormatted = postProps.date
        expect(getByText(postDateFormatted)).toBeInTheDocument()
    })
})