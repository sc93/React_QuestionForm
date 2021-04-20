import React from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';

const FormBlock = styled.div`
    width: 100%;
    height: 150px;
    text-align: center;
    border: 1px solid #bbbbbb;
    border-radius: 20px;
    margin: 20px 0;
    input {
        border: none;
        width: 80%;
        height: 50px;
        font-size: 20px;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 8%);
        margin: 10px 20px;
    }
`;

const Form = () => {
    // console.log('form title render');
    const { form_title, form_detail, onChangeFiled } = useForm();

    return (
        <FormBlock>
            <input
                type="text"
                value={form_title}
                name="form_title"
                onChange={onChangeFiled}
                placeholder="Default Title"
            />
            <input
                type="text"
                value={form_detail}
                name="form_detail"
                onChange={onChangeFiled}
                placeholder="Initial value"
            />
        </FormBlock>
    );
};

export default Form;
