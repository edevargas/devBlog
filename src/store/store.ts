import { configureStore } from '@reduxjs/toolkit'
import { PostsSlice } from '../reducers/postsReducer'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { PeopleSlice } from '../reducers/peopleReducers'
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
const store = configureStore({
    reducer: {
        posts: PostsSlice.reducer,
        people: PeopleSlice.reducer,
        middleware: (getDefaultMiddleware) => customizedMiddleware
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store