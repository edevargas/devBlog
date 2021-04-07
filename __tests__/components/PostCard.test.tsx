import React from 'react'
import PostCard from '../../src/components/PostCard'
import { postProps } from '../utils/postsUtils'
import { render, cleanup, fireEvent, waitFor } from '../utils/renderUtil'

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
    test('-> Should have an achor link-author for redirect to author', async () => {
        const { getByTestId } = render(<PostCard {...postProps} />)
        const authorLink = getByTestId('link-author')
        const pathAuthor = `/author/${postProps.authorId}`
        expect(authorLink).toHaveAttribute('href', pathAuthor);

    })
    test('-> Should redirect to author page after click link-author', async () => {
        const { getByText, getByTestId, history } = render(<PostCard {...postProps} />)
        const authorLink = getByTestId('link-author')
        const pathAuthor = `/author/${postProps.authorId}`
        fireEvent.click(authorLink)
        await waitFor(() => {
            expect(getByText(/author/i)).toBeInTheDocument()
            expect(history.location.pathname).toBe(pathAuthor)
        })

    })
})