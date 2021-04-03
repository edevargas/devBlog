import PostCard from '../../components/PostCard'
import React from 'react'
import { Publication } from '../../models/publication'
import { CardBox, ListContainer } from './styles'

type ListOfPostCardProps = {
    posts: Array<Publication>
}
const ListOfPostCard: React.FC<ListOfPostCardProps> = ({ posts }) => {
    const mapPostCardProps = (p: Publication) => {
        const name = p.author?.name || ''
        const lastname = p.author?.lastname || ''
        const profilePhoto = p.author?.image || ''
        const email = p.author?.email || ''
        const id = p.id
        const title = p.title
        const description = p.description
        const date = p.date.toISOString()
        const image = p.image
        return {
            id,
            title,
            description,
            date,
            image,
            name, lastname, profilePhoto, email
        }
    }

    return (
        <ListContainer>
            {posts.map(post => (
                <CardBox>
                    <PostCard {...mapPostCardProps(post)} />
                </CardBox>

            ))}
        </ListContainer>
    )
}

export default ListOfPostCard