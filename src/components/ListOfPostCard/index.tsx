import PostCard from '../../components/PostCard'
import React from 'react'
import { Publication } from '../../models/publication'
import { CardBox, ListContainer } from './styles'
import { dateToReadableFormat, timestampToDate } from '../../utils/datesUtil'

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
        const dateConverted = timestampToDate(p.date)
        const dateFormatted = dateToReadableFormat(dateConverted)
        const image = p.image
        return {
            id,
            title,
            description,
            date: dateFormatted,
            image,
            authorId: p.author.id,
            name, lastname, profilePhoto, email
        }
    }

    return (
        <ListContainer>
            {posts.map(post => (
                <CardBox key={post.id}>
                    <PostCard {...mapPostCardProps(post)} />
                </CardBox>

            ))}
        </ListContainer>
    )
}

export default ListOfPostCard