import React from 'react';
import QuestionList from './QuestionList';
import QuestionAdd from './QuestionAdd';
import styled from 'styled-components';
import Form from './Form';

const QuestionTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1024px;
    margin: 0 auto;
`;

const QuestionTemplate = () => {
    // console.log('Question Template render');

    return (
        <QuestionTemplateBlock>
            <Form />
            <QuestionList />
            <QuestionAdd />
        </QuestionTemplateBlock>
    );
};

export default QuestionTemplate;
