import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_filed } from '../modules/question/questionSlice';

const useForm = () => {
    const form_title = useSelector((state) => state.question.form_title);
    const form_detail = useSelector((state) => state.question.form_detail);
    const dispatch = useDispatch();

    //Form 변경
    const onChangeFiled = useCallback(
        (e) =>
            dispatch(
                change_filed({ key: e.target.name, value: e.target.value }),
            ),
        [dispatch],
    );

    return { form_title, form_detail, onChangeFiled };
};
export default useForm;
