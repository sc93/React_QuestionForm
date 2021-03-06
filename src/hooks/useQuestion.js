import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    change_question_filed,
    change_question_type,
    change_example_content,
    change_example_checked,
    add_example,
    add_question,
    remove_question,
    remove_example,
    change_example_text,
} from '../modules/question/questionSlice';

export const useQuestionList = () => {
    const questions = useSelector((state) => state.question.questions);
    return questions;
};

export const useQuestionAdd = () => {
    const dispatch = useDispatch();
    // Question 추가
    const onAddQuestion = () => dispatch(add_question());
    return onAddQuestion;
};

const useQuestion = (id) => {
    const dispatch = useDispatch();

    // Qeustion Form 수정
    const onQuestionInputChange = (e) =>
        dispatch(
            change_question_filed({
                key: e.target.name,
                value: e.target.value,
                id,
            }),
        );
    // Example Type 변경
    const onSelectBoxChange = (e) =>
        dispatch(change_question_type({ type: e.target.value, id }));

    // Qeustion 삭제
    const onRemoveQuestion = () => dispatch(remove_question({ id }));

    // Example 추가
    const onAddExample = () => dispatch(add_example({ id }));

    // Example 삭제
    const onRemoveExample = useCallback(
        (example_id) =>
            dispatch(remove_example({ question_id: id, example_id })),
        [id],
    );

    // Radio, Checkbox Type Input Text 변경
    const onChangeExampleContent = useCallback(
        (example_id, content) =>
            dispatch(
                change_example_content({
                    question_id: id,
                    example_id,
                    content,
                }),
            ),
        [id],
    );

    // Radio, Checkbox Type checked 변경
    const onChangeExampleChecked = useCallback(
        (example_id) =>
            dispatch(change_example_checked({ question_id: id, example_id })),
        [id],
    );

    //Text Type Input Text 변경
    const onChangeExampleText = useCallback(
        (text) => dispatch(change_example_text({ id, text })),
        [id],
    );

    return {
        onQuestionInputChange,
        onSelectBoxChange,
        onRemoveQuestion,
        onAddExample,
        onRemoveExample,
        onChangeExampleContent,
        onChangeExampleChecked,
        onChangeExampleText,
    };
};
export default useQuestion;
