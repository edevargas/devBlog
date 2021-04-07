import { Publication } from "../../src/models/publication"
import { AUTHORS } from "../../src/utils/dataDummy"
import { dateToReadableFormat, timestampToDate } from "../../src/utils/datesUtil"

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
function getFirstPost() {
    const posts = mapListOfPostCardProps()
    return posts[0]
}
export const posts = mapListOfPostCardProps()
export const postProps = mapPostCardProps(getFirstPost())