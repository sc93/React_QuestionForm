import { useDispatch } from 'react-redux';
import { submit_question } from '../modules/question/questionSlice';

const useSubmit = () => {
    const dispatch = useDispatch();
    // submit
    const onSubmit = () => {
        dispatch(submit_question());
        return;
    };
    return { onSubmit };
};
export default useSubmit;
