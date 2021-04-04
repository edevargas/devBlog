import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Publication } from "../models/publication"
import { PostsSlice } from "../reducers/postsReducer"
import { AUTHORS } from "../utils/dataDummy"
import { dateToReadableFormat, timestampToDate } from "../utils/datesUtil"
import { filterContains, sortData } from "../utils/listUtils"

const usePostActions = () => {
    const { posts } = useAppSelector((state) => state.posts)
    const dispatch = useAppDispatch()

    const getPosts = async () => {
        const posts = mapListOfPostCardProps()
        dispatch(PostsSlice.actions.setPosts(posts))
    }

    const getPostsById = async (id: number) => {
        const posts = mapListOfPostCardProps()
        const idx = posts.findIndex(p => p.id === id)
        if (idx >= 0) {
            const dateConverted = timestampToDate(posts[idx].date)
            const dateFormatted = dateToReadableFormat(dateConverted)
            posts[idx].dateFormatted = dateFormatted
            dispatch(PostsSlice.actions.setSelectedPost(posts[idx]))
        } else {
            dispatch(PostsSlice.actions.setError(`Post with id ${id} wasn't found`))
        }
    }

    const getPostsByUserId = async (userId: number) => {
        const idx = AUTHORS.findIndex(a => a.id === userId)
        const posts = AUTHORS[idx].posts
        const authorCopy = { ...AUTHORS[idx] }
        authorCopy.posts = []
        const postsWithAuthor = posts.map(p => {
            return { ...p, author: authorCopy }
        })
        dispatch(PostsSlice.actions.setPosts(postsWithAuthor))
    }

    const filterPosts = async (value: string) => {
        const filteredPost = filterContains(posts, value, ['title'])
        dispatch(PostsSlice.actions.filterPosts(filteredPost))
    }

    const sortPosts = async (orderPosts: string) => {
        const sortedPosts = sortData(posts, 'date', orderPosts)
        dispatch(PostsSlice.actions.filterPosts(sortedPosts))
    }

    const mapListOfPostCardProps = () => {
        let postsMapped: Publication[] = []
        for (let author of AUTHORS) {
            for (let post of author.posts) {
                const newPost = new Publication({
                    id: post.id,
                    title: post.title,
                    date: post.date,
                    description: post.description,
                    image: post.image
                })
                const authorCopy = { ...author }
                authorCopy.posts = []
                newPost.author = authorCopy
                postsMapped.push(newPost)
            }
        }
        return postsMapped
    }

    return { getPosts, filterPosts, getPostsByUserId, sortPosts, getPostsById }
}

export default usePostActions