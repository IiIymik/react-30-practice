import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { Text, Container } from './Filling.styles';

function Filling({text}) {
    return (
        <Container><Text>{text}</Text><BsThreeDotsVertical/></Container>
    )
}

export default Filling
