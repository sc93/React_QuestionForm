import React from 'react';
import styled from 'styled-components';
import {
    TYPE_CHECK_BOX,
    TYPE_MULTI_CHOICE,
    TYPE_TEXT,
} from '../modules/question/questionSlice';
import useQuestion from '../hooks/useQuestion';

const QuestionBlock = styled.div`
    width: 100%;
    min-height: 250px;
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    margin: 20px 0;
    .text {
        display: block;
        border: none;
        width: 40%;
        height: 30px;
        font-size: 16px;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 8%);
        margin: 10px 100px;
    }
    .first {
        margin-top: -42px;
    }
`;
const QuestionOptionBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 80px;
    button {
        width: 100px;
        margin-right: 20px;
        border: none;
        border-radius: 4px;
        color: white;
        outline: none;
        cursor: pointer;
        width: 90px;
    }
    .remove {
        background: #ff7365;
    }
    .add {
        background: #7a5de8;
    }
    select {
        width: 150px;
        margin-right: 20px;
    }
`;
const ExampleBLock = styled.div`
    margin: 10px 100px;
    .example_text {
        width: 340px;
    }
    .exmple_btn {
        width: 45px;
    }
`;

const RadioExample = React.memo(
    ({
        example,
        onRemoveExample,
        onChangeExampleContent,
        onChangeExampleChecked,
    }) => {
        console.log('radio example render');
        return (
            <ExampleBLock>
                <input
                    type="radio"
                    checked={example.checked}
                    onChange={() => onChangeExampleChecked(example.id)}
                />
                <input
                    className="example_text"
                    type="text"
                    value={example.content}
                    onChange={(e) =>
                        onChangeExampleContent(example.id, e.target.value)
                    }
                    placeholder="Example"
                />
                <button
                    className="exmple_btn"
                    onClick={() => onRemoveExample(example.id)}
                >
                    -
                </button>
            </ExampleBLock>
        );
    },
);
const CheckExample = React.memo(
    ({
        example,
        onRemoveExample,
        onChangeExampleContent,
        onChangeExampleChecked,
    }) => {
        console.log('checkbox example render');
        return (
            <ExampleBLock>
                <input
                    type="checkbox"
                    checked={example.checked}
                    onChange={() => onChangeExampleChecked(example.id)}
                />
                <input
                    className="example_text"
                    type="text"
                    value={example.content}
                    onChange={(e) =>
                        onChangeExampleContent(example.id, e.target.value)
                    }
                    placeholder="Example"
                />
                <button
                    className="exmple_btn"
                    onClick={() => onRemoveExample(example.id)}
                >
                    -
                </button>
            </ExampleBLock>
        );
    },
);
const TextExample = React.memo(({ text, onChangeExampleText }) => {
    console.log('text example render');
    return (
        <ExampleBLock>
            <input
                className="example_text"
                type="text"
                placeholder="Example"
                value={text}
                onChange={(e) => onChangeExampleText(e.target.value)}
            />
        </ExampleBLock>
    );
});
const Question = ({ question }) => {
    // console.log('question render');
    const { id, title, detail, type, examples, text } = question;

    const {
        onQuestionInputChange,
        onSelectBoxChange,
        onRemoveQuestion,
        onAddExample,
        onRemoveExample,
        onChangeExampleContent,
        onChangeExampleChecked,
        onChangeExampleText,
    } = useQuestion(id);

    return (
        <QuestionBlock>
            <QuestionOptionBlock>
                <select value={type} onChange={onSelectBoxChange}>
                    <option value={TYPE_MULTI_CHOICE}>MultiChoice</option>
                    <option value={TYPE_CHECK_BOX}>CheckBox</option>
                    <option value={TYPE_TEXT}>Text</option>
                </select>
                {type !== TYPE_TEXT && (
                    <button className="add" onClick={onAddExample}>
                        Add Example
                    </button>
                )}
                <button className="remove" onClick={onRemoveQuestion}>
                    Remove Question
                </button>
            </QuestionOptionBlock>
            <input
                className="text first"
                placeholder="Question Text"
                name="title"
                value={title}
                onChange={onQuestionInputChange}
            />
            <input
                className="text"
                placeholder="Input desc"
                name="detail"
                value={detail}
                onChange={onQuestionInputChange}
            />
            {type === TYPE_TEXT ? (
                <TextExample
                    text={text}
                    onChangeExampleText={onChangeExampleText}
                />
            ) : type === TYPE_MULTI_CHOICE ? (
                examples.map((example) => (
                    <RadioExample
                        key={example.id}
                        example={example}
                        onRemoveExample={onRemoveExample}
                        onChangeExampleContent={onChangeExampleContent}
                        onChangeExampleChecked={onChangeExampleChecked}
                    />
                ))
            ) : (
                examples.map((example) => (
                    <CheckExample
                        key={example.id}
                        example={example}
                        onRemoveExample={onRemoveExample}
                        onChangeExampleContent={onChangeExampleContent}
                        onChangeExampleChecked={onChangeExampleChecked}
                    />
                ))
            )}
        </QuestionBlock>
    );
};

export default React.memo(Question);
