import ListOfPostCard from '../../components/ListOfPostCard'
import React, { useEffect } from 'react'
import usePostActions from '../../actions/postsActions'
import { useAppSelector } from '../../hooks/redux'
import { useParams } from 'react-router-dom';
import usePeopleActions from '../../actions/peopleActions';

const HomePage: React.FC = () => {
    const { id } = useParams()
    const { loading: loadingPosts, filteredPosts, error: errorPosts } = useAppSelector((state) => state.posts)
    const { loading: LoadingPeople, people, error: errorPeople } = useAppSelector((state) => state.people)
    const { getPostsByUserId } = usePostActions()
    const { findAndSelectPersonById, getPeople } = usePeopleActions()

    useEffect(() => {
        fetchData()
    }, [id])

    useEffect(() => {
        fetchPosts()
    }, [people])

    const fetchData = async () => {
        if (people.length === 0) {
            await getPeople()
        }
        fetchPosts()

    }
    const fetchPosts = async () => {
        await findAndSelectPersonById(id)
        await getPostsByUserId(id)
    }

    const fillContent = () => {
        loadingPosts && <p>Loading..</p>
        errorPosts && <p>{errorPosts}</p>
        errorPeople && <p>{errorPeople}</p>
        return (<ListOfPostCard posts={filteredPosts} />)

    }

    return (<>
        {fillContent()}
    </>)
}

export default HomePage