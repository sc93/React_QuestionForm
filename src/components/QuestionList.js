import React from 'react';
import Question from './Question';
import styled from 'styled-components';
import { useQuestionList } from '../hooks/useQuestion';
const QuestionListBlock = styled.div`
    width: 100%;
`;
const QuestionList = () => {
    // console.log('question list render');

    const questions = useQuestionList();

    return (
        <QuestionListBlock>
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </QuestionListBlock>
    );
};

export default QuestionList;
