import React, { useEffect } from 'react'
import usePostActions from '../../actions/postsActions'
import { useAppSelector } from '../../hooks/redux'
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';

const PostDetailPage: React.FC = () => {
    const { id } = useParams()
    const { loading, selectedPost, error } = useAppSelector((state) => state.posts)
    const { getPostsById } = usePostActions()

    useEffect(() => {
        fetchData()
    }, [id])

    const fetchData = async () => {
        await getPostsById(+id)
    }
    const fillContent = () => {
        if (loading) {
            return <p>Loading..</p>
        }
        if (error) {
            return <p>{error}</p>
        }

        return (<PostDetail post={selectedPost} />)

    }
    return (<>
        {fillContent()}
    </>)
}

export default PostDetailPage