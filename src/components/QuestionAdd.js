import React from 'react';
import styled from 'styled-components';
import { useQuestionAdd } from '../hooks/useQuestion';

const AddButton = styled.button`
    border: none;
    border-radius: 45px;
    font-size: 70px;
    font-weight: bold;
    color: white;
    outline: none;
    cursor: pointer;
    background: #7a5de8;
    height: 90px;
    width: 90px;
    margin: 20px;
`;
const QuestionAdd = () => {
    // console.log('questionAdd render');

    const onAddQuestion = useQuestionAdd();

    return <AddButton onClick={onAddQuestion}>+</AddButton>;
};

export default QuestionAdd;
