import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Publication } from '../../models/publication'
import { BodyBox, ImageBox, PostContainer, Title, PostDate } from './styles'

type PostDetailProps = {
    post: Publication | null
}
const PostDetail: React.FC<PostDetailProps> = ({ post }) => {

    return (
        <PostContainer>
            <ImageBox>
                <img src={post?.image} alt="Post image" />
            </ImageBox>
            <BodyBox>
                <Title>{post?.title}</Title>
                <Typography variant="body2" color="textPrimary" component="p">
                    {post?.description}
                </Typography>

                <PostDate>{post?.dateFormatted}</PostDate>
            </BodyBox>
        </PostContainer>
    )
}

export default PostDetail