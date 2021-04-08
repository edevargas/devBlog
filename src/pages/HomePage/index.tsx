import React, { useEffect } from 'react'
import usePeopleActions from '../../actions/peopleActions'
import usePostActions from '../../actions/postsActions'
import ListOfPostCard from '../../components/ListOfPostCard'
import { useAppSelector } from '../../hooks/redux'

const HomePage: React.FC = () => {
    const { loading, filteredPosts, error } = useAppSelector((state) => state.posts)
    const { people } = useAppSelector((state) => state.people)
    const { getPosts } = usePostActions()
    const { getPeople } = usePeopleActions()

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        getPosts()
    }, [people])

    const fetchData = async () => {
        if (people.length === 0) {
            await getPeople()
        }

    }

    return (<>
        <ListOfPostCard posts={filteredPosts} />
    </>)
}

export default HomePage