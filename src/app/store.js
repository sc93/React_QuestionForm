import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../modules/question/questionSlice';
export default configureStore({
    reducer: {
        question: questionReducer,
    },
});
