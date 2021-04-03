import React from 'react'
import ListOfPostCard from '../../components/ListOfPostCard'
import { Publication } from '../../models/publication'
import { AUTHORS } from '../../utils/dataDummy'

const HomePage: React.FC = () => {
    const mapListOfPostCardProps = () => {
        const postsMapped: Publication[] = []
        for (let author of AUTHORS) {
            for (let post of author.posts) {
                const authorCopy = { ...author }
                authorCopy.posts = []
                post.author = authorCopy
                postsMapped.push(post)
            }
        }
        return postsMapped
    }

    return (<>
        <ListOfPostCard posts={mapListOfPostCardProps()} />

    </>)
}

export default HomePage