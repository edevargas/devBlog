import ListOfPostCard from '../../components/ListOfPostCard'
import React, { useEffect } from 'react'
import usePostActions from '../../actions/postsActions'
import { useAppSelector } from '../../hooks/redux'
import { useParams } from 'react-router-dom';

const HomePage: React.FC = () => {
    const { id } = useParams()
    const { loading, filteredPosts, error } = useAppSelector((state) => state.posts)
    const { getPostsByUserId } = usePostActions()

    useEffect(() => {
        fetchPosts()
    }, [id])

    const fetchPosts = async () => {
        getPostsByUserId(+id)
    }

    return (<>
        <ListOfPostCard posts={filteredPosts} />
    </>)
}

export default HomePage