import React from 'react';
import styled from 'styled-components';
import useSubmit from '../hooks/useSubmit';
const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const Wrapper = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 50px;
    span {
        font-size: 24px;
    }
    .right {
        button {
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            outline: none;
            cursor: pointer;
            background: #7a5de8;
            height: 45px;
            width: 90px;
        }
    }
`;
const Spacer = styled.div`
    height: 80px;
`;
const Header = () => {
    // console.log('header render');
    const { onSubmit } = useSubmit();
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <span>Question Form</span>
                    <div className="right">
                        <button onClick={onSubmit}>Submit</button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
