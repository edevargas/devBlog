import { useAppDispatch, useAppSelector } from "../hooks/redux"
import httpClient from "../httpClient"
import mapPost from "../mappers/mapPost"
import { Publication } from "../models/publication"
import { PostsSlice } from "../reducers/postsReducer"
import { filterContains, sortData } from "../utils/listUtils"

const usePostActions = () => {
    const { posts } = useAppSelector((state) => state.posts)
    const { people } = useAppSelector((state) => state.people)
    const dispatch = useAppDispatch()

    const getPosts = async () => {
        const posts = mapListOfPostCardProps(people)
        dispatch(PostsSlice.actions.setPosts(posts))
    }

    const getPostsById = async (id: string) => {
        try {
            const postReponse = await httpClient.get(`posts/${id}`)
            if (postReponse) {
                const post = mapPost(postReponse)
                dispatch(PostsSlice.actions.setSelectedPost(post))
            } else {
                dispatch(PostsSlice.actions.setError(`Post with id ${id} wasn't found`))
            }
        } catch (error) {
            console.log({ error })
            dispatch(PostsSlice.actions.setError(`Post with id ${id} wasn't found`))
        }

    }

    const getPostsByUserId = async (userId: string) => {
        try {
            const postsReponse = await httpClient.get(`posts/author/${userId}`)
            if (postsReponse) {
                const posts = postsReponse.map(mapPost)
                dispatch(PostsSlice.actions.setPosts(posts))
            } else {
                dispatch(PostsSlice.actions.setError(`Post for author with id ${userId} wasn't found`))
            }
        } catch (error) {
            dispatch(PostsSlice.actions.setError(`Post for author with id ${userId} wasn't found`))
        }
    }

    const filterPosts = async (value: string) => {
        const filteredPost = filterContains(posts, value, ['title'])
        dispatch(PostsSlice.actions.filterPosts(filteredPost))
    }

    const sortPosts = async (orderPosts: string) => {
        const sortedPosts = sortData(posts, 'date', orderPosts)
        dispatch(PostsSlice.actions.filterPosts(sortedPosts))
    }

    const mapListOfPostCardProps = (people) => {
        let postsMapped: Publication[] = []
        for (let author of people) {
            if (author.posts) {
                for (let post of author.posts) {
                    const newPost = new Publication({
                        id: post._id,
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
        }
        const sortedPosts = sortData(postsMapped, 'date', 'DESC')
        return sortedPosts
    }

    return { getPosts, filterPosts, getPostsByUserId, sortPosts, getPostsById }
}

export default usePostActions