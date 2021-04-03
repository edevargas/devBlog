import React, { useEffect } from 'react'
import usePostActions from '../../actions/postsActions'
import ListOfPostCard from '../../components/ListOfPostCard'
import { useAppSelector } from '../../hooks/redux'

const HomePage: React.FC = () => {
    const { loading, filteredPosts, error } = useAppSelector((state) => state.posts)
    const { getPosts } = usePostActions()

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        getPosts()
    }

    return (<>
        <ListOfPostCard posts={filteredPosts} />
    </>)
}

export default HomePage