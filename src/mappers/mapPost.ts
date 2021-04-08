import { Publication } from "../models/publication"
import { dateToReadableFormat, timestampToDate } from "../utils/datesUtil"
import { getGravatar } from "../utils/gravatarUtil"

const mapPost = (post) => {
    const id = post.id ? post.id : post._id
    const newPost = new Publication({
        id,
        title: post.title,
        description: post.description,
        date: post.date,
        image: post.image
    })
    let author = post.author;
    if (post.authorInfo) {
        author = post.authorInfo
        author.image = getGravatar(author.email)
    }

    const dateConverted = timestampToDate(newPost.date)
    const dateFormatted = dateToReadableFormat(dateConverted)
    return { ...newPost, dateFormatted, author }
}


export default mapPost