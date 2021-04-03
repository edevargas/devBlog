import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { Publication } from '../models/publication'

interface PostsState {
    posts: Publication[] | []
    filteredPosts: Publication[] | []
    loading: boolean
    error: string | null
}

const initialState: PostsState = {
    posts: [],
    filteredPosts: [],
    loading: false,
    error: null
}

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Publication[]>) => {
            console.log('payload ', action.payload)
            state.posts = action.payload
            state.filteredPosts = action.payload
            state.loading = false
            state.error = null
        },
        setFilteredPosts: (state, action: PayloadAction<Publication[]>) => {
            state.filteredPosts = action.payload
            state.loading = false
        },
        loading: (state) => {
            state.loading = true
            state.error = null
        },
        setError: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const { setPosts, setFilteredPosts, loading, setError } = PostsSlice.actions

export const selectPosts = (state: RootState) => state.posts

export default PostsSlice.reducer