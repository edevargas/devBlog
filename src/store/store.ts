import { configureStore } from '@reduxjs/toolkit'
import { PostsSlice } from '../reducers/postsReducer'

const store = configureStore({
    reducer: {
        posts: PostsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store