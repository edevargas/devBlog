import PostCard from '../../components/PostCard'
import React from 'react'

const HomePage: React.FC = () => {
    const currentDate = new Date()
    const id = 1
    const gravatar: string = 'https://www.gravatar.com/avatar/464c4cd355c42b5f432bdca8de1a1226?s=32&d=identicon&r=PG'
    return (<>
        <p>Home Page activated</p>
        <PostCard id={id}
            name="Eren"
            lastname="Jeager"
            email="eren@eren"
            profilePhoto={gravatar}
            image="https://source.unsplash.com/random"
            date={currentDate.toISOString()}
            title="Post title"
        />
    </>)
}

export default HomePage