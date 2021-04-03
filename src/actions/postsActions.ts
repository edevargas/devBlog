import { useAppDispatch } from "../hooks/redux"
import { Publication } from "../models/publication"
import { PostsSlice } from "../reducers/postsReducer"
import { AUTHORS } from "../utils/dataDummy"

const usePostActions = () => {

    const dispatch = useAppDispatch()
    const getPosts = async () => {
        const posts = mapListOfPostCardProps()
        dispatch(PostsSlice.actions.setPosts(posts))
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

    return { getPosts }
}

export default usePostActions