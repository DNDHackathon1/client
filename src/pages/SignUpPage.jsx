import React, { useReducer } from 'react';
import Button from '@mui/material/Button';
import { initialState, reducer } from '../context';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const ContainerStyled = styled.div`
    background-color : red;
    width : 414px;
`;

const SignUpPage = () => {
    const [{ user }, dispatch] = useReducer(reducer, initialState);

    const { handleSubmit } = useForm({
        mode: 'all',
        defaultValues : {
            userId : '',
            nickname : '',
            password : '',
        }
    });

    function onSubmit (value) {
        console.log(value);
        // 회원가입 submit function ( axios ) POST
    };

    return (
        <ContainerStyled>
            <Button
                onClick={() => dispatch(
                    { type : "CREATE_USER", user : { nickname : '노아' }})}
            >
                HELLO!
            </Button>
        </ContainerStyled>
    );
};

export default SignUpPage;