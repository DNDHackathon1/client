import React from 'react';
import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';
import { InputBase } from '@mui/material';

const InputStyled = styled(InputBase)`
    border : none;
    border-bottom : 3px solid #C4C4C4;
    font-size : 16px;
    &:focus {
        outline : 0;
    };
    width : 100%;
`;

const Input = ({ name, control, placeholder, fontSize = 16 }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required : true }}
            render={({ field }) => <InputStyled style={{ fontSize : fontSize }} placeholder={placeholder} {...field} />}
        />
    )
}


export default Input;