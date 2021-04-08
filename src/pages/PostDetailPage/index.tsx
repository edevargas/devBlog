import React, { useEffect } from 'react'
import usePostActions from '../../actions/postsActions'
import { useAppSelector } from '../../hooks/redux'
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import usePeopleActions from '../../actions/peopleActions';

const PostDetailPage: React.FC = () => {
    const { id } = useParams()
    const { loading, selectedPost, error } = useAppSelector((state) => state.posts)
    const { people } = useAppSelector((state) => state.people)
    const { getPostsById } = usePostActions()
    const { getPeople } = usePeopleActions()

    useEffect(() => {
        fetchData()
    }, [id])

    const fetchData = async () => {
        if (people.length === 0) {
            getPeople()
        }
        await getPostsById(id)
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