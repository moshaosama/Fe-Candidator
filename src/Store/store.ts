import { configureStore } from "@reduxjs/toolkit";
import RecruiterReducer from "../features/Recruiters/Reducer/Recruiter"


export const store = configureStore({
    reducer: {
        recruiter: RecruiterReducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch