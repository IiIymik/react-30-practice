import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { Button, Text } from './Button.styles';

function Btn({ title }) {
    return (<Button><FaPlusCircle size="16px" color="#fff" style={{marginRight: "10px"}}/><Text>{title }</Text></Button>)
}

export default Btn;
